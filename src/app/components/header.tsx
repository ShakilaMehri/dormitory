import React from "react";
import UserManager from "./userManager";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
        {/* logo Section */}
      <div className={styles.logo}>
        <a href="/">Dormitory</a>
      </div>

        {/* Navigation Links */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
             <li className={styles.navItem}>
             <a href="/aboutus">About Us</a>
             </li>
             <li className={styles.navItem}>
             <a href="/roomreservation">Room Reservation</a>
             </li>
             <li className={styles.navItem}>
             <a href="/feepayment">Fee Payment</a>
             </li>
             <li className={styles.navItem}>
             <a href="/gallery">Gallery</a>
             </li>
        </ul>
      </nav>
      <UserManager/>

      {/* Authentication Links */}
      <div className={styles.authLinks}>
        <a href="/login" className={styles.authLink}>Login</a>
        <a href="/signup" className={styles.authLink + "" + styles.signup}></a>
      </div>

      {/* Mobile Menu Button */}
      <div className={styles.menuButton}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </header>
  );
};

export default Header;
