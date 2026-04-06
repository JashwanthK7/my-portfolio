"use client";
import { useEffect, useRef, useState } from "react";

export default function ExperienceCard({ exp, onCardClick }) {
    const domRef = useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current);
            }
        }, { threshold: 0.1 });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={domRef}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
            }}
        >
            <div
                onClick={onCardClick}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px -8px rgba(58, 110, 165, 0.2)";
                    e.currentTarget.style.borderColor = "#3A6EA5";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                }}
                style={{
                    display: "flex", flexDirection: "column", gap: "12px", cursor: "pointer",
                    padding: "24px", borderRadius: "12px", background: "white",
                    border: "1px solid #E2E8F0", boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
            >
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1F3B57", margin: 0 }}>
                    {exp.role}
                </h3>

                <p style={{ fontSize: "16px", fontWeight: "600", color: "#475569", margin: 0 }}>
                    {exp.org}
                </p>

                <div style={{ display: "inline-block", background: "#EBF4FF", color: "#3A6EA5", padding: "4px 12px", borderRadius: "16px", fontSize: "13px", fontWeight: "700", width: "fit-content", marginTop: "4px" }}>
                    {exp.dates}
                </div>

                <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#475569", marginTop: "8px", marginBottom: "0" }}>
                    {exp.description}
                </p>

                {exp.skills && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px", paddingTop: "12px", borderTop: "1px dashed #E2E8F0" }}>
                        {exp.skills.map((skill, index) => (
                            <span
                                key={index}
                                style={{
                                    color: "#64748b",
                                    fontSize: "13px",
                                    fontWeight: "600"
                                }}
                            >
                                {skill}{index < exp.skills.length - 1 ? " • " : ""}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}