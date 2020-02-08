import React, { Component } from "react";
import SignupNewParturient from "../forms/SignupNewParturient";
import Axios from "axios";
import { baseUrl } from "../testData/baseUrl";

class NewParturient extends Component {
  componentDidMount() {
    console.log(this.props.location.state.id);
    // Axios.get(baseUrl + `parturients/${this.props.parturient._id}`)
    //     .then(response => {
    //         console.log(response)
    //     })
  }

  render() {
    return (
      <div>
        <SignupNewParturient />
      </div>
    );
  }
}

export default NewParturient;
