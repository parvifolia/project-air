import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddTask from './components/AddTask'
import Tasks from './components/Tasks';
import {Provider} from 'react-redux';
import store from './store'

class App extends Component {
    render(){
        
        return (
            <Provider store={store}>
                <div>
                    <h1>Hey :)</h1>
                    <div className="container-fluid text-dark">
                    <AddTask />
                    <Tasks />
                    </div>
                </div>
            </Provider>
        )
        
    }
}

ReactDOM.render(<App />, document.getElementById('app'));