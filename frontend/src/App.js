import React, { Component } from 'react'
import './App.css';
import Main from "./components/Main";
import {Router} from "react-router";
import { Provider } from "react-redux";
import { ConfigStore } from "./redux/configStore";
import createHistory from 'history/createBrowserHistory';


const history = createHistory()


const store = ConfigStore();





class App extends Component {
  
 
  
  render() {
    return (
      <Provider store={store} >
      
        <Router history={history} forceRefresh={true} >
          <div>
            <Main />
          </div>
        </Router>
      </Provider>
    )
  }
}


export default App;
