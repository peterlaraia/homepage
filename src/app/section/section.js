import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Section(props) {
    const { title, children, onClick, pulse } = props;
    const sectionClass = classNames('section', {
        pulse: pulse
    });
    const headerClass = classNames('section-header flex-center', {
        'pulse-font': pulse
    });
    return (
        <div className={sectionClass}>
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