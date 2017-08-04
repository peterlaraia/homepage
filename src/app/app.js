import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Contacts } from './components/contacts/contacts';
import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { MenuItem } from './components/menu/menu-item';
import { Profile } from './components/profile/profile';
import { Projects } from './components/projects/projects';
import { Sidebar } from './components/sidebar/sidebar';
import { SidebarToggle } from './components/sidebar/sidebar-toggle';
import { Resume } from './components/resume/resume';

import './app.scss';
import './app.large.scss';
import './app.small.scss';

export class App extends React.Component {

    state = {
        sidebar: false
    }

    constructor(props) {
        super(props);
    }

    toggleSidebar = () => {
        this.setSidebar(!this.state.sidebar);
    }

    setSidebar = (show) => {
        this.setState((state) => ({ ...state, sidebar: show}));
    }

    render() {
        const showSidebar = this.state.sidebar;
        return (
            <div className="root-container">
                <div className='sidebar-toggle-wrapper flex-left top-nav'>
                    <SidebarToggle active={showSidebar} onTrigger={this.toggleSidebar} ref='topSidebarTrigger' />
                </div>
                <Sidebar showing={showSidebar} externalTriggers={[this.refs.topSidebarTrigger]} onClickOutside={() => this.setSidebar(false)}>
                    <div className='sidebar-toggle-wrapper flex-right'>
                        <SidebarToggle active={showSidebar} onTrigger={this.toggleSidebar} />
                    </div>
                    <Profile name='Peter Laraia' />
                    <Menu>
                        <MenuItem exact to='/' onClick={() => this.setSidebar(false)}>Home</MenuItem>
                        <MenuItem to='/projects' onClick={() => this.setSidebar(false)}>Projects</MenuItem>
                        <MenuItem to='/resume' onClick={() => this.setSidebar(false)}>Resume</MenuItem>
                        <MenuItem to='/contact' onClick={() => this.setSidebar(false)}>Contact</MenuItem>
                    </Menu>
                </Sidebar>
                <div className="router-outlet">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/projects' component={Projects} />
                        <Route exact path='/resume' component={Resume} />
                        <Route exact path='/contact' component={Contacts} />
                    </Switch>
                </div>
            </div>
        );
    }
}