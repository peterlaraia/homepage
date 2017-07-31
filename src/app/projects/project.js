import React from 'react';
import PropTypes from 'prop-types';

import './project.scss';

export function Project(props) {
    const { project } = props;
    return (
        <div className='project'>
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
    );
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}