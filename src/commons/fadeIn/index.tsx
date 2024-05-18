"use client";
import React from "react";
import styles from "./style.module.css";

function FadeIn(props: any) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();
  React.useEffect(() => {
    var observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      id={props.id}
      style={{ height: props.height ?? "100%" }}
      className={`cursor-pointer transition-all items-center justify-center flex flex-row gap-2  ${
        styles.fade_in_section
      } ${isVisible ? `${styles.is_visible}` : `${styles.fade_in_section}`}`}
      ref={domRef}
      key={props.key}
    >
      {props.children}
    </div>
  );
}
export { FadeIn };
