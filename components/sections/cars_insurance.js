import React, { useState, useRef } from 'react'
import styles from '../../styles/sections/cars_insurance.module.scss'

import { withLeftSlideIn, withRightSlideIn } from '../../animations/withSlideIn'

import withScrollIn from '../../animations/withScrollIn'

import {
  FaCarCrash,
  FaTools,
  FaWrench,
  FaArrowCircleDown,
  FaArrowCircleUp,
} from 'react-icons/fa'

function CarsInsurance() {
  return (
    <>
      <div className={styles.imageSection}>
        <CarsInsuranceText containerClass={styles['image-section__text']} />
        <img src={'/static/car_insurance_img.jpeg'} />
      </div>
      <div className={styles.fixedSection}>
        <h3 className={styles.headline}>
          W naszej ofercie ubezpieczen dla pojazdow znajdziesz...
        </h3>
        <div className={styles.insurances}>
          <OC containerClass={styles.insurance} />
          <AC containerClass={styles.insurance} />
          <Assistance containerClass={styles.insurance} />
        </div>
      </div>
    </>
  )
}

const CarsInsuranceText = withLeftSlideIn(() => {
  return (
    <>
      <h2>
        Ubezpiecznia <span>pojazdów</span>
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

const OC = withRightSlideIn(() => {
  const [showContent, setShowContent] = useState(false)
  return (
    <>
      <div
        className={`${styles.insuranceTop} ${
          showContent ? styles['insurance-top--expanded'] : ''
        }`}
      >
        <FaCarCrash className={styles.insuranceIcon} size={32} />
        <p className={styles.insuranceText}>
          Ubezpieczenie odpowiedzialnosci cywilnej
        </p>
        {!showContent && (
          <FaArrowCircleDown
            className={styles.insuranceExpand}
            onClick={() => setShowContent(!showContent)}
          />
        )}
        {showContent && (
          <FaArrowCircleUp
            className={styles.insuranceExpand}
            onClick={() => setShowContent(!showContent)}
          />
        )}
      </div>
      <div
        className={`${styles.insuranceContent} ${
          !showContent ? styles['insurance-content--hidden'] : ''
        }`}
      >
        <p>
          Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce
          fermentum pellentesque ligula, ac porta quam auctor ut. Vivamus
          tincidunt tellus sem, nec placerat nulla commodo vitae. In nec sem ac
          erat condimentum vestibulum eu quis mauris. Sed non lobortis nisl
        </p>
        <img src={'/static/insurance.jpeg'} />
      </div>
    </>
  )
})

const AC = withRightSlideIn(() => {
  const [showContent, setShowContent] = useState(false)
  return (
    <>
      <div
        className={`${styles.insuranceTop} ${
          showContent ? styles['insurance-top--expanded'] : ''
        }`}
      >
        <FaTools className={styles.insuranceIcon} size={32} />
        <p className={styles.insuranceText}>Ubezpieczenie autocasco</p>
        {!showContent && (
          <FaArrowCircleDown
            className={styles.insuranceExpand}
            onClick={() => setShowContent(!showContent)}
          />
        )}
        {showContent && (
          <FaArrowCircleUp
            className={styles.insuranceExpand}
            onClick={() => setShowContent(!showContent)}
          />
        )}
      </div>
      <div
        className={`${styles.insuranceContent} ${
          !showContent ? styles['insurance-content--hidden'] : ''
        }`}
      >
        <p>
          Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce
          fermentum pellentesque ligula, ac porta quam auctor ut. Vivamus
          tincidunt tellus sem, nec placerat nulla commodo vitae. In nec sem ac
          erat condimentum vestibulum eu quis mauris. Sed non lobortis nisl
        </p>
        <img src={'/static/insurance.jpeg'} />
      </div>
    </>
  )
})

const Assistance = withRightSlideIn(() => {
  const [showContent, setShowContent] = useState(false)
  return (
    <>
      <div
        className={`${styles.insuranceTop} ${
          showContent ? styles['insurance-top--expanded'] : ''
        }`}
      >
        <FaWrench className={styles.insuranceIcon} size={32} />
        <p className={styles.insuranceText}>Ubezpieczenie Assistance</p>
        {!showContent && (
          <FaArrowCircleDown
            className={styles.insuranceExpand}
            onClick={() => setShowContent(!showContent)}
          />
        )}
        {showContent && (
          <FaArrowCircleUp
            className={styles.insuranceExpand}
            onClick={() => setShowContent(!showContent)}
          />
        )}
      </div>
      <div
        className={`${styles.insuranceContent} ${
          !showContent ? styles['insurance-content--hidden'] : ''
        }`}
      >
        <p>
          Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce
          fermentum pellentesque ligula, ac porta quam auctor ut. Vivamus
          tincidunt tellus sem, nec placerat nulla commodo vitae. In nec sem ac
          erat condimentum vestibulum eu quis mauris. Sed non lobortis nisl
        </p>
        <img src={'/static/insurance.jpeg'} />
      </div>
    </>
  )
})

export default CarsInsurance
