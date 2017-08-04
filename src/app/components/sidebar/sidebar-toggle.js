import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './sidebar-toggle.scss';

export class SidebarToggle extends React.Component {
    render() {
        const { active, onTrigger } = this.props;
        const className = classNames('sidebar-toggle flex-center', {
            'sidebar-toggle-active': active
        })
        return (
            <div className={className} style={{ cursor: 'pointer' }} onClick={onTrigger}></div>
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