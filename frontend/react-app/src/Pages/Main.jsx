import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

import Controller from '../Components/Controller';
import LogPanel from '../Components/LogPanel';

/**
 * @typedef {Object} Status
 * @property {Number} fire
 * @property {Number} movement
 * @property {Number} ok
 */

export const Status = {
    ok: 0,
    movement: 1,
    fire: 2,
};

class Log {
    constructor({date, message, id}) {
        this.date = date;
        this.message = message;
        this.id = id;
    }
    getDate() {
        return this.date;
    }
    getMessage() {
        return this.message;
    }
}

class Room {
    constructor({id, name, status}) {
        this.id = id;
        this.name = name;
        /**
         * @type {Status}
         */
        this.status = status;
    };
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getStatusName() {
        switch(this.status) {
            case Status.ok:
                return 'OK';
            case Status.movement:
                return 'движение';
            case Status.fire:
                return 'пожар';
            default:
            break;
        }
    }
}

function Main() {
    const [logs, setLogs] = useState([]);
    const [rooms, setRooms] = useState([]);
    const addLog = async (log) => {
        const request = new Request('/api/AddLog', {
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'POST',
            body: JSON.stringify(log),
        });
        try {
            let res = await fetch(request);
            res = await res.json();
            setLogs([
                ...logs,
                new Log ({date: +log.date, message: log.message, id: res}),
            ]);
        } catch (error) {
            console.log(error.message);
        }
    };
    const changeStatus = async ({id, status}) => {
        const request = new Request('/api/SetStatus', {
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'POST',
            body: JSON.stringify({id: id, status: status}),
        });
        console.log({id: id, status: status});
        try {
            let res = await fetch(request);
            if (res.status === 400) {
                console.log('bad request');
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    const updateLogs = async () => {
        const request = new Request('/api/GetLogs', {
            method: 'GET',
        });
        try {
            let res = await fetch(request);
            res = await res.json();
            setLogs(res.map((item) => (new Log({date: +item.date, message: item.message, id: item.id}))));
        } catch (error) {
            console.log(error.message);
        }
    };
    const updateRooms = async () => {
        const request = new Request('/api/GetRooms', {
            method:'GET',
        });
        try {
            let res = await fetch(request);
            res = await res.json();
            setRooms(res.map((item) => (new Room({id: item.id, name: item.name, status: item.status}))));
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        updateLogs();
        updateRooms();
    }, []);
    useEffect(() => {
        const check = async () => {
            const timerId = setInterval(() => {
                const checkLast = async () => {
                    const request = new Request('/api/GetLogsCount', {
                        method:'GET',
                    });
                    try {
                        let res = await fetch(request);
                        res = await res.json();
                        if (+res > logs.length) {
                            updateLogs();
                            updateRooms();
                        }
                    } catch (error) {
                        console.log(error.message);
                    }
                }
                checkLast();
            }, 5000);
        };
        check();
    }, [logs]);
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col>
                        <Controller addLog={addLog} rooms={rooms} setRooms={setRooms} changeStatus={changeStatus}/>
                    </Col>
                    <Col>
                        <LogPanel logs={logs}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Main;
