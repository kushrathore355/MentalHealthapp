"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Signup from "./components/Signup/page"
import Navbar from "./components/Navbar/page"
import Login from "./components/Login/page"
import Link from "next/link";


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
    <>
    <Signup/>
    <Navbar/>
    <Login/>
    <div className={styles.page}>
      {/* Top Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/Ellipse13.png"
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
          <Link href="/components/Profile" className={styles.profileLink}>
            <div className={styles.profileIcon}>👤</div>
            <span>Your profile</span>
          </Link>
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
      {/* Quick Actions Section */}
      <section className={styles.quickActions}>
        <h2>Quick Actions</h2>
        <div className={styles.actionGrid}>
          <div className={styles.actionCard}>📝 Write Journal</div>
          <div className={styles.actionCard}>💬 AI Support</div>
          <div className={styles.actionCard}>👥 Peer Groups</div>
          <div className={styles.actionCard}>🎮 Wellness Games</div>
        </div>
      </section>

      {/* Your Streaks Section */}
      <section className={styles.streaks}>
        <h2>Your Streaks</h2>
        <div className={styles.streakGrid}>
          <div className={styles.streakCard}>
            <h3>Mood check-in</h3>
            <p>12 days</p>
            <div className={styles.progress}><div style={{ width: "80%" }} /></div>
            <span>Keep writing about your feelings ✨</span>
          </div>
          <div className={styles.streakCard}>
            <h3>Daily journal</h3>
            <p>03 days</p>
            <div className={styles.progress}><div style={{ width: "30%" }} /></div>
            <span>You’re building consistency 💪</span>
          </div>
          <div className={styles.streakCard}>
            <h3>Mindfulness</h3>
            <p>05 days</p>
            <div className={styles.progress}><div style={{ width: "50%" }} /></div>
            <span>Practice mindful exercises 🧘</span>
          </div>
          <div className={styles.streakCard}>
            <h3>Wellness Games</h3>
            <p>07 days</p>
            <div className={styles.progress}><div style={{ width: "70%" }} /></div>
            <span>Engage in mental health games 🎯</span>
          </div>
        </div>
      </section>

      {/* This Week’s Progress */}
      {/* <section className={styles.weekProgress}>
        <div>
          <h4>This Week’s Progress</h4>
          <div className={styles.progressStats}>
            <span>12 Mood check-in</span>
            <span>03 Daily Journal</span>
            <span>05 Mindfulness</span>
            <span>07 Wellness Games</span>
          </div>
        </div>
      </section>*/}

      {/* 
      <section className={styles.bottomSection}>
        <div className={styles.leaderboard}>
          <h3>🏆 Community Leaderboard</h3>
          <ul>
            <li>1️⃣ Priya — 2,480 pts</li>
            <li>2️⃣ Sohya — 2,370 pts</li>
            <li>3️⃣ Parag — 2,330 pts</li>
            <li>4️⃣ YOU — 2,300 pts</li>
            <li>5️⃣ Aman — 2,290 pts</li>
          </ul>
        </div>

        <div className={styles.rewards}>
          <h3>🎁 Rewards & Achievements</h3>
          <ul>
            <li>🧘 Yoga Mat — 450 pts</li>
            <li>🧠 Meditation Cushion — 300 pts</li>
            <li>📓 Wellness Journal — 250 pts</li>
            <li>🎮 Game Access — 200 pts</li>
          </ul>
        </div>
      </section>
       */}
       {/* This Week’s Progress */}
            <section className={styles.weekProgress}>
              <h4>This Week’s Progress</h4>
              <div className={styles.progressStats}>
                <div>
                  <h3>12</h3>
                  <p>Mood check-in</p>
                </div>
                <div>
                  <h3>03</h3>
                  <p>Daily Journal</p>
                </div>
                <div>
                  <h3>05</h3>
                  <p>Mindfulness</p>
                </div>
                <div>
                  <h3>07</h3>
                  <p>Wellness Games</p>
                </div>
              </div>
            </section>

            {/* Leaderboard & Rewards */}
            <section className={styles.bottomSection}>
              {/* Leaderboard */}
              <div className={styles.leaderboard}>
                <div className={styles.header}>
                  <h3>🏆 Community Leaderboard</h3>
                </div>
                <ul>
                  <li className={styles.rank1}>
                    <span>👑 Priya</span>
                    <span>2,480</span>
                  </li>
                  <li>
                    <span>🥈 Sohya</span>
                    <span>2,370</span>
                  </li>
                  <li>
                    <span>🥉 Parag</span>
                    <span>2,330</span>
                  </li>
                  <li className={styles.you}>
                    <span>🙋 YOU</span>
                    <span>2,300</span>
                  </li>
                  <li>
                    <span>⭐ Sneha</span>
                    <span>2,290</span>
                  </li>
                </ul>
              </div>

              {/* Rewards */}
              <div className={styles.rewards}>
                <div className={styles.header}>
                  <h3>🎁 Rewards & Achievements</h3>
                  <span className={styles.points}>2420</span>
                </div>

                <ul>
                  <li>
                    <div>
                      <h4>Stress Quiz</h4>
                      <p>Wellness</p>
                    </div>
                    <span>500 pts</span>
                  </li>
                  <li>
                    <div>
                      <h4>Meditation Cushion</h4>
                      <p>Premium</p>
                    </div>
                    <span>300 pts</span>
                  </li>
                  <li>
                    <div>
                      <h4>Wellness Journal</h4>
                      <p>Writing</p>
                    </div>
                    <span>250 pts</span>
                  </li>
                  <li>
                    <div>
                      <h4>Yoga Mat</h4>
                      <p>Physical</p>
                    </div>
                    <span>200 pts</span>
                  </li>
                </ul>

                <div className={styles.footerNote}>
                  <p>💡 Complete daily activities to earn more points and unlock rewards!</p>
                </div>
              </div>

            </section>
            <section className={styles.weekProgress}>
              <h4 style={{color:'white'}}>“Every small step you take towards better mental health matters. You’re doing great by being here today”</h4>
              <h1 style={{color:'#38bdf8'}}>Your EIRA Support System</h1>
            </section>



    </div>
    </>
    
  );
}
