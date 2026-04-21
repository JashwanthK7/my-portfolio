"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 50,
            borderBottom: "1px solid var(--border-color)"
        }}>
            <Link href="/" style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "var(--text-primary)",
                textDecoration: "none",
                letterSpacing: "-0.5px"
            }}>
                JK.
            </Link>

            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
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
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        boxShadow: "0 2px 8px rgba(58,110,165,0.3)"
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-1px)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(58,110,165,0.4)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(58,110,165,0.3)";
                    }}
                >
                    Resume
                </a>
            </div>
        </nav>
    );
}