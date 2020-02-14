import React, { Component } from 'react';
import io from "socket.io-client";
// import { baseUrl } from "../testData/baseUrl";
import "./Chat.css"
import Messages from './Messages/Messages';
import {withRouter} from "react-router-dom";
let socket;

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

      this.ENDPOINT = process.env.PORT;
      socket = io()
      this.name = this.props.name;
      this.room = this.props.room;
      this.setState({name: this.name, room: this.room})
    };

    componentDidMount = () => {

      setTimeout(()=>{
        this.intro()
        this.later()
      }
      ,0)      
    };

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
intro =()=> {
  let name = this.name;
  let room = this.room;
  socket.emit("chat message", "this is the first message")
  console.log(socket.id)
  socket.emit("join", {name, room}, (error) => {
      console.log("socket connected")
      if (error) {
          alert(error);
      }
  })
        
}

later =() => {
  socket.on("message", (message) => {
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }))

    socket.on('roomData', ({ users }) => {
      this.setState({users})
    })

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  })
}
    sendMessage = (event) => {
      event.preventDefault();
      const socket = io()
      
  
      if(this.state.message) {
          console.log(this.state.message)
        socket.emit('sendMessage', this.state.message, () => this.setState({message: ""}));
      }
      console.log(this.state.users)
    }
    // Message = ( this.state.message: (text, user), this.state.name) => {
    //   let isSentByCurrentUser = false;
    //   const trimmedName = name.trim(toLowerCase());
      
    //   if(this.state.user === trimmedName) {
    //     isSentByCurrentUser = true;
    //   }
    // }
handleChange = (e) => {
  this.setState({message: e.target.value})
}

handleSubmit =(e) => {
  this.sendMessage(e)
}
    render() {

      // const Messages = () => {
      //   this.state.messages.map((message, i) => {
      //     <div key={i}>


      //     </div>
      //   })
      // }





        return (
            <div className="content">

              <input 
              type="text"
              placeholder="what do you have in mind....?"
              value={this.state.message}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              
              />
              <button onClick={this.handleSubmit}> Send</button>

              <h1>{this.state.room}</h1>
                <Messages messages={this.state.messages}
                            name={this.state.name}/>
              <div>
                <a href="/">Leave</a>
              </div>
                
          </div>
        )
    }
}

export default withRouter(Chat);
