import React, { Component } from 'react'

export default class AddTask extends Component {
    render() {
        return (
            <div>
                <div className="row bg-light pl-5 pr-5 pt-1 pb-1 mb-3">
                    <div className="col-8 offset-2">
                        <div className="form-group mt-3">
                            <input autoComplete="off" name="task" type="text" className="form-control" placeholder="Task to be done.."/>
                            <small className="form-text text-muted text-center"><b>🛎️ Tip:</b> Please press <kbd>↵</kbd> key to automaticly create a task.</small>
                            <div className="invalid-feedback"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
