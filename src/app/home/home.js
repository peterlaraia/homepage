import React from 'react';

import { Scatter } from './scatter';
import { ContentService } from '../services/content.service';

import './home.scss';

const style = {
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'center'
}

const LOCATIONS = [
    {top: '22%', left: '6%'},
    {top: '79%', left: '7%'},
    {top: '2%', left: '33%'},
    {top: '29%', left: '28%'},
    {top: '54%', left: '29%'},
    {top: '8%', left: '57%'},
    {top: '47%', left: '58%'},
    {top: '3%', left: '80%'},
    {top: '25%', left: '78%'},
    {top: '78%', left: '73%'}

]

export class Home extends React.Component {

    state = {
        images: []
    }

    componentDidMount() {
        ContentService.getMe().subscribe(me => {
            this.setState((state) => ({
                ...state, images: me.map(piece => piece.img)
            }));
        });
    }

    

    render() {
        const { images } = this.state;
        const locations = LOCATIONS.slice();
        return (
            <div className='container vertical' style={{height: '100%'}}>
                <h3 style={style}>Hi!</h3>
                <div className='scattered'>
                    {
                        images.map(image => {
                            const [location] = locations.splice(Math.floor(Math.random() * locations.length), 1);
                            return (
                                <Scatter key={image} image={image} location={location} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}