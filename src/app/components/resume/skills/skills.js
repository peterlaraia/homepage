import React from 'react';
import PropTypes from 'prop-types';

import { Section } from '../../section/section';
import { SkillSet } from './skillset';

import './skills.scss';

const sectionStyle = {
    marginTop: '0'
};

export function Skills(props) {
    const { skills } = props;
    return (
        <Section title='Technical Skills' style={sectionStyle}>
            <SkillSet skills={skills.experienced} title='Day-to-Day' className='skillset-experienced' />
            <SkillSet skills={skills.intermediate} title='Hobbyist' className='skillset-experienced' />
        </Section>
    );
}

Skills.propTypes = {
    skills: PropTypes.shape({
        experienced: PropTypes.arrayOf(PropTypes.string),
        intermediate: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
}