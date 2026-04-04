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
                    <p>Your existing about text here.</p>

                    <ul className={styles.socialList} aria-label="Social links">
                        <li className={styles.socialItem}>
                            <a href="mailto:your.email@gmail.com" className={styles.socialLink}>Email</a>
                        </li>
                        <li className={styles.socialItem}>
                            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
                        </li>
                        <li className={styles.socialItem}>
                            <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}