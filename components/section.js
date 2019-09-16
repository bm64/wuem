import React, { useState } from "react";
import styles from "./section.module.css";

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function Section({ children, image }) {
  return (
    <div className={styles.section}>
      <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
        <div className={styles.section__content}>{children}</div>
      </ScrollAnimation>

      <img src={image} className={styles.section__img} />
    </div>
  );
}
export default Section;
