import React from 'react';
import PropTypes from 'prop-types';

import { CarouselWindow } from './carousel-window';

import './carousel.scss';

const defaultWindowStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    height: '100%'
}

export class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idx: 0,
            maxSize: props.items ? props.items.length : 0
        }
    }

    onClickLeft = () => {
        console.log('heard click left');
        this.setState(this.goLeft);
    }

    onClickRight = () => {
        console.log('heard click right');
        this.setState(this.goRight);
    }

    goLeft = (state) => {
        console.log('going left');
        return {
            ...state,
            idx: state.idx - 1 < 0 ? state.maxSize - 1 : state.idx - 1 
        };
    }

    goRight = (state) => {
        console.log('going right');
        return {
            ...state,
            idx: state.idx + 1 < state.maxSize ? state.idx + 1 : 0
        };
    }

    render() {
        const { idx } = this.state;
        const { items, wrapStyle, style } = this.props;
        const windowStyle = {
            ...defaultWindowStyle, ...style
        }
        return (
            <div className='carousel' style={wrapStyle}>
                <div className='carousel-trigger carousel-trigger-left' onClick={this.onClickLeft}></div>
                {
                    items.length && <CarouselWindow style={windowStyle}
                        {...(items[idx]) } onClick={this.handleClick}
                        carouselWindowRef={(div) => this.carouselWindowRef = div} />
                }
                <div className='carousel-trigger carousel-trigger-right' onClick={this.onClickRight}></div>
            </div>
        );
    }
}

Carousel.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            images: PropTypes.arrayOf(PropTypes.string),
            caption: PropTypes.string
        })
    ).isRequired
}