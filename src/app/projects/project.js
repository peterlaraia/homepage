import React from 'react';

import './project.scss';

export function Project(props) {
    const { project } = props;
    return (
        <div className='project-section'>
            <div className='project-header flex-center'>
                <a href={project.link.main}><h4>{project.name}</h4></a>
            </div>
            <div className='project-content'>
                <div className='project-notes flex-center'>
                    NOTES
                </div>
                <div className='project-description flex-center'>
                    {project.summary}
                </div>
            </div>
        </div>
    );
}