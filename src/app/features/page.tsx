import React from 'react';
import styles from '../styles/features.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { BiWifi } from 'react-icons/bi';
import { MdCleaningServices, MdSecurity } from 'react-icons/md';


const Page = () => {
  return (
    <>
    <Header/>
    <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Features & Facilities</h2>
        <div className={styles.featuresContainer}>
            <div className={styles.featureCard}>
                <BiWifi className={styles.featureIcon}/>
                <h3 className={styles.featureTitle}>Free WiFi</h3>
                <p className={styles.featureDescription}>
                Enjoy high-speed internet access in all areas of the dormitory.
                </p>
            </div>
            <div className={styles.featureCard}>
                <MdCleaningServices className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>Daily Cleaning</h3>
                <p className={styles.featureDescription}>
                We ensure clean and hygienic rooms with daily cleaning services.
                </p>
            </div>
            <div className={styles.featureCard}>
                <MdSecurity className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>24/7 Security</h3>
                <p className={styles.featureDescription}>
                Your safety is our priority with round-the-clock security.
                </p>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Page;