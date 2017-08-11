import React from 'react';
import PropTypes from 'prop-types';

const defaultImgStyle = {
    maxWidth: '35%',
    maxHeight: '100%'
}

const defaultImgsStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    flex: '1 1 65%'
}

const defaultCaptionStyle = {
    marginTop: '12px',
    flex: '1 1 35%'
}

export function CarouselWindow(props) {
    const { images, caption, style, onClick, carouselWindowRef } = props;
    return (
        <div className='carousel-window' ref={carouselWindowRef} style={style} onClick={onClick}>
            <div className='carousel-images' style={defaultImgsStyle} >
                {
                    images.map(img => (
                        <img key={img} src={'assets/img/' + img} className='carousel-img' style={defaultImgStyle} />
                    ))
                }
            </div>
            <div className='carousel-caption' style={defaultCaptionStyle}>{caption}</div>
        </div>
    );
}

CarouselWindow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    caption: PropTypes.string.isRequired,
    carouselWindowRef: PropTypes.func
}

CarouselWindow.defaultProps = {
    carouselWindowRef: (_) => undefined
}