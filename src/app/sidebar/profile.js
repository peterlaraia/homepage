import React from 'react';

import './profile.scss';

export function Profile(props) {
    const {name} = props;
    return (
        <div className='profile flex-center'>
            <img className='avatar' alt='Image unavailable' />
            <div>{name}</div>
        </div>
    );
}