import React, { FormEvent} from 'react';
import { Container } from "./styles"
import { useChat } from '../../../hooks/useChat';
import { useNavigate } from "react-router-dom";

export function Form() {
  const navigate = useNavigate();
  const { createChat } = useChat()
  const handleSubmitForm = (event:FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const userName = target.userName.value
    const roomType = target.roomType.value
    createChat({userName,roomType})
    navigate("/chat");
  }
  return (
        <Container onSubmit={handleSubmitForm}>
          <label htmlFor="roomType">Selecione o tipo da sala</label>
          <select id="roomType" defaultValue="whatsapp">
            <option value="whatsapp">WhatsApp</option>
            <option value="instagram">Instagram</option>
            <option value="discord">Discord</option>
          </select>
          <label htmlFor="userName">Digite seu nome</label>
          <input id="userName" type="text"/>
          <input type="submit" value="Entrar"/>
        </Container>
  );
}
