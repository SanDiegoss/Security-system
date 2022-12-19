import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import ControllerButton from './ControllerButton';

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

const test = [
    new Room({id: 0, name: 'Комната 1', status: Status.ok}),
    new Room({id: 1, name: 'Комната 2', status: Status.ok}),
    new Room({id: 2, name: 'Комната 3', status: Status.ok}),
    new Room({id: 3, name: 'Комната 4', status: Status.ok}),
    new Room({id: 4, name: 'Комната 5', status: Status.ok}),
    new Room({id: 5, name: 'Комната 6', status: Status.ok}),
    new Room({id: 6, name: 'Комната 7', status: Status.ok}),
    new Room({id: 7, name: 'Комната 8', status: Status.ok}),
    new Room({id: 8, name: 'Комната 9', status: Status.ok}),
    new Room({id: 9, name: 'Комната 10', status: Status.ok}),
    new Room({id: 10, name: 'Комната 11', status: Status.ok}),
    new Room({id: 11, name: 'Комната 12', status: Status.ok}),
];

const style = {
    height: '652px'
};

function Controller(props) {
    const [roomButtons, setRoomButtons] = useState(test);
    const colCount = 3;
    const rowCount = Math.ceil(roomButtons.length / colCount);
    const addLog = props.addLog;
    const changeRoom = (id, status) => {
        const _rooms = roomButtons.map((item) => {
            if(item.getId() === id && item.getStatus() !== status) {
                item.setStatus(status);
                addLog({
                    date: Date.now(),
                    message: `В секторе <${item.getName()}> был установлен статус: <${item.getStatusName()}>`,
                });
            }
            return item;
        });
        setRoomButtons(_rooms);
    };
    let table = [[], []];
    for (let i = 0; i < rowCount; i += 1) {
        table[i] = [];
        for (let j = 0; j < colCount && roomButtons[i * colCount + j]; j += 1) {
            table[i][j] = roomButtons[i * colCount + j];
        }
    }
    return (
        <div>
            <Card>
                <Card.Header>
                    <h3>Пульт управления</h3>
                </Card.Header>
                <Card.Body>
                    <div style={style}>
                    <Container>
                    {table.map((row, i) => (
                        <Row key={i} className="mt-2">
                            {row.map((item) => (
                                <Col key={item.id}>
                                    <ControllerButton id={item.id} status={item.status} name={item.name} changeRoom={changeRoom}/>
                                </Col>
                            ))}
                        </Row>
                    ))}
                    </Container>
                    </div>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Controller;
