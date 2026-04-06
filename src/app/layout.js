import "./globals.css";

export const metadata = {
    title: "Jashwanth Kandula | AI Engineer & Data Scientist",
    description: "Portfolio of Jashwanth Kandula",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body style={{ margin: 0, padding: 0, fontFamily: "system-ui, sans-serif", background: "#F8FAFC", color: "#0F172A", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <style>
                    {`
                    .nav-link {
                        text-decoration: none; color: #475569; font-weight: 600; font-size: 15px; transition: color 0.2s;
                    }
                    .nav-link:hover {
                        color: #1F3B57;
                    }
                    .social-link {
                        display: flex; align-items: center; gap: 8px; text-decoration: none; color: #1F3B57; font-weight: 600; padding: 8px 12px; border-radius: 8px; transition: background 0.2s;
                    }
                    .social-link:hover {
                        background: #F1F5F9;
                    }
                    .email-link {
                        display: flex; align-items: center; gap: 8px; text-decoration: none; color: white; font-weight: 600; background: #3A6EA5; padding: 8px 16px; border-radius: 8px; transition: opacity 0.2s;
                    }
                    .email-link:hover {
                        opacity: 0.9;
                    }
                    `}
                </style>

                <nav style={{
                    position: "sticky", top: 0, zIndex: 1000,
                    background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(12px)",
                    borderBottom: "1px solid #E2E8F0", padding: "16px 5%"
                }}>
                    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <a href="/" style={{ fontSize: "20px", fontWeight: "800", color: "#1F3B57", textDecoration: "none", letterSpacing: "-0.5px" }}>
                            JK.
                        </a>
                        <div style={{ display: "flex", gap: "24px" }}>
                            <a href="/" className="nav-link">Home</a>
                            <a href="/experience" className="nav-link">Experience</a>
                            <a href="/projects" className="nav-link">Projects</a>
                            <a href="/about" className="nav-link">About</a>
                        </div>
                    </div>
                </nav>

                <main style={{ flex: 1, padding: "40px 5%", maxWidth: "1200px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
                    {children}
                </main>

                <footer style={{ background: "white", borderTop: "1px solid #E2E8F0", padding: "40px 5%", marginTop: "auto" }}>
                    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
                        <p style={{ color: "#64748b", margin: 0, fontWeight: "500" }}>
                            © {new Date().getFullYear()} Jashwanth Kandula.
                        </p>
                        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                            <a
                                href="https://github.com/JashwanthK7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
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
                                className="social-link"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href="mailto:kandulajashwanth@gmail.com"
                                className="email-link"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                Email Me
                            </a>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}