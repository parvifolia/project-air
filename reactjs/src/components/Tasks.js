import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTasks,deleteTask} from '../actions/taskActions';
import { formatDistanceToNow, format } from 'date-fns';
import jsPDF from 'jspdf';


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
        let text= e.target.parentElement.nextSibling;
        text.classList.toggle("line-through");
        e.target.classList.toggle("done-button-active")
    }
    printPdf=(e)=>{
        const doc = new jsPDF();

        // create a ordered list with i(index), add task content and date
        const print= this.props.tasks.map((task,i)=>{
            const time = new Date(task.created_at);
            const date=format(time, 'kk:mm - MM/dd/yyyy')
            i++;
            return (i + ": " + task.task + " ~ " + date)
        });
        console.log(print)
        doc.text(print, 10, 10)
        doc.save('tasks.pdf')

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
                                        <div className="d-flex w-100 justify-content-between align-items-center" >
                                            <div className="text-center check-button" onClick={this.handleCheck}>
                                                <button className="done-button">✓</button>
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

                            {this.props.tasks.length ? (
                                <button className="btn btn-primary print-button" onClick={this.printPdf}>Print</button>
                            ) : (
                                <span className="text-center my-5">There is no task yet.</span>
                            )}
                            

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