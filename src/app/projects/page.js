import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: "CalcFlow: Smart Calculus Coach",
            dates: "Aug 2025 to Dec 2025",
            description:
                "Full stack generative AI application with symbolic verification using SymPy, local LLMs via Ollama, and interactive Graph Lab visualizations.",
            image: "/images/projects/calcflow.png"
        },
        {
            title: "EduMentor: AI Powered Adaptive Learning Platform",
            dates: "Feb 2025 to May 2025",
            description:
                "Adaptive learning system with GPT powered quiz generation, personalized learning paths, and interactive knowledge graphs.",
            image: "/images/projects/edumentor.png"
        },
        {
            title: "Knowledge Graph Extraction Pipeline",
            dates: "Aug 2024 to Dec 2024",
            description:
                "NLP driven knowledge graph extraction using spaCy, NetworkX, and RotatE embeddings with optimized link prediction.",
            image: "/images/projects/knowledge_graph.png"
        },
        {
            title: "Multi Objective Optimization Pipeline",
            dates: "Jan 2025 to May 2025",
            description:
                "MOO pipeline predicting five rehabilitation goals using classical ML models with AHP weighting and SHAP analysis.",
            image: "/images/projects/moo_pipeline.png"
        },
        {
            title: "RAG Pipeline for Dealer Performance Automation",
            dates: "Aug 2025 to Dec 2025",
            description:
                "Multi format RAG system using LangChain, FAISS, and Hugging Face models to automate dealership performance reviews.",
            image: "/images/projects/rag_pipeline.png"
        },
        {
            title: "Intrusion Detection System",
            dates: "May 2023 to May 2024",
            description:
                "Intrusion detection model using Random Forest, RFE, and SMOTE achieving high accuracy on network traffic data.",
            image: "/images/projects/intrusion_detection.png"
        },
        {
            title: "Career Guidance Chatbot",
            dates: "May 2023 to May 2024",
            description:
                "Chatbot using NLTK, WordNet, and TF IDF to guide students across multiple education levels.",
            image: "/images/projects/career_chatbot.png"
        },
        {
            title: "Personality Test Recommendation Engine",
            dates: "May 2023 to May 2024",
            description:
                "Recommendation engine scoring user responses to suggest top career matches with visual analytics.",
            image: "/images/projects/personality_engine.png"
        }
    ];

    return (
        <section>
            <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1F3B57" }}>
                Projects
            </h2>

            <div style={{
                marginTop: "40px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px"
            }}>
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </div>
        </section>
    );
}