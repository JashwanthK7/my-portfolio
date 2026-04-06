"use client";
import { useState } from "react";

export default function ResumeChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([{ role: "assistant", content: "Hi! Ask me anything about Jashwanth's background." }]);

    const handleSend = () => {
        if (!input.trim()) return;
        const newMsg = { role: "user", content: input };
        setMessages([...messages, newMsg]);
        setInput("");
        setTimeout(() => {
            setMessages(prev => [...prev, { role: "assistant", content: "That's a great question about Jashwanth! I'm currently a demo, but soon I'll be connected to his real project data." }]);
        }, 1000);
    };

    return (
        <div style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 1000 }}>
            {!isOpen ? (
                <button onClick={() => setIsOpen(true)} style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#1F3B57", color: "white", cursor: "pointer", fontSize: "24px", border: "none" }}>💬</button>
            ) : (
                <div style={{ width: "350px", height: "450px", background: "var(--card-bg)", border: "1px solid var(--border-color)", borderRadius: "16px", display: "flex", flexDirection: "column", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                    <div style={{ padding: "15px", background: "#1F3B57", color: "white", borderRadius: "16px 16px 0 0", display: "flex", justifyContent: "space-between" }}>
                        <strong>Resume AI</strong>
                        <button onClick={() => setIsOpen(false)} style={{ background: "none", color: "white", border: "none", cursor: "pointer" }}>✕</button>
                    </div>
                    <div style={{ flex: 1, padding: "15px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
                        {messages.map((m, i) => <div key={i} style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start", background: m.role === "user" ? "var(--accent-blue)" : "var(--border-color)", color: m.role === "user" ? "white" : "var(--text-primary)", padding: "10px", borderRadius: "10px", fontSize: "14px" }}>{m.content}</div>)}
                    </div>
                    <div style={{ padding: "15px", borderTop: "1px solid var(--border-color)", display: "flex", gap: "10px" }}>
                        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask a question..." style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid var(--border-color)", background: "var(--bg-color)", color: "var(--text-primary)" }} />
                        <button onClick={handleSend} style={{ background: "#1F3B57", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}