import React from 'react';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Section } from '../section/section';
import { ContentService } from '../../services/content.service';

import './resume.scss';

export class Resume extends React.Component {

    state = {
        history: [],
        skills: {
            experienced: [],
            intermediate: []
        },
        languages: {
            experienced: [],
            intermediate: []
        }
    }

    componentDidMount() {
        Observable.forkJoin(
            ContentService.getWorkHistory(),
            ContentService.getSkills()
        ).subscribe(([history, skills]) => {
            this.setState((state) => ({
                ...state,
                history: history,
                skills: skills.tech,
                languages: skills.languages
            }));
        });
    }

    render() {
        const {history, skills, languages} = this.state;
        return (
            <div className='container vertical resume'>
                <div className='container vertical'>
                    <h2 className='flex-center'>WicHser</h2>
                    {
                        history.map(hist => (
                            <Section key={hist.startDate + '-' + hist.company} title={hist.company}>
                                <div>{hist.achievements}</div>
                            </Section>
                        ))
                    }
                </div>
            </div>
        );
    }
}