import React from 'react';
import { NavLink } from 'react-router-dom';

import './menu.scss';

export function Menu(props) {
    const classes = 'menu-item flex-center'
    return (
        <nav className="menu">
            <NavLink activeClassName='active-link' exact to='/'><div className={classes}>Home</div></NavLink>
            <NavLink activeClassName='active-link' to='/projects'><div className={classes}>Projects</div></NavLink>
            <NavLink activeClassName='active-link' to='/resume'><div className={classes}>Resume</div></NavLink>
        </nav>
    );
}