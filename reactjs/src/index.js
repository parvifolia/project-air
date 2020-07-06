import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Register from './components/accounts/Register'
import Login from './components/accounts/Login'
import Header from './components/Header'





ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        
            <Router>
                <Header/>
                <Switch>
                    
                    <Route exact path="/" component={App}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </Router>

        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
);