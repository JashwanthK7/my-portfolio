export default function ExperienceCard({ exp }) {
    return (
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1F3B57" }}>
                {exp.role}
            </h3>

            <p style={{ fontSize: "16px", fontWeight: "600" }}>
                {exp.org}
            </p>

            <p style={{ fontSize: "14px", color: "#3A6EA5" }}>
                {exp.dates}
            </p>

            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                {exp.description}
            </p>
        </div>
    );
}