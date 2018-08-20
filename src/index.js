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
import LoginComponent from './components/LoginComponent/LoginComponent';
import CreateJob from './components/MainCreateJob/MainCreateJobComponent';
import userJobs from './components/ShowUserJob/ShowUserJob';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
       <Router history={history} >
      <div className="main-container">
         <App/>
         <Switch>
           <Route path="/userJobs" component={userJobs} />
          <Route path="/createJob" component={CreateJob} />
          <Route path="/" component={LoginComponent} />
        </Switch>
      </div>
    </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
