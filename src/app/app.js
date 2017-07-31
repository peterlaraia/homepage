import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home } from './home/home';
import { Menu } from './menu/menu';
import { MenuItem } from './menu/menu-item';
import { Profile } from './profile/profile';
import { Projects } from './projects/projects';
import { Sidebar } from './sidebar/sidebar';
import { SidebarToggle } from './sidebar/sidebar-toggle';

import './app.scss';
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
        console.log('toggling', show);
        this.setState((state) => ({ ...state, sidebar: show}));
    }

    render() {
        const showSidebar = this.state.sidebar;
        return (
            <div className="root-container">
                <div className='sidebar-toggle-wrapper flex-left'>
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
                    </Menu>
                </Sidebar>
                <div className="router-outlet">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/projects' component={Projects} />
                    </Switch>
                </div>
            </div>
        );
    }
}