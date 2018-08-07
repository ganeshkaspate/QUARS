import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import history from './history';
import promise from 'redux-promise';
import thunk from 'redux-thunk'
import reducers from './reducers';
import App  from './components/HeaderComponents/NavBarComponent';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
       <Router history={history} >
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
