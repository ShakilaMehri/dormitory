"use client";

import React from 'react';
import { useUser } from '../context/userContext';
import styles from '../styles/protected.module.css';

const ProtectedPage = () => {
    const { user, logout } = useUser();

  return user ?  (
    <div className={styles.container}>
        <h1 className={styles.title}>Welcome, {user.userName}!</h1>
        <p>You are logged in. Enjoy exploring your accoutn.</p>
        <button className={styles.logoutButton} onClick={logout}>
            Logout
        </button>
    </div>
  ) : ( 
    <div className={styles.container}>
        <h1 className={styles.title}>Access Denied</h1>
        <p>Please log in to access this page.</p>
    </div>
  )
}

export default ProtectedPage;