import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface Chat {
  userName: string;
  roomType: string;
}

interface ChatContextData {
  chat: Chat;
  createChat: (chat: Chat) => void;
}

const ChatContext = createContext<ChatContextData>(
  {} as ChatContextData
);

interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [chat, setChat] = useState<Chat>({} as Chat);
  function createChat(data: Chat) {
    setChat(data);
  }
  return (
    <ChatContext.Provider value={{ chat, createChat }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);

  return context;
}
