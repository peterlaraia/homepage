import React from 'react';

import './menu.scss';

export function Menu(props) {
    return (
        <nav className="menu">
            {props.children}
        </nav>
    );
}