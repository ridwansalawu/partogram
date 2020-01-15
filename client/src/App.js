import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Home from './components/Home'
import Partograph from './components/Partograph';
import User from './components/User';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Bishop from './components/Bishop';
import firebase from './components/Firebase'
import Register from './components/Register'
import { navigate } from '@reach/router';
import Login from "./components/Login"




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
    


    render() {


        return (
             <BrowserRouter>
        <main>
            <Header user={this.state.displayName}
                    logOutUser= {this.logOutUser}
            />
            
            <Bishop />
            <Switch>
                <Redirect from="/home" to="/" />
                <Route exact path='/' render={() => <Home user={this.state.displayName}
                                                          logOutUser= {this.logOutUser}                    
                                                     />}
                />
                <Route path='/partograph' component = {Partograph}/>
                <Route path="/user" component={User} />
                <Route path="/register"  render={(props) => <Register  {...props} registerUser={this.registerUser}/>}/>

                <Route path="/login"  component={Login} />
                <Route component={NotFound} />
            </Switch>

        </main>
    </BrowserRouter>
        )
    }
}



export default App;









