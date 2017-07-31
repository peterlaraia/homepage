import React from 'react';
import PropTypes from 'prop-types';

import './bubble.scss';

export function Bubble(props) {
    const {value} = props;
    return (
        <div className='bubble flex-center'>
            {value}
        </div>
    );
}

Bubble.propTypes = {
    value: PropTypes.string.isRequired
}