"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/experience", label: "Experience" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav style={{
            width: "100%",
            padding: "20px 40px",
            background: "var(--nav-bg)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            position: "sticky",
            top: 0,
            zIndex: 50,
            borderBottom: "1px solid var(--border-color)"
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link href="/" style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    letterSpacing: "-0.5px"
                }}>
                    JK.
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: "block",
                        background: "none",
                        border: "none",
                        fontSize: "24px",
                        cursor: "pointer",
                        color: "var(--text-primary)"
                    }}
                    className="mobile-menu-btn"
                >
                    ☰
                </button>

                <div className="desktop-nav" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                style={{
                                    padding: "8px 16px",
                                    borderRadius: "8px",
                                    fontSize: "15px",
                                    fontWeight: isActive ? "700" : "500",
                                    color: isActive ? "var(--accent-blue)" : "var(--text-secondary)",
                                    textDecoration: "none",
                                    background: isActive ? "var(--card-bg)" : "transparent",
                                    border: isActive ? "1px solid var(--border-color)" : "1px solid transparent",
                                    transition: "all 0.2s ease"
                                }}
                            >
                                {label}
                            </Link>
                        );
                    })}
                    <a
                        href="/resume.pdf"
                        download="Jashwanth_Kandula_Resume.pdf"
                        style={{
                            marginLeft: "8px",
                            padding: "8px 20px",
                            background: "var(--accent-blue)",
                            color: "#ffffff",
                            borderRadius: "8px",
                            fontSize: "15px",
                            fontWeight: "600",
                            textDecoration: "none"
                        }}
                    >
                        Resume
                    </a>
                </div>
            </div>

            {isOpen && (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "20px"
                }}>
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            style={{
                                padding: "10px",
                                textDecoration: "none",
                                color: pathname === href ? "var(--accent-blue)" : "var(--text-primary)",
                                fontWeight: "600"
                            }}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}

            <style>{`
                @media (min-width: 768px) {
                    .mobile-menu-btn { display: none !important; }
                    .desktop-nav { display: flex !important; }
                }
                @media (max-width: 767px) {
                    .desktop-nav { display: none !important; }
                }
            `}</style>
        </nav>
    );
}