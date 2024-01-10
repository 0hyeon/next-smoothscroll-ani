import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Intro() {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });
    timeLine
      .from(backgroundImage.current, { clipPath: "inset(15%)" })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);
  return (
    <div className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image
          src={"/images/background.jpeg"}
          fill={true}
          alt="background image"
        />
      </div>
      <div className={styles.introContainer}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image src={"/images/intro.png"} fill={true} alt="background image" />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          Smooth Scroll
        </h1>
      </div>
    </div>
  );
}
