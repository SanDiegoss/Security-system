import React from 'react';
import { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class Log {
    constructor(date, message) {
        this.date = date;
        this.message = message;
    }
    getDate() {
        return this.date;
    }
    getMessage() {
        return this.message;
    }
}

const test = [
    new Log('20.20.20', 'Была начата тревога!'),
    new Log('20.20.21', 'Была начата тревога!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
    new Log('20.20.22', 'Была начата тревога!!!'),
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
                                <ListGroupItem>{item.getDate()}: {item.getMessage()}</ListGroupItem>
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
