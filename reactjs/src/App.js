import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddTask from './components/AddTask'
import Tasks from './components/Tasks';

class App extends Component {
    render(){
        return (
            <div>
                <h1>Hey :)</h1>
                <div className="container-fluid text-dark">
                <AddTask />
                <Tasks />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));