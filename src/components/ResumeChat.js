"use client";
import { useState, useRef, useEffect } from "react";

export default function ResumeChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([{ role: "assistant", content: "Hi! Ask me anything about Jashwanth's background." }]);
    const [isLoading, setIsLoading] = useState(false);

    // Create a reference to the bottom of the chat
    const messagesEndRef = useRef(null);

    // Auto-scroll function
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Trigger auto-scroll whenever messages or loading state changes
    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading, isOpen]); // Also scroll when the chat is opened

    const handleSend = async () => {
        if (!input.trim()) return;

        const newMsg = { role: "user", content: input };
        setMessages((prev) => [...prev, newMsg]);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input })
            });
            const data = await res.json();
            setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
        } catch (error) {
            setMessages((prev) => [...prev, { role: "assistant", content: "Failed to connect to the server." }]);
        }
        setIsLoading(false);
    };

    return (
        <div style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 1000 }}>
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        width: "60px", height: "60px", borderRadius: "50%", background: "var(--accent-blue)",
                        color: "white", cursor: "pointer", fontSize: "24px", border: "none",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)", transition: "transform 0.2s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                    💬
                </button>
            ) : (
                <div style={{
                    width: "350px", height: "450px", background: "var(--card-bg)", border: "1px solid var(--border-color)",
                    borderRadius: "16px", display: "flex", flexDirection: "column", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                    overflow: "hidden"
                }}>
                    <div style={{ padding: "15px", background: "var(--accent-blue)", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <strong style={{ fontSize: "16px", letterSpacing: "0.5px" }}>Resume AI</strong>
                        <button onClick={() => setIsOpen(false)} style={{ background: "none", color: "white", border: "none", cursor: "pointer", fontSize: "18px" }}>✕</button>
                    </div>

                    <div style={{ flex: 1, padding: "15px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                        {messages.map((m, i) => (
                            <div key={i} style={{
                                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                                background: m.role === "user" ? "var(--accent-blue)" : "var(--bg-color)",
                                color: m.role === "user" ? "white" : "var(--text-primary)",
                                border: m.role === "user" ? "none" : "1px solid var(--border-color)",
                                padding: "10px 14px", borderRadius: "12px", fontSize: "14px",
                                maxWidth: "85%", lineHeight: "1.5"
                            }}>
                                {m.content}
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{
                                alignSelf: "flex-start", background: "var(--bg-color)", border: "1px solid var(--border-color)",
                                color: "var(--text-secondary)", padding: "10px 14px", borderRadius: "12px", fontSize: "14px"
                            }}>
                                Thinking...
                            </div>
                        )}
                        {/* This invisible div acts as the anchor point for the auto-scroll */}
                        <div ref={messagesEndRef} />
                    </div>

                    <div style={{ padding: "15px", borderTop: "1px solid var(--border-color)", background: "var(--card-bg)", display: "flex", gap: "10px" }}>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask a question..."
                            style={{
                                flex: 1, padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--border-color)",
                                background: "var(--bg-color)", color: "var(--text-primary)", fontSize: "14px", outline: "none"
                            }}
                        />
                        <button
                            onClick={handleSend}
                            style={{
                                background: "var(--text-primary)", color: "var(--bg-color)", border: "none",
                                padding: "0 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "600"
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}