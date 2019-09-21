import React from 'react';
import styles from '../../styles/sections/faq.module.scss';

function FAQ() {
  return (
    <div className={styles.fixedSection}>
      <h2 className={styles.headline}> Najczesciej zadawane pytania </h2>
      <div className={styles.questions}>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
}

const Question = () => (
  <div className={styles.question}>
    <h3>Lorem ipsum dolor sit a met, consectetur adipiscing elit?</h3>
    <div className={styles.answer}>
      <p>
        Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce
        fermentum pellentesque ligula, ac porta quam auctor ut. Vivamus
        tincidunt tellus sem, nec placerat nulla commodo vitae. In nec sem ac
        erat condimentum vestibulum eu quis mauris.
      </p>
    </div>
  </div>
);

export default FAQ;
