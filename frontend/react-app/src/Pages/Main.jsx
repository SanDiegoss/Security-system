import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Controller from '../Components/Controller';
import LogPanel from '../Components/LogPanel';

function Main() {
    return (
        <div className='mt-5'>
            <Container>
            <Row>
                <Col>
                    <Controller/>
                </Col>
                <Col>
                    <LogPanel/>
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default Main;
