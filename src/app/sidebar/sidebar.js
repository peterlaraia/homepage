import React from 'react';

import { Menu } from './menu';
import { Profile } from './profile';

export function Sidebar(props) {
    return (
        <div className="sidebar">
            {props.children}
            <Profile />
            <Menu />
        </div>
    );
}