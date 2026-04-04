export default function Home() {
    return (
        <section>
            <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#1F3B57" }}>
                Hi, I am Jashwanth Kandula
            </h1>

            <p style={{ marginTop: "20px", fontSize: "20px", maxWidth: "700px" }}>
                Data Scientist and Machine Learning Engineer with experience in Generative AI, RAG systems,
                Knowledge Graphs, Optimization, and full stack ML pipelines across healthcare, automotive,
                and enterprise domains.
            </p>

            <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
                <a href="/projects" className="card" style={{ padding: "16px 28px" }}>
                    View Projects
                </a>
                <a href="/about" className="card" style={{ padding: "16px 28px" }}>
                    About Me
                </a>
            </div>
        </section>
    );
}