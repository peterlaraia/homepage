import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './menu-item.scss';

export function MenuItem(props) {
    const classes = 'menu-item flex-center';
    return (
        <NavLink activeClassName='active-link' className='clean-link' {...props}>
            <div className={classes}>
                {props.children}
            </div>
        </NavLink>
    );
}