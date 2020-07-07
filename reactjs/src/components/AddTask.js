import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions/taskActions'

class AddTask extends Component {

    state = {
        task:'',
        tag1:'',
        tag2:'',
        tag3:'',
        is_completed:false
    }
    //event listeners
    handleChangeTask= e=>{
        this.setState({
            task:e.target.value
        })
    }
    handleChangeTag1= e=>{
        this.setState({
            tag1:e.target.value
        })
    }
    handleChangeTag2= e=>{
        this.setState({
            tag2:e.target.value
        })
    }
    handleChangeTag3= e=>{
        this.setState({
            tag3:e.target.value
        })
    }
    handleSubmit= e=>{
        e.preventDefault();
        const { task, tag1, tag2, tag3,is_completed } = this.state;
        const newTask = {task,tag1, tag2, tag3,is_completed}
        this.props.addTask(newTask)

    }



    render() {
        return (
            <div>
                <div className="row bg-light pl-5 pr-5 pt-1 pb-1 mb-3">
                    <div className="col-8 offset-2">
                        <div className="form-group mt-3 text-center">
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleChangeTask} autoComplete="off" name="task" type="text" className="form-control" placeholder="Task to be done.."/>
                                <div className='d-flex mt-2'>
                                <input onChange={this.handleChangeTag1} autoComplete="off" name="Tag1" type="text" className="form-control" placeholder="#tag1"/>
                                <input onChange={this.handleChangeTag2} autoComplete="off" name="Tag2" type="text" className="form-control mx-2" placeholder="#tag2"/>
                                <input onChange={this.handleChangeTag3} autoComplete="off" name="Tag3" type="text" className="form-control" placeholder="#tag3"/>
                                </div>
                                <button type='submit' className="btn btn-primary d-none">Hidden submit button for submit with enter</button>
                            </form>
                            <small className="form-text text-muted text-center mt-2"><b>🛎️ Tip:</b> Please press <kbd>↵</kbd> key to automaticly create a task.</small> 
                            <small className="form-text text-muted text-center">You can add tags if you want.(optional)</small> 

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