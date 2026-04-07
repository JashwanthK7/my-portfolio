"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: "Dataset Recommender System",
            dates: "Mar 2026 to April 2026",
            description: "Machine learning pipeline designed to retrieve, score, and rank open source datasets from multiple repositories concurrently.",
            image: "/images/projects/dataset_recommender.png",
            category: "Deep Learning & NLP",
            github: "https://github.com/JashwanthK7/Dataset-Recommender",
            tech: ["Python", "FAISS", "Hugging Face", "Gradio", "Podman"],
            details: [
                "Built an asynchronous retrieval pipeline fetching from Kaggle, Hugging Face, and Data.gov.",
                "Implemented semantic search using all-MiniLM-L6-v2 and FAISS to normalize vector distances.",
                "Integrated Qwen2.5-7B-Instruct LLM to evaluate contextual relevance and generate custom justifications."
            ]
        },
        {
            title: "CalcFlow: Smart Calculus Coach",
            dates: "Aug 2025 to Dec 2025",
            description: "Full stack generative AI application with symbolic verification using SymPy, local LLMs via Ollama, and interactive Graph Lab visualizations.",
            image: "/images/projects/calcflow.png",
            category: "Generative AI",
            github: "https://github.com/JashwanthK7/Calc-Flow",
            tech: ["Python", "SymPy", "Ollama", "Streamlit", "PostgreSQL"],
            details: [
                "Deployed local LLMs (Llama3/Mistral) via Ollama for Socratic style calculus tutoring without external API costs.",
                "Implemented Python (sympy) for mathematical verification and auto grading of adaptive quizzes.",
                "Built an interactive Streamlit UI with PostgreSQL integration for persistent chat logs and history."
            ]
        },
        {
            title: "EduMentor: AI Powered Adaptive Learning Platform",
            dates: "Feb 2025 to May 2025",
            description: "Adaptive learning system with GPT powered quiz generation, personalized learning paths, and interactive knowledge graphs.",
            image: "/images/projects/edumentor.png",
            category: "Generative AI",
            github: "https://github.com/JashwanthK7/EduMentor",
            tech: ["OpenAI", "Streamlit", "SerpAPI", "NetworkX"],
            details: [
                "Combined OpenAI GPT-4, Streamlit, and SerpAPI to deliver adaptive quizzes and personalized learning paths.",
                "Generated interactive concept graphs for weak topics using PyVis and NetworkX to map prerequisites.",
                "Built a Topic Explorer that automatically fetches and summarizes top web resources via SerpAPI."
            ]
        },
        {
            title: "Credit Card Fraud Detection",
            dates: "Mar 2025 to May 2025",
            description: "Machine learning pipeline focused on detecting fraudulent credit card transactions using a highly imbalanced dataset.",
            image: "/images/projects/credit_card_fraud.png",
            category: "Traditional ML",
            github: "https://github.com/JashwanthK7/Credit-Card-Fraud-Detection",
            tech: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
            details: [
                "Trained and compared Logistic Regression, KNN, Naive Bayes, and XGBoost models.",
                "Handled severe class imbalance and tuned hyperparameters using GridSearchCV.",
                "Achieved an F1-Score of 0.89 using the optimal XGBoost model to minimize false positives."
            ]
        }
    ];

    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    const topFilters = ["All", "Generative AI", "Deep Learning & NLP", "Traditional ML"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter || p.tech.includes(filter));

    return (
        <section>
            <div style={{ marginBottom: "40px", maxWidth: "800px" }}>
                <h2 style={{ fontSize: "32px", fontWeight: "700", color: "var(--text-primary)" }}>
                    Featured Projects
                </h2>
                <p style={{ marginTop: "16px", fontSize: "18px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    A collection of my independent work spanning Generative AI, RAG architectures, and traditional Machine Learning.
                    Click any category to filter the projects, or click a project card to view more details.
                </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
                {topFilters.map((f, i) => {
                    const isActive = filter === f || (filter !== "All" && !topFilters.includes(filter) && f === "All");
                    return (
                        <button
                            key={i}
                            onClick={() => setFilter(f)}
                            style={{
                                padding: "8px 16px",
                                borderRadius: "20px",
                                border: isActive ? "1px solid var(--text-primary)" : "1px solid var(--border-color)",
                                background: isActive ? "var(--text-primary)" : "var(--card-bg)",
                                color: isActive ? "var(--bg-color)" : "var(--text-primary)",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "all 0.2s ease"
                            }}
                        >
                            {f}
                        </button>
                    )
                })}
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "32px"
            }}>
                {filteredProjects.map((p, i) => (
                    <ProjectCard
                        key={i}
                        project={p}
                        currentFilter={filter}
                        onFilterClick={setFilter}
                        onCardClick={() => setSelectedProject(p)}
                    />
                ))}
            </div>

            {selectedProject && (
                <div
                    style={{
                        position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                        background: "rgba(11, 17, 32, 0.8)", display: "flex", justifyContent: "center", alignItems: "center",
                        zIndex: 9999, padding: "20px"
                    }}
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        style={{
                            background: "var(--card-bg)", borderRadius: "12px", maxWidth: "800px", width: "100%",
                            maxHeight: "90vh", overflowY: "auto", padding: "32px", position: "relative",
                            border: "1px solid var(--border-color)"
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            style={{
                                position: "absolute", top: "20px", right: "24px", background: "none", border: "none",
                                fontSize: "24px", cursor: "pointer", color: "var(--text-secondary)"
                            }}
                        >
                            X
                        </button>

                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            style={{ width: "100%", borderRadius: "8px", height: "300px", objectFit: "cover", marginBottom: "24px", border: "1px solid var(--border-color)" }}
                        />

                        <h2 style={{ fontSize: "28px", color: "var(--text-primary)", marginBottom: "8px", fontWeight: "700" }}>
                            {selectedProject.title}
                        </h2>

                        <p style={{ color: "var(--accent-blue)", fontWeight: "600", marginBottom: "16px" }}>
                            {selectedProject.dates} | {selectedProject.category}
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                            {selectedProject.tech.map((tag, i) => (
                                <span key={i} style={{ background: "var(--bg-color)", color: "var(--accent-blue)", border: "1px solid var(--border-color)", padding: "6px 12px", borderRadius: "16px", fontSize: "12px", fontWeight: "600" }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: "700" }}>Overview</h3>
                        <p style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "24px" }}>
                            {selectedProject.description}
                        </p>

                        <h3 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: "700" }}>Key Contributions</h3>
                        <ul style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--text-secondary)", paddingLeft: "20px", marginBottom: "32px" }}>
                            {selectedProject.details.map((detail, idx) => (
                                <li key={idx} style={{ marginBottom: "10px" }}>{detail}</li>
                            ))}
                        </ul>

                        {selectedProject.github && (
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-block", background: "var(--text-primary)", color: "var(--bg-color)", padding: "12px 24px",
                                    borderRadius: "8px", fontWeight: "600", textDecoration: "none", transition: "opacity 0.2s ease"
                                }}
                                onMouseOver={(e) => e.target.style.opacity = 0.8}
                                onMouseOut={(e) => e.target.style.opacity = 1}
                            >
                                View on GitHub
                            </a>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}