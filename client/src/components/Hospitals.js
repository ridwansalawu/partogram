import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import "../App.css"
import HospitalList from "./HospitalList"


export default class Hospitals extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hospitalName: ""
      };
    };

   handleChange = (e) => {
       this.setState({hospitalName: e.target.value})
       console.log("submited")

    }
   handleSubmit = (e) => {
       e.preventDefault()
       


       this.props.addHospital(this.state.hospitalName)
       this.setState({hospitalName: ""})
       console.log("submited")

    }
    







    render() {
        return (
            <div>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              
                    <TextField 
                    id="outlined-basic" 
                    label="Add Hospital" 
                    variant="outlined" 
                    value= {this.state.hospitalName}
                    onChange={this.handleChange}
                    required
                    />

                    <Fab color="primary" type="submit" aria-label="add">
                        <AddIcon />
                    </Fab>
                    
              

                </form>

                <div>
                    {this.props.hospitals && this.props.hospitals.length ? (
                        <div>Your Hospitals</div>
                    ) : null}

                    {this.props.hospitals && (
                        <div>
                            <HospitalList userID={this.props.userID}
                                          hospitals={this.props.hospitals}/>
                        </div>
                    )}
                </div>

                
            </div>
        )
    }
}
