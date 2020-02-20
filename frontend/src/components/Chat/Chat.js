import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import './Chat.css';

let socket;


export default function Chat(props) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "https://partogram.herokuapp.com/";

    useEffect(() => {
        const {name, room} = props;
        socket= io(ENDPOINT)

        setRoom(room);
        setName(name);

        socket.emit("join", {name, room}, (error) => {
            if (error) {
                alert(error)
            }
        })
     }, [ENDPOINT, props])

     useEffect(() => {
        socket.on('message', (message) => {
          setMessages([...messages, message ]);
        });
    
        socket.on('roomData', ({ users }) => {
          setUsers(users);
        })
    
        return () => {
          socket.emit('disconnect');
    
          socket.off();
        }
      }, [messages])

      const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }

    return (
        <div className="">
      <div className="">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
    )
}
