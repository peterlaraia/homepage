import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'

import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Sidebar } from './sidebar/sidebar';
import { SidebarToggle } from './sidebar/sidebar-toggle';
import * as actions from './sidebar/store/actions';

import './app.scss';
import './app.small.scss';

@connect((state) => ({
    showSidebar: state.sidebar.show
}))
export class App extends React.Component {

    toggleSidebar = () => {
        this.props.dispatch(actions.toggle())
    }

    render() {
        const {showSidebar} = this.props;
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