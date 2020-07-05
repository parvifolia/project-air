import React, { Component } from 'react';
import {connect} from 'react-redux';
//import PropTypes from 'prop-types';
import {getTasks} from '../actions/getTasks';

class Tasks extends Component {
    componentDidMount(){

        this.props.getTasks();

    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <ul className="list-group list-group-flush">
                            
                            { this.props.tasks.map(task=>{
                                return(
                                    <li className="list-group-item" id={task.id}>
                                        <div className="d-flex w-100 justify-content-between"></div>
                                        <div className="text-center check-button"><input type="checkbox" data-toggle="toggle" data-on="<b>&check;</b>" data-onstyle="success" data-off="&check;" data-style="fast" /></div>
                                        <div className="pl-3 pr-3 task-text">{task.task}</div>
                                        <div className="text-center task-time"><small>1 minute ago.</small><br/><button type="button" className="btn btn-sm btn-link btn-delete"><small>Delete</small></button></div>
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

export default connect(mapStateToProps, { getTasks })(Tasks);