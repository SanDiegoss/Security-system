import React from 'react';
import { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class Log {
    constructor(date, message, id) {
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

const test = [
    new Log('20.20.20', 'Была начата тревога!', 1),
    new Log('20.20.21', 'Была начата тревога!!', 2),
    new Log('20.20.22', 'Была начата тревога!!!', 3),
    new Log('20.20.22', 'Была начата тревога!!!', 4),
    new Log('20.20.22', 'Была начата тревога!!!', 5),
    new Log('20.20.22', 'Была начата тревога!!!', 6),
    new Log('20.20.22', 'Была начата тревога!!!', 7),
    new Log('20.20.22', 'Была начата тревога!!!', 8),
    new Log('20.20.22', 'Была начата тревога!!!', 9),
    new Log('20.20.22', 'Была начата тревога!!!', 10),
    new Log('20.20.22', 'Была начата тревога!!!', 11),
    new Log('20.20.22', 'Была начата тревога!!!', 12),
    new Log('20.20.22', 'Была начата тревога!!!', 13),
    new Log('20.20.22', 'Была начата тревога!!!', 14),
    new Log('20.20.22', 'Была начата тревога!!!', 15),
    new Log('20.20.22', 'Была начата тревога!!!', 16),
    new Log('20.20.22', 'Была начата тревога!!!', 17),
    new Log('20.20.22', 'Была начата тревога!!!', 18),
    new Log('20.20.22', 'Была начата тревога!!!', 19),
    new Log('20.20.22', 'Была начата тревога!!!', 20),
    new Log('20.20.22', 'Была начата тревога!!!', 21),
    new Log('20.20.22', 'Была начата тревога!!!', 22),
    new Log('20.20.22', 'Была начата тревога!!!', 23),
    new Log('20.20.22', 'Была начата тревога!!!', 24),
    new Log('20.20.22', 'Была начата тревога!!!', 25),
    new Log('20.20.22', 'Была начата тревога!!!', 26),
    new Log('20.20.22', 'Была начата тревога!!!', 27),
    new Log('20.20.22', 'Была начата тревога!!!', 28),
    new Log('20.20.22', 'Была начата тревога!!!', 29),
    new Log('20.20.22', 'Была начата тревога!!!', 30),
];

const style = {
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: '660px'
};

function LogPanel() {
    /**
     * @type {[Array.<Log>, Function]}
     */
    const [logs, setLogs] = useState(test);
    return (
        <div>
            <Card>
                <Card.Header>
                    <h3>История событий</h3>
                </Card.Header>
                <Card.Body>
                    <div style={style}>
                        <ListGroup>
                            {logs.map((item) => (
                                <ListGroupItem key={item.id}>{item.getDate()}: {item.getMessage()}</ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                </Card.Body>
                <Card.Footer>
                    keka
                </Card.Footer>
            </Card>
        </div>
    );
}

export default LogPanel;
