import React from 'react';

import './profile.scss';

export function Profile(props) {
    return (
        <div className='profile flex-center'>
            <img className='avatar' alt='Image unavailable' />
            <div>Name</div>
        </div>
    );
}