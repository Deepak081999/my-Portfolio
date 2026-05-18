import React, { useState } from "react";
import "./certificates.css";

const certificatesData = [
    {
        id: 1,
        title: "Python 101 for Data Science (PY0101EN)",
        issuer: "IBM / Cognitive Class",
        date: "2026",
        category: "Data Science",
        logo: "🐍",
        color: "#FFD43B",
        link: "https://courses.cognitiveclass.ai/certificates/f706ce6f5385468285e27d0c897b07ca",
    },
    {
        id: 2,
        title: "Python Programming Course",
        issuer: "Simplilearn",
        date: "2025",
        category: "Programming",
        logo: "🐍",
        color: "#61DAFB",
        link: "https://lms.simplilearn.com/courses/3381/Programming-with-Python-3.X/certificate/download-skillup",
    },
    {
        id: 3,
        title: "Frontend Developer (React)",
        issuer: "HackerRank",
        date: "2025",
        category: "Frontend",
        logo: "⚛️",
        color: "#00EA64",
        link: "https://www.hackerrank.com/certificates/iframe/1de3eb5a1b33",
    },
    {
        id: 4,
        title: "JavaScript Advanced Certification",
        issuer: "CutShort",
        date: "2025",
        category: "Programming",
        logo: "🟨",
        color: "#F7DF1E",
        link: "https://cutshort.io/certificate/84323",
    },
    {
        id: 5,
        title: "JavaScript Course",
        issuer: "Scaler Topics",
        date: "2025",
        category: "Programming",
        logo: "💛",
        color: "#F0A500",
        link: "https://moonshot.scaler.com/s/li/PIeIGHBd8r",
    },
    {
        id: 6,
        title: "Java (Basic) Certification",
        issuer: "HackerRank",
        date: "2022",
        category: "Programming",
        logo: "☕",
        color: "#F89820",
        link: "https://www.hackerrank.com/certificates/iframe/6810d7625f82",
    },
    {
        id: 7,
        title: "SQL Assessment Certification",
        issuer: "TestDome",
        date: "2023",
        category: "Database",
        logo: "🗄️",
        color: "#336791",
        link: "#",
    },
];

const categories = ["All", ...new Set(certificatesData.map((c) => c.category))];

const Certificates = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState(null);

    const filtered =
        activeCategory === "All"
            ? certificatesData
            : certificatesData.filter((c) => c.category === activeCategory);

    return (
        <section className="certificates-section" id="certificates">
            <div className="certificates-container">
                {/* Header */}
                <div className="certificates-header">
                    <h2 className="certificates-title">
                        My <span className="highlight">Certificates</span>
                    </h2>
                    <div className="title-underline" />
                    <p className="certificates-subtitle">
                        Continuous learning — here are some of the certifications I've earned.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="filter-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="certificates-grid">
                    {filtered.map((cert) => (
                        <div
                            key={cert.id}
                            className={`cert-card ${hoveredId === cert.id ? "hovered" : ""}`}
                            onMouseEnter={() => setHoveredId(cert.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{ "--accent": cert.color }}
                        >
                            <div className="cert-top">
                                <span className="cert-emoji">{cert.logo}</span>
                                <span className="cert-category">{cert.category}</span>
                            </div>

                            <h3 className="cert-title">{cert.title}</h3>

                            <div className="cert-meta">
                                <div className="cert-issuer">
                                    <span className="meta-label">Issued by</span>
                                    <span className="meta-value">{cert.issuer}</span>
                                </div>
                                <div className="cert-date">
                                    <span className="meta-label">Year</span>
                                    <span className="meta-value">{cert.date}</span>
                                </div>
                            </div>

                            <div className="cert-footer">
                                {cert.link !== "#" ? (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="verify-btn"
                                    >
                                        Verify Certificate ↗
                                    </a>
                                ) : (
                                    <span className="verify-btn disabled">Not available</span>
                                )}
                            </div>

                            <div className="cert-glow" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
