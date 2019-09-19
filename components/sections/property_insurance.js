import React, {useState} from 'react';

import styles from '../../styles/sections/property_insurance.module.scss';

import withScrollIn from '../../animations/withScrollIn';
import {withLeftSlideIn, withRightSlideIn} from '../../animations/withSlideIn';

function PropertyInsurance() {
  return (
    <>
      <div className={styles['image-section']}>
        <PropertyInsuranceText containerClass={styles['image-section__text']} />
        <img src={'/static/property_insurance_img.jpeg'} />
      </div>
    </>
  );
}

const PropertyInsuranceText = withLeftSlideIn(() => {
  return (
    <>
      <h2>Ubezpieczenia nieruchomości</h2>
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

export default withScrollIn(PropertyInsurance);
