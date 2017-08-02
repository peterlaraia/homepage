import React from 'react';
import PropTypes from 'prop-types';

import './scatter.scss';

export class Scatter extends React.Component {
    render() {
        const {image, location} = this.props
        return (
            <img className='scatter' src={'assets/img/' + image} style={location} />
        );
    }
}

Scatter.propTypes = {
    image: PropTypes.string.isRequired,
    location: PropTypes.shape({
        top: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired
    }).isRequired
}