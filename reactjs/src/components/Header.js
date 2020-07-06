import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth'


class Header extends Component {

  render() {

    const { isAuthenticated, user } = this.props.auth;


    const guestNavbar= (
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
    )

    const userNavbar = (
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
            <button onClick={this.props.logout} className="nav-link btn btn-secondary btn-sm text-light">Logout</button>
        </li>
    </ul>
    )

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <div className="navbar">
                    <a className="navbar-brand" href="#">
                    TASK MANAGER
                    </a>
                </div>

                {isAuthenticated ?  userNavbar :guestNavbar}

            </div>
        </nav>
    );
  }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
  });

export default connect(mapStateToProps,{logout})(Header)
