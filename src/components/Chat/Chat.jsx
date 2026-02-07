import { useState, useEffect, useRef } from "react";
import Message from "./Massage";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = (from = "me") => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        from
      }
    ]);

    setText("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Ок",
          from: "friend"
        }
      ]);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat">
      <div className="chat-window">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-components">
        <input
          className="chat-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />

        <button className="chat-button" onClick={() => sendMessage()}>Send</button>
      </div>
    </div>
  );
}

export default Chat