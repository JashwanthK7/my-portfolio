"use client";
import { useEffect, useState } from "react";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [typedName, setTypedName] = useState("");
    const fullName = "Jashwanth.";

    useEffect(() => {
        setIsVisible(true);

        let i = 0;
        const typingInterval = setInterval(() => {
            if (i <= fullName.length) {
                setTypedName(fullName.slice(0, i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 120);

        return () => clearInterval(typingInterval);
    }, []);

    const techStack = [
        "Python", "PyTorch", "Hugging Face", "LangChain", "OpenAI",
        "FAISS", "Scikit-learn", "SQL", "Streamlit", "Ollama", "NLP"
    ];

    // Duplicate array to create a seamless infinite loop
    const scrollItems = [...techStack, ...techStack, ...techStack];

    return (
        <div style={{ overflowX: "hidden" }}>
            <style>
                {`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .cursor {
                    animation: blink 1s step-end infinite;
                    color: #3A6EA5;
                    font-weight: 300;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                `}
            </style>

            <section style={{
                minHeight: "75vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "48px",
                position: "relative",
                paddingTop: "40px"
            }}>

                <div style={{
                    position: "absolute",
                    top: "-10%",
                    right: "-5%",
                    width: "500px",
                    height: "500px",
                    background: "radial-gradient(circle, rgba(58,110,165,0.08) 0%, rgba(255,255,255,0) 70%)",
                    borderRadius: "50%",
                    filter: "blur(40px)",
                    zIndex: -1
                }} />

                {/* Left Column: Text */}
                <div style={{ flex: "1 1 500px" }}>
                    <h1 style={{
                        fontSize: "56px",
                        fontWeight: "800",
                        color: "#1F3B57",
                        letterSpacing: "-1px",
                        lineHeight: "1.1",
                        margin: 0
                    }}>
                        Hi, I am <span style={{ color: "#3A6EA5" }}>{typedName}</span><span className="cursor">|</span>
                    </h1>

                    <div style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s"
                    }}>
                        <h2 style={{
                            marginTop: "24px",
                            fontSize: "28px",
                            fontWeight: "600",
                            color: "#475569",
                            maxWidth: "800px",
                            lineHeight: "1.4"
                        }}>
                            Algorithms are the engine, but clean data is the fuel.<br />
                            <span style={{ color: "#3A6EA5" }}>I build the engine and refine the fuel.</span>
                        </h2>

                        <p style={{
                            marginTop: "24px",
                            fontSize: "20px",
                            color: "#64748b",
                            maxWidth: "600px",
                            lineHeight: "1.6"
                        }}>
                            I am an AI Engineer and Data Scientist focusing on end-to-end Machine Learning solutions, Generative AI pipelines, and data-driven systems.
                        </p>

                        <div style={{ marginTop: "48px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                            <a href="/projects" style={{
                                padding: "16px 32px",
                                background: "#1F3B57",
                                color: "white",
                                borderRadius: "8px",
                                fontWeight: "600",
                                textDecoration: "none",
                                boxShadow: "0 4px 14px 0 rgba(31,59,87,0.39)",
                                transition: "all 0.2s ease"
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                                onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                                View Projects
                            </a>
                            <a href="/about" style={{
                                padding: "16px 32px",
                                background: "white",
                                color: "#1F3B57",
                                border: "2px solid #E2E8F0",
                                borderRadius: "8px",
                                fontWeight: "600",
                                textDecoration: "none",
                                transition: "all 0.2s ease"
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = "#1F3B57";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = "#E2E8F0";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                About Me
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div style={{
                    flex: "1 1 400px",
                    display: "flex",
                    justifyContent: "center",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s"
                }}>
                    <div style={{ position: "relative" }}>
                        <div style={{
                            position: "absolute",
                            top: "20px",
                            left: "-20px",
                            width: "100%",
                            height: "100%",
                            border: "3px solid #EBF4FF",
                            borderRadius: "24px",
                            zIndex: -1
                        }} />
                        <img
                            src="/images/hero-image.jpeg"
                            alt="Jashwanth Kandula"
                            style={{
                                width: "100%",
                                maxWidth: "420px",
                                borderRadius: "24px",
                                boxShadow: "0 25px 50px -12px rgba(31, 59, 87, 0.25)",
                                objectFit: "cover",
                                aspectRatio: "4/5"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Marquee Section */}
            <div style={{
                marginTop: "60px",
                padding: "40px 0",
                borderTop: "1px solid #E2E8F0",
                borderBottom: "1px solid #E2E8F0",
                background: "rgba(248, 250, 252, 0.5)",
                width: "100vw",
                position: "relative",
                left: "50%",
                right: "50%",
                marginLeft: "-50vw",
                marginRight: "-50vw"
            }}>
                <div style={{
                    display: "flex",
                    whiteSpace: "nowrap",
                    animation: "marquee 40s linear infinite",
                    width: "fit-content"
                }}>
                    {scrollItems.map((tech, index) => (
                        <div key={index} style={{
                            display: "inline-flex",
                            alignItems: "center",
                            margin: "0 40px",
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#94A3B8"
                        }}>
                            {tech}
                            <span style={{
                                display: "inline-block",
                                width: "8px",
                                height: "8px",
                                background: "#CBD5E1",
                                borderRadius: "50%",
                                marginLeft: "80px"
                            }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}