import React, { Component } from 'react';
import firebase from './Firebase'
import IconButton  from '@material-ui/icons/Delete';
import DeleteIcon from '@material-ui/icons/Delete';
import { navigate } from '@reach/router';


export default class HospitalList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    };

    deleteHospital = (e, whichHospital) => {
        e.preventDefault();
        const ref = firebase
            .database()
            .ref(`hospitals/${this.props.userID}/${whichHospital}`);
            ref.remove();

    }
    


    render() {

        const { hospitals } = this.props;
        const myHospitals = hospitals.map(item => {
            
            return (<div key={item.hospitalID}>
                
                <IconButton aria-label="delete" size ="small" onClick={e => this.deleteHospital(e, item.hospitalID)}>
                    <DeleteIcon />
                </IconButton>
                <button onClick={()=> 
                    navigate(`/joinclinic/${this.props.userID}/${item.hospitalID}`)}>go</button>
                <button onClick={()=> 
                    navigate(`/patients/${this.props.userID}/${item.hospitalID}`)}>
                    patients
                </button>
               
                {item.hospitalName}
            </div>)
        })


        return (
            <div>
                {myHospitals}
            </div>
        )
    }
}
