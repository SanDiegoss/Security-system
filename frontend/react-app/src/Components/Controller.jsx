import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import ControllerButton from './ControllerButton';

class Status {
    constructor({isFire, isMovement}) {
        this.isFire = isFire;
        this.isMovement = isMovement;
    }
    getIsFire() {
        return this.isFire;
    }
    getIsMovement() {
        return this.isMovement;
    }
}

class Room {
    constructor({id, name, status}) {
        this.id = id;
        this.name = name;
        /**
         * @type {Status}
         */
        this.status =  status;
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
}

const test = [
    new Room({id: 1, name: 'Комната 1', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 2, name: 'Комната 2', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 3, name: 'Комната 3', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 4, name: 'Комната 4', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 5, name: 'Комната 5', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 6, name: 'Комната 6', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 7, name: 'Комната 7', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 8, name: 'Комната 8', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 9, name: 'Комната 9', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 10, name: 'Комната 10', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 11, name: 'Комната 11', status: new Status({isFire: false, isMovement: false})}),
    new Room({id: 12, name: 'Комната 12', status: new Status({isFire: false, isMovement: false})}),
];

const style = {
    height: '652px'
};

function Controller() {
    const [roomButtons, setRoomButtons] = useState(test);
    const colCount = 3;
    const rowCount = Math.ceil(roomButtons.length / colCount);
    let table = [[], []];
    for (let i = 0; i < rowCount; i += 1) {
        table[i] = [];
        for (let j = 0; j < colCount && roomButtons[i * colCount + j]; j += 1) {
            table[i][j] = roomButtons[i * colCount + j];
        }
    }
    console.log(table);
    return (
        <div>
            <Card>
                <Card.Header>
                    <h3>Пульт управления</h3>
                </Card.Header>
                <Card.Body>
                    <div style={style}>
                    <Container>
                    {table.map((row) => (
                        <Row key={row[0].id} className="mt-2">
                            {row.map((item) => (
                                <Col key={item.id}>
                                    <ControllerButton id={item.id} status={item.status} name={item.name}/>
                                </Col>
                            ))}
                        </Row>
                    ))}
                    </Container>
                    </div>
                </Card.Body>
                <Card.Footer>
                    keka
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Controller;
