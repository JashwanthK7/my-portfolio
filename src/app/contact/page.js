"use client";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("Sending...");

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (data.success) {
            setStatus("Message sent successfully");
            e.target.reset();
        } else {
            setStatus("Something went wrong");
        }
    }

    return (
        <section>
            <h2 style={{ fontSize: "32px", fontWeight: "700", color: "var(--text-primary)" }}>
                Contact
            </h2>

            <form
                onSubmit={handleSubmit}
                style={{
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    maxWidth: "500px"
                }}
            >
                <input
                    name="name"
                    placeholder="Your Name"
                    required
                    style={{
                        padding: "14px",
                        borderRadius: "8px",
                        border: "1px solid var(--border-color)",
                        background: "var(--card-bg)",
                        color: "var(--text-primary)",
                        fontSize: "16px",
                        outline: "none"
                    }}
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    style={{
                        padding: "14px",
                        borderRadius: "8px",
                        border: "1px solid var(--border-color)",
                        background: "var(--card-bg)",
                        color: "var(--text-primary)",
                        fontSize: "16px",
                        outline: "none"
                    }}
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    style={{
                        padding: "14px",
                        borderRadius: "8px",
                        border: "1px solid var(--border-color)",
                        background: "var(--card-bg)",
                        color: "var(--text-primary)",
                        fontSize: "16px",
                        outline: "none",
                        resize: "vertical"
                    }}
                />

                <button
                    type="submit"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        width: "fit-content",
                        padding: "16px 32px",
                        background: "var(--accent-blue)",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "16px",
                        cursor: "pointer",
                        boxShadow: "0 4px 14px 0 rgba(58,110,165,0.3)",
                        transition: "all 0.2s ease",
                        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                        boxShadow: isHovered
                            ? "0 6px 20px 0 rgba(58,110,165,0.4)"
                            : "0 4px 14px 0 rgba(58,110,165,0.3)"
                    }}
                >
                    Send Message
                </button>

                {status && (
                    <p style={{
                        marginTop: "10px",
                        color: status === "Message sent successfully"
                            ? "var(--accent-blue)"
                            : "var(--text-secondary)"
                    }}>
                        {status}
                    </p>
                )}
            </form>
        </section>
    );
}