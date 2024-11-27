"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/room.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

interface Room {
  id: number;
  imgSrc: string;
  topic: string;
  description: string;
}

const Page = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://localhost:5000/items");
        if (!response.ok) throw new Error("Failed to fetch room data");
        const data = await response.json();
        const roomData = data.items.filter(
          (item: Room) => item.topic === "room"
        );
        setRooms(roomData);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Rooms</h1>
        <p className={styles.subtitle}>
          Discover our spacious and comfortable rooms designed to meet all your
          needs.
        </p>

        <div className={styles.roomContainer}>
          {loading ? (
            <p>Loading rooms...</p>
          ) : rooms.length > 0 ? (
            rooms.map((room) => (
              <div key={room.id} className={styles.roomCard}>
                <img
                  src={room.imgSrc}
                  alt={` Room ${room.topic}`}
                  className={styles.roomImage}
                  loading="lazy"
                />
                <div className={styles.roomDetails}>
                  <h3 className={styles.roomTitle}>Room {room.id}</h3>
                  <p className={styles.roomDescription}>
                    {room.description ||
                      "A cozy and well-furnished room for your stay."}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No rooms available at the moment.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
