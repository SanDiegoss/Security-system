import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const style = {
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: '660px'
};

function LogPanel(props) {
    const logs = props.logs;
    /**
     * @param {Number} date 
     * @return {String}
     */
    const getDate = (date) => {
        const _date = new Date(date);

        let nums = _date.getDate();
        let month = _date.getMonth();
        let year = _date.getFullYear();
        let hours = _date.getHours();
        let minutes = _date.getMinutes();
        let seconds = _date.getSeconds();

        nums = +nums < 10 ? '0'+nums : nums;
        month = +month < 10 ? '0'+month : month;
        year = +year < 10 ? '0'+year : year;
        hours = +hours < 10 ? '0'+hours : hours;
        minutes = +minutes < 10 ? '0'+minutes : minutes;
        seconds = +seconds < 10 ? '0'+seconds : seconds;

        return `${nums}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
    };
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
                                <ListGroupItem key={item.id}>{getDate(item.date)}: {item.getMessage()}</ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                </Card.Body>
                <Card.Footer>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default LogPanel;
