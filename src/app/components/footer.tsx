import React from "react";
import styles from "../styles/footer.module.css";
import { BsGoogle, BsInstagram, BsTelegram } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About Us */}
        <div className={styles.section}>
          <h4 className={styles.title}>About Us</h4>
          <p className={styles.text}>
            We provide safe and comfortable accommodation for students. Our
            dormitory is equipped with modern facilities to ensure a pleasant
            stay.
          </p>
        </div>

        {/* Links */}
        <div className={styles.section}>
          <h4 className={styles.title}>Quicks Links</h4>
          <ul className={styles.list}>
            <li>
              <a href="/" className={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="/roomreservation" className={styles.link}>
                Room Reservation
              </a>
            </li>
            <li>
              <a href="/feepayment" className={styles.link}>
                Fee Payment
              </a>
            </li>
            <li>
              <a href="/gallery" className={styles.link}>
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.section}>
          <h4 className={styles.title}>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}><BsGoogle/></a>
            <a href="#" className={styles.icon}><BsInstagram/></a>
            <a href="#" className={styles.icon}><BsTelegram/></a>
          </div>
        </div>
      </div>

      {/* CopyRight */}
      <div className={styles.copyRight}>
        <p>© 2024 Dormitory. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
