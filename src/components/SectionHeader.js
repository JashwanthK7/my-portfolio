export default function SectionHeader({ title }) {
    return (
        <h2
            style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#1F3B57",
                marginBottom: "20px"
            }}
        >
            {title}
        </h2>
    );
}