import React, { useEffect, useRef } from "react";
import styles from './verticalTimeLine.module.css';

const events = [
  { date: "2022", title: "Portafolio personal", description: "" },
  { date: "2024", title: "CRUD", description: "" },
  { date: "2025", title: "API Interoperatibidad", description: "" },
  { date: "2026", title: "Migración de microservicios", description: "" },
];
const Lineadetiempo=()=>{
    const itemsRef = useRef([]);
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);
    return (
      <div className={styles.container}>
      <div className={styles.line}></div>

      {events.map((event, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={styles.item}
        >
          <div className={styles.dot}></div>
          <span className={styles.date}>{event.date}</span>
            
        </div>
      ))}
    </div>
    )
}
export default Lineadetiempo;