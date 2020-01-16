import React, { Component } from 'react';
import FormError from "./FormError";
import firebase from "./Firebase"
import { navigate } from '@reach/router';



export default class Register extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         lastName: "",
         username: "",
         email: "",
         password: "",
         confirmPassword: "",
         dob: "",
         errorMessage:null
      };
    };

    handleChange = (e) =>  {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue}, () => {
            this.state.password !== this.state.confirmPassword ? this.setState({errorMessage: "Password does not match Niggah"}):
             this.setState({errorMessage: null})
        })
    }

    handleSubmit = (e) => {
        var registrationInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            dob: this.state.dob,

        }

        e.preventDefault();

        firebase
        .auth()
        .createUserWithEmailAndPassword(
            registrationInfo.email,
            registrationInfo.password
        ).then(() => {
            this.props.registerUser(registrationInfo.username);
        })

        .catch(error => {
            error.message !== null ? this.setState({errorMessage: error.message}) : this.setState({errorMessage:null})
           
        })
        .then(()=> {
            this.props.history.push("/partograph")
        })
        

    }
    


    render() {
        return (
            <div>
                <div>
                    {this.state.errorMessage !== null
                    ?(
                    <FormError theMessage={this.state.errorMessage}/>
                    ):
                    null
                    }
                </div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label>First Name
                            <input 
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                />
                        </label>
                        <hr/>
                        <label>Last Name
                            <input 
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                />
                        </label>
                        <hr/>
                        <label>Username
                            <input 
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                                />
                        </label>
                        <hr/>
                        <label>Email
                            <input 
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                />
                        </label>
                        <hr/>

                        <label>Date of Birth
                            <input 
                                type="date"
                                name="dob"
                                value={this.state.dob}
                                onChange={this.handleChange}
                                />
                        </label>
                        <hr/>
                        <label>Password
                            <input 
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                />
                        </label>
                       
                        <label>Confirm Password
                            <input 
                                type="password"
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                />
                        </label>
                        <hr/>
                        <button>Register</button>
                      
                    </fieldset>
                </form>
                
            </div>
        )
    }
}
