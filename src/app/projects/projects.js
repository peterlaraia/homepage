import React from 'react';

import { Project } from './project';
import { Section } from '../section/section';
import { ContentService } from '../services/content.service';

import './projects.scss';

export class Projects extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        ContentService.getProjects().subscribe((projects) => {
            this.setState((state) => ({ ...state, projects: projects }));
        });
    }

    navigateTo = (url) => {
        window.location = url;
    }

    render() {
        const { projects } = this.state;
        return (
            <div className='container vertical'>
                {
                    projects.map(project => (
                        <Section key={project.id} title={project.name} onTitleClick={() => this.navigateTo(project.link.main)} pulse>
                            <Project project={project} />
                        </Section>
                    ))
                }
            </div>
        );
    }
}