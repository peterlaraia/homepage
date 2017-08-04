import React from 'react';

import { Contact } from './contact';
import { Loading } from '../loading/loading';
import { ContentService } from '../../services/content.service';

import './contacts.scss';
import './contacts.small.scss';

export class Contacts extends React.Component {

    state = {
        contacts: [],
        loading: false
    }

    componentDidMount() {
        this.setState(state => ({
            ...state, loading: true
        }));

        ContentService.getContactInfo().subscribe(contacts => {
            this.setState((state) => ({
                ...state, contacts: contacts, loading: false
            }));
        });
    }

    render() {
        const { contacts, loading } = this.state;
        return (
            <div className='contacts-wrapper'>
                {
                    loading ?
                        <Loading /> :
                        contacts.map(contact => (
                            <Contact key={contact.name} {...contact} />
                        ))

                }
            </div>
        );
    }
}