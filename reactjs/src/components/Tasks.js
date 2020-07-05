import React, { Component } from 'react'

export default class Tasks extends Component {
    render() {
        return (
            <div>
            <div className="row">
                <div className="col-6 offset-3">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <div className="text-center check-button"><input type="checkbox" data-toggle="toggle" data-on="<b>&check;</b>" data-onstyle="success" data-off="&check;" data-style="fast" /></div>
                                <div className="pl-3 pr-3 task-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.</div>
                                <div className="text-center task-time"><small>1 minute ago.</small><br/><button type="button" className="btn btn-sm btn-link btn-delete"><small>Delete</small></button></div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <div className="text-center check-button"><input type="checkbox" data-toggle="toggle" data-on="<b>&check;</b>" data-onstyle="success" data-off="&check;" data-style="fast" /></div>
                                <div className="pl-3 pr-3 task-text">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.</div>
                                <div className="text-center task-time"><small>3 hours ago.</small><br/><button type="button" className="btn btn-sm btn-link btn-delete"><small>Delete</small></button></div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <div className="text-center check-button" ><input type="checkbox" checked data-toggle="toggle" data-on="<b>&check;</b>" data-onstyle="success" data-off="&check;" data-style="fast" /></div>
                                <div className="pl-3 pr-3 task-text"><del>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</del></div>
                                <div className="text-center task-time"><small>1 day ago.</small><br/><button type="button" className="btn btn-sm btn-link btn-delete"><small>Delete</small></button></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}
