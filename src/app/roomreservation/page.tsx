"use client";

import React, { useState } from "react";
import styles from "../styles/roomReservation.module.css";
import Footer from "../components/footer";
import Header from "../components/header";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    roomType: "",
    startDate: "",
    endDate: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
    setSubmitted(true);
  };
  return (
    <>
    <Header/>
    <section className={styles.roomReservation}>
      <div className={styles.container}>
        <h2 className={styles.title}>Room Reservation</h2>
        {submitted ? (
          <p className={styles.successMessage}>
            Thank you for your reservation, {formData.fullName}! We Will contact
            you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.label}>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="roomType" className={styles.label}>
                Room Type
              </label>
              <select
                name="roomType"
                id="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Select Room Type</option>
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="suite">Suite</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="startDate" className={styles.label}>
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="endDate" className={styles.label}>
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <button type="submit" className={styles.button}>
                Reserve Now
            </button>
          </form>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Page;
