import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTasks,deleteTask,updateTask} from '../actions/taskActions';
import { formatDistanceToNow, format } from 'date-fns';
import jsPDF from 'jspdf';
import { id } from 'date-fns/locale';


class Tasks extends Component {
    state = {
        id:'',
        task:'',
        tag1:'',
        tag2:'',
        tag3:'',
        is_completed:false
    }

    // requested data when component builded
    componentDidMount(){
        this.props.getTasks();
        
    }

    // event listeners
    handleClick=(e)=>{
        //send DELETE request with id
        const id = e.target.getAttribute('name');
        this.props.deleteTask(id);
    }
    handleCheck=(e)=>{        

        //find the task text's & tags div and update UI 
        let text= e.target.parentElement.nextSibling;
        text.classList.toggle("line-through");
        e.target.classList.toggle("done-button-active")

        let tag= e.target.parentElement.nextSibling.children[0];
        tag.classList.toggle("tagbox-unactive")



        // send UPDATE Request to API
        const targetId = e.target.parentElement.parentElement.getAttribute('id');

        const tasks= this.props.tasks
        const updatedTask=tasks.filter(e=>{
            return e.id==targetId
        })
        const sendUpdatedTask = updatedTask[0];

        // change is_completed boolean and set the state
        this.setState({
            id: sendUpdatedTask.id,
            task:sendUpdatedTask.task,
            tag1:sendUpdatedTask.tag1,
            tag2:sendUpdatedTask.tag2,
            tag3:sendUpdatedTask.tag3,
            is_completed: !sendUpdatedTask.is_completed
        })

        // I sent new data on componentDidUpdate function

    }

    componentDidUpdate(){
        // UPDATE new data when state ready

        //// find the target completed task

        //const targetId = e.target.parentElement.parentElement.getAttribute('id');
        //this.props.updateTask(this.state,targetId)

        // check the State and if there is completed task, update UI
        // this.props.tasks.map(task=>{
        //     if (task.is_completed === true){

        //         //find the task's div
        //         let taskDiv= document.getElementById(task.id);

        //         // change status of the button to active
        //         taskDiv.children[0].children[0].classList.toggle("done-button-active")
        //         // tags unactive
        //         taskDiv.children[1].children[0].classList.toggle("tagbox-unactive")
        //         //text line-through
        //         taskDiv.children[1].children[0].classList.toggle("line-through")
        //     }
        // })

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
                    <div className="col-8 offset-2">
                        <ul className="list-group list-group-flush">
                            
                            { this.props.tasks.map(task=>{
                                //find the time since task added with date-fns package
                                const time = new Date(task.created_at);
                                const distanceTime=formatDistanceToNow(time, { addSuffix: true })

                                return(
                                    <li className="list-group-item" key={task.id}>
                                        <div  id={task.id} className="d-flex w-100 justify-content-between align-items-center" >
                                            <div  className="text-center check-button" onClick={this.handleCheck}>
                                                <button className="done-button">✓</button>
                                            </div>
                                            <div className="w-100 pl-3 pr-3 text-center task-text">
                                                {task.task}
                                                <div className="tags mt-2">
                                                    {task.tag1 ? (<div className="tagbox tagbox-1">{task.tag1}</div>):(null) }
                                                    {task.tag2 ? (<div className="tagbox tagbox-2">{task.tag2}</div>):(null) }
                                                    {task.tag3 ? (<div className="tagbox tagbox-3">{task.tag3}</div>):(null) }
                                                </div>
                                            </div>
                                            <div className="text-center task-time">
                                                <div>{distanceTime}</div>
                                                <button name={task.id} className="btn btn-sm btn-danger delete-button mt-2" onClick={this.handleClick}>Delete</button>
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

export default connect(mapStateToProps, { getTasks,deleteTask,updateTask })(Tasks);