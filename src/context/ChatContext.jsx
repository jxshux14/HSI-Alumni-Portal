import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [activeChat, setActiveChat] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = (employee) => {
    setActiveChat(employee);
    setIsChatOpen(true);
    
    // Add to chat history if not already there
    const existingChat = chatHistory.find(chat => chat.id === employee.id);
    if (!existingChat) {
      setChatHistory(prev => [...prev, { ...employee, messages: [] }]);
    }
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const sendMessage = (message) => {
    if (!activeChat) return;
    
    setChatHistory(prev => 
      prev.map(chat => 
        chat.id === activeChat.id 
          ? { 
              ...chat, 
              messages: [...(chat.messages || []), { 
                text: message, 
                sender: 'me', 
                timestamp: new Date() 
              }]
            }
          : chat
      )
    );
  };

  const switchChat = (employee) => {
    setActiveChat(employee);
  };

  return (
    <ChatContext.Provider
      value={{
        activeChat,
        chatHistory,
        isChatOpen,
        openChat,
        closeChat,
        sendMessage,
        switchChat
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
