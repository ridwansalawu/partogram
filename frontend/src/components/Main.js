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
import {calculateBishop, fetchParturients, fetchBishops} from "../redux/ActionCreators";
import {actions} from "react-redux-form"

const mapStateToProps = state => {
  return {
    parturients: state.parturients,
    initial_graph: state.initial_graph,
    alert_line: state.alert_line,
    action_line: state.action_line,
    bishops: state.bishops


  }
    
}

const mapDispatchToProps = (dispatch) => ({
  calculateBishop: (parturientId, dilatation, effacement, position, station, descent) => 
        dispatch(calculateBishop(parturientId, dilatation, effacement, position, station, descent)),
  fetchParturients: () => {dispatch(fetchParturients())},
  resetFeedbackForm: () => {dispatch(actions.reset("feedback"))},
  fetchBishops: () => {dispatch(fetchBishops())},
  

})




class Main extends Component {
  constructor(props) {
    super(props)

    console.log("useless constructor?")

  };
  

componentDidMount = () => {
  this.props.fetchParturients();
  this.props.fetchBishops();
};



  render() {

    const ParturientWithHospId = ({match}) => {
      return(
        <ParturientDetail parturient= {this.props.parturients.parturients.filter((parturient) => parturient.hospId === parseInt(match.params.parturientId, 10))[0]}
        isLoading={this.props.parturients.isLoading}
        errMsg={this.props.parturients.errMsg}
        calculateBishop={this.props.calculateBishop}
        
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
            <Route exact path="/labourward" component={() => <LabourWard resetFeebackForm={this.props.resetFeedbackForm} 
                                                             bishop={this.props.bishops}
                                                             addBishop= {this.props.addBishops}
                                                             bishopErrorMsg={this.props.bishops.errMsg}
                                                             
                                                             calculateBishop={this.props.calculateBishop}/>}/>
                                
            <Route exact path="/patient" component={Patient}/>

            <Redirect to="/home"/>

        </Switch>

        <Footer />
        
        
      </div>
    )
  }
}


export default withRouter((connect(mapStateToProps, mapDispatchToProps)(Main)));
