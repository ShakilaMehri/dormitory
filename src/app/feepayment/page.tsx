"use client";

import React, { useState } from "react";
import styles from "../styles/feePayment.module.css";
import Footer from "../components/footer";
import Header from "../components/header";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    paymentType: "",
    amount: "",
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
    console.log("Payment Date:", formData);
    setSubmitted(true);
  };

  return (
    <>
    <Header/>
    <section className={styles.feePayment}>
      <div className={styles.container}>
        <h2 className={styles.title}>Fee Payment</h2>
        {submitted ? (
          <p className={styles.successMessage}>
            Thank you, {formData.fullName}! Your payment of ${formData.amount}{" "}
            has been processed.
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
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="paymentType" className={styles.label}>
                Payment Type
              </label>
              <select
                name="paymentType"
                id="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Select Payment Type</option>
                <option value="room_fee">Room Fee</option>
                <option value="maintenance_fee">Maintenance Fee</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="amount" className={styles.label}>
                Amount ($)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className={styles.input}
                required
                min="1"
              />
            </div>

            <button type="submit" className={styles.button}>
                Pay Now
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
