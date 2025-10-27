"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function HomePage() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    "Home",
    "Services",
    "Support",
    "Journal",
    "Campus",
    "About us",
  ];

  return (
    <div className={styles.page}>
      {/* Top Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="EIRA logo"
            width={35}
            height={35}
            className={styles.logoImg}
          />
          <span className={styles.logoText}>EIRA</span>
        </div>

        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li
              key={item}
              className={`${styles.menuItem} ${
                active === item ? styles.active : ""
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.ctaBtn}>Get started</button>
        </div>
      </nav>

      {/* Dashboard Hero */}
      <section className={styles.hero}>
        {/* Left side */}
        <div className={styles.heroLeft}>
          <div className={styles.profile}>
            <div className={styles.profileIcon}>👤</div>
            <span>Your profile</span>
          </div>
        </div>

        {/* Right side */}
        <div className={styles.heroRight}>
          <h1 className={styles.title}>
            <span>Your Mental Health</span>
            <br />
            Journey Starts Here
          </h1>

          <p className={styles.subtitle}>Mindful way to a better you</p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>Book a Demo</button>
            <button className={styles.secondaryBtn}>Take a Quiz</button>
            <button className={styles.primaryBtn}>Chat with AI</button>
          </div>

          <div className={styles.features}>
            <span>🔒 Privacy first</span>
            <span>🕒 24/7 support</span>
            <span>🌐 Multilingual</span>
            <span>📴 Offline-ready</span>
          </div>
        </div>
      </section>
      {/* Mood Section */}
      <section className={styles.moodSection}>
        <div className={styles.moodLeft}>
          <h2 className={styles.moodTitle}>How’s your mood today?</h2>
          <p className={styles.moodSubtitle}>
            
          </p>
        </div>

        <div className={styles.moodRight}>
          <div className={styles.moodOption}>
            <span>😁</span>
            <p>Excited</p>
          </div>
          <div className={styles.moodOption}>
            <span>😊</span>
            <p>Happy</p>
          </div>
          <div className={styles.moodOption}>
            <span>😐</span>
            <p>Neutral</p>
          </div>
          <div className={styles.moodOption}>
            <span>😔</span>
            <p>Sad</p>
          </div>
          <div className={styles.moodOption}>
            <span>😫</span>
            <p>Tired</p>
          </div>
          <div className={styles.moodOption}>
            <span>😫</span>
            <p>Tired</p>
          </div>
          <div className={styles.moodOption}>
            <span>😫</span>
            <p>Tired</p>
          </div>
          <div className={styles.moodOption}>
            <span>😫</span>
            <p>Tired</p>
          </div>
        </div>
      </section>


    </div>
  );
}
