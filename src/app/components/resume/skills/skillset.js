import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './skillset.scss';

export function SkillSet(props) {
    const { skills, className, title } = props;
    const classes = classNames('skillset vertical', className)
    return (
        <div className={classes}>
            <h4>{title}</h4>
            <ul>
                {
                    skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))
                }
            </ul>
        </div>
    );
}

SkillSet.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string)
}