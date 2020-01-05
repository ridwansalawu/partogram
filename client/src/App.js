import React from 'react';
import './App.css';
import Axios from "axios"



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

                <h1>{ this.state.hello }</h1>


                
            </div>
        )
    }
}



















export default App;
