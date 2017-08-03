import React from 'react';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { JobHistory } from './history/history';
import { Languages } from './languages/languages';
import { Section } from '../section/section';
import { ContentService } from '../../services/content.service';
import { Skills } from './skills/skills';

import './resume.scss';

export class Resume extends React.Component {

    state = {
        history: [],
        skills: {
            experienced: [],
            intermediate: []
        },
        languages: []
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
        const { history, skills, languages } = this.state;
        return (
            <div className='container vertical resume'>
                <JobHistory history={history} />

                <h2 className='flex-center'>Languages &amp; Skills</h2>
                 <Skills skills={skills} /> 

                <Languages languages={languages} />
            </div>
        );
    }
}