import React, { Component } from 'react';
import FormError from "./FormError";
import firebase from 'firebase';
import { navigate } from '@reach/router';
import { createBrowserHistory } from 'history';




  
  export default class Login extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
            email: "",
            password: "",
        };
        const history = createBrowserHistory();
      };

      handleChange = (e) =>  {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue})
    }
    
    handleSubmit = (e) => {
        var registrationInfo = {
            email: this.state.email,
            password: this.state.password
        }

        e.preventDefault();

        firebase
        .auth()
        .signInWithEmailAndPassword(
            registrationInfo.email,
            registrationInfo.password
        ).then(() => {
            // navigate("/partograph");
            this.props.history.push("/user")
        })

        .catch(error => {
            error.message !== null ? this.setState({errorMessage: error.message}) : this.setState({errorMessage:null})
        })

    }


      render() {
          return (
              <div>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                        {this.state.errorMessage !== null
                        ?(
                        <FormError theMessage={this.state.errorMessage}/>
                        ):
                        null
                        }
                    </div>
                  <label>Email
                            <input 
                                type="email"
                                name="email"
                                value={this.state.email}
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
                    
                        <hr/>
                        <button>Log In</button>
                  </form>
                  
               

                  
              </div>
          )
      }
  }
  
  
  
  
  
  
  