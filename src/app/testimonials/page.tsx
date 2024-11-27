import React from "react";
import testimonialsData from "../data/testimonials.json";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/testimonials.module.css";

const Page = () => {
  return (
    <>
    <Header/>
      <section className={styles.testimonialsSection}>
        <h2 className={styles.testimonialsTitle}>What Our Students Say</h2>
        <div className={styles.testimonialsContainer}>
         {testimonialsData.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <h4 className={styles.testimonialAuthor}>- {testimonial.author}</h4>
            </div>
         ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Page;
