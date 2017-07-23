import React from 'react';
import PropTypes from 'prop-types';

export function SidebarToggle(props) {
    const active = props.on;
    const trigger = props.onTrigger;
    return (
        <div className='sidebar-toggle' onClick={trigger}>{active ? 'X' : 'O'}</div>
    );
}

SidebarToggle.propTypes = {
    on: PropTypes.bool.isRequired,
    onTrigger: PropTypes.func.isRequired
}

SidebarToggle.defaultProps = {
    on: true
}