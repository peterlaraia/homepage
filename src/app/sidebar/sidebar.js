import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Menu } from './menu';
import { Profile } from './profile';

export function Sidebar(props) {
    return (
        <div className={classNames('sidebar', {'sidebar-showing': props.show})}>
            {props.children}
            <Profile />
            <Menu />
        </div>
    );
}

Sidebar.propTypes = {
    show: PropTypes.bool.isRequired
}

Sidebar.defaultProps = {
    show: true
}