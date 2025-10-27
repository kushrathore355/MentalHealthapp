"use client";
import styles from "./Campus.module.css";
import Link from "next/link";
import Navbar from "../Navbar/page";

export default function CampusIntegration() {
  return (
    <>
    <Navbar />
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <h1>
          Campus <span className={styles.gradient}>Integration</span>
        </h1>
        <p>
          Comprehensive mental health support designed for your campus community
        </p>
      </section>

      {/* Student Portal */}
      <section className={styles.portalSection}>
        <div className={styles.portalContent}>
          <div>
            <h2>Student Portal</h2>
            <p>
              Access personalized resources tailored to your campus
              specializations.
            </p>
            <ul>
              <li>🎓 Campus-specific resources</li>
              <li>💬 Personalized support network</li>
              <li>🧘 Mindfulness and therapy sessions</li>
            </ul>

            <div className={styles.portalBtns}>
              <Link href="/#">
                <button className={styles.loginBtn}>Student Login</button>
              </Link>
              <button className={styles.createBtn}>Create Account</button>
            </div>
          </div>

          <div className={styles.portalImage}>
            <div className={styles.mockBrowser}>
              <div className={styles.browserBar}>
                <span style={{backgroundColor:'lightgreen'}}></span><span style={{backgroundColor:'orange'}}></span><span style={{backgroundColor:'lightpink'}}></span>
              </div>
              <div className={styles.browserContent}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Wellness Events */}
      <section className={styles.eventsSection}>
        <h2>Campus Wellness Events</h2>
        <div className={styles.eventsGrid}>
          <div className={styles.eventCard}>
            <h3>🗓 Weekly Workshops</h3>
            <p>Interactive sessions focused on emotional resilience and wellbeing.</p>
            <ul>
              <li>Guided meditation classes</li>
              <li>Stress management activities</li>
              <li>Mindful breathing exercises</li>
            </ul>
          </div>

          <div className={styles.eventCard}>
            <h3>🎤 Expert Webinars</h3>
            <p>Join live discussions with leading mental health professionals.</p>
            <ul>
              <li>Latest psychological trends</li>
              <li>Q&A with specialists</li>
              <li>Career growth and wellness</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Why Campus Integration */}
    <section className={styles.whySection}>
    <h2>Why Campus Integration?</h2>
    <div className={styles.whyContainer}>
        <div className={styles.whyItem}>
        <div className={`${styles.iconCircle} ${styles.iconTeal}`}>
            👥
        </div>
        <h4>Peer Groups</h4>
        <p>
            Connect with your campus community and build
            lasting support networks.
        </p>
        </div>

        <div className={styles.whyItem}>
        <div className={`${styles.iconCircle} ${styles.iconPurple}`}>
            🛡️
        </div>
        <h4>Tailored Resources</h4>
        <p>
            Access resources specifically designed for your
            campus culture and needs.
        </p>
        </div>

        <div className={styles.whyItem}>
        <div className={`${styles.iconCircle} ${styles.iconGreen}`}>
            🎓
        </div>
        <h4>Academic Success</h4>
        <p>
            Integrate mental wellness and academic pursuit
            for holistic success.
        </p>
        </div>
    </div>
    </section>

    </div>
    </>
  );
}
