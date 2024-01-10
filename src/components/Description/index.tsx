import React, { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.scss";
export default function index() {
  const phrases = [
    "Los Flamencos  Nation Reverse,",
    "is a nature reserve located",
    "in the commune of San Peding State",
  ];
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}
function AnimatedText({ children }: { children: string }) {
  const text = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=400px bottom",
      },
    });
  }, []);
  return <p>{children}</p>;
}
