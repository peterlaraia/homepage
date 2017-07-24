import React from 'react';

import { ContentService } from '../services/content.service';

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
        const projects = this.state.projects;
        return (
            <div className='container vertical'>
                {
                    projects.map(project => (
                        <div className='section project' key={project.id}>{project.name}</div>
                    ))
                }
            </div>
        );
    }
}