import React from "react";
import styles from "../styles/aboutUs.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Page = () => {
  return (
    <>
    <Header/>
      <section className={styles.aboutUs}>
        <div className={styles.container}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.description}>
            Welcome to our dormitory! We aim to provide students with a safe,
            comfortable, and welcoming environment. Our dormitory is equipped
            with modern amenities, ensuring an enjoyable and productive stay.
            Whether you're here to study, relax, or make lifelong friendships,
            our facilities are designed to meet all your needs.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Modern Facilities</h3>
              <p className={styles.featureDescription}>
                Enjoy high-speed Wi-Fi, 24/7 security, and spacious rooms
                tailored to your needs.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>Convenient Location</h3>
              <p className={styles.featureDescription}>
                Located close to universities and city centers for easy access
                to education and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Page;
