import React from 'react';
import { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Status } from './Controller';

function ControllerButton(props) {
    /**
     * @type {Status}
     */
    const [status, setStatus] = useState(props.status);
    const name = props.name;
    const changeItem = props.changeItem;
    const id = props.id;
    const getButtonColor = (status) => {
        switch(status) {
            case Status.ok:
                return 'success';
            case Status.movement:
                return 'danger';
            case Status.fire:
                return 'warning';
            default:
            break;
        }
    }
    const change = (_status) => {
        if (_status !== status) {
            // fetch
            setStatus(_status);
            changeItem(id, _status);
        }
    }
    const buttonColor = getButtonColor(status);
    return (
        <DropdownButton variant={buttonColor} title={name}>
            <Dropdown.Item active={status === Status.ok} onClick={() => {change(Status.ok)}}>Установить статус: ok</Dropdown.Item>
            <Dropdown.Item active={status === Status.movement} onClick={() => {change(Status.movement)}}>Установить статус: движение</Dropdown.Item>
            <Dropdown.Item active={status === Status.fire} onClick={() => {change(Status.fire)}}>Установить статус: пожар</Dropdown.Item>
        </DropdownButton>
    );
}

export default ControllerButton;