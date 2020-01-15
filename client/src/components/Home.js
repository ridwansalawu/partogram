import React from 'react';
// import './App.css';
import Axios from "axios"
import Partograph from './Partograph';
import User from './User';
import Biodata from './Biodata'
import Welcome from './Welcome';
import Login from './Login';


class App extends React.Component {

    constructor(props) {
      super(props)
    
    };


    render() {
        // const {logOutUser} = this.props;
        return (
            <div>
                {this.props.user && <Welcome user= {this.props.user}
                                            logOutUser= {this.props.logOutUser}
                                     /> }
                
               <h1>Welcome home</h1>
               <Login />
            </div>
        )
    }
}



















export default App;
