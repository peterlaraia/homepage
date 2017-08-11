import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
const TRANSITION_LEFT = 'carousel-transition-left';
const TRANSITION_RIGHT = 'carousel-transition-right';

export class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idx: 0,
            maxSize: props.items ? props.items.length : 0,
            transition: TRANSITION_RIGHT
        }
    }

    onClickLeft = () => {
        this.setState(this.goLeft);
    }

    onClickRight = () => {
        this.setState(this.goRight);
    }

    goLeft = (state) => {
        return {
            ...state,
            transition: TRANSITION_LEFT,
            idx: state.idx - 1 < 0 ? state.maxSize - 1 : state.idx - 1
        };
    }

    goRight = (state) => {
        return {
            ...state,
            transition: TRANSITION_RIGHT,
            idx: state.idx + 1 < state.maxSize ? state.idx + 1 : 0
        };
    }

    render() {
        const { idx, transition, maxSize } = this.state;
        const { items, wrapStyle, style } = this.props;
        const windowStyle = {
            ...defaultWindowStyle, ...style
        }
        return (
            <div className='carousel' style={wrapStyle}>
                <div className='carousel-trigger carousel-trigger-left' onClick={this.onClickLeft}></div>
                {
                    items.length &&
                    <ReactCSSTransitionGroup
                        transitionName={transition}
                        transitionEnterTimeout={400}
                        transitionLeave={false}
                        className='carousel-animation-wrapper'>
                        <CarouselWindow style={windowStyle} key={idx}
                            {...(items[idx]) } onClick={this.handleClick}
                            carouselWindowRef={(div) => this.carouselWindowRef = div} />
                    </ReactCSSTransitionGroup>
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