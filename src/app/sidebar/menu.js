import React from 'react';
import { NavLink } from 'react-router-dom';

export function Menu(props) {
    return (
        <nav className="menu">
            <NavLink activeClassName='active-link' exact to='/'><div className="menu-item">Home</div></NavLink>
            <NavLink activeClassName='active-link' to='/projects'><div className="menu-item">Projects</div></NavLink>
            <NavLink activeClassName='active-link' to='/resume'><div className="menu-item">Resume</div></NavLink>
        </nav>
    );
}