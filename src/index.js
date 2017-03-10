import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import SearchGiphy from './components/SearchGiphy';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import SearchGifs from './components/SearchGifs';
import LoginPage from './components/LoginPage';
import NewUser from './components/NewUser';
import Main from './components/Main';
import MainToo from './components/MainToo';
import ImageStore from './stores/ImageStore';
import { Provider } from 'mobx-react';

const imageStore = new ImageStore () ;

render((
  <Provider imageStore = {imageStore}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/LoginPage" component={LoginPage}/>
        <Route path="/NewUser" component={NewUser}/>

        <Route path="/Main" component={Main}>
          <Route path="/SearchGiphy" component={SearchGiphy}/>
          <Route path="/SearchGifs" component={SearchGifs}/>
        </Route>
      </Route>
    </Router>
    </Provider>
), document.getElementById('app'));
