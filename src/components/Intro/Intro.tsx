import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage}>
        <Image
          src={"/images/background.jpeg"}
          fill={true}
          alt="background image"
        />
      </div>
      <div className={styles.introContainer}>
        <div data-scroll data-scroll-speed="0.3" className={styles.introImage}>
          <Image src={"/images/intro.png"} fill={true} alt="background image" />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          Smooth Scroll
        </h1>
      </div>
    </div>
  );
}
