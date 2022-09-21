import React from 'react';
import { BrowserRouter as RouterDOM, Route, Routes } from "react-router-dom";
import { Dashboard } from './page/dashboard';
import { Chat } from './page/chat';

export function Router() {
  return (
      <RouterDOM>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </RouterDOM>
    
  );
}
