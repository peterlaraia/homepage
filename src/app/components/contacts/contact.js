import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './contact.scss';
import './contact.small.scss';

export function Contact(props) {
    const { name, url, glyphClass } = props;
    const className = classNames('social-icon clean-link flex-center', glyphClass)
    return (
        <a href={url} className={className} title={name}>      
        </a>
    );
}

Contact.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    glyphClass: PropTypes.string
}