import React, {useState} from 'react';
import Section from '../section';
import styles from '../../styles/sections/cars_insurance.module.scss';

import withSlideIn from '../../animations/withSlideIn';

import {FaCarCrash, FaBook, FaWrench} from 'react-icons/fa';

function CarsInsurance() {
  return (
    <>
      <Section image="/static/car_insurance_img.jpeg">
        <h1>Ubezpiecznia pojazdów</h1>
        <span>
          Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce
          fermentum pellentesque ligula, ac porta quam auctor ut. Vivamus
          tincidunt tellus sem, nec placerat nulla commodo vitae. In nec sem ac
          erat condimentum vestibulum eu quis mauris. Sed non lobortis nisl.
          Nunc placerat quis turpis ac ornare. Nunc ligula quam, hendrerit vitae
          pretium non, fermentum eu urna. Nunc euismod, lectus quis sodales
          sollicitudin, nulla odio accumsan mauris, vel lobortis metus urna a
          nulla.
        </span>
      </Section>
      <div className={styles.section}>
        <p>W naszej ofercie ubezpieczen dla pojazdow znajdziesz...</p>
        <div className={styles.items}>
          <OC />
          <AC />
          <Assistance />
        </div>
      </div>
    </>
  );
}

const OC = withSlideIn(() => (
  <div className={styles.item}>
    <p className={styles.item__text}>Ubezpieczenie autocasco</p>
    <FaCarCrash className={styles.item__icon} size={32} />
  </div>
));

const AC = withSlideIn(() => (
  <div className={styles.item}>
    <p className={styles.item__text}>
      Ubezpieczenie odpowiedzialnosci cywilnej
    </p>
    <FaBook className={styles.item__icon} size={32} />
  </div>
));

const Assistance = withSlideIn(() => (
  <div className={styles.item}>
    <p className={styles.item__text}>Ubezpieczenie Assistance</p>
    <FaWrench className={styles.item__icon} size={32} />
  </div>
));

export default CarsInsurance;
