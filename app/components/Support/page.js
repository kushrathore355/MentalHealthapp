"use client";
import React from "react";
import styles from "./Support.module.css";
import Navbar from "../Navbar/page";

export default function Support() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            24/7 <span>Support</span>
          </h1>
          <p className={styles.subtitle}>
            We’re here for you around the clock. Get immediate help when you
            need it most.
          </p>
        </div>

        {/* Emergency Support */}
        <div className={styles.emergencyBox}>
          <h2 className={styles.emergencyTitle}>🚨 Emergency Support</h2>
          <p className={styles.emergencyText}>
            If you’re experiencing a mental health crisis or having thoughts of
            self harm, please reach out immediately.
          </p>
          <div className={styles.emergencyBtns}>
            <button className={styles.emergencyBtnRed}>📞 Emergency helpline</button>
            <button className={styles.emergencyBtnOrange}>💬 Crisis Chat</button>
          </div>
        </div>

        {/* Helpline + Chat */}
        <div className={styles.cardsRow}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>🕒 24/7 Helpline</h3>
            <p className={styles.cardText}>
              Speak with trained mental health professionals anytime, day or
              night.
            </p>
            <ul>
              <li>✅ Available 24/7</li>
              <li>🔒 Confined & private</li>
              <li>🌐 Multilingual support</li>
            </ul>
            <button className={styles.callNow}>Call Now</button>
          </div>

          <div className={styles.cardPurple}>
            <h3 className={styles.cardTitle}>💬 Live Chat Support</h3>
            <p className={styles.cardText}>
              Connect with Support specialists through our secure chat platform.
            </p>
            <ul>
              <li>🎓 Trained Counselors</li>
              <li>🔐 Encrypted Messages</li>
              <li>🙈 Anonymous Option</li>
            </ul>
            <button className={styles.startChat}>Start Chat</button>
          </div>
        </div>

        {/* Need Help Section */}
        <div className={styles.helpBox}>
          <h2 className={styles.helpTitle}>Need Help Right Now?</h2>
          <p className={styles.helpText}>
            Don’t hesitate to reach out. We’re here to support you every step of
            the way.
          </p>
          <div className={styles.helpBtns}>
            <button className={styles.immediateBtn}>Get Immediate Help</button>
            <button className={styles.scheduleBtn}>Schedule Appointment</button>
          </div>
        </div>

        {/* Helpline Cards */}
        <div className={styles.bottomRow}>
          <div className={styles.bottomCard}>
            <h4>National Suicide Prevention Helpline</h4>
            <p className={styles.helplineNumber}>📞 108</p>
            <p>🕒 24/7</p>
            <button className={styles.callNowSmall}>Call Now</button>
          </div>

          <div className={styles.bottomCard}>
            <h4>Mental Health Helpline</h4>
            <p className={styles.helplineNumber}>📞 1800-000-000</p>
            <p>🕒 24/7</p>
            <button className={styles.callNowSmall}>Call Now</button>
          </div>

          <div className={styles.bottomCard}>
            <h4>EIRA Support</h4>
            <p className={styles.helplineNumber}>📞 1800-0761-91</p>
            <p>🕒 24/7</p>
            <button className={styles.callNowSmall}>Call Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
