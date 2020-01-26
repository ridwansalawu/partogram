import React, { Component } from 'react'
import Home from "./Home"
import Parturients from './Parturients';
import { PARTURIENTS } from "../testData/parturients";
import ParturientDetail from "./ParturientDetail";
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';




class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      parturients: PARTURIENTS,
      selectedParturient: null
    };
  };

  onParturientSelect = (parturientId) => {
    this.setState({ selectedParturient: parturientId})

}

componentDidMount () {
    console.log("mount"+this.state.selectedParturient)
    console.log("mount"+this.state.parturients.length)
}

componentWillUnmount() {
    console.log("unmount"+ this.state.selectedParturient)
}




  
  render() {
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/parturients" component={() => <Parturients parturient={this.state.parturients} />} />
            <Redirect to="/home"/>

        </Switch>

        <Footer />
        
        
      </div>
    )
  }
}


export default Main;
