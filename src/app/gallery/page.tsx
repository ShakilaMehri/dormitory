"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/gallery.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

interface GalleryImage {
  id: number;
  imgSrc: string;
  topic: string;
}

type FilterType = "all" | "library" | "room" | "dining";

const Page = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>("all");
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:5000/galleryItems");
        if (!response.ok) throw new Error("Failed to fetch gallery images");
        const data = await response.json();
        setImages(data.galleryItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.topic === filter);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Gallery</h1>

        <div className={styles.filters}>
          {["all", "library", "room", "dining"].map((type) => (
            <button
              key={type}
              className={`${styles.filterButton} ${
                filter === type ? styles.active : ""
              }`}
              onClick={() => setFilter(type as FilterType)}
            >
              {type === "all"
                ? "All"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.imageGallery}>
          {loading ? (
            <p>Loading images...</p>
          ) : filteredImages.length > 0 ? (
            filteredImages.map((image) => (
              <img
                key={image.id}
                src={image.imgSrc}
                alt={image.topic}
                className={styles.image}
                loading="lazy"
                onClick={() => setModalImage(image.imgSrc)}
              />
            ))
          ) : (
            <p>No images found for this category.</p>
          )}
        </div>

        {/* Modal */}
        {modalImage && (
          <div className={styles.modal} onClick={() => setModalImage(null)}>
            <div className={styles.modalContent}>
              <img
                src={modalImage}
                alt="Preview"
                className={styles.modalImage}
              />
              <button
                className={styles.closeButton}
                onClick={() => setModalImage(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Page;
