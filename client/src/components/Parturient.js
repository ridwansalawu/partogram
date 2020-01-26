import React, { Component } from 'react';
import { Link } from "@reach/router";

export default class Parturient extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hospitalId:"",
         firstName: "",
         middleName: "",
         lastName: "",
         lmp: "",
         dob: "",
         cervicalDilatation: "",
         examHour: "",
         comment: "",
         author: ""
      };
    };

    handleInputChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState({[name]: value}) 
    }

    handleSubmit = (e) => {
        console.log("Current state is: " + JSON.stringify(this.state))
        alert("current state is : " + JSON.stringify(this.state));
        e.preventDefault()

    }
    


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>hospitalId</label>
                        <input 
                        type="text"
                        id="hospitalId"
                        name="hospitalId"
                        placeholder="Hospital ID"
                        value={this.state.hospitalId}
                        onChange={this.handleInputChange}
                        />
                    <br/>
                    
                    <label>First Name</label>
                    <input 
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        />
                    <br/>
                    
                    <label>Middle Name</label>
                    <input 
                        type="text"
                        id="middleName"
                        name="middleName"
                        placeholder="Middle Name"
                        value={this.state.middleName}
                        onChange={this.handleInputChange}
                        />
                    <br/>

                    <label>Last Name</label>
                    <input 
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        />
                    <br/>

                    <label>Last Menstrual Period</label>
                    <input 
                        type="date"
                        id="lmp"
                        name="lmp"
                        placeholder="last menstrual period"
                        value={this.state.lmp}
                        onChange={this.handleInputChange}
                        />
                    <br/>
                    
                    <label>Date of Birth</label>
                    <input 
                        type="date"
                        id="dob"
                        name="dob"
                        placeholder="date of birth"
                        value={this.state.dob}
                        onChange={this.handleInputChange}
                        />
                    <br/>

                    <label>Cervical Dilatation</label>
                    <input 
                        type="number"
                        id="cervicalDilatation"
                        name="cervicalDilatation"
                        placeholder="Cervical Dilatation"
                        value={this.state.cervicalDilatation}
                        onChange={this.handleInputChange}
                        />
                    <br/>

                    <label>Exam time</label>
                    <input 
                        type="number"
                        id="examHour"
                        name="examHour"
                        placeholder="Time of examination"
                        value={this.state.examHour}
                        onChange={this.handleInputChange}
                        />
                    <br/>

                    <label>Comment</label>
                    <input 
                        type="textarea"
                        id="comment"
                        name="comment"
                        row="12"
                        placeholder="Any suggestions or opinions about this patient?"
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                        />
                    <br/>

                    <label>Author</label>
                    <input 
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Author"
                        value={this.state.author}
                        onChange={this.handleInputChange}
                        />
                    <br/>
                    <button type="submit">Submit</button>


                </form>
            </div>
        )
    }
}
