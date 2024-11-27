import React from 'react';
import styles from '../styles/heroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.content}>
            <h1 className={styles.title}>Welcome to Our Girls' Dormitory</h1>
            <p className={styles.description}>
            Experience a safe, comfortable, and welcoming environment. Book your room or explore our facilities today!
            </p>
            <a href="/roomreservation" className={styles.ctaButton}>
                Reserve Your Room
            </a>
        </div>
        <div className={styles.image}>
        <img src="/images/Dorm.jpg" alt="Dormitory Hero" className={styles.heroImage}/>
        </div>
    </section>
  )
}

export default HeroSection;