import React, { Component } from 'react';
import firebase from './Firebase';



export default class PatientsList extends Component {
    constructor(props) {
      super(props)

    };

    deletePatient = (e, whichHospital, whichPatient)=> {
        e.preventDefault();
        const adminUser = this.props.adminUser;
        const ref = firebase.database()
            .ref(`hospitals/${adminUser}/${whichHospital}/patients/${whichPatient}`)
            ref.remove()

    }
    


    render() {
        const admin = this.props.adminUser === this.props.userID ? true : false;
        const patients = this.props.patients;
        const myPatients = patients.map(item => {
           return <div key={item.patientID}>
                {item.patientName}
            
            {admin && 
                
                    (<button onClick={(e) => {
                        this.deletePatient(e, this.props.hospitalID, item.patientID)
                        }}>delete patient</button>)
                
            }
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
