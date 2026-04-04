export default function Footer() {
    return (
        <footer style={{
            textAlign: "center",
            padding: "40px",
            marginTop: "60px",
            background: "#1F3B57",
            color: "white"
        }}>
            <p>© {new Date().getFullYear()} Jashwanth Kandula</p>
        </footer>
    );
}