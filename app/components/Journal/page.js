"use client";
import React, { useState } from "react";
import styles from "./Journal.module.css";
import Navbar from "../Navbar/page";

export default function MyJournal() {
  const [showForm, setShowForm] = useState(true);
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

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>My Journal</h1>
          <p className={styles.subtitle}>
            Reflect on your thoughts and emotions
          </p>
        </div>
        <button
          className={styles.newEntryBtn}
          onClick={() => setShowForm(!showForm)}
        >
          + New Entry
        </button>
      </div>

      {/* Form */}
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
            <label className={styles.moodLabel}>Mood Rating {mood}/10</label>
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
            <button className={styles.saveBtn}>Save Entry</button>
            <button
              onClick={() => setShowForm(false)}
              className={styles.cancelBtn}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
