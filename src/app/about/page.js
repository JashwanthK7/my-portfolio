"use client";

export default function About() {
    return (
        <section style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
                <div style={{ flex: "1 1 300px" }}>
                    <img
                        src="/images/profile.jpeg"
                        alt="Jashwanth Kandula"
                        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    />
                </div>

                <div style={{ flex: "2 1 400px" }}>
                    <h1 style={{ fontSize: "40px", fontWeight: "800", color: "#1F3B57", letterSpacing: "-1px", marginBottom: "24px" }}>
                        About Me
                    </h1>
                    <p style={{ fontSize: "18px", color: "#475569", lineHeight: "1.7", marginBottom: "16px" }}>
                        I am an AI Engineer and Data Scientist based in Atlanta, GA. I focus on building scalable machine learning solutions, generative AI applications, and advanced retrieval architectures.
                    </p>
                    <p style={{ fontSize: "18px", color: "#475569", lineHeight: "1.7", marginBottom: "32px" }}>
                        I hold a Master of Science in Data Science and Analytics from Georgia State University J. Mack Robinson College of Business. My engineering approach combines algorithmic foundation with clean data practices to build end to end systems.
                    </p>

                    <a
                        href="/resume.pdf"
                        download="Jashwanth_Kandula_Resume.pdf"
                        style={{
                            display: "inline-block", background: "#1F3B57", color: "white",
                            padding: "14px 28px", borderRadius: "8px", fontWeight: "600",
                            textDecoration: "none", transition: "transform 0.2s ease, box-shadow 0.2s ease"
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(31, 59, 87, 0.3)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            <div>
                <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#1F3B57", marginBottom: "24px", borderBottom: "2px solid #E2E8F0", paddingBottom: "12px" }}>
                    Core Competencies
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "24px" }}>
                    <div style={{ background: "white", padding: "24px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                        <h3 style={{ color: "#3A6EA5", fontWeight: "700", marginBottom: "12px", fontSize: "18px" }}>Languages</h3>
                        <p style={{ color: "#475569", fontWeight: "500", lineHeight: "1.6" }}>Python, SQL, JavaScript</p>
                    </div>
                    <div style={{ background: "white", padding: "24px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                        <h3 style={{ color: "#3A6EA5", fontWeight: "700", marginBottom: "12px", fontSize: "18px" }}>AI & Machine Learning</h3>
                        <p style={{ color: "#475569", fontWeight: "500", lineHeight: "1.6" }}>PyTorch, Scikit-learn, Hugging Face, LangChain, OpenAI, Ollama, FAISS, XGBoost</p>
                    </div>
                    <div style={{ background: "white", padding: "24px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                        <h3 style={{ color: "#3A6EA5", fontWeight: "700", marginBottom: "12px", fontSize: "18px" }}>Tools & Deployment</h3>
                        <p style={{ color: "#475569", fontWeight: "500", lineHeight: "1.6" }}>Git, Docker, Streamlit, PostgreSQL, Gradio</p>
                    </div>
                </div>
            </div>
        </section>
    );
}