"use client";
import { useState } from "react";
import ExperienceCard from "../../components/ExperienceCard";

export default function Experience() {
    const experience = [
        {
            role: "Generative AI Developer | Graduate Research Assistant",
            org: "Mercedes Benz USA & Georgia State University",
            dates: "Aug 2025 to Dec 2025",
            description: "Built a multi format RAG pipeline using LangChain, FAISS, and Hugging Face models to parse and vectorize more than six thousand dealer records.",
            image: "/images/projects/rag_pipeline.png",
            github: "https://github.com/JashwanthK7/MercedesUSA",
            skills: ["LangChain", "FAISS", "Hugging Face", "Ollama", "OpenAI"],
            details: [
                "Ingested structured (CSV) and unstructured (PDF, TXT) DVM CAR data into a local FAISS vector store.",
                "Integrated pluggable LLM backends including local HuggingFace, Ollama, and OpenAI API.",
                "Generated heuristic confidence scores based on FAISS similarity distances to prevent LLM hallucinations.",
                "Automated dealership performance review workflows and reduced action plan generation time from 60 minutes to under 5 minutes."
            ]
        },
        {
            role: "Machine Learning Engineer | Graduate Research Assistant",
            org: "Shepherd Center & Georgia State University",
            dates: "Jan 2025 to May 2025",
            description: "Developed a Multi Objective Optimization pipeline using classical ML models to predict five rehabilitation goals.",
            image: "/images/projects/moo_pipeline.png",
            github: "https://github.com/JashwanthK7",
            skills: ["Scikit-learn", "SHAP", "Optimization", "Machine Learning"],
            details: [
                "Applied Analytic Hierarchy Process for goal weighting.",
                "Used SHAP values to provide model interpretability for clinicians.",
                "Optimized multi output models to balance conflicting clinical objectives.",
                "Supported clinician decision making and therapy planning with data driven insights."
            ]
        },
        {
            role: "Data Scientist | Graduate Research Assistant",
            org: "Dell Technologies & Georgia State University",
            dates: "Aug 2024 to Dec 2024",
            description: "Designed an NLP driven knowledge graph extraction pipeline using spaCy and NetworkX to optimize link prediction.",
            image: "/images/projects/knowledge_graph.png",
            github: "https://github.com/JashwanthK7/RotatE",
            skills: ["NLP", "Knowledge Graphs", "PyTorch", "spaCy"],
            details: [
                "Embedded entities and relations into a complex vector space modeling relations as rotations.",
                "Trained RotatE knowledge graph embeddings using PyTorch.",
                "Evaluated model performance using various distance metric thresholds and learning rates.",
                "Visualized accuracy against distance threshold cutoffs to optimize knowledge graph completion."
            ]
        },
        {
            role: "Data Science Research Intern",
            org: "JNTUHCEH",
            dates: "May 2023 to May 2024",
            description: "Built an intrusion detection model for network security and developed an NLP powered career guidance chatbot.",
            image: "/images/projects/career_chatbot.png",
            github: "https://github.com/JashwanthK7/Career-Counselor-Chatbot",
            skills: ["Random Forest", "NLP", "TF-IDF", "Streamlit"],
            details: [
                "Developed predictive models using Random Forest, XGBoost, and Logistic Regression with GridSearchCV tuning for cyber breaches.",
                "Processed text inputs using NLTK and TF-IDF vectorization to match keywords against career datasets.",
                "Developed a personalized Personality Test gauging user aptitude through situational and interest based queries.",
                "Generated dynamic pie charts using Bokeh to visualize recommended career paths and professions."
            ]
        }
    ];

    const [selectedExp, setSelectedExp] = useState(null);

    return (
        <section>
            <div style={{ marginBottom: "48px", maxWidth: "800px" }}>
                <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#1F3B57", letterSpacing: "-0.5px" }}>
                    Experience
                </h2>
                <p style={{ marginTop: "16px", fontSize: "18px", color: "#4A5568", lineHeight: "1.7" }}>
                    My professional journey includes applied research and engineering roles where I have developed scalable machine learning solutions, generative AI pipelines, and data driven systems for enterprise and healthcare sectors.
                    Click any role to view the project details.
                </p>
            </div>

            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                {/* Timeline Container */}
                <div style={{
                    position: "relative",
                    paddingLeft: "40px",
                    borderLeft: "3px solid #E2E8F0",
                    marginLeft: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "48px"
                }}>
                    {experience.map((exp, i) => (
                        <div key={i} style={{ position: "relative" }}>
                            {/* Timeline Dot */}
                            <div style={{
                                position: "absolute",
                                left: "-49.5px", // Aligns exactly with the 3px border
                                top: "28px",
                                width: "16px",
                                height: "16px",
                                background: "#3A6EA5",
                                borderRadius: "50%",
                                border: "3px solid white",
                                boxShadow: "0 0 0 4px #EBF4FF"
                            }} />

                            <ExperienceCard
                                exp={exp}
                                onCardClick={() => setSelectedExp(exp)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedExp && (
                <div
                    style={{
                        position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                        background: "rgba(15, 23, 42, 0.7)", backdropFilter: "blur(4px)",
                        display: "flex", justifyContent: "center", alignItems: "center",
                        zIndex: 100, padding: "20px"
                    }}
                    onClick={() => setSelectedExp(null)}
                >
                    <div
                        style={{
                            background: "white", borderRadius: "16px", maxWidth: "800px", width: "100%",
                            maxHeight: "90vh", overflowY: "auto", padding: "40px", position: "relative",
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedExp(null)}
                            style={{
                                position: "absolute", top: "24px", right: "24px", background: "#F1F5F9", border: "none",
                                width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "18px", cursor: "pointer", color: "#475569", transition: "background 0.2s"
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = "#E2E8F0"}
                            onMouseOut={(e) => e.currentTarget.style.background = "#F1F5F9"}
                        >
                            ✕
                        </button>

                        <img
                            src={selectedExp.image}
                            alt={selectedExp.org}
                            style={{ width: "100%", borderRadius: "12px", height: "300px", objectFit: "cover", marginBottom: "32px", border: "1px solid #E2E8F0" }}
                        />

                        <h2 style={{ fontSize: "32px", color: "#1F3B57", marginBottom: "8px", fontWeight: "800", letterSpacing: "-0.5px" }}>
                            {selectedExp.role}
                        </h2>

                        <p style={{ color: "#3A6EA5", fontSize: "18px", fontWeight: "600", marginBottom: "24px" }}>
                            {selectedExp.org} | {selectedExp.dates}
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                            {selectedExp.skills.map((skill, i) => (
                                <span key={i} style={{ background: "#F1F5F9", color: "#475569", padding: "8px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: "700" }}>
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <h3 style={{ fontSize: "22px", color: "#1F3B57", marginBottom: "16px", fontWeight: "700" }}>Overview</h3>
                        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#475569", marginBottom: "32px" }}>
                            {selectedExp.description}
                        </p>

                        <h3 style={{ fontSize: "22px", color: "#1F3B57", marginBottom: "16px", fontWeight: "700" }}>Key Contributions</h3>
                        <ul style={{ fontSize: "17px", lineHeight: "1.8", color: "#475569", paddingLeft: "24px", marginBottom: "40px" }}>
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
                                    display: "inline-block", background: "#1F3B57", color: "white", padding: "14px 28px",
                                    borderRadius: "8px", fontSize: "16px", fontWeight: "600", textDecoration: "none", transition: "transform 0.2s ease, box-shadow 0.2s ease"
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
                                View Project Repository
                            </a>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}