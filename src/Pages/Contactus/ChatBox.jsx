

// src/components/ChatBox.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:5000"); // Update with your server URL

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on unmount
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
      socket.emit('message', input);
      setInput('');
    }
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.message}>{msg}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </div>
  );
};

// Simple styling
const styles = {
  chatContainer: {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    width: '300px',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  messages: {
    maxHeight: '200px',
    overflowY: 'auto',
    marginBottom: '10px',
  },
  message: {
    padding: '5px',
    borderBottom: '1px solid #eee',
  },
  form: {
    display: 'flex',
  },
  input: {
    flex: 1,
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  button: {
    padding: '5px 10px',
    marginLeft: '5px',
    border: 'none',
    borderRadius: '3px',
    backgroundColor: '#007BFF',
    color: '#fff',
  },
};

export default ChatBox;
