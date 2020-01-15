import React from 'react';
// import './App.css';
import Axios from "axios"
import Partograph from './Partograph';
import User from './User';
import Biodata from './Biodata'
import Welcome from './Welcome';


class App extends React.Component {

    constructor(props) {
      super(props)
    
    //   this.state = {
    //      user: "ridwan"
    //   };
    };


    render() {
        return (
            <div>
                {this.props.user && <Welcome user= {this.props.user}/> }
                
               <h1>Welcome home</h1>
            </div>
        )
    }
}



















export default App;
