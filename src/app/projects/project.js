import React from 'react';

import './project.scss';

export function Project(props) {
    const {project} = props;
    return (
        <div className='project-section'>
            <h4>{project.name}</h4>
        </div>
    );
}