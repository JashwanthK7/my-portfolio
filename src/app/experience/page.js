import ExperienceCard from "../../components/ExperienceCard";

export default function Experience() {
    const experience = [
        {
            role: "Generative AI Developer | Graduate Research Assistant",
            org: "Mercedes Benz USA and Georgia State University",
            dates: "Aug 2025 to Dec 2025",
            description:
                "Built a multi format RAG pipeline using LangChain, FAISS, and Hugging Face models to parse and vectorize more than six thousand dealer records. Automated dealership performance review workflows and reduced action plan generation time from sixty minutes to under five minutes."
        },
        {
            role: "Machine Learning Engineer | Graduate Research Assistant",
            org: "Shepherd Center and Georgia State University",
            dates: "Jan 2025 to May 2025",
            description:
                "Developed a Multi Objective Optimization pipeline using classical ML models to predict five rehabilitation goals. Applied AHP weighting and SHAP analysis to support clinician decision making and therapy planning."
        },
        {
            role: "Data Scientist | Graduate Research Assistant",
            org: "Dell Technologies and Georgia State University",
            dates: "Aug 2024 to Dec 2024",
            description:
                "Designed an NLP driven knowledge graph extraction pipeline using spaCy and NetworkX. Built a RotatE embedding model in PyTorch and achieved high link prediction accuracy with optimized inference time."
        },
        {
            role: "Data Science Research Intern",
            org: "JNTUHCEH",
            dates: "May 2023 to May 2024",
            description:
                "Built an intrusion detection model using Random Forest, RFE, and SMOTE. Developed a career guidance chatbot and a personality test recommendation engine with interactive visualizations."
        }
    ];

    return (
        <section>
            <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1F3B57" }}>
                Experience
            </h2>

            <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>
                {experience.map((exp, i) => (
                    <ExperienceCard key={i} exp={exp} />
                ))}
            </div>
        </section>
    );
}