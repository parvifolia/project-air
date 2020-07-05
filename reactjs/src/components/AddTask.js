import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions/taskActions'

class AddTask extends Component {

    state = {
        task:'',
        is_completed:false
    }
    //event listeners
    handleChange= e=>{
        this.setState({
            task:e.target.value
        })
    }
    handleSubmit= e=>{
        e.preventDefault();
        console.log(this.state)
        const { task,is_completed } = this.state;
        const newTask = {task,is_completed}
        this.props.addTask(newTask)

    }



    render() {
        return (
            <div>
                <div className="row bg-light pl-5 pr-5 pt-1 pb-1 mb-3">
                    <div className="col-8 offset-2">
                        <div className="form-group mt-3">
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleChange} autoComplete="off" name="task" type="text" className="form-control" placeholder="Task to be done.."/>
                            </form>
                            <small className="form-text text-muted text-center"><b>🛎️ Tip:</b> Please press <kbd>↵</kbd> key to automaticly create a task.</small>
                            <div className="invalid-feedback"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProp = null;

export default connect(mapStateToProp, {addTask})(AddTask)