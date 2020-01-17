import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Home from './components/Home'
import Partograph from './components/Partograph';
import User from './components/User';
import Header from './components/Header';
// import NotFound from './components/NotFound';
import firebase from './components/Firebase'
import Register from './components/Register'
import { Router, navigate } from '@reach/router';
import Login from "./components/Login"
import Hospitals from './components/Hospitals';
import { red } from '@material-ui/core/colors';
import { timeThursdays } from 'd3';
import JoinClinic from './components/JoinClinic';
import Patients from "./components/Patients"




class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user: null,
         displayName: null,
         userID: null
      };
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(FBUser => {
            if (FBUser) {
                this.setState({
                    user: FBUser,
                    displayName: FBUser.displayName,
                    userID: FBUser.uid
                })
                const hospitalsRef = firebase
                    .database()
                    .ref('hospitals/' + FBUser.uid);

                hospitalsRef.on('value', snapshot => {
                    let hospitals = snapshot.val();
                    let hospitalsList = [];

                    for (let item in hospitals) {
                        hospitalsList.push({
                            hospitalID: item,
                            hospitalName: hospitals[item].hospitalName
                        });
                    }
                    this.setState({
                        hospitals: hospitalsList,
                        howManyhospitals: hospitalsList.length
                    })
                })


            } else {
                this.setState({user: null})
            }

        })
       
        
    }

    registerUser = userName => {
        
        firebase.auth().onAuthStateChanged(FBUser => {
            FBUser.updateProfile({
                displayName: userName
            }).then(() => {
                this.setState({
                    user: FBUser,
                    displayName: FBUser.displayName,
                    userID: FBUser.uid
                });
                navigate('/')
                
            })
            
        })
    }

    logOutUser = e => {
        e.preventDefault()
        this.setState({
            user: null,
            displayName: null,
            userID: null
        });
        firebase.auth().signOut().then(()=> {
            navigate("/login");

        })
    }

    addHospital = hospitalName => {
        const ref = firebase
            .database()
            .ref(`hospitals/${this.state.user.uid}`);
             ref.push({hospitalName: hospitalName})
    }
    


    render() {


        return (

            <div>
                <Header user={this.state.displayName}
                        logOutUser= {this.logOutUser}
                />
                <Router>
                    <Home path="/" user={this.state.displayName} logOutUser= {this.logOutUser}  />
                    <Partograph path="partograph" />
                    <User path="user" />
                    <Register path="register" registerUser={this.registerUser} />
                    <Login path="login" />
                    <Hospitals path="hospitals" addHospital={this.addHospital}
                                                hospitals={this.state.hospitals}
                                                userID={this.state.userID} />
                    <Patients path="patients/:userID/:hospitalID" adminUser={this.state.userID} />

                    <JoinClinic path="joinclinic/:userID/:hospitalID"  />
                    
                </Router>


            </div>

        )
    }
}



export default App;









