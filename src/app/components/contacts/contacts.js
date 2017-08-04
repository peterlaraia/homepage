import React from 'react';

import { Contact } from './contact';
import { ContentService } from '../../services/content.service';

import './contacts.scss';
import './contacts.small.scss';

export class Contacts extends React.Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        ContentService.getContactInfo().subscribe(contacts => {
            this.setState((state) => ({
                ...state, contacts: contacts
            }))
        })
    }

    render() {
        const {contacts} = this.state;
        return (
            <div className='contacts-wrapper'>
                {
                    contacts.map(contact => (
                        <Contact key={contact.name} {...contact} />
                    ))
                }
            </div>
        );
    }
}