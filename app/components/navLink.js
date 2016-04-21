import React from 'react';
import { Link } from 'react-router';

class NavLink extends React.Component {
    render(){
        return <Link {...this.props} activeStyle={{ color: 'green' }}/>
    }
}

module.exports = NavLink;