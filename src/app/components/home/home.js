import React from 'react';

import { Loading } from '../loading/loading';
import { Scatter } from './scatter';
import { ContentService } from '../../services/content.service';

import './home.scss';

const style = {
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center'
}

export class Home extends React.Component {

    state = {
        pieces: [],
        loading: false
    }

    componentDidMount() {
        this.setState((state) => ({
            ...state, loading: true
        }));
        ContentService.getMe().subscribe(me => {
            this.setState((state) => ({
                ...state, pieces: me, loading: false
            }));
        });
    }

    render() {
        const { pieces, loading } = this.state;
        return (
            <div style={{height: '100%'}}>
                {
                    loading ?
                        <Loading /> :
                        <div className='container vertical' style={{ height: '100%' }}>
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
                }
            </div>
        );
    }
}