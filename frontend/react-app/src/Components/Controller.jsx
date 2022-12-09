import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Controller() {
    const [roomButtons, setRoomButtons] = useState([]);
    return (
        <div>
            <Card>
                <Card.Header>
                    <h3>Пульт управления</h3>
                </Card.Header>
                <Card.Body>
                    
                </Card.Body>
                <Card.Footer>
                    keka
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Controller;
