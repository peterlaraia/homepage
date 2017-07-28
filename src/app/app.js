import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home } from './home/home';
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
        this.setState((state) => ({ ...state, sidebar: !state.sidebar }));
    }

    render() {
        const showSidebar = this.state.sidebar;
        return (
            <div className="root-container">
                <div className='sidebar-toggle-wrapper flex-left'>
                    <SidebarToggle on={showSidebar} onTrigger={this.toggleSidebar} />
                </div>
                <Sidebar show={showSidebar} >
                    <div className='sidebar-toggle-wrapper flex-right'>
                        <SidebarToggle on={showSidebar} onTrigger={this.toggleSidebar} />
                    </div>
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