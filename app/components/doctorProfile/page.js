"use client";
import Image from "next/image";
import styles from "./doctor.module.css";
import Navbar from "../Navbar/page";
import { useState } from "react";

export default function BookSession() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      name: "Dr. Manisha Jain",
      rating: "4.6",
      experience: "8+ years",
      specialization: "Clinical Psychologist",
      location: "Rajiv chowk",
      image: "/Ellipse30.png",
      specialisations: ["Anxiety", "Trauma", "CBT"],
      session: ["Video call", "Voice call", "In-person"],
      availability: "Available on Monday–Friday 9:00 am–5:00 pm",
    },
    {
      name: "Dr. Hema Chaudhary",
      rating: "4.4",
      experience: "7 years",
      specialization: "Counselling Psychologist",
      location: "Connaught Place",
      image: "/Ellipse31.png",
      specialisations: ["Stress", "Anxiety", "Mindfulness"],
      session: ["Video call", "In-person"],
      availability: "Available on Tuesday–Saturday 10:00 am–6:00 pm",
    },
    {
      name: "Dr. Aditya Singh",
      rating: "4.2",
      experience: "5 years", 
      specialization: "Psychiatrist",
      location: "Gurgaon",
      image: "/Ellipse32.png",
      specialisations: ["Depression", "Sleep Issues", "CBT"],
      session: ["Voice call", "In-person"],
      availability: "Available on Monday–Friday 11:00 am–4:00 pm",
    },
    {
      name: "Dr. Shreya Sinha",
      rating: "4.2",
      experience: "6 years",
      specialization: "Addiction Counselor",
      location: "Noida",
      image: "/Ellipse33.png",
      specialisations: ["Addiction", "Trauma", "Motivation"],
      session: ["Video call", "Voice call"],
      availability: "Available on Monday–Friday 9:30 am–5:30 pm",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <h2 className={styles.heading}>Book Your Session</h2>
        <p className={styles.subheading}>
          Connect with our certified mental health specialists for personalized
          support and guidance on your wellness journey.
        </p>

        <div className={styles.container}>
          {/* Left Section: Doctor List */}
          <div className={styles.doctorList}>
            <h3 className={styles.sectionTitle}>Choose your Specialist</h3>
            {doctors.map((doc, i) => (
              <div
                key={i}
                className={`${styles.doctorCard} ${
                  selectedDoctor === doc.name ? styles.active : ""
                }`}
                onClick={() => setSelectedDoctor(doc.name)}
              >
                <div className={styles.cardLeft}>
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={70}
                    height={70}
                    className={styles.docImage}
                  />
                </div>

                <div className={styles.cardCenter}>
                  <h4>{doc.name}</h4>
                  <p className={styles.role}>{doc.specialization}</p>

                  <div className={styles.meta}>
                    <span>🕓 {doc.experience}</span>
                    <span>📍 {doc.location}</span>
                  </div>

                  <p className={styles.label}>Specialisations:</p>
                  <div className={styles.specialisation}>
                    {doc.specialisations.map((s, idx) => (
                      <span key={idx}>{s}</span>
                    ))}
                  </div>

                  <p className={styles.label}>Session Type:</p>
                  <div className={styles.sessionType}>
                    {doc.session.map((s, idx) => (
                      <span key={idx}>{s}</span>
                    ))}
                  </div>

                  <p className={styles.availability}>{doc.availability}</p>
                </div>

                <div className={styles.cardRight}>
                  <span className={styles.ratingStar}>⭐</span>
                  <span className={styles.rating}>{doc.rating}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section: Booking Form */}
          <div className={styles.bookingForm}>
            <h3>Book A Session</h3>

            <form>
              <div className={styles.formGroup}>
                <label>Full Name*</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className={styles.formGroup}>
                <label>Email*</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="text" placeholder="Enter your phone number" />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Preferred Date*</label>
                  <input type="date" />
                </div>
                <div className={styles.formGroup}>
                  <label>Preferred Time*</label>
                  <input type="time" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Session Type*</label>
                <select>
                  <option>Select session type</option>
                  <option>Therapy</option>
                  <option>Consultation</option>
                  <option>Follow-up</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Message (Optional)</label>
                <textarea placeholder="Tell us about what you’d like to discuss..."></textarea>
              </div>

              <button type="submit" className={styles.bookBtn}>
                Book Demo Session
              </button>
            </form>

            <div className={styles.expectBox}>
              <h4>What to Expect:</h4>
              <ul>
                <li>30-minute introductory session</li>
                <li>Personalized treatment discussion</li>
                <li>Flexible scheduling options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
