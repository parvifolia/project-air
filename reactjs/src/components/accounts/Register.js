import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../../actions/auth';


class Register extends Component {

    state={
        username:'',
        email:'',
        password:'',
        passwordCheck:''
    }

    onSubmit = e=>{
      e.preventDefault();
      const {username, email, password,passwordCheck} = this.state;
      if(password !== passwordCheck){
        alert("Passwords must be equal, please try again!")
      } else {

        this.props.register({username,password,email})
      }
    }

    onChange = e=> this.setState({ [e.target.name]: e.target.value });


    render() {
        if (this.props.isAuthenticated) {
          return <Redirect to="/" />;
        }
        const { username, email, password, passwordCheck } = this.state;
        return (
          <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
              <h2 className="text-center">Register</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="passwordCheck"
                    onChange={this.onChange}
                    value={passwordCheck}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state =>({
  isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps,{register})(Register);