import React, { Component } from 'react';
import AddTask from './components/AddTask'
import Tasks from './components/Tasks';

class App extends Component {

    render(){
        return (
            <div>
                <div className="container-fluid text-dark">
                    <AddTask />
                    <Tasks />
                </div>
            </div>
        )
    }
}

export default App