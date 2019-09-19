import React, {useState} from 'react';
import styles from '../../styles/sections/health_insurance.module.scss';
import Section from '../section';

import {FaUserShield, FaStethoscope, FaCreditCard} from 'react-icons/fa';

function HealthInsurance() {
  return (
    <>
      <Section image="/static/health_insurance_img.jpeg">
        <h1>Ubezpieczenia zdrowotne</h1>
        <p>
          <span style={{marginLeft: '3rem'}} /> Lorem ipsum dolor sit a met,
          consectetur adipiscing elit. Fusce fermentum pellentesque ligula, ac
          porta quam auctor ut. Vivamus tincidunt tellus sem, nec placerat nulla
          commodo vitae. In nec sem ac erat condimentum vestibulum eu quis
          mauris. Sed non lobortis nisl. Nunc placerat quis turpis ac ornare.
          Nunc ligula quam, hendrerit vitae pretium non, fermentum eu urna. Nunc
          euismod, lectus quis sodales sollicitudin, nulla odio accumsan mauris,
          vel lobortis metus urna a nulla.
        </p>
      </Section>
      <div style={{padding: '5rem 0'}}>
        <h2 style={{textAlign: 'center'}}>
          W pakiecie ubezpieczenia zdrowotnego otrzymujesz
        </h2>
        <div className={styles.section}>
          <div className={styles.section__item}>
            <FaUserShield />
            <p> Ochrona dla calej rodziny </p>
          </div>
          <div className={styles.section__item}>
            <FaStethoscope />
            <p> Polisa bez badan lekarskich </p>
          </div>

          <div className={styles.section__item}>
            <FaCreditCard />
            <p> Pomoc finansowa w chorobie lub po wypadku </p>
          </div>
          <div className={styles.section__item}>
            <FaStethoscope />
            <p> Polisa bez badan lekarskich </p>
          </div>

          <div className={styles.section__item}>
            <FaUserShield />
            <p> Ochrona dla calej rodziny </p>
          </div>
          <div className={styles.section__item}>
            <FaStethoscope />
            <p> Polisa bez badan lekarskich </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthInsurance;
