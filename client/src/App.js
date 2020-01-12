import React from 'react';
import './App.css';
import Axios from "axios"
import Partograph from './components/Partograph';
import User from './components/User';
import Biodata from './components/Biodata'
import Header from './components/Header';






class App extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hello: null
      };
    };

    componentDidMount() {
  
        Axios('/hello')
            .then(res => this.setState({hello: res.data}))
    }
    







    render() {
        return (
            <div>
                
                <Partograph />
                <User/>   
            </div>
        )
    }
}



















export default App;
