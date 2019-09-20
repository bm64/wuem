import React, {useState, useRef} from 'react';
import styles from '../../styles/sections/cars_insurance.module.scss';

import withSlideIn, {
  withLeftSlideIn,
  withRightSlideIn,
} from '../../animations/withSlideIn';

import withScrollIn from '../../animations/withScrollIn';

import {FaCarCrash, FaBook, FaWrench} from 'react-icons/fa';

function CarsInsurance() {
  return (
    <>
      <div className={styles['image-section']}>
        <CarsInsuranceText containerClass={styles['image-section__text']} />
        <img src={'/static/car_insurance_img.jpeg'} />
      </div>
      <div className={styles['fixed-section']}>
        <h3>W naszej ofercie ubezpieczen dla pojazdow znajdziesz...</h3>
        <div className={styles.insurances}>
          <OC />
          <AC />
          <Assistance />
        </div>
      </div>
    </>
  );
}

const CarsInsuranceText = withLeftSlideIn(() => {
  return (
    <>
      <h2>Ubezpiecznia pojazdów</h2>
      <p>
        <span style={{marginLeft: '3rem'}} /> Lorem ipsum dolor sit a met,
        consectetur adipiscing elit. Fusce fermentum pellentesque ligula, ac
        porta quam auctor ut. Vivamus tincidunt tellus sem, nec placerat nulla
        commodo vitae. In nec sem ac erat condimentum vestibulum eu quis mauris.
        Sed non lobortis nisl. Nunc placerat quis turpis ac ornare. Nunc ligula
        quam, hendrerit vitae pretium non, fermentum eu urna. Nunc euismod,
        lectus quis sodales sollicitudin, nulla odio accumsan mauris, vel
        lobortis metus urna a nulla.
      </p>
    </>
  );
});

const OC = withRightSlideIn(() => (
  <div className={styles.insurances__insurance}>
    <p className={styles['insurances__insurance-text']}>
      Ubezpieczenie odpowiedzialnosci cywilnej
    </p>
    <FaCarCrash className={styles['insurances__insurance-icon']} size={32} />
  </div>
));

const AC = withRightSlideIn(() => (
  <div className={styles.insurances__insurance}>
    <p className={styles['insurances__insurance-text']}>
      Ubezpieczenie autocasco
    </p>
    <FaBook className={styles['insurances__insurance-icon']} size={32} />
  </div>
));

const Assistance = withRightSlideIn(() => (
  <div className={styles.insurances__insurance}>
    <p className={styles['insurances__insurance-text']}>
      Ubezpieczenie Assistance
    </p>
    <FaWrench className={styles['insurances__insurance-icon']} size={32} />
  </div>
));

export default withScrollIn(CarsInsurance);
