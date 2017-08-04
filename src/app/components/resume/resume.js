import React from 'react';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { JobHistory } from './history/history';
import { Languages } from './languages/languages';
import { Loading } from '../loading/loading';
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
        languages: [],
        loading: false
    }

    componentDidMount() {
        this.setState(state => ({
            ...state, loading: true
        }));

        Observable.forkJoin(
            ContentService.getWorkHistory(),
            ContentService.getSkills()
        ).subscribe(([history, skills]) => {
            this.setState((state) => ({
                ...state,
                history: history,
                skills: skills.tech,
                languages: skills.languages,
                loading: false
            }));
        });
    }

    render() {
        const { history, skills, languages, loading } = this.state;
        return (
            <div style={{ height: '100%' }}>
                {
                    loading ?
                        <Loading /> :
                        <div className='container vertical resume'>
                            <JobHistory history={history} />

                            <h2 className='flex-center'>Languages &amp; Skills</h2>
                            <Skills skills={skills} />

                            <Languages languages={languages} />
                        </div>
                }
            </div>
        );
    }
}