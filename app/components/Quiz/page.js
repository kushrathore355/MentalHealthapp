'use client';
import React from 'react';
import styles from './Quiz.module.css';
import { FaPlay } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import Navbar from '../Navbar/page';
import { useRouter } from 'next/navigation';

export default function QuizPage() {
  const router = useRouter();
  const quizzes = [
    {
      title: 'Daily Quiz',
      subtitle: 'Quick daily mental health check in',
      color: 'linear-gradient(90deg, #00c6ff, #0072ff)',
    },
    {
      title: 'PHQ-9 Test',
      subtitle: 'Depression screening questionnaire',
      color: 'linear-gradient(90deg, #00b09b, #96c93d)',
    },
    {
      title: 'Well-Being',
      subtitle: 'Comprehensive wellness assessment',
      color: 'linear-gradient(90deg, #a445b2, #d41872)',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.mainCard}>
        <div className={styles.backIcon} onClick={() => router.push('/services')}
>
          <IoArrowBack size={25} color="#fff" />
        </div>

        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className={styles.quizCard}
            style={{ background: quiz.color }}
          >
            <div className={styles.quizText}>
              <h2>{quiz.title}</h2>
              <p>{quiz.subtitle}</p>
            </div>
            <button className={styles.quizButton}>
              <FaPlay className={styles.playIcon} /> Start Quiz
            </button>
          </div>
        ))}
      </div>

      <div className={styles.aboutSection}>
        <h3>About These Assessments</h3>
        <div className={styles.aboutCards}>
          <div>
            <h4>Daily Quiz</h4>
            <p>
              A quick check-in to track your daily mood and mental state,
              perfect for building healthy monitoring habits.
            </p>
          </div>
          <div>
            <h4>PHQ-9 Test</h4>
            <p>
              A standardized depression screening questionnaire used by
              healthcare professionals worldwide.
            </p>
          </div>
          <div>
            <h4>Well-being Assessment</h4>
            <p>
              Comprehensive evaluation covering aspects of mental wellness,
              including stress, anxiety, and life satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
