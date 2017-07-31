import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './section.scss';

export function Section(props) {
    const { title, children, onClick, pulse } = props;
    const sectionClass = classNames('section', {
        pulse: pulse
    });
    const headerClass = classNames('section-header flex-center', {
        'pulse-font': pulse
    });
    const sectionStyle = {
        cursor: onClick ? 'pointer' : 'default'
    };
    return (
        <div className={sectionClass} style={sectionStyle} onClick={onClick}>
            <div className={headerClass}>
                <h4>{title}</h4>
            </div>
            <div className='section-content'>
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

Section.defaultProps = {
    onClick: () => undefined
}