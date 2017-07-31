import React from 'react';
import PropTypes from 'prop-types';

export class SidebarToggle extends React.Component {
    render() {
        const { active, onTrigger } = this.props;
        return (
            <div className='sidebar-toggle' style={{ cursor: 'pointer' }} onClick={onTrigger}>{active ? 'X' : 'O'}</div>
        );
    }
}

SidebarToggle.propTypes = {
    on: PropTypes.bool.isRequired,
    onTrigger: PropTypes.func.isRequired
}

SidebarToggle.defaultProps = {
    on: true
}