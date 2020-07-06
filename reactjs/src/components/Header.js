import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {

  render() {


    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <div className="navbar">
                    <a className="navbar-brand" href="#">
                    TASK MANAGER
                    </a>
                </div>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}

