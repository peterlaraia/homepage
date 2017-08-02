import React from 'react';

import './profile.scss';

export function Profile(props) {
    const {name} = props;
    return (
        <div className='profile'>
            <img className='avatar' alt='Image unavailable' src='assets/img/peterlaraia.jpg'/>
            <div>{name}</div>
        </div>
    );
}