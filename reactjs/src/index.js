import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Register from './components/accounts/Register'
import Login from './components/accounts/Login'
import Header from './components/Header'
import PrivateRoute from './components/accounts/PrivateRoute'
import {loadUser} from './actions/auth';


class Index extends Component {

    // Get User
    componentDidMount(){
        store.dispatch(loadUser())
    }

    render(){        
        return (
            <Provider store={store}>
        
                <Router>
                    <Header/>
                    <Switch>
                        <PrivateRoute exact path="/" component={App}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                    </Switch>
                </Router>
    
            </Provider>
        )
        
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('app')
);