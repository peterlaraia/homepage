import React from 'react';
import { findDOMNode } from 'react-dom'
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './sidebar.scss';
import './sidebar.small.scss';

export class Sidebar extends React.Component {

    handleClick = (e) => {
        const { onClickOutside, showing, externalTriggers } = this.props;
        if (showing && this.clickWasOutside(e.target)) {
            if (onClickOutside) {
                onClickOutside();
            }
        }
    }

    clickWasOutside = (target) => {
        const { onClickOutside, externalTriggers } = this.props;
        const thisNode = findDOMNode(this);

        return !this.nodeContainsTarget(target, thisNode) && 
            externalTriggers.filter((ref) => this.nodeContainsTarget(target, findDOMNode(ref))).length === 0;
    }

    nodeContainsTarget = (target, node) => {
        return node && node.contains(target);
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    render() {
        const { showing, children } = this.props;
        return (
            <div className={classNames('sidebar', { 'sidebar-showing': showing })}>
                {children}
            </div>
        );
    }
}

Sidebar.propTypes = {
    showing: PropTypes.bool.isRequired,
    onClickOutside: PropTypes.func,
    externalTriggers: PropTypes.array
}

Sidebar.defaultProps = {
    showing: true,
    externalTriggers: []
}