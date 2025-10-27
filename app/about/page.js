"use client";
import styles from "./about.module.css";
import Navbar from "../components/Navbar/page";

export default function About() {
  return (
    <>
      <Navbar />
      <section className={styles.aboutSection}>
        {/* Header */}
        <div className={styles.header}>
          <h1>
            About <span className={styles.highlight}>EIRA</span>
          </h1>
          <p>
            Empowering students with accessible, gamified, comprehensive mental
            health support through innovation and compassion.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className={styles.missionVision}>
          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>
              To boost mental health care accessibility by:
            </p>
            <ul>
              <li>Providing AI-driven mental health support.</li>
              <li>Encouraging peer-based empathy and connection.</li>
              <li>Reducing mental health stigma.</li>
              <li>Promoting mindfulness and self-care.</li>
              <li>Building a safe, connected student journey.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Our Vision</h3>
            <p>
              A world where every student has easy access to mental health
              resources, emotional balance, and supportive communities for a
              brighter tomorrow.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className={styles.storySection}>
          <h2>Our Story</h2>
          <p>
            EIRA was born from recognizing the critical gap in mental health
            support for students, particularly in academic environments. With
            rising stress and anxiety levels among young learners, EIRA aims to
            build a bridge between technology and emotional well-being.
          </p>
          <p>
            Founded by a team of psychologists, AI enthusiasts, and education
            specialists, we are redefining how mental wellness is approached in
            today’s fast-paced world.
          </p>
          <p>
            EIRA combines cutting-edge AI technology with evidence-based
            therapies like CBT and mindfulness, empowering students to take
            charge of their mental health journey.
          </p>
        </div>

        {/* Core Values */}
        <div className={styles.valuesSection}>
          <div className={styles.valueCard}>
            <h4>Transparency</h4>
            <p>Our tools foster trust and protect user privacy at every step.</p>
          </div>
          <div className={styles.valueCard}>
            <h4>Inclusivity</h4>
            <p>We embrace diversity and believe mental wellness is for all.</p>
          </div>
          <div className={styles.valueCard}>
            <h4>Excellence</h4>
            <p>We uphold the highest standards in research, design, and care.</p>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className={styles.teamSection}>
          <h2>Meet Our Team</h2>
          <p>
            A diverse group of experts with backgrounds in psychology, AI, and
            education working together to create meaningful mental wellness
            experiences.
          </p>

          <div className={styles.teamCards}>
            <div className={styles.teamCard}>
              <div className={styles.icon}>🧠</div>
              <h4>Mental Health Professionals</h4>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.icon}>🤖</div>
              <h4>AI and Technology Experts</h4>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.icon}>🎓</div>
              <h4>Education Specialists</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
