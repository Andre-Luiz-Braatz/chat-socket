import styled from "styled-components"

export const ChatContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5rem 3rem;
  background-color: var(--background);
  input[type="text"] {
    padding: 0.8rem;
    border-radius: 0.2rem;
    margin-top: 1rem;
    width: 100%;
  }
  input[type="button"] {
    margin-top: 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
  }
  div[id="container"] {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
  }
`;

export const ChatMessage = styled.div`
  background-color: var(--shape);
  height: 20rem;
  width: 100%;
  display: inline;
  border-radius: 0.2rem;
  padding: 1rem;
  overflow-y: auto;
  p {
    word-break: break-all;
  }
`;

export const Message = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`