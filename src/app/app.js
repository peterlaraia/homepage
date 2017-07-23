import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Sidebar } from './sidebar/sidebar';
import { SidebarToggle } from './sidebar/sidebar-toggle';
import { Home } from './home/home';
import { Projects } from './projects/projects';

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
                <div className='sidebar-toggle-wrapper'>
                    <SidebarToggle on={showSidebar} onTrigger={this.toggleSidebar} />
                </div>
                <Sidebar>
                    <div className='sidebar-toggle-wrapper'>
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