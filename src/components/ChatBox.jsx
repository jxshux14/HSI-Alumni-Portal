import React, { useState } from 'react';
import { FiX, FiSend, FiMinus, FiPhone, FiVideo, FiMoreHorizontal, FiEdit3 } from 'react-icons/fi';
import { useChat } from '../context/ChatContext';

export default function ChatBox() {
  const { activeChat, chatHistory, isChatOpen, closeChat, sendMessage, switchChat, openChat, allUsers } = useChat();
  const [message, setMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [showChatList, setShowChatList] = useState(false);
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  if (!isChatOpen) return null;

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const currentChatMessages = chatHistory.find(chat => chat.id === activeChat?.id)?.messages || [];

  const filteredUsers = allUsers?.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.position.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const handleStartChat = (user) => {
    openChat(user);
    setShowNewMessage(false);
    setSearchQuery('');
  };

  return (
    <div className="fixed bottom-0 right-6 flex items-end gap-3 z-50">
      {/* New Message Modal */}
      {showNewMessage && (
        <div className="bg-white rounded-t-xl shadow-2xl w-80 h-[500px] flex flex-col">
          {/* New Message Header */}
          <div className="bg-white border-b px-4 py-3 rounded-t-xl flex-shrink-0">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">New message</h3>
              <button
                onClick={() => {
                  setShowNewMessage(false);
                  setSearchQuery('');
                }}
                className="text-[#dfb307] hover:text-[#c99f06]"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="px-4 py-3 border-b flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">To:</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search users..."
                className="flex-1 bg-transparent text-sm focus:outline-none"
                autoFocus
              />
            </div>
          </div>

          {/* User List */}
          <div className="flex-1 overflow-y-auto min-h-0">
            {filteredUsers.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                No users found
              </div>
            ) : (
              filteredUsers.map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleStartChat(user)}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b"
                >
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-gray-900 truncate">{user.name}</h4>
                    <p className="text-xs text-gray-500 truncate">{user.position}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Chat List Sidebar */}
      {showChatList && (
        <div className="bg-white rounded-t-xl shadow-2xl w-80 h-[500px] flex flex-col">
          {/* Chat List Header */}
          <div className="bg-white border-b px-4 py-3 rounded-t-xl flex-shrink-0">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Chats</h3>
              <button
                onClick={() => setShowChatList(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto min-h-0">
            {chatHistory.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                No conversations yet
              </div>
            ) : (
              chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => {
                    switchChat(chat);
                    setShowChatList(false);
                  }}
                  className={`flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b ${
                    activeChat?.id === chat.id ? 'bg-[#dfb307]/10' : ''
                  }`}
                >
                  <img
                    src={chat.photo}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-gray-900 truncate">{chat.name}</h4>
                    <p className="text-xs text-gray-500 truncate">{chat.position}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* New Message Button */}
          <div className="p-3 border-t flex-shrink-0">
            <button 
              onClick={() => {
                setShowNewMessage(true);
                setShowChatList(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#dfb307] text-white py-2 rounded-lg hover:bg-[#c99f06] transition-colors"
            >
              <FiEdit3 className="w-4 h-4" />
              <span className="text-sm font-medium">New Message</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Chat Window */}
      <div className={`bg-white rounded-t-xl shadow-2xl ${isMinimized ? 'w-80 h-14' : 'w-96 h-[500px]'} flex flex-col transition-all duration-200`}>
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-[#dfb307] to-[#c99f06] text-white px-4 py-3 rounded-t-xl flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <img
              src={activeChat?.photo}
              alt={activeChat?.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm truncate">{activeChat?.name}</h3>
              <p className="text-xs opacity-90 truncate">{activeChat?.position}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <FiMinus className="w-4 h-4" />
            </button>
            <button
              onClick={closeChat}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Body */}
        {!isMinimized && (
          <>
            {/* Messages Area - Fixed height with scroll */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 min-h-0">
              {currentChatMessages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <img
                    src={activeChat?.photo}
                    alt={activeChat?.name}
                    className="w-20 h-20 rounded-full object-cover mb-3"
                  />
                  <p className="text-sm font-medium text-gray-700">{activeChat?.name}</p>
                  <p className="text-xs text-gray-500 mt-1">Start a conversation</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {currentChatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                          msg.sender === 'me'
                            ? 'bg-[#dfb307] text-white'
                            : 'bg-white text-gray-800 border'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="border-t bg-white p-3 rounded-b-xl flex-shrink-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#dfb307]"
                />
                <button
                  onClick={handleSend}
                  className="bg-[#dfb307] text-white p-2 rounded-full hover:bg-[#c99f06] transition-colors"
                >
                  <FiSend className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Chat List Toggle Button */}
      {!showChatList && !showNewMessage && (
        <button
          onClick={() => setShowChatList(true)}
          className="bg-[#dfb307] text-white w-14 h-14 rounded-full shadow-lg hover:bg-[#c99f06] transition-all flex items-center justify-center mb-2"
        >
          <FiMoreHorizontal className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
