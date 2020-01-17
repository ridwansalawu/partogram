import React, { Component } from 'react';
import firebase from './Firebase';
import { navigate } from '@reach/router';

export default class JoinClinic extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:"",
         displayName: ""
      };
    };

    handleChange = (e) =>  {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const ref = firebase
            .database()
            .ref(`hospitals/${this.props.userID}/${this.props.hospitalID}/patients`)
            ref.push({
                patientName: this.state.displayName,
                patientEmail: this.state.email
            });
            navigate(`/patients/${this.props.userID}/${this.props.hospitalID}`)

    }


    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                    
                  <label>Email
                            <input 
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                />
                        </label>
                        <hr/>

                        <label>displayName
                            <input 
                                type="displayName"
                                name="displayName"
                                value={this.state.displayName}
                                onChange={this.handleChange}
                                />
                        </label>
                    
                        <hr/>
                        <button>Join</button>
                  </form>
                  
                
            </div>
        )
    }
}
