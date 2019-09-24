import React, { useState } from 'react'

import styles from '../../styles/sections/property_insurance.module.scss'

import withScrollIn from '../../animations/withScrollIn'
import withFadeIn from '../../animations/withFadeIn'

import {
  withLeftSlideIn,
  withRightSlideIn,
  withSlideDown,
} from '../../animations/withSlideIn'

import { FaHome, FaBuilding, FaHouseDamage } from 'react-icons/fa'

function PropertyInsurance() {
  return (
    <>
      <div className={styles.imageSection}>
        <PropertyInsuranceText containerClass={styles['image-section__text']} />
        <PropertyInsuranceImage
          containerClass={styles['image-section__image']}
        />
      </div>
      <div className={styles.propertySection}>
        <h2 className={styles.propertyHeadline}>
          Zabezpiecz swoje rodzinne progi juz <span>dzis</span>
        </h2>
        <Cards />
      </div>
    </>
  )
}

const PropertyInsuranceText = withFadeIn(() => {
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
  )
})

const PropertyInsuranceImage = withFadeIn(
  () => <img src={'/static/property_insurance_img.jpeg'} />,
  2500
)

const Cards = withFadeIn(
  () => (
    <div className={styles.cards}>
      <HouseInsurance />
      <FlatInsurance />
      <HouseInBuildInsurance />
    </div>
  ),
  2000
)

const HouseInsurance = () => (
  <div className={styles.card}>
    <img src="/static/property1.jpg" />
    <h3>Ubezpieczenie domu</h3>
    <p>
      Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce fermentum
      pellentesque ligula, ac porta quam auctor ut. Vivamus tincidunt tellus
      sem, nec placerat nulla commodo vitae.
    </p>
  </div>
)

const FlatInsurance = () => (
  <div className={styles.card}>
    <img src="/static/property1.jpg" />
    <h3>Ubezpieczenie mieszkania</h3>
    <p>
      Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce fermentum
      pellentesque ligula, ac porta quam auctor ut. Vivamus tincidunt tellus
      sem, nec placerat nulla commodo vitae.
    </p>
  </div>
)

const HouseInBuildInsurance = () => (
  <div className={styles.card}>
    <img src="/static/property1.jpg" />
    <h3>Ubezpieczenia domu w budowie</h3>
    <p>
      Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce fermentum
      pellentesque ligula, ac porta quam auctor ut. Vivamus tincidunt tellus
      sem, nec placerat nulla commodo vitae.
    </p>
  </div>
)

export default PropertyInsurance
