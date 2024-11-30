"use client";

import React, { useState } from "react";
import { useAtom } from "jotai";
import { userAtom, rememberMeAtom } from "../context/atoms";
import styles from "../styles/login.module.css";
import Footer from "../components/footer";
import Header from "../components/header";

const Page = () => {
  const [user, setUser] = useAtom(userAtom);
  const [rememberMe, setRememberMe] = useAtom(rememberMeAtom);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName || !password) {
      alert("Please enter valid credentials!");
      return;
    }

    const userData = {userName};
    setUser(userData);
    setRememberMe(rememberMe);

    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
    alert(`Welcome, ${userName}!`)
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