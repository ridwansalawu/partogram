import React, { Component } from 'react';
import { Label } from "reactstrap";
import {Redirect, withRouter} from "react-router-dom";
import "../components/parturients.css";
import {Container, Row, Col} from "react-bootstrap"

class Signup extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          login:false,
          username: "",
          password: ""
         
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        // if (this.props.auth.isAuthenticated) {
        //     this.setState({login:true})
            
        //   }
        
    }
    
    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit =  (e) => {
        
        const userDetails = {
            username: this.state.username,
            password: this.state.password
        }
       
       this.props.signupUser(userDetails)
       this.props.history.push("/home")
      
       
        e.preventDefault()
       
    }

    render() {

        return (
            <Container >

           <Row className="sign-up-container">
              <Col>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <Label className="body-card-inside">Username</Label>
                                <input 
                                    value={this.state.username}
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={this.handleChange}
                                    className="form-control"
                                   
                                />
                            </div>
                            <div className="form-group">
                                <Label className="body-card-inside">Password</Label>
                                <input 
                                    value={this.state.password}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    className="form-control"
                                   
                                />
                            </div>
                            <div className="form-group">
                                <button className="button-update">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </Col>

                </Row>

             </Container>
                  
        )
    }
}

export default withRouter(Signup);
