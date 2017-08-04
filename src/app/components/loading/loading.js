import React from 'react';

import './loading.scss';

export function Loading(props) {
    return (
        <div className='loading-wrapper' {...props}>
            <div className='loading-indicator'></div>
        </div>
    );
}