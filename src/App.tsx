import React from 'react';
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { ChatProvider } from "./hooks/useChat";

export function App() {
  return (
    <ChatProvider>
      <GlobalStyle/>
      <Router/>
    </ChatProvider>
  );
}
