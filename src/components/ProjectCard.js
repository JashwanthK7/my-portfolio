export default function ProjectCard({ project }) {
    return (
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", borderRadius: "10px" }}
            />

            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1F3B57" }}>
                {project.title}
            </h3>

            <p style={{ fontSize: "14px", color: "#3A6EA5" }}>
                {project.dates}
            </p>

            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                {project.description}
            </p>
        </div>
    );
}