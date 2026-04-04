import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
    return (
        <section className={styles.aboutSection}>
            <h2 className={styles.heading}>About Me</h2>

            <div className={styles.aboutFlex}>
                <div className={styles.aboutImage}>
                    <Image
                        src="/images/profile.jpeg"
                        alt="Jashwanth Kandula portrait"
                        width={160}
                        height={160}
                        priority
                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                </div>

                <div className={styles.aboutText}>
                    <p>
                        I am a Data Scientist and Machine Learning Engineer with more than two years of applied
                        research experience. My work spans Generative AI, RAG pipelines, Knowledge Graphs,
                        Multi Objective Optimization, and full stack ML systems. I have contributed to impactful
                        projects at Mercedes Benz USA, Dell Technologies, Shepherd Center, and JNTUH.
                    </p>

                    <p>
                        I enjoy building intelligent systems that reduce manual effort, improve decision making,
                        and deliver measurable business and clinical value. My technical strengths include Python,
                        LangChain, PyTorch, XGBoost, cloud platforms, and scalable ML architecture.
                    </p>

                    <ul className={styles.socialList} aria-label="Social links">
                        <li className={styles.socialItem}>
                            <a href="mailto:kandulajashwanth@gmail.com" className={styles.socialLink}>Email</a>
                        </li>
                        <li className={styles.socialItem}>
                            <a href="https://github.com/JashwanthK7" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
                        </li>
                        <li className={styles.socialItem}>
                            <a href="https://www.linkedin.com/in/jashwanth-kandula/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}