import React from 'react';

import './loading.scss';

export function Loading(props) {
    return (
        <div className='loading-indicator' {...props}>Loading...</div>
    );
}