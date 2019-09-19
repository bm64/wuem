import React, {useState} from 'react';

import styles from '../../styles/sections/travel_insurance.module.scss';

import withScrollIn from '../../animations/withScrollIn';
import {withLeftSlideIn, withRightSlideIn} from '../../animations/withSlideIn';

import {FaBus, FaFly, FaPlane} from 'react-icons/fa';

function TravelInsurance() {
  return (
    <>
      <div className={styles['image-section']}>
        <TravelInsuranceText containerClass={styles['image-section__text']} />
        <img src={'/static/travel_insurance_img.jpeg'} />;
      </div>
      <div className={styles['tabbed-section']}>
        <div className={styles['tabbed-section__top']}>
          <div>
            <h2>Badz bezpieczny </h2>
            <h3>Sprawdz nasze ubezpieczenia turystyczne...</h3>
          </div>
          <div className={styles.tabs}>
            <DomesticHolidaysTab />
            <ForeignHolidaysTab />
            <MultitravelTab />
          </div>
        </div>
      </div>
    </>
  );
}

const TravelInsuranceText = withLeftSlideIn(() => {
  return (
    <>
      <h2>Ubezpieczenia turystyczne</h2>
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

const DomesticHolidaysTab = withRightSlideIn(() => {
  return (
    <>
      <FaBus />
      <h3>Wycieczki krajowe</h3>
    </>
  );
}, 750);

const ForeignHolidaysTab = withRightSlideIn(() => {
  return (
    <>
      <FaPlane />
      <h3>Wycieczki zagraniczne</h3>
    </>
  );
}, 1000);

const MultitravelTab = withRightSlideIn(() => {
  return (
    <>
      <FaFly />
      <h3>Ubezpieczenie Multitravel</h3>
    </>
  );
}, 1200);

export default withScrollIn(TravelInsurance);
