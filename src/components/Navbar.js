export default function Navbar() {
    return (
        <nav style={{
            width: "100%",
            padding: "20px 40px",
            background: "#FFFFFF",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 50
        }}>
            <a href="/" style={{ fontSize: "20px", fontWeight: "700", color: "#1F3B57" }}>
                Home
            </a>

            <div style={{ display: "flex", gap: "24px" }}>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/experience">Experience</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}