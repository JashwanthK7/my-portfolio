"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import ResumeChat from "../components/ResumeChat";
import NetworkBackground from "../components/NetworkBackground"; // Import added

export default function RootLayout({ children }) {
    const [dark, setDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const theme = document.documentElement.getAttribute("data-theme");
        if (theme === "dark") {
            setDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = dark ? "light" : "dark";
        setDark(!dark);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <html lang="en">
            <head>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            try {
                                const theme = localStorage.getItem('theme');
                                if (theme === 'dark') {
                                    document.documentElement.setAttribute('data-theme', 'dark');
                                }
                            } catch (e) {}
                        })()
                    `
                }} />
            </head>
            {/* Removed className="network-bg" */}
            <body style={{
                margin: 0,
                padding: 0,
                fontFamily: "system-ui, sans-serif",
                backgroundColor: "var(--bg-color)",
                color: "var(--text-primary)",
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh"
            }}>
                <NetworkBackground /> {/* Background Component Added */}

                <nav style={{
                    position: "sticky", top: 0, zIndex: 1000,
                    background: "var(--nav-bg)", backdropFilter: "blur(12px)",
                    borderBottom: "1px solid var(--border-color)", padding: "16px 5%"
                }}>
                    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Link href="/" style={{ fontSize: "20px", fontWeight: "800", color: "var(--text-primary)", textDecoration: "none", letterSpacing: "-0.5px" }}>
                            JK.
                        </Link>
                        <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                            <Link href="/" style={{ textDecoration: "none", color: "var(--text-secondary)", fontWeight: "600", fontSize: "15px" }}>Home</Link>
                            <Link href="/experience" style={{ textDecoration: "none", color: "var(--text-secondary)", fontWeight: "600", fontSize: "15px" }}>Experience</Link>
                            <Link href="/projects" style={{ textDecoration: "none", color: "var(--text-secondary)", fontWeight: "600", fontSize: "15px" }}>Projects</Link>
                            <Link href="/about" style={{ textDecoration: "none", color: "var(--text-secondary)", fontWeight: "600", fontSize: "15px" }}>About</Link>

                            <button
                                onClick={toggleTheme}
                                style={{
                                    background: "none",
                                    border: "1px solid var(--border-color)",
                                    padding: "8px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "36px",
                                    height: "36px"
                                }}
                                aria-label="Toggle Dark Mode"
                            >
                                {mounted ? (dark ? "☀️" : "🌙") : <span style={{ opacity: 0 }}>☀️</span>}
                            </button>
                        </div>
                    </div>
                </nav>

                <main style={{ flex: 1, padding: "40px 5%", maxWidth: "1200px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
                    {children}
                </main>

                <ResumeChat />

                <footer style={{ background: "var(--card-bg)", borderTop: "1px solid var(--border-color)", padding: "40px 5%", marginTop: "auto" }}>
                    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
                        <p style={{ color: "var(--text-secondary)", margin: 0, fontWeight: "500" }}>
                            © {new Date().getFullYear()} Jashwanth Kandula.
                        </p>
                        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                            <a
                                href="https://github.com/JashwanthK7"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "var(--text-primary)", fontWeight: "600" }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jashwanth-kandula/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "var(--text-primary)", fontWeight: "600" }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}