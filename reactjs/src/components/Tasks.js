import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTasks,deleteTask} from '../actions/taskActions';
import { formatDistanceToNow } from 'date-fns'


class Tasks extends Component {

    // requested data when component builded
    componentDidMount(){
        this.props.getTasks();
    }


    // event listeners
    handleClick=(e)=>{
        //send delete request with id
        const id = e.target.getAttribute('id');
        this.props.deleteTask(id);
    }
    handleCheck=(e)=>{
        //find the task text's div
        let text= e.target.parentElement.parentElement.parentElement.nextSibling;
        text.classList.toggle("line-through")
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <ul className="list-group list-group-flush">
                            
                            { this.props.tasks.map(task=>{
                                //find the time since task added with date-fns package
                                const time = new Date(task.created_at);
                                const distanceTime=formatDistanceToNow(time, { addSuffix: true })

                                return(
                                    <li className="list-group-item" key={task.id}>
                                        <div className="d-flex w-100 justify-content-between" >
                                            <div className="text-center check-button" onClick={this.handleCheck}>
                                                <input type="checkbox" data-toggle="toggle" data-on="&check;" data-onstyle="success" data-off="&check;" data-style="fast"  />
                                            </div>
                                            <div className="pl-3 pr-3 task-text">{task.task}</div>
                                            <div className="text-center task-time">
                                                <div>{distanceTime}</div>
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