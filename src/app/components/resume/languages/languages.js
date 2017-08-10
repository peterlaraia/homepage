import React from 'react';
import PropTypes from 'prop-types';

import { Section } from '../../section/section';

import './languages.scss';

const sectionStyle = {
    marginBottom: '24px'
};

const sectionContentStyle = {
    justifyContent: 'space-around', 
    marginTop: '24px', 
    marginBottom: '24px'
};

export function Languages(props) {
    const { languages } = props;
    return (
        <Section title='Languages' contentStyle={sectionContentStyle} style={sectionStyle}>
            {
                languages.map(language => (
                    <div key={language.language} className='language'>{language.language} - <i>{language.experience}</i></div>
                ))
            }
        </Section>
    );
}

Languages.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.shape({
        language: PropTypes.string,
        experience: PropTypes.string
    })).isRequired
}