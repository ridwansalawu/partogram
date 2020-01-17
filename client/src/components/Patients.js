import React, { Component } from 'react';
import firebase from './Firebase';
import PatientsList from './PatientsList';


class Patients extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         displayPatients: []
      };
    };

    componentDidMount() {
        const ref = firebase
            .database()
            .ref(`hospitals/${this.props.userID}/${this.props.hospitalID}/patients`);

            ref.on('value', snapshot => {
                let patients = snapshot.val();
                let patientsList = [];
                for (let item in patients) {
                    patientsList.push({
                        patientID: item,
                        patientName: patients[item].patientName,
                        patientEmail: patients[item].patientEmail
                    })
                }
                this.setState({
                    displayPatients: patientsList
                })

            })
    }
    


    render() {
        return (
            <div>
                <div><h1>Patients</h1></div>
                <div>
                    <PatientsList userID={this.props.userID}
                                  patients={this.state.displayPatients}/>
                </div>

                
            </div>
        )
    }
}

export default Patients;
