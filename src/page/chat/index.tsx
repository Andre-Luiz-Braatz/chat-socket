import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { useChat } from "../../hooks/useChat";
import { useNavigate } from "react-router-dom";
import { ChatContainer,ChatMessage,Message } from "./styles"

interface MessageProps {
  from: string;
  text: string;
}

export function Chat() {
  const navigate = useNavigate();
  const { chat } = useChat();
  const [messages,setMessages] = 
    useState<MessageProps[]>([{from: "André",text: "Olá"}])
  const logoutUser = () => navigate("/")

  useEffect(()=>{
    if(!chat || !chat.roomType || !chat.userName) logoutUser()
  },[chat])

  return ( 
    <>
      <Header title={chat.roomType}/>
      <ChatContainer>
        <div id="container">
          <ChatMessage>
            {messages.map(message => 
              <Message>
                <strong>{message.from}:</strong><p>{message.text}</p>
              </Message>
            )}
          </ChatMessage>
          <input type="text" placeholder='Digite sua mensagem'/>
          <input type="button" value="Sair" onClick={logoutUser}/>
        </div>
      </ChatContainer>
    </>
  );
}
