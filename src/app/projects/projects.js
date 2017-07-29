import React from 'react';

import { Project } from './project';
import { ContentService } from '../services/content.service';

import './projects.scss';

export class Projects extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        ContentService.getProjects().subscribe((projects) => {
            this.setState((state) => ({...state, projects: projects}));
        });
    }

    render() {
        const {projects} = this.state;
        return (
            <div className='container vertical'>
                {
                    projects.map(project => (
                        <Project key={project.id} project={project} />
                    ))
                }
            </div>
        );
    }
}