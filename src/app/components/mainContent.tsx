"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/mainContent.module.css";

interface GalleryImage {
  id: number;
  imgSrc: string;
  topic: string;
}

const MainContent = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleImages, setVisibleImages] = useState(2);

  const showMoreImages = () => {
    setVisibleImages((prev) => prev + 4);
  }

  useEffect(() => {
    const fetchGalleryImage = async () => {
      try {
        const response = await fetch("http://localhost:5000/items");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setGalleryImages(data.items);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGalleryImage();
  }, []);
  return (
    <section className={styles.main}>
      {/* Room Gallery */}
      <div className={styles.card}>
        <h2 className={styles.title}>Room Gallery</h2>
        <div className={styles.imageGallery}>
          {loading ? (
            <p>Loading images...</p>
          ) : galleryImages.length > 0 ? (
            galleryImages
              .filter((image) => image.topic === "room")
              .slice(0, visibleImages)
              .map((image) => (
                <img
                  key={image.id}
                  src={image.imgSrc}
                  alt={image.topic || `Image ${image.id}`}
                  className={styles.image}
                  loading="lazy"
                />
              ))
          ) : (
            <p>No images available.</p>
          )}
        </div>
        <p className={styles.description}>
          Explore the variety of rooms and accommodations we offer.
        </p>
        <a href="/rooms" className={styles.link}>
          View More
        </a>
      </div>

      {/* Features and Facilities */}
      <div className={styles.card}>
        <h2 className={styles.title}>Features & Facilities</h2>
        <ul className={styles.list}>
          <li>Spacious Rooms</li>
          <li>High-Speed Wi-Fi</li>
          <li>24/7 Security</li>
          <li>Library & Study Areas</li>
        </ul>
        <a href="/features" className={styles.link}>
          Learn More
        </a>
      </div>

      {/* Testimonials */}
      <div className={styles.card}>
        <h2 className={styles.title}>Testimonials</h2>
        <p className={styles.testimonials}>
          "Living here has been an amazing experience! The facilities are
          top-notch, and the environment is so welcoming."
        </p>
        <p className={styles.testimonials}>
          "I love the study areas and the friendly staff!"
        </p>
        <a href="/testimonials" className={styles.link}>
          Read More
        </a>
      </div>
    </section>
  );
};

export default MainContent;
