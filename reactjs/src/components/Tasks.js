import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTasks,deleteTask} from '../actions/taskActions';

class Tasks extends Component {

    // requested data when component builded
    componentDidMount(){
        this.props.getTasks();
    }

    // event listeners
    handleClick=(e)=>{
        const id = e.target.getAttribute('id');
        this.props.deleteTask(id);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <ul className="list-group list-group-flush">
                            
                            { this.props.tasks.map(task=>{
                                return(
                                    <li className="list-group-item" key={task.id}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <div className="text-center check-button"><input type="checkbox" data-toggle="toggle" data-on="<b>&check;</b>" data-onstyle="success" data-off="&check;" data-style="fast" /></div>
                                            <div className="pl-3 pr-3 task-text">{task.task}</div>
                                            <div className="text-center task-time">
                                                <small>1 minute ago.</small><br/>
                                                <button id={task.id} className="btn btn-sm btn-danger delete-button" onClick={this.handleClick}>Delete</button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }) 
                            }

                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return {
        tasks:state.tasksReducer.tasks
    }
}

export default connect(mapStateToProps, { getTasks,deleteTask })(Tasks);