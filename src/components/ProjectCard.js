"use client";
import { useEffect, useRef, useState } from "react";

export default function ProjectCard({ project, currentFilter, onFilterClick, onCardClick }) {
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
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                height: "100%"
            }}
        >
            <div
                className="card"
                onClick={onCardClick}
                style={{
                    display: "flex", flexDirection: "column", gap: "16px", height: "100%", cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                }}
            >
                <div style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "10px",
                    border: "1px solid var(--border-color)",
                    background: "var(--card-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            borderRadius: "8px"
                        }}
                    />
                </div>

                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "var(--text-primary)" }}>
                    {project.title}
                </h3>

                {project.impact && (
                    <p style={{
                        fontSize: "13px",
                        color: "var(--accent-blue)",
                        fontWeight: "600",
                        marginTop: "-8px",
                        lineHeight: "1.5",
                        borderLeft: "3px solid var(--accent-blue)",
                        paddingLeft: "10px"
                    }}>
                        {project.impact}
                    </p>
                )}

                <p style={{ fontSize: "16px", lineHeight: "1.6", flexGrow: 1, color: "var(--text-secondary)" }}>
                    {project.description}
                </p>

                {project.tech && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto", paddingTop: "16px" }}>
                        {project.tech.map((tag, index) => {
                            const isActive = currentFilter === tag;
                            return (
                                <span
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onFilterClick(tag);
                                    }}
                                    style={{
                                        background: isActive ? "var(--accent-blue)" : "var(--bg-color)",
                                        color: isActive ? "#ffffff" : "var(--accent-blue)",
                                        border: isActive ? "1px solid var(--accent-blue)" : "1px solid var(--border-color)",
                                        padding: "6px 12px",
                                        borderRadius: "16px",
                                        fontSize: "12px",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease"
                                    }}
                                >
                                    {tag}
                                </span>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}