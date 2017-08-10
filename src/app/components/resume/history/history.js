import React from 'react';
import PropTypes from 'prop-types';

import { Section } from '../../section/section';

import './history.scss';
import './history.small.scss';

const sectionContentStyle = {
    marginTop: '24px'
};

export function JobHistory(props) {
    const { history } = props;
    return (
        <div className='container vertical history-wrapper'>
            <h2 className='flex-center'>Work History</h2>
            {
                history.map(hist => (
                    <Section 
                        key={hist.startDate + '-' + hist.company} 
                        title={hist.company}
                        contentStyle={sectionContentStyle}>
                        <h5 className='job-title flex-center'>({hist.title})</h5>
                        <div className='job-banner'>
                            <div>{hist.location.city}, {hist.location.state || hist.location.country}</div>
                            <div className='job-title'>{hist.title}</div>
                            <div>{hist.startDate + ' - ' + (hist.endDate || 'Present')}</div>
                        </div>
                        <div className='job-bullets'>
                            <ul>
                                {
                                    hist.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Section>
                ))
            }
        </div>
    );
}

JobHistory.propTypes = {
    history: PropTypes.array.isRequired
}