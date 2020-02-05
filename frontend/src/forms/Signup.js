import React, { Component } from 'react';
import { Label } from "reactstrap";

// const required = (val) => val && val.length;

class Signup extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          username: "",
          password: ""
         
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    };
    
    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit (e) {
        const userDetails = {
            username: this.state.username,
            password: this.state.password
        }
        e.preventDefault()
        this.props.signupUser(userDetails)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <Label className="control-label">Username</Label>
                                <input 
                                    value={this.state.username}
                                    type="text"
                                    name="username"
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <Label className="control-label">Password</Label>
                                <input 
                                    value={this.state.password}
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>      
            </div>
        )
    }
}

export default Signup;
