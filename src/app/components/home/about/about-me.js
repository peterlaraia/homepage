import React from 'react';

const style = {
    paddingLeft: '24px',
    paddingRight: '24px'
};

export function AboutMe(props) {
    const { pieces } = props;
    return (
        <div className='about-me' style={style}>
            {
                pieces.map((piece, idx) => (
                    <p key={idx}>{piece}</p>
                ))
            }
        </div>
    );
}