import React from 'react';
import PropTypes from 'prop-types';

import { Bubble } from '../bubble/bubble';

import './project.scss';

export function Project(props) {
    const { project } = props;
    return (
        <div className='project'>
            <div className='project-thumbnail flex-center'>
                <a href={project.link.main}><img src={project.thumbnail} /></a>
            </div>
            <div className='project-notes'>
                <div className='project-description flex-center'>
                    {project.summary}
                </div>
                <div className='project-technologies flex-center font-small'>
                    {
                        project.technologies.map(tech => (
                            <div className='flex-center project-technology' key={tech}>{tech}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}