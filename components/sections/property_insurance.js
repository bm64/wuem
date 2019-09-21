import React, {useState} from 'react';

import styles from '../../styles/sections/property_insurance.module.scss';

import withScrollIn from '../../animations/withScrollIn';
import withFadeIn from '../../animations/withFadeIn';

import {
  withLeftSlideIn,
  withRightSlideIn,
  withSlideDown,
} from '../../animations/withSlideIn';

import {FaHome, FaBuilding, FaHouseDamage} from 'react-icons/fa';

function PropertyInsurance() {
  return (
    <>
      <div className={styles.imageSection}>
        <PropertyInsuranceText containerClass={styles['image-section__text']} />
        <img src={'/static/property_insurance_img.jpeg'} />
      </div>
      <div className={styles.fixedSection}>
        <div className={styles.cards}>
          <HouseInsurance />
          <FlatInsurance />
          <HouseInBuildInsurance />
        </div>
      </div>
    </>
  );
}

const PropertyInsuranceText = withLeftSlideIn(() => {
  return (
    <>
      <h2>
        Ubezpieczenia <span>nieruchomości</span>
      </h2>
      <p>
        Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce
        fermentum pellentesque ligula, ac porta quam auctor ut. Vivamus
        tincidunt tellus sem, nec placerat nulla commodo vitae. In nec sem ac
        erat condimentum vestibulum eu quis mauris. Sed non lobortis nisl. Nunc
        placerat quis turpis ac ornare. Nunc ligula quam, hendrerit vitae
        pretium non, fermentum eu urna. Nunc euismod, lectus quis sodales
        sollicitudin, nulla odio accumsan mauris, vel lobortis metus urna a
        nulla.
      </p>
    </>
  );
});

const HouseInsurance = withFadeIn(
  withSlideDown(() => {
    return (
      <div className={styles.card}>
        <FaHome />
        <h3>Ubezpieczenie domu</h3>
      </div>
    );
  }, 1500),
  2000,
);

const FlatInsurance = withFadeIn(
  withSlideDown(() => {
    return (
      <div className={styles.card}>
        <FaBuilding />
        <h3>Ubezpieczenie mieszkania</h3>
      </div>
    );
  }, 1500),
  2000,
);

const HouseInBuildInsurance = withFadeIn(
  withSlideDown(() => {
    return (
      <div className={styles.card}>
        <FaHouseDamage />
        <h3>Ubezpieczenia domu w budowie</h3>
      </div>
    );
  }, 1500),
  2000,
);

export default withScrollIn(PropertyInsurance);
