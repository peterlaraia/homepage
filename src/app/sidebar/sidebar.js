import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './sidebar.scss';
import './sidebar.small.scss';

export function Sidebar(props) {
    return (
            <div className={classNames('sidebar', { 'sidebar-showing': props.show })}>
                {props.children}
            </div>
    );
}

Sidebar.propTypes = {
    show: PropTypes.bool.isRequired
}

Sidebar.defaultProps = {
    show: true
}