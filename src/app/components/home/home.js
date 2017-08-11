import React from 'react';

import { AboutMe } from './about/about-me';
import { Carousel } from './carousel/carousel';
import { Loading } from '../loading/loading';
import { Scatter } from './scatter';
import { ContentService } from '../../services/content.service';

import './home.scss';
import './home.large.scss';

const style = {
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center'
}

export class Home extends React.Component {

    state = {
        summaries: [],
        hobbies: [],
        loading: false
    }

    componentDidMount() {
        this.setState((state) => ({
            ...state, loading: true
        }));
        ContentService.getMe().subscribe(me => {
            this.setState((state) => ({
                ...state, ...me, loading: false
            }));
        });
    }

    render() {
        const { summaries, hobbies, loading } = this.state;
        return (
            <div style={{height: '100%'}}>
                {
                    loading ?
                        <Loading /> :
                        <div className='container vertical home'>
                            <h3 style={style}>Hi!</h3>
                            <AboutMe pieces={summaries} />
                            <h5>Click below to learn more about me!</h5>
                            <Carousel items={hobbies}  />
                        </div>
                }
            </div>
        );
    }
}