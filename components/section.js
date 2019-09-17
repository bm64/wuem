import React, { useEffect, useRef } from "react";
import styles from "./section.module.css";

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

var ignoreOnce = true;

function Section({ children, image }) {
	const sectionRef = useRef(null);
	
	useEffect(() => {
		if(ignoreOnce) {
			ignoreOnce = false;
			return;
		}
		window.scrollTo(0, sectionRef.current.offsetTop);
	}, []);

	return (
    <div ref={sectionRef} className={styles.section}>
      <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
        <div className={styles.section__content}>{children}</div>
      </ScrollAnimation>
      <img src={image} className={styles.section__img} />
    </div>
  );
}
export default Section;
