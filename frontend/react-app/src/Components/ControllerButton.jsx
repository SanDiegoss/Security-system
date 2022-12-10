import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

/**
 * @typedef {Object} Status
 * @property {Boolean} isFire
 * @property {Boolean} isMovement
 * @property {Function} getIsFire
 * @property {Function} getIsMovement
 */

function ControllerButton(props) {
    /**
     * @type {Status}
     */
    const status = props.status;
    const name = props.name;
    const id = props.id;
    return (
        <DropdownButton title={name}> </DropdownButton>
    );
}

export default ControllerButton;
