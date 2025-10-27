"use client";
import styles from "./Profile.module.css";
import Navbar from "../Navbar/page";

export default function ProfilePage() {
  return (
    <>
    <Navbar />
    <div className={styles.page}>
    <section className={styles.profilePage}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>A</div>
          <div>
            <h2>Aman Pro</h2>
            <p>Track your mental wellness journey and celebrate your progress</p>
          </div>
        </div>
        <button className={styles.editBtn}>Edit Profile</button>
      </div>

      {/* Stats Section */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <h4>Mood Check-ins</h4>
          <p>12</p>
        </div>
        <div className={styles.statCard}>
          <h4>Daily Journals</h4>
          <p>03</p>
        </div>
        <div className={styles.statCard}>
          <h4>Mindfulness</h4>
          <p>05</p>
        </div>
        <div className={styles.statCard}>
          <h4>Wellness Games</h4>
          <p>07</p>
        </div>
      </div>

      {/* Level Progress */}
      <div className={styles.progressSection}>
        <h3>Level Progress</h3>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "70%" }}></div>
        </div>
        <p>70% to next level</p>
      </div>

      {/* Achievements */}
      <div className={styles.achievements}>
        <h3>Achievements</h3>
        <div className={styles.achievementGrid}>
          <div className={styles.achievementCard}>
            <h4>Focus Guru</h4>
            <p>Completed 5 Mindfulness Sessions</p>
          </div>
          <div className={styles.achievementCard}>
            <h4>Well-being Warrior</h4>
            <p>Maintained a 7-day streak</p>
          </div>
          <div className={styles.achievementCard}>
            <h4>Expression Star</h4>
            <p>Wrote 10 journal entries</p>
          </div>
          <div className={styles.achievementCard}>
            <h4>Routine Keeper</h4>
            <p>Checked in daily for a week</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={styles.activitySection}>
        <h3>Recent Activity</h3>
        <ul>
          <li>🧘 Completed a Mindfulness session</li>
          <li>📓 Wrote in Journal - “Gratitude”</li>
          <li>😊 Logged Mood - “Calm”</li>
          <li>🎮 Played Wellness Game - “Focus Quest”</li>
        </ul>
      </div>

      {/* Settings */}
      <div className={styles.settingsSection}>
        <h3>Settings</h3>
        <div className={styles.settingCard}>
          <h4>Notification Preferences</h4>
          <p>Manage reminders and alerts</p>
        </div>
        <div className={styles.settingCard}>
          <h4>Privacy Control</h4>
          <p>Customize data visibility</p>
        </div>
        <button className={styles.logoutBtn}>Log out</button>
      </div>
    </section>
    </div>
    </>
  );
}
