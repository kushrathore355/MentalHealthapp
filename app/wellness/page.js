"use client";
import styles from "./wellness.module.css";
import Navbar from "../components/Navbar/page";

export default function WellnessPage() {
  const activities = [
    {
      title: "Connect Four",
      desc: "Enhance your problem-solving skills",
      time: "15 min",
      best: 9,
      streak: 6,
      completed: true,
      btn: "Play Again",
    },
    {
      title: "Crosswords",
      desc: "Classic Brain Trainer",
      time: "5 min",
      best: 6,
      streak: 3,
      completed: false,
      btn: "Play Again",
    },
    {
      title: "Whack a Mole",
      desc: "Let your anger out on those moles by whacking them!",
      time: "8 min",
      best: 8,
      streak: 5,
      completed: true,
      btn: "Play Again",
    },
    {
      title: "Pictionary",
      desc: "Guess words from a drawing",
      time: "6 min",
      best: 7,
      streak: 5,
      completed: false,
      btn: "Start Activity",
    },
    {
      title: "Sudoku",
      desc: "Helps in memory and concentration",
      time: "8 min",
      best: 8,
      streak: 5,
      completed: false,
      btn: "Start Activity",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Stats Section */}
        <div className={styles.stats}>
          <div className={styles.statBox}>
            <span className={styles.statIcon}>🏅</span>
            <h3>230</h3>
            <p>Wellness Points</p>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statIcon}>🔥</span>
            <h3>15</h3>
            <p>Day Streak</p>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statIcon}>🎯</span>
            <h3>4</h3>
            <p>Games Completed</p>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statIcon}>🥇</span>
            <h3>Gold</h3>
            <p>Wellness Level</p>
          </div>
        </div>

        {/* Streak Message */}
        <div className={styles.streakBanner}>
          <p>
            🎉 Congratulations! You’ve maintained a 15-day streak! Keep up the amazing work!
          </p>
          <button className={styles.streakBtn}>Streak Maintained ✅</button>
        </div>

        {/* Activities Section */}
        <h2 className={styles.sectionTitle}>Available Activities</h2>
        <div className={styles.activitiesGrid}>
          {activities.map((a, i) => (
            <div key={i} className={styles.activityCard}>
              <div className={styles.activityHeader}>
                <h3>{a.title}</h3>
                {a.completed && <span className={styles.completed}>✔ Completed</span>}
              </div>
              <p className={styles.desc}>{a.desc}</p>
              <div className={styles.activityStats}>
                <span>⏱ {a.time}</span>
                <span>🏆 Best: {a.best}</span>
                <span>🔥 Streak: {a.streak} days</span>
              </div>
              <button
                className={`${styles.btn} ${
                  a.btn.includes("Play") ? styles.playBtn : styles.startBtn
                }`}
              >
                {a.btn}
              </button>
            </div>
          ))}
        </div>
        <div className={styles.dailyChallenge}>
          <h3>⚡ Daily Challenge</h3>
          <p>
            Complete a 5-minute gratitude meditation. Boost your mood by
            reflecting on three things you’re grateful for today.
          </p>
          <button>Accept Challenge</button>
        </div>

        {/* Wellness Tips */}
        <div className={styles.tipsSection}>
          <h3>💡 Wellness Tips</h3>
          <ul>
            <li>Stay consistent — even 5 minutes daily can make a big difference.</li>
            <li>Try different activities to find what suits your mood.</li>
            <li>Track your progress to stay motivated and see your growth.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
