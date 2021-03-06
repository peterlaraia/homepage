import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './section.scss';

export function Section(props) {
    const { title, children, onClick, pulse, onTitleClick } = props;
    const sectionClass = classNames('section', {
        pulse: pulse
    });
    const headerClass = classNames('section-header flex-center', {
        'pulse-font': pulse
    });
    const sectionStyle = {
        cursor: onClick ? 'pointer' : 'inherit',
        ...props.style
    };
    const titleStyle = {
        cursor: onTitleClick ? 'pointer' : 'inherit'
    }
    const contentStyle = {
        ...props.contentStyle
    }
    return (
        <div className={sectionClass} style={sectionStyle} onClick={onClick}>
            <div className={headerClass} >
                <h3 onClick={onTitleClick} style={titleStyle}>{title}</h3>
            </div>
            <div className='section-content' style={contentStyle}>
                {props.children}
            </div>
        </div>
    );
}

Section.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    pulse: PropTypes.bool
}