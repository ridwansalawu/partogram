import React, { Component } from 'react';
import io from "socket.io-client";
import { baseUrl } from "../testData/baseUrl";









class Chat extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         room: "",
         users: "",
         message: "",
         messages: []
      };

      this.ENDPOINT = baseUrl;
    };

    componentDidMount = () => {

      
      const name = this.props.name;
      const room = this.props.room;

      

      this.setState({name: name, room: room})
      const socket = io()

      console.log(this.props)

      socket.emit("chat message", "this is the fucking message")
      

    //   socket.emit("join", {name, room}, (error) => {
    //       console.log("socket connected")
    //       if (error) {
    //           alert(error);
    //       }
    //   })

    


    };
    
    




    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Chat;
