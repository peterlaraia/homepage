import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './contact.scss';
import './contact.small.scss';

export function Contact(props) {
    const { name, url, glyphClass } = props;
    const className = classNames('social-icon flex-center', glyphClass)
    return (
        <a href={url} className='clean-link' title={name}>
            <div className={className}></div>
        </a>
    );
}

Contact.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    glyphClass: PropTypes.string
}