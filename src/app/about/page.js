"use client";

export default function About() {
    return (
        <section style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>

            {/* Profile + Bio */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
                <div style={{ flex: "1 1 300px" }}>
                    <img
                        src="/images/profile.jpeg"
                        alt="Jashwanth Kandula"
                        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    />
                </div>

                <div style={{ flex: "2 1 400px" }}>
                    <h1 style={{ fontSize: "40px", fontWeight: "800", color: "var(--text-primary)", letterSpacing: "-1px", marginBottom: "24px" }}>
                        About Me
                    </h1>
                    <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "16px" }}>
                        I am an AI Engineer and Data Scientist based in Atlanta, GA. I focus on building scalable machine learning solutions, generative AI applications, and advanced retrieval architectures.
                    </p>
                    <p style={{ fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "32px" }}>
                        My engineering approach combines algorithmic foundation with clean data practices to build end-to-end systems, from raw data ingestion to deployed, interpretable models.
                    </p>

                    <a
                        href="/resume.pdf"
                        download="Jashwanth_Kandula_Resume.pdf"
                        style={{
                            display: "inline-block", background: "var(--accent-blue)", color: "#ffffff",
                            padding: "14px 28px", borderRadius: "8px", fontWeight: "600",
                            textDecoration: "none", transition: "transform 0.2s ease, box-shadow 0.2s ease",
                            boxShadow: "0 4px 14px 0 rgba(58,110,165,0.3)"
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 6px 20px 0 rgba(58,110,165,0.4)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 14px 0 rgba(58,110,165,0.3)";
                        }}
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Education */}
            <div>
                <h2 style={{ fontSize: "28px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "24px", borderBottom: "2px solid var(--border-color)", paddingBottom: "12px" }}>
                    Education
                </h2>
                <div style={{ background: "var(--card-bg)", padding: "28px", borderRadius: "12px", border: "1px solid var(--border-color)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                    <div>
                        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "6px" }}>
                            Master of Science in Data Science and Analytics
                        </h3>
                        <p style={{ fontSize: "16px", color: "var(--accent-blue)", fontWeight: "600", marginBottom: "4px" }}>
                            Georgia State University, J. Mack Robinson College of Business
                        </p>
                        <p style={{ fontSize: "15px", color: "var(--text-secondary)", fontWeight: "500" }}>
                            Atlanta, GA
                        </p>
                    </div>
                    <div style={{ background: "var(--bg-color)", border: "1px solid var(--border-color)", color: "var(--accent-blue)", padding: "6px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "700", whiteSpace: "nowrap" }}>
                        Graduated: Dec 2025
                    </div>
                </div>

                <div style={{ background: "var(--card-bg)", padding: "28px", borderRadius: "12px", border: "1px solid var(--border-color)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginTop: "16px" }}>
                    <div>
                        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "6px" }}>
                            Bachelor of Technology in Electronics and Communication Engineering
                        </h3>
                        <p style={{ fontSize: "16px", color: "var(--accent-blue)", fontWeight: "600", marginBottom: "4px" }}>
                            Jawaharlal Nehru Technological University College of Engineering
                        </p>
                        <p style={{ fontSize: "15px", color: "var(--text-secondary)", fontWeight: "500" }}>
                            Hyderabad, India
                        </p>
                    </div>
                    <div style={{ background: "var(--bg-color)", border: "1px solid var(--border-color)", color: "var(--accent-blue)", padding: "6px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "700", whiteSpace: "nowrap" }}>
                        Graduated: May 2024
                    </div>
                </div>
            </div>

            {/* Core Competencies */}
            <div>
                <h2 style={{ fontSize: "28px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "24px", borderBottom: "2px solid var(--border-color)", paddingBottom: "12px" }}>
                    Core Competencies
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "24px" }}>
                    <div style={{ background: "var(--card-bg)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                        <h3 style={{ color: "var(--accent-blue)", fontWeight: "700", marginBottom: "12px", fontSize: "18px" }}>Languages</h3>
                        <p style={{ color: "var(--text-secondary)", fontWeight: "500", lineHeight: "1.6" }}>Python, SQL, JavaScript</p>
                    </div>
                    <div style={{ background: "var(--card-bg)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                        <h3 style={{ color: "var(--accent-blue)", fontWeight: "700", marginBottom: "12px", fontSize: "18px" }}>AI & Machine Learning</h3>
                        <p style={{ color: "var(--text-secondary)", fontWeight: "500", lineHeight: "1.6" }}>PyTorch, Scikit-learn, Hugging Face, LangChain, OpenAI, Ollama, FAISS, XGBoost, SHAP</p>
                    </div>
                    <div style={{ background: "var(--card-bg)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                        <h3 style={{ color: "var(--accent-blue)", fontWeight: "700", marginBottom: "12px", fontSize: "18px" }}>NLP & Graphs</h3>
                        <p style={{ color: "var(--text-secondary)", fontWeight: "500", lineHeight: "1.6" }}>spaCy, NLTK, TF-IDF, NetworkX, Knowledge Graphs</p>
                    </div>
                    <div style={{ background: "var(--card-bg)", padding: "24px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                        <h3 style={{ color: "var(--accent-blue)", fontWeight: "700", marginBottom: "12px", fontSize: "18px" }}>Tools & Deployment</h3>
                        <p style={{ color: "var(--text-secondary)", fontWeight: "500", lineHeight: "1.6" }}>Git, Docker, Streamlit, PostgreSQL, Gradio, Podman</p>
                    </div>
                </div>
            </div>

        </section>
    );
}