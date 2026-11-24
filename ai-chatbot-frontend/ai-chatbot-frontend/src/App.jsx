
import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim() || loading) return;

    const newMessage = {
      role: "user",
      content: message
    };

    const conversationHistory = [
      ...messages,
      newMessage
    ];

    setMessages(conversationHistory);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: conversationHistory
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "API request failed");
      }

      const aiMessage = {
        role: "assistant",
        content: data.reply
      };

      setMessages((prevMessages) => [
        ...prevMessages,
        aiMessage
      ]);

    } catch (error) {
      console.error("Chat error:", error);
      alert(error.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="chat-container">

        <header className="chat-header">
          <h2>AI Chatbot</h2>
          <p>Powered by Qwen 2.5</p>
        </header>

        <div className="chat-body">

          {messages.length === 0 ? (
            <div className="welcome">
              <h2>Welcome</h2>
              <p>Ask me anything.</p>
            </div>
          ) : (
            messages.map((item, index) => (
              <div
                key={index}
                className={`message ${item.role}`}
              >
                {item.content}
              </div>
            ))
          )}

          {loading && (
            <div className="message assistant">
              AI is typing...
            </div>
          )}

        </div>

        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading || !message.trim()}
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </form>

      </div>
    </div>
  );
}

export default App;
