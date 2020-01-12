import React, { Component } from 'react';
import Biodata from './Biodata';
import Obstetric from './Obstetric'

export default class User extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         step:1,
         firstName: "",
         lastName: "",
         email: "",
         prevChildren: ""

      };
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    



    render() {

        const { step } = this.state;
        const { firstName, lastName, email } = this.state;
        const values = { firstName, lastName, email}
       
        switch(step) {
            case 1:
                return (
                    <Biodata
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                     />
                )
            case 2:
                return (
                    <Obstetric
                    nextStep={this.nextStep}
                    prevStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                     />
                )
            case 3:
                return <h1>Gynaecological History</h1>
            case 4:
                return <h1>Physical Examination</h1>
            case 5:
                return <h1>Investigations</h1>
            case 6:
                return <h1>Confirm </h1>
            case 7:
                return <h1>Success</h1>
        }
    }
}
