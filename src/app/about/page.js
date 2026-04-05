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
                        width={240}
                        height={240}
                        priority
                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                </div>

                <div className={styles.aboutText}>
                    <p>
                        I am an AI Engineer and Data Scientist based in Atlanta, GA. I have over two years of applied research experience building end to end Machine Learning systems. My expertise spans Generative AI, Knowledge Graphs, and Multi Objective Optimization.
                    </p>

                    <p>
                        Raw data is the recipe, and machine learning is the chef. I have built scalable AI solutions for Mercedes Benz USA, Dell Technologies, and Shepherd Center. My core technical stack includes Python, SQL, PyTorch, and LangChain.
                    </p>

                    <ul className={styles.socialList} aria-label="Social links">
                        <li className={styles.socialItem}>
                            <a
                                href="mailto:kandulajashwanth@gmail.com"
                                className={styles.socialLink}
                                aria-label="Email Jashwanth Kandula"
                            >
                                <Image
                                    src="/icons/email.svg"
                                    alt="Email icon"
                                    width={20}
                                    height={20}
                                    priority={false}
                                />
                                <span className={styles.socialText}>Email</span>
                            </a>
                        </li>

                        <li className={styles.socialItem}>
                            <a
                                href="https://github.com/JashwanthK7"
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit Jashwanth Kandula on GitHub"
                            >
                                <Image
                                    src="/icons/github.svg"
                                    alt="GitHub icon"
                                    width={20}
                                    height={20}
                                    priority={false}
                                />
                                <span className={styles.socialText}>GitHub</span>
                            </a>
                        </li>

                        <li className={styles.socialItem}>
                            <a
                                href="https://www.linkedin.com/in/jashwanth-kandula/"
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit Jashwanth Kandula on LinkedIn"
                            >
                                <Image
                                    src="/icons/linkedin.svg"
                                    alt="LinkedIn icon"
                                    width={20}
                                    height={20}
                                    priority={false}
                                />
                                <span className={styles.socialText}>LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}