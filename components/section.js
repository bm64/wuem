import React, {useEffect, useRef} from 'react';
import styles from '../styles/section.module.scss';

import {withLeftSlideIn} from '../animations/withSlideIn';

var ignoreOnce = true;

function Section({children, image}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (ignoreOnce) {
      setTimeout(() => {
        ignoreOnce = false;
      }, 100); // Anti-annoying scroll hack
      return;
    }
    window.scrollTo(0, sectionRef.current.offsetTop);
  }, []);

  return (
    <div ref={sectionRef} className={styles.section}>
      <Content children={children}>{children}</Content>
      <img src={image} className={styles.section__img} />
    </div>
  );
}

const Content = withLeftSlideIn(({children}) => (
  <div className={styles.section__content}>{children}</div>
));

export default Section;
