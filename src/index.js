import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import SearchGiphy from './components/SearchGiphy';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import SearchGifs from './components/SearchGifs';
import LoginPage from './components/LoginPage';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/LoginPage" component={LoginPage}/>
      <Route path="/SearchGiphy" component={SearchGiphy}/>
      <Route path="/SearchGifs" component={SearchGifs}/>
    </Route>
  </Router>
), document.getElementById('app'));

// ReactDOM.render(<App/>,
//   document.getElementById('app'));
