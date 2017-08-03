import React from 'react';
import PropTypes from 'prop-types';

import { Section } from '../../section/section';

import './languages.scss';

export function Languages(props) {
    const { languages } = props;
    return (
        <Section title='Languages' contentStyle={{justifyContent: 'space-around', marginBottom: '24px'}} style={{marginBottom: '24px'}}>
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