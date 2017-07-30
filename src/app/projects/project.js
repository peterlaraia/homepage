import React from 'react';

import './project.scss';

export function Project(props) {
    const { project } = props;
    return (
        <a className='clean-link pulse' href={project.link.main}>
            <div className='project-section'>
                <div className='project-header flex-center pulse-font'>
                    <h4>{project.name}</h4>
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
        </a>
    );
}