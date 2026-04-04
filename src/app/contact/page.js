"use client";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("");

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
            <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1F3B57" }}>
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
                        border: "1px solid #CCC"
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
                        border: "1px solid #CCC"
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
                        border: "1px solid #CCC"
                    }}
                />

                <button
                    type="submit"
                    className="button"
                    style={{ width: "fit-content" }}
                >
                    Send Message
                </button>

                {status && (
                    <p style={{ marginTop: "10px", color: "#1F3B57" }}>
                        {status}
                    </p>
                )}
            </form>
        </section>
    );
}