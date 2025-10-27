'use client';
import Navbar from '../Navbar/page';
import styles from './Peer.module.css';
import { FaUsers, FaComments, FaHeart, FaClock, FaUserCircle, FaCommentDots, FaEye, FaCheckCircle } from 'react-icons/fa';

export default function PeerGroups() {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Peer <span>Groups</span></h1>
        <p className={styles.subtitle}>You are not alone in this. Connect with someone who understands your pain and share experience.</p>
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.statBox}>
          <img src="/group1.png" alt="group" />
          <h3>5,917</h3>
          <p>Active Members</p>
        </div>
        <div className={styles.statBox}>
          <img src="/image15.png" alt="" />
          <h3>12,739</h3>
          <p>Support Posts</p>
        </div>
        <div className={styles.statBox}>
        <img src="/image23.png" alt="" />
          <h3>98.2%</h3>
          <p>Positive Feedback</p>
        </div>
        <div className={styles.statBox}>
            <img src="/image24.png" alt="" />
          <h3>24/7</h3>
          <p>Moderation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        {/* Left Section - Groups */}
        <div className={styles.groupsSection}>
          <div className={styles.groupsHeader}>
            <h2>Support groups</h2>
            <button className={styles.createBtn}>+ Create Groups</button>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            {['All Groups', 'Anxiety', 'Academics', 'Wellness', 'Depression'].map((tab, i) => (
              <button key={i} className={`${styles.tabBtn} ${i===0 ? styles.activeTab : ''}`}>{tab}</button>
            ))}
          </div>

          {/* Group Cards */}
          <div className={styles.groupCard}>
            <div className={styles.cardTop}>
              <h3>Anxiety Support Circle <span className={`${styles.tag} ${styles.anxiety}`}>Anxiety</span></h3>
              <p>A safe space for students dealing with anxiety to share experiences and coping strategies.</p>
            </div>
            <div className={styles.cardBottom}>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/group1.png" alt="group" style={{width:'20px'}} /> 234 members</p>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/image15.png" alt="" style={{width:'20px'}} /> 1456 posts</p>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/image30.png" alt="" style={{width:'20px'}} /> 2 hours ago</p>
              <button className={styles.joinBtn}>Join Group</button>
            </div>
          </div>

          <div className={styles.groupCard}>
            <div className={styles.cardTop}>
              <h3>College Life Balance <span className={`${styles.tag} ${styles.academic}`}>Academic</span></h3>
              <p>Discussing work-life balance, time management, and academic stress with fellow students.</p>
            </div>
            <div className={styles.cardBottom}>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/group1.png" alt="group" style={{width:'20px'}} /> 189 members</p>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/image15.png" alt="" style={{width:'20px'}} /> 892 posts</p>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/image30.png" alt="" style={{width:'20px'}} /> 1 hour ago</p>
              <button className={styles.joinBtn}>Join Group</button>
            </div>
          </div>

          <div className={styles.groupCard}>
            <div className={styles.cardTop}>
              <h3>Depression Recovery <span className={`${styles.tag} ${styles.depression}`}>Depression</span></h3>
              <p>Supporting each other through depression recovery with understanding and compassion.</p>
            </div>
            <div className={styles.cardBottom}>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/group1.png" alt="group" style={{width:'20px'}} /> 200 members</p>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/image15.png" alt="" style={{width:'20px'}} /> 1000 posts</p>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/image30.png" alt="" style={{width:'20px'}} /> 3 hours ago</p>
              <button className={styles.joinBtn}>Join Group</button>
            </div>
          </div>

          <div className={styles.groupCard}>
            <div className={styles.cardTop}>
              <h3>Mindfulness & Meditation <span className={`${styles.tag} ${styles.wellness}`}>Wellness</span></h3>
              <p>Share meditation experiences, mindfulness tips & spiritual wellness practices.</p>
            </div>
            <div className={styles.cardBottom}>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/group1.png" alt="group" style={{width:'20px'}} /> 158 members</p>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/image15.png" alt="" style={{width:'20px'}} /> 200 posts</p>
              <p style={{display:'flex',alignItems:'center',gap:'10px'}}><img src="/image30.png" alt="" style={{width:'20px'}} /> 4 hours ago</p>
              <button className={styles.joinBtn}>Join Group</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* Recent Posts */}
          <div className={styles.recentPosts}>
            <h2>Recent Posts</h2>
            <div className={styles.postItem}>
              <h4>How I manage exam anxiety</h4>
              <p>Anonymous Student • Anxiety Support Circle</p>
              <div className={styles.postStats}>
                <FaCommentDots /> 23 <FaEye /> 45
              </div>
            </div>
            <div className={styles.postItem}>
              <h4>Finding balance in final year</h4>
              <p>Senior Student • College Life Balance</p>
              <div className={styles.postStats}>
                <FaCommentDots /> 18 <FaEye /> 32
              </div>
            </div>
            <div className={styles.postItem}>
              <h4>Morning meditation routine</h4>
              <p>Wellness Advocate • Mindfulness & Meditation</p>
              <div className={styles.postStats}>
                <FaCommentDots /> 10 <FaEye /> 20
              </div>
            </div>
          </div>

          {/* Community Guidelines */}
          <div className={styles.guidelines}>
            <h2>Community Guidelines</h2>
            <ul>
              <li>Be respectful and supportive to all members</li>
              <li>Maintain anonymity and privacy</li>
              <li>No medical advice – seek professional help</li>
              <li>Report inappropriate content immediately</li>
            </ul>
          </div>

          {/* Crisis Support */}
          <div className={styles.crisis}>
            <h2>Need Immediate Help?</h2>
            <p>If you are in crisis, don’t wait. Get immediate professional support.</p>
            <button className={styles.crisisBtn}>Crisis Support</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
