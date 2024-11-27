"use client";

import React, { useState } from "react";
import { useUser } from "../context/userContext";
import styles from "../styles/login.module.css";
import Footer from "../components/footer";
import Header from "../components/header";

const Page = () => {
  const { login } = useUser();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userName && password) {
      login(userName, rememberMe);
      alert("Login successful!");
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <>
    <Header/>
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter Your username"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
