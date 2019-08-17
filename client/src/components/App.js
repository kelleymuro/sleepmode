import React, { Fragment, useEffect } from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Register from './auth/Register';
import Login from './auth/Login';
import Dashboard from './layout/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';
import Alert from './layout/Alert';
import setAuthToken from '../utils/setAuthToken';
import { loadUser } from '../actions/auth';

import PrivateRouter from './routing/PrivateRoute';
import Trial from './layout/Trial';

if (localStorage.token) {
   setAuthToken(localStorage.token);
}

const App = () =>  {
   useEffect( () => {
      store.dispatch(loadUser());
   }, []);
 
   return (
   <Provider store={store}>
      <Router>
         <Fragment>
            <Navbar/>
            <Alert/>
            <Switch>
               <Route exact path='/' component={Landing}/>
               <Route exact path='/register' component={Register}/>
               <Route exact path='/login' component={Login}/>
               <Route exact path='/trial' component={Trial}/>
               <PrivateRouter exact path='/dashboard' component={Dashboard}/>
            </Switch>
      </Fragment>
   </Router>
   </Provider>
   
   )
};

export default App;