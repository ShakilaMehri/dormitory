"use client";

import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { userAtom, rememberMeAtom } from "../context/atoms";
import styles from "../styles/userManager.module.css";
import { FaUser } from "react-icons/fa";

const UserManager = () => {
  const [user, setUser] = useAtom(userAtom);
  const [rememberMe, setRememberMe] = useAtom(rememberMeAtom);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        setRememberMe(true);
      }
    } catch (error) {
      console.error("Error loading user from localStorage:", error);
    }
  }, [setUser, setRememberMe]);

  const login = (userName: string, remember: boolean) => {
    const userData = { userName };
    setUser(userData);
    setRememberMe(remember);
    if (remember) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
    alert(`Welcome ${userName}!`);
  };

  const logout = () => {
    setUser(null);
    setRememberMe(false);
    localStorage.removeItem("user");
    alert("You have successfully loged out.");
  };

  return (
    <div className={styles.userManager} 
    onMouseEnter={() => setIsDropdownOpen(true)}
    onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <FaUser className={styles.userIcon}/>
      {isDropdownOpen &&(
        <div className={styles.managerMenu}>
 <p>User: {user?.userName || "Guest"}</p>
      <p>Remember Me: {rememberMe ? "Yes" : "No"}</p>
      <button
        onClick={() => login("Shakila", true)}>
        Login
      </button>
      <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserManager;
