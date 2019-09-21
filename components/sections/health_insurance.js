import React, { useState } from 'react'
import styles from '../../styles/sections/health_insurance.module.scss'

import withScrollIn from '../../animations/withScrollIn'
import withFadeIn from '../../animations/withFadeIn'

import { withLeftSlideIn } from '../../animations/withSlideIn'

import { FaUserShield, FaStethoscope, FaCreditCard } from 'react-icons/fa'

function HealthInsurance() {
  return (
    <>
      <div className={styles.imageSection}>
        <HealthInsuranceText containerClass={styles['image-section__text']} />
        <img src={'/static/health_insurance_img.jpeg'} />
      </div>
      <div className={styles.fixedSection}>
        <h2 className={styles.benefitsTitle}>
          W pakiecie ubezpieczenia zdrowotnego otrzymujesz
        </h2>
        <Benefits containerClass={styles.benefits} />
      </div>
    </>
  )
}

const HealthInsuranceText = withLeftSlideIn(() => {
  return (
    <>
      <h2>
        Ubezpieczenia <span>zdrowotne</span>
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
  )
})

const Benefits = withFadeIn(() => {
  return (
    <>
      <div className={styles.benefits__benefit}>
        <FaUserShield />
        <p> Ochrona dla calej rodziny </p>
      </div>
      <div className={styles.benefits__benefit}>
        <FaStethoscope />
        <p> Polisa bez badan lekarskich </p>
      </div>
      <div className={styles.benefits__benefit}>
        <FaCreditCard />
        <p> Pomoc finansowa w chorobie lub po wypadku </p>
      </div>
    </>
  )
}, 2000)

export default withScrollIn(HealthInsurance)
