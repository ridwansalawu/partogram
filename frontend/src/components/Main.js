import React, { Component } from "react";
import Home from "./Home";
import Parturients from "./Parturients";
import ParturientDetail from "./ParturientDetail";
import Header from "./Header";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LabourWard from "./LabourWard";
import AboutPartograph from "./AboutPartograph"

import {
  fetchParturients,
  postUser,
  loginUser,
  logoutUser,
  signupUser,
  drawInitialPartograph,
  setRefer
} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Partograph from "./Partograph";
import SignupNewParturient from "../forms/SignupNewParturient";
import Signup from "../forms/Signup";
import NewParturient from "./NewParturient";
import Chat from "./Chat/Chat";

export const createHistory = require("history").createBrowserHistory;

const history = createHistory();

const mapStateToProps = state => {
  return {
    parturients: state.parturients,
    initial_graph: state.initial_graph,
    alert_line: state.alert_line,
    action_line: state.action_line,
    auth: state.auth,
    details: state.details,
    drawTemplate: state.drawTemplate
  };
};

const mapDispatchToProps = dispatch => ({

  fetchParturients: () => {
    dispatch(fetchParturients());
  },

  postUser: signUp => {
    dispatch(postUser(signUp));
  },
  loginUser: credentials => dispatch(loginUser(credentials)),
  logoutUser: () => dispatch(logoutUser()),
  signupUser: (username, password) => {
    dispatch(signupUser(username, password));
  },
  setRefer: refer => dispatch(setRefer(refer)),

  drawInitialPartograph: () => {
    dispatch(drawInitialPartograph);
  }
});

class Main extends Component {
  componentDidMount = () => {
    this.props.fetchParturients();

    console.log(this.props.auth);
  };

  render() {
    const ParturientWithHospId = ({ match }) => {
      return (
        <div>
          <ParturientDetail
            parturient={
              this.props.parturients.parturients.filter(
                parturient => parturient.medId === match.params.parturientId
              )[0]
            }
            isLoading={this.props.parturients.isLoading}
            errMsg={this.props.parturients.errMsg}
            auth={this.props.auth}
          />
        </div>
      );
    };

    return (
      <div>
        <Header
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
        />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={3000}
          >
            <Switch history={history}>
              <Route path="/home" component={Home} history={history} />
              <Route
                exact
                path="/parturients"
                component={() => (
                  <Parturients
                    parturients={this.props.parturients}
                    history={history}
                    auth={this.props.auth}
                  />
                )}
              />
              <Route
                exact
                path="/parturients/:parturientId"
                component={ParturientWithHospId}
                history={history}
              />
              <Route
                exact
                path="/parturients/:parturientId/newParturient"
                component={NewParturient}
              />
              <Route
                history={history}
                exact
                path="/labourward"
                component={() => (
                  <LabourWard
                    resetFeebackForm={this.props.resetFeedbackForm}
                    bishop={this.props.bishops}
                    addBishop={this.props.addBishops}
                    postUser={this.props.postUser}
                    details={this.props.details}
                    calculateBishop={this.props.calculateBishop}
                  />
                )}
              />
              <Route path="/partograph" component={Partograph} />

              <Route
                path="/signupnewparturient"
                component={()=> (
                               <SignupNewParturient 
                               auth={this.props.auth}

                                  
                />)}
              />
              <Route path="/newpaturient" component={NewParturient} />
              <Route
                path="/chat"
                component={() => <Chat auth={this.props.auth} />}
              />
              <Route path="/aboutpartograph" component={ () => (<AboutPartograph  auth={this.props.auth}/>)} />

              <Route
                path="/signup"
                component={() => (
                  <Signup
                    signupUser={this.props.signupUser}
                    setRefer={this.props.setRefer}
                    auth={this.props.auth}
                  />
                )}
              />

              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
