import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

import Controller from '../Components/Controller';
import LogPanel from '../Components/LogPanel';


export class Log {
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

function Main() {
    const [logs, setLogs] = useState([]);
    const addLog = ({message, date}) => {
        let _log;
        if (logs.length === 0) {
            _log = new Log({date: date, message: message, id: 0});
        } else {
            _log = new Log({date: date, message: message, id: logs.slice(-1)[0].id + 1});
        }
        setLogs([
            ...logs,
            _log
        ]);
        //fetch log
    };
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col>
                        <Controller addLog={addLog}/>
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
