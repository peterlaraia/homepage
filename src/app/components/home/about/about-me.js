import React from 'react';

export function AboutMe(props) {
    const { pieces } = props;
    return (
        <div className='about-me'>
            {
                pieces.map((piece, idx) => (
                    <p key={idx}>{piece}</p>
                ))
            }
        </div>
    );
}