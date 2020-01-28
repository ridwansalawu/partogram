import React, { Component } from 'react'
import Home from "./Home"
import Parturients from './Parturients';
import Patient from "./Patient";
import ParturientDetail from "./ParturientDetail";
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import LabourWard from './LabourWard';

const mapStateToProps = state => {
  return {
    parturients: state.parturients,
    initial_graph: state.initial_graph,
    alert_line: state.alert_line,
    action_line: state.action_line


  }
    
}




class Main extends Component {

componentDidMount = () => {
  console.log(this.props.parturients)
};



  render() {

    const ParturientWithHospId = ({match}) => {
      return(
        <ParturientDetail parturient= {this.props.parturients.filter((parturient) => parturient.hospId === parseInt(match.params.parturientId, 10))[0]}
        />
      )

    }

    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/parturients" component={() => <Parturients parturients={this.props.parturients} />} />
            <Route path="/parturients/:parturientId" component={ParturientWithHospId}/>
            <Route exact path="/labourward" component={LabourWard}/>
            <Route exact path="/patient" component={Patient}/>

            <Redirect to="/home"/>

        </Switch>

        <Footer />
        
        
      </div>
    )
  }
}


export default withRouter((connect(mapStateToProps)(Main)));
