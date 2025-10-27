'use client';

import { useState } from 'react';
import styles from './Login.module.css';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import Navbar from '../Navbar/page';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Welcome to EIRA</h2>
        <p className={styles.subtitle}>
          Sign in to continue your mental wellness journey
        </p>

        <h3 className={styles.formTitle}>Login</h3>
        <p className={styles.formSubtitle}>
          Enter your <strong>credentials</strong> to access your account
        </p>

        <div className={styles.socialButtons}>
          <button className={styles.google}>
            <FcGoogle size={20} />
            Google
          </button>
          <button className={styles.other}>Others</button>
        </div>

        <div className={styles.divider}>
          <span>OR CONTINUE WITH EMAIL</span>
        </div>

        <div className={styles.inputGroup}>
          <label>Email Address<span>*</span></label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Password<span>*</span></label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.options}>
          <label className={styles.remember}>
            <input type="checkbox" /> remember me
          </label>
          <Link href="#" className={styles.forgot}>
            forgot password?
          </Link>
        </div>

        <button className={styles.loginButton}>Login</button>

        <p className={styles.signupText}>
          Don’t have an account?{' '}
          <Link href="/components/Signup" className={styles.signupLink}>
            SIGN UP
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}
