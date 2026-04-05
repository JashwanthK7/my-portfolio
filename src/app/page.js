export default function Home() {
    return (
        <section>
            <h1 style={{ fontSize: "42px", fontWeight: "700", color: "#1F3B57" }}>
                Hi, I am Jashwanth.
            </h1>

            <h2 style={{ marginTop: "20px", fontSize: "24px", fontWeight: "600", color: "#3A6EA5", maxWidth: "800px" }}>
                Algorithms are the engine, but clean data is the fuel. I build the engine and refine the fuel.
            </h2>

            <p style={{ marginTop: "20px", fontSize: "20px", maxWidth: "700px" }}>
                I am an AI Engineer and Data Scientist focusing on end-to-end Machine Learning solutions using Python and SQL.
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