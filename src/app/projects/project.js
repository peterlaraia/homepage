import React from 'react';

import './project.scss';

export function Project(props) {
    const { project } = props;
    const navigateTo = (url) => {
        window.location = url;
    }
    return (
        <div className='project-section pulse' onClick={() => navigateTo(project.link.main)}>
            <div className='project-header flex-center pulse-font'>
                <h4>{project.name}</h4>
            </div>
            <div className='project-content'>
                <div className='project-thumbnail flex-center'>
                    <img src={project.thumbnail} />
                </div>
                <div className='project-notes'>
                    <div className='project-description flex-center'>
                        {project.summary}
                    </div>
                    <div className='project-technologies flex-center font-small'>
                        {
                            project.technologies.map(tech => (
                                <div key={tech} className='project-tech flex-center'>{tech}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}