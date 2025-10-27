"use client";
import styles from "./service.module.css";
import Navbar from "../components/Navbar/page";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <section className={styles.servicesSection}>
          <h2 className={styles.title}>OUR SERVICES</h2>
          <p className={styles.subtitle}>
            Empowering your mental wellness through AI, community, and expert support.
          </p>

          {/* Service Cards */}
          <div className={styles.cardGrid}>
            {[
              { title: "AI Companion", desc: "Personalized mental wellness conversations, anytime.", link: "/components/AiChatbot"},
              { title: "Peer Groups", desc: "Join communities that share and support each other.",link: "/components/PeerGroup" },
              { title: "Gamified Wellness", desc: "Achieve your goals through fun, interactive activities.", link: "/wellness" },
              { title: "Multilingual", desc: "Support available in multiple Indian languages." },
              { title: "Emergency SOS", desc: "Reach immediate help when you need it most." },
              { title: "Doctor Support", desc: "Connect with certified wellness professionals." },
              { title: "Quiz", desc: "Understand your emotions with guided mental health quizzes.",link: "/components/Quiz" },
            ].map((service, index) => (
              <div
                key={index}
                className={styles.card}
              >
                {service.link ? (
                  <Link href={service.link} className={styles.cardLink}>
                    <div className={styles.icon}>💠</div>
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </Link>
                ) : (
                  <>
                    <div className={styles.icon}>💠</div>
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Future Services */}
          <h2 className={styles.futureTitle}>Future Goals/Services</h2>
          <div className={styles.cardGrid}>
            {[
              { title: "Music for Stress Relief", desc: "Soothing audio sessions to relax your mind." },
              { title: "Adolescent Support", desc: "Dedicated programs for young individuals." },
              { title: "Future Partnerships", desc: "Collaborating with mental health professionals." },
              { title: "Video Expressions", desc: "Express your thoughts through creative media." },
              { title: "Wearables Integration", desc: "Track wellness through wearable devices." },
              { title: "CBT & Mindfulness", desc: "Science-based mental wellness programs." },
            ].map((goal, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>🌟</div>
                <h4>{goal.title}</h4>
                <p>{goal.desc}</p>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div className={styles.howItWorks}>
            <h3>How It Works</h3>
            <p>Simple steps to get the support you need</p>
            <div className={styles.steps}>
              <div className={styles.step}>
                <h4>🧠 Assessment</h4>
                <p>Start with a quick mental wellness assessment.</p>
              </div>
              <div className={styles.step}>
                <h4>🎯 Personalization</h4>
                <p>Get customized recommendations and guidance.</p>
              </div>
              <div className={styles.step}>
                <h4>💬 Support</h4>
                <p>Access tools, experts, and community help.</p>
              </div>
            </div>
          </div>

          {/* Call To Action */}
          <div className={styles.cta}>
            <h3>Ready to Get Started?</h3>
            <button className={styles.ctaBtn}>Book your Session</button>
          </div>
        </section>
      </div>
    </>
  );
}
