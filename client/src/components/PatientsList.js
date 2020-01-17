import React, { Component } from 'react';


export default class PatientsList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    };
    


    render() {

        const patients = this.props.patients;
        const myPatients = patients.map(item => {
           return <div key={item.patientID}>
                {item.patientName}
            </div>
        })
        return (
            <div>
                <div>
                    {myPatients}
                </div>

                
            </div>
        )
    }
}
