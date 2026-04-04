// src/app/about/page.js
export default function About() {
    return (
        <section
            style={{
                padding: '48px 24px',
                maxWidth: '1100px',
                margin: '0 auto',
            }}
        >
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1F3B57', margin: 0 }}>
                About Me
            </h2>

            <div
                style={{
                    display: 'flex',
                    gap: '40px',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    marginTop: '24px',
                }}
            >
                {/* Left column: profile image */}
                <div style={{ flex: '0 0 160px' }}>
                    <img
                        src="/images/profile.jpeg"
                        alt="Jashwanth Kandula"
                        style={{
                            width: '160px',
                            height: '160px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                </div>

                {/* Right column: existing About text */}
                <div style={{ flex: '1 1 400px', minWidth: 0 }}>
                    <p style={{ marginTop: 0, lineHeight: 1.7, fontSize: '18px', color: '#0f172a' }}>
                        I am a Data Scientist and Machine Learning Engineer with more than two years of applied
                        research experience. My work spans Generative AI, RAG pipelines, Knowledge Graphs,
                        Multi Objective Optimization, and full stack ML systems. I have contributed to impactful
                        projects at Mercedes Benz USA, Dell Technologies, Shepherd Center, and JNTUH.
                    </p>

                    <p style={{ marginTop: '20px', lineHeight: 1.7, fontSize: '18px', color: '#0f172a' }}>
                        I enjoy building intelligent systems that reduce manual effort, improve decision making,
                        and deliver measurable business and clinical value. My technical strengths include Python,
                        LangChain, PyTorch, XGBoost, cloud platforms, and scalable ML architecture.
                    </p>
                </div>
            </div>
        </section>
    );
}