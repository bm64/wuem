import React, { useState, useRef } from 'react'
import styles from '../../styles/sections/cars_insurance.module.scss'

import { withLeftSlideIn, withRightSlideIn } from '../../animations/withSlideIn'
import withFadeIn from '../../animations/withFadeIn'

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
        <CarsInsuranceImage containerClass={styles['image-section__image']} />
      </div>
      <div className={styles.fixedSection}>
        <h2 className={styles.headline}>
          Potrzebujesz <span>kompleksowego</span> ubezpiecznia dla swojego
          pojazdu? Tutaj znajdziesz to czego szukasz
        </h2>
        <div className={styles.insurances}>
          <OC containerClass={styles.insurance} />
          <AC containerClass={styles.insurance} />
          <Assistance containerClass={styles.insurance} />
        </div>
      </div>
    </>
  )
}

const CarsInsuranceText = withFadeIn(() => {
  return (
    <>
      <h2>
        Ubezpiecznia <span>komunikacyjne</span>
      </h2>
      <p>
        Ubezpieczenia komunikacyjne to najczęściej wybierane produkty
        ubezpieczeniowe przez Polaków. Obejmują swoją ochroną samochody,
        motocykle i inne pojazdy. Możemy wyróżnić kilka rodzajów ubezpieczeń
        komunikacyjnych, z czego najpopularniejszym i jednocześnie obowiązkowym
        jest ubezpieczenie odpowiedzialności cywilnej (OC). W zależności od
        potrzeb naszych klientów, doradzamy kiedy warto zaopatrzyć się w
        dodatkowe ubezpieczenia takie jak Autocasco, Assistance czy NNW.
      </p>
    </>
  )
})

const CarsInsuranceImage = withFadeIn(
  () => <img src={'/static/car_insurance_img.jpeg'} />,
  2500
)

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
        <p className={styles.insuranceText}>Ubezpieczenie OC</p>
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
          OC to ubezpieczenie odpowiedzialności cywilnej posiadaczy pojazdów
          mechanicznych, które chroni Cię przed odpowiedzialnością cywilną za
          szkody wyrządzone w wyniku kolizji bądź wypadku w ruchu drogowym.
        </p>
        <img src={'/static/cars1.jpg'} />
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
        <p className={styles.insuranceText}>Ubezpieczenie Autocasco (AC)</p>
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
          Autocasco to dobrowolne ubezpieczenie, pozwalające pokryć koszty
          naprawy pojazdu powstałe na skutek kolizji drogowej spowodowanej z
          winy ubezpieczonego, jak również rekompensuje stratę finansową
          powstałą w wyniku kradzieży pojazdu czy innych zdarzeń losowych.
          Właściciel pojazdu może dobrać taki zakres ubezpieczenia, jaki jest
          dla niego najkorzystniejszy.
        </p>
        <img src={'/static/leasing_2.jpeg'} />
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
          Assistance to dobrowolne ubezpieczenie działające przez całą dobę.
          Zapewnia podstawową pomoc, w nieoczekiwanych zdarzeniach losowych,
          takich jak kolizja, awaria, wypadek czy kradzież pojazdu.
        </p>
        <img src={'/static/assistance.jpeg'} />
      </div>
    </>
  )
})

export default CarsInsurance
