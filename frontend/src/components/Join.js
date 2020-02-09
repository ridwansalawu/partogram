// import React, { Component } from 'react';
// import {Link} from "react-router-dom";
// // import Chat from "Chat";

// import Axios from "axios";
// import Accordion from 'react-bootstrap/Accordion';
// import {Card, Button, Container, Row, Col } from "react-bootstrap";
// import {Label} from "reactstrap";
// import {baseUrl} from "../testData/baseUrl"
// const _ = require("lodash");

// class Join extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name: "",
//          room: ""
//       };
//     };

     
//     handleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value})
//     }

   
    
    




//     render() {
//         return (
        
//                 <Container>
                
//                                             <Label className="control-label">Name</Label>
//                                             <input 
//                                                 type="text"
//                                                 name="name"
//                                                 value={this.state.name}
//                                                 onChange={this.handleChange}                                            
//                                                 className="form-control"
//                                             />
                                          

                                           
//                                             <Label className="control-label">Room</Label>
//                                             <input 
//                                                 type="text"
//                                                 name="room"
//                                                 value={this.state.room}
//                                                 onChange={this.handleChange}                                            
//                                                 className="form-control"
//                                             />
                                          
//                                             <Link 
//                                             onClick={ (e)=> (!this.state.name || !this.state.room) ? e.preventDefault() : null}
//                                             to={
//                                                `/chat?name=${this.state.name}&room=${this.state.room}`
//                                                 }>
//                                              <button className="btn btn-primary btn-lg"
//                                              >
//                                                 Submit
//                                             </button>

                                          

//                                             </Link>


//                 </Container>
                
         
//         )
//     }
// }

// export default Join;


import React, { useState } from 'react';
import { Link } from "react-router-dom";



export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}