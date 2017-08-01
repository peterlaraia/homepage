import React from 'react';

import { Scatter } from './scatter';
import { ContentService } from '../services/content.service';

import './home.scss';

const style = {
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center'
}

export class Home extends React.Component {

    state = {
        pieces: []
    }

    componentDidMount() {
        ContentService.getMe().subscribe(me => {
            this.setState((state) => ({
                ...state, pieces: me
            }));
        });
    }

    render() {
        const { pieces } = this.state;
        return (
            <div className='container vertical' style={{height: '100%'}}>
                <h3 style={style}>Hi!</h3>
                <div className='scattered'>
                    {
                        pieces.map(me => {
                            return (
                                <Scatter key={me.id} image={me.img} location={me.location} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}