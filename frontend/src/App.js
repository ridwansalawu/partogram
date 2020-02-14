import React, { Component } from 'react'
import './App.css';
import Main from "./components/Main";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigStore } from "./redux/configStore";
const createHistory = require("history").createBrowserHistory;

const history = createHistory()
const store = ConfigStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter histoy={history}>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App;
