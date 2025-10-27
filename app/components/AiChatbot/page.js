"use client";
import styles from "./Ai.module.css";
import { useState } from "react";
import { FaPaperclip, FaLink, FaMicrophone } from "react-icons/fa";
import Navbar from "../Navbar/page";

export default function Home() {
  const [showLanguages, setShowLanguages] = useState(false);
  const languages = [
    "Hindi",
    "English",
    "Kashmiri",
    "Urdu",
    "Bengali",
    "Tamil",
    "Telugu",
    "Marathi",
    "Gujarati",
    "Punjabi",
    "more...",
  ];

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.main}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarLogo}>EIRA</div>
          <div className={styles.sidebarSection}>
            <p className={styles.sidebarItem}>🔍 Search Chats</p>
            <p className={styles.sidebarItem}>📚 Library</p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.chats}>
            <h4>Chats</h4>
            <ul>
              <li>What is Music Therapy?</li>
              <li>What are Mental health yoga poses?</li>
              <li>How can I cure myself at home..</li>
              <li>How can I manage my anxiety right now?</li>
              <li>I'm having trouble sleeping. Any advice?</li>
              <li>I feel lonely. Can you talk with me?</li>
            </ul>
          </div>
        </aside>

        {/* Chat Area */}
        <section className={styles.chatArea}>
          <div className={styles.languageSelect}>
            <span>Choose your Language</span>
            <div
              className={styles.customSelect}
              onClick={() => setShowLanguages(!showLanguages)}
            >
              <div className={styles.selectHeader}>Select ▾</div>
              {showLanguages && (
                <ul className={styles.dropdown}>
                  {languages.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <h1 className={styles.welcome}>Welcome to</h1>
          <h1 className={styles.logoText}>
            🌿 <span className={styles.brand}>EIRA</span> Chatbot
          </h1>

          {/* Chat Input Box */}
          <div className={styles.chatBox}>
            <input
              type="text"
              placeholder="Ask your query...."
              className={styles.input}
            />
            <div className={styles.chatActions}>
              <button className={styles.attach}>
                <FaPaperclip /> Attach files
              </button>
              <button className={styles.resource}>
                <FaLink /> Resource links
              </button>
            </div>
            <button className={styles.mic}>
              <FaMicrophone />
            </button>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
