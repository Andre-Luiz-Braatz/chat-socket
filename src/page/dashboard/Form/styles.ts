import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  select {
    padding: 0.3rem;
    margin-bottom: 1rem;
  }
  input[type="text"] {
    padding: 0.3rem;
  }
  input[type="submit"] {
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
`