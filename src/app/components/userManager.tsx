"use client";

import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { userAtom, rememberMeAtom } from "../context/atoms";
import styles from "../styles/userManager.module.css";
import { BiUser } from "react-icons/bi";

const UserManager = () => {
  const [user, setUser] = useAtom(userAtom);
  const [rememberMe, setRememberMe] = useAtom(rememberMeAtom);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

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

  const logout = () => {
    setUser(null);
    setRememberMe(false);
    localStorage.removeItem("user");
    alert("You have successfully logged out.");
    router.push("/");
  };

  return (
    <div
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      className={styles.userManagerContainer}
    >
      {user ? (
        <>
          <BiUser className={styles.userIcon} />
          {isDropdownOpen && (
            <div className={styles.userManagerMenu}>
              <p>Welcome, {user.userName}</p>
              <button onClick={logout} className={styles.logoutBtn}>
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className={styles.loginBtn}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default UserManager;
