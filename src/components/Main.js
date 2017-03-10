import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import NavLink from './NavLink';



class Main extends React.Component {
  render() {
    return (
    <div>
        <h1>Main Bitches</h1>
          <ul>
            <li><NavLink to="/SearchGiphy">Search</NavLink></li>
            <li><NavLink to="/SearchGifs">Add New Gif</NavLink></li>
        </ul>
        {this.props.children}
    </div>
  );
}
}

Main.propTypes = {children: React.PropTypes.object};


export default Main;
