"use client";
import React, { useState } from "react";
import styles from "./Journal.module.css";
import Navbar from "../Navbar/page";
import { FiPlus } from "react-icons/fi";

export default function MyJournal() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState(5);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleNewEntry = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* ------- Journal Main Page ------- */}
        {!showForm && (
          <div className={styles.main}>
            <div className={styles.header}>
              <div className={styles.textSection}>
                <h1 className={styles.title}>
                  My <span>Journal</span>
                </h1>
                <p className={styles.subtitle}>
                  Reflect on your thoughts and emotions
                </p>
              </div>
              <button className={styles.newEntry} onClick={handleNewEntry}>
                <FiPlus size={18} />
                <span>New Entry</span>
              </button>
            </div>

            <div className={styles.card}>
              <button
                className={styles.entryButton}
                onClick={handleNewEntry}
              >
                Make your first entry
              </button>
              <p className={styles.text}>
                What is on your mind? What are you thinking? How was your day?
              </p>
            </div>
          </div>
        )}

        {/* ------- Journal Form Page ------- */}
        {showForm && (
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>📝 New Journal Entry</h2>

            {/* Title */}
            <input
              type="text"
              placeholder="Enter Title (Optional)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
            />

            {/* Entry */}
            <textarea
              placeholder="What’s on your mind today? Write about your thoughts, feelings & experiences of the day."
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              className={styles.textarea}
            />

            {/* Mood */}
            <div className={styles.moodSection}>
              <label className={styles.moodLabel}>
                Mood Rating {mood}/10
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className={styles.slider}
              />
            </div>

            {/* Tags */}
            <form onSubmit={handleAddTag} className={styles.tagForm}>
              <input
                type="text"
                placeholder="Add tags (press enter)"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className={styles.inputTag}
              />
              <button type="submit" className={styles.addBtn}>
                ADD
              </button>
            </form>

            <div className={styles.tagsList}>
              {tags.map((tag, i) => (
                <span key={i} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className={styles.buttons}>
              <button className={styles.saveBtn} onClick={handleCancel}  >Save Entry</button>
              <button onClick={handleCancel} className={styles.cancelBtn}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
