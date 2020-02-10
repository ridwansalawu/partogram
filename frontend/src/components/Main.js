import React, { Component } from "react";
import Home from "./Home";
import Parturients from "./Parturients";
import Patient from "./Patient";
import ParturientDetail from "./ParturientDetail";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LabourWard from "./LabourWard";
import {
  calculateBishop,
  fetchParturients,
  fetchBishops,
  postUser,
  loginUser,
  logoutUser,
  signupUser,
  drawInitialPartograph,
  addBishops
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Partograph from "./Partograph";
import SignupNewParturient from "../forms/SignupNewParturient";
import Signup from "../forms/Signup";
import NewParturient from "./NewParturient";
import Join from "./Join";
import Chat from "./Chat";


const mapStateToProps = state => {
  return {
    parturients: state.parturients,
    initial_graph: state.initial_graph,
    alert_line: state.alert_line,
    action_line: state.action_line,
    bishops: state.bishops,
    auth: state.auth,
    details: state.details,
    drawTemplate: state.drawTemplate
  };
};

const mapDispatchToProps = dispatch => ({
  calculateBishop: (
    parturientId,
    dilatation,
    effacement,
    position,
    station,
    descent
  ) =>
    dispatch(
      calculateBishop(
        parturientId,
        dilatation,
        effacement,
        position,
        station,
        descent
      )
    ),
  fetchParturients: () => {
    dispatch(fetchParturients());
  },
  resetSignupForm: () => {
    dispatch(actions.reset("signUp"));
  },
  fetchBishops: () => {
    dispatch(fetchBishops());
  },
  postUser: signUp => {
    dispatch(postUser(signUp));
  },
  loginUser: credentials => dispatch(loginUser(credentials)),
  logoutUser: () => dispatch(logoutUser()),
  signupUser: (username, password) => {
    dispatch(signupUser(username, password));
  },
  drawInitialPartograph: () => {
    dispatch(drawInitialPartograph);
  },
  addBishops: bishopData => {
    dispatch(addBishops(bishopData));
  }
});

class Main extends Component {
  componentDidMount = () => {
    this.props.fetchParturients();
    this.props.fetchBishops();
    console.log(this.props.auth.user);
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
            <Switch>
              <Route path="/home" component={Home} />
              <Route
                exact
                path="/parturients"
                component={() => (
                  <Parturients parturients={this.props.parturients} />
                )}
              />
              <Route
                exact
                path="/parturients/:parturientId"
                component={ParturientWithHospId}
              />
              <Route
                exact
                path="/parturients/:parturientId/newParturient"
                component={NewParturient}
              />
              <Route
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
                component={SignupNewParturient}
              />
              <Route path="/newpaturient" component={NewParturient} />
              <Route path="/join" component={Join} />
              <Route
                path="/chat"
                component={() => <Chat user={this.props.auth.user.username} />}
              />
              <Route exact path="/patient" component={Patient} />

              <Route
                path="/signup"
                component={() => <Signup signupUser={this.props.signupUser} />}
              />

              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
