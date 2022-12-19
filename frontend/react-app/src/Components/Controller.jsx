import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import ControllerButton from './ControllerButton';

const style = {
    height: '652px'
};

function Controller(props) {
    const rooms = props.rooms;
    const setRooms = props.setRooms;
    const addLog = props.addLog;
    const changeStatus = props.changeStatus;
    const colCount = 3;
    const rowCount = Math.ceil(rooms.length / colCount);
    const changeRoom = (id, status) => {
        const _rooms = rooms.map((item) => {
            if(item.getId() === id && item.getStatus() !== status) {
                item.setStatus(status);
                addLog({
                    date: Date.now(),
                    message: `В секторе <${item.getName()}> был установлен статус: <${item.getStatusName()}>`,
                });
                changeStatus({
                    id: id,
                    status: status
                });
            }
            return item;
        });
        setRooms(_rooms);
    };
    let table = [[], []];
    for (let i = 0; i < rowCount; i += 1) {
        table[i] = [];
        for (let j = 0; j < colCount && rooms[i * colCount + j]; j += 1) {
            table[i][j] = rooms[i * colCount + j];
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
