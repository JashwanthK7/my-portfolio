"use client";
import { useState, useEffect } from "react";
import ExperienceCard from "../../components/ExperienceCard";

export default function Experience() {
    const experience = [
        {
            role: "Generative AI Developer | Graduate Research Assistant",
            org: "Mercedes Benz USA & Georgia State University",
            dates: "Aug 2025 to Dec 2025",
            description: "Built a production-ready multi-format RAG pipeline using LangChain, FAISS, and Hugging Face models, vectorizing over 6,000 dealer records and cutting action plan generation time from 60 minutes to under 5 minutes.",
            image: "/images/projects/rag_pipeline.png",
            github: "https://github.com/JashwanthK7/MercedesUSA",
            skills: ["LangChain", "FAISS", "Hugging Face", "Ollama", "OpenAI"],
            details: [
                "Ingested structured (CSV) and unstructured (PDF, TXT) DVM CAR data into a local FAISS vector store, enabling semantic search across 6,000+ dealer records.",
                "Integrated pluggable LLM backends including local HuggingFace, Ollama, and OpenAI API, allowing flexible model switching without pipeline changes.",
                "Generated heuristic confidence scores based on FAISS similarity distances to flag low-confidence responses and reduce LLM hallucinations.",
                "Automated dealership performance review workflows, reducing action plan generation time by over 90% — from 60 minutes to under 5 minutes."
            ]
        },
        {
            role: "Machine Learning Engineer | Graduate Research Assistant",
            org: "Shepherd Center & Georgia State University",
            dates: "Jan 2025 to May 2025",
            description: "Developed a Multi-Objective Optimization pipeline using classical ML models to simultaneously predict five rehabilitation goals, improving clinician decision support with interpretable, data-driven insights.",
            image: "/images/projects/moo_pipeline.png",
            github: "https://github.com/JashwanthK7",
            skills: ["Scikit-learn", "SHAP", "Optimization", "Machine Learning"],
            details: [
                "Designed a multi-output ML pipeline using Scikit-learn to simultaneously predict five rehabilitation outcomes for spinal cord injury patients.",
                "Applied Analytic Hierarchy Process (AHP) for clinical goal weighting, enabling prioritization of therapy objectives based on patient profiles.",
                "Used SHAP values to deliver feature-level interpretability, helping clinicians understand model decisions and build trust in AI-assisted planning.",
                "Balanced conflicting clinical objectives through Pareto-optimal model selection, improving therapy plan quality without sacrificing any single goal."
            ]
        },
        {
            role: "Data Scientist | Graduate Research Assistant",
            org: "Dell Technologies & Georgia State University",
            dates: "Aug 2024 to Dec 2024",
            description: "Designed an NLP-driven knowledge graph extraction and embedding pipeline using spaCy, NetworkX, and PyTorch, achieving optimized link prediction performance through systematic threshold and learning rate evaluation.",
            image: "/images/projects/knowledge_graph.png",
            github: "https://github.com/JashwanthK7/RotatE",
            skills: ["NLP", "Knowledge Graphs", "PyTorch", "spaCy"],
            details: [
                "Built an end-to-end knowledge graph extraction pipeline using spaCy for NER and NetworkX for graph construction from unstructured enterprise text.",
                "Trained RotatE knowledge graph embeddings using PyTorch, modeling entity relations as rotations in a complex vector space for accurate link prediction.",
                "Systematically evaluated model performance across multiple distance metric thresholds and learning rates to identify the optimal training configuration.",
                "Visualized accuracy-threshold curves to guide hyperparameter selection, resulting in measurable improvement in knowledge graph completion quality."
            ]
        },
        {
            role: "Data Science Research Intern",
            org: "JNTUHCEH",
            dates: "May 2023 to May 2024",
            description: "Built a high-accuracy intrusion detection system for network security using ensemble ML models, and developed an NLP-powered career guidance chatbot serving personalized recommendations through an interactive Streamlit interface.",
            image: "/images/projects/career_chatbot.png",
            github: "https://github.com/JashwanthK7/Career-Counselor-Chatbot",
            skills: ["Random Forest", "NLP", "TF-IDF", "Streamlit"],
            details: [
                "Developed and benchmarked intrusion detection models using Random Forest, XGBoost, and Logistic Regression with GridSearchCV hyperparameter tuning, achieving high precision on imbalanced network traffic datasets.",
                "Built an NLP pipeline using NLTK and TF-IDF vectorization to match user text inputs against career datasets for personalized recommendation generation.",
                "Designed a Personality Test module gauging user aptitude through situational and interest-based queries, feeding results into the career recommendation engine.",
                "Visualized recommended career paths dynamically using Bokeh pie charts, making outputs intuitive and actionable for end users."
            ]
        }
    ];

    const [selectedExp, setSelectedExp] = useState(null);

    useEffect(() => {
        if (selectedExp) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedExp]);

    return (
        <section>
            <div style={{ marginBottom: "48px", maxWidth: "800px" }}>
                <h2 style={{ fontSize: "36px", fontWeight: "800", color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                    Experience
                </h2>
                <p style={{ marginTop: "16px", fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                    My professional journey includes applied research and engineering roles where I have developed scalable machine learning solutions, generative AI pipelines, and data-driven systems for enterprise and healthcare sectors.
                </p>
            </div>

            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                <div style={{
                    position: "relative",
                    paddingLeft: "40px",
                    borderLeft: "3px solid var(--border-color)",
                    marginLeft: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "48px"
                }}>
                    {experience.map((exp, i) => (
                        <div key={i} style={{ position: "relative" }}>
                            <div style={{
                                position: "absolute",
                                left: "-49.5px",
                                top: "28px",
                                width: "16px",
                                height: "16px",
                                background: "var(--accent-blue)",
                                borderRadius: "50%",
                                border: "3px solid var(--card-bg)",
                                boxShadow: "0 0 0 4px var(--border-color)"
                            }} />

                            <ExperienceCard
                                exp={exp}
                                onCardClick={() => setSelectedExp(exp)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedExp && (
                <div
                    style={{
                        position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                        background: "rgba(11, 17, 32, 0.8)", backdropFilter: "blur(4px)",
                        display: "flex", justifyContent: "center", alignItems: "center",
                        zIndex: 9999, padding: "20px"
                    }}
                    onClick={() => setSelectedExp(null)}
                >
                    <div
                        style={{
                            background: "var(--card-bg)", borderRadius: "16px", maxWidth: "800px", width: "100%",
                            maxHeight: "90vh", overflowY: "auto", padding: "40px", position: "relative",
                            border: "1px solid var(--border-color)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedExp(null)}
                            style={{
                                position: "fixed", top: "24px", right: "24px", background: "var(--card-bg)", border: "1px solid var(--border-color)",
                                width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "18px", cursor: "pointer", color: "var(--text-primary)", transition: "background 0.2s",
                                zIndex: 10000, boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = "var(--border-color)"}
                            onMouseOut={(e) => e.currentTarget.style.background = "var(--card-bg)"}
                        >
                            ✕
                        </button>

                        <img
                            src={selectedExp.image}
                            alt={selectedExp.org}
                            style={{ width: "100%", borderRadius: "12px", height: "300px", objectFit: "cover", marginBottom: "32px", border: "1px solid var(--border-color)" }}
                        />

                        <h2 style={{ fontSize: "32px", color: "var(--text-primary)", marginBottom: "8px", fontWeight: "800", letterSpacing: "-0.5px" }}>
                            {selectedExp.role}
                        </h2>

                        <p style={{ color: "var(--accent-blue)", fontSize: "18px", fontWeight: "600", marginBottom: "24px" }}>
                            {selectedExp.org} | {selectedExp.dates}
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                            {selectedExp.skills.map((skill, i) => (
                                <span key={i} style={{ background: "var(--bg-color)", color: "var(--text-primary)", border: "1px solid var(--border-color)", padding: "8px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: "700" }}>
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <h3 style={{ fontSize: "22px", color: "var(--text-primary)", marginBottom: "16px", fontWeight: "700" }}>Overview</h3>
                        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: "32px" }}>
                            {selectedExp.description}
                        </p>

                        <h3 style={{ fontSize: "22px", color: "var(--text-primary)", marginBottom: "16px", fontWeight: "700" }}>Key Contributions</h3>
                        <ul style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--text-secondary)", paddingLeft: "24px", marginBottom: "40px" }}>
                            {selectedExp.details.map((detail, idx) => (
                                <li key={idx} style={{ marginBottom: "12px" }}>{detail}</li>
                            ))}
                        </ul>

                        {selectedExp.github && (
                            <a
                                href={selectedExp.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-block", background: "var(--accent-blue)", color: "#ffffff", padding: "14px 28px",
                                    borderRadius: "8px", fontSize: "16px", fontWeight: "600", textDecoration: "none",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
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
                                View Project Repository
                            </a>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}