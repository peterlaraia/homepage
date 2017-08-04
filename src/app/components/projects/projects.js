import React from 'react';

import { Loading } from '../loading/loading';
import { Project } from './project';
import { Section } from '../section/section';
import { ContentService } from '../../services/content.service';

import './projects.scss';

export class Projects extends React.Component {

    state = {
        projects: [],
        loading: false
    }

    componentDidMount() {
        this.setState(state => ({
            ...state, loading: true
        }))
        ContentService.getProjects().subscribe((projects) => {
            this.setState((state) => ({ ...state, projects: projects, loading: false }));
        });
    }

    navigateTo = (url) => {
        window.location = url;
    }

    render() {
        const { projects, loading } = this.state;
        return (
            <div style={{ height: '100%' }}>
                {
                    loading ?
                        <Loading /> :
                        <div className='container vertical'>
                            {
                                projects.map(project => (
                                    <Section
                                        key={project.id}
                                        title={project.name}
                                        onTitleClick={() => this.navigateTo(project.link.main)}
                                        pulse
                                        style={{ minHeight: '250px' }}>
                                        <Project project={project} />
                                    </Section>
                                ))
                            }
                        </div>
                }
            </div>
        );
    }
}