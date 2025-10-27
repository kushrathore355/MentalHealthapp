'use client';
import { useState } from 'react';
import styles from './signup.module.css';
import { FcGoogle } from 'react-icons/fc';

export default function SignupPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Welcome to EIRA</h1>
        <p>your mental wellness journey starts here</p>
      </div>

      {/* Signup Card */}
      <div className={styles.card}>
        <h2>Sign up</h2>
        <p>Enter your credentials to access your account</p>

        {/* Social Buttons */}
        <div className={styles.socialButtons}>
          <button className={styles.googleBtn}>
            <FcGoogle className={styles.googleIcon} /> Google
          </button>
          <button className={styles.otherBtn}>Others</button>
        </div>

        <div className={styles.divider}>
          <span>OR CONTINUE WITH EMAIL</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Email Address*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />

          <label>Phone No.*</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your Phone No."
            required
          />

          {/* Checkbox */}
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
            />
            <span>
              I agree all <a href="#">terms and conditions</a>
            </span>
          </div>

          <button type="submit" className={styles.nextBtn}>
            Next
          </button>
        </form>

        <p className={styles.loginLink}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
