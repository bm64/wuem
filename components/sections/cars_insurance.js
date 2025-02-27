import React, { useState } from 'react'
import styles from '../../styles/sections/cars_insurance.module.scss'

import { withSlideDown } from '../../animations/withSlideIn'
import withFadeIn from '../../animations/withFadeIn'

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
      <div className={styles.carsSection}>
        <h2 className={styles.headline}>
          Potrzebujesz <span>kompleksowego</span> ubezpiecznia dla swojego
          pojazdu?
        </h2>
        <h2 className={styles.headline}>Tutaj znajdziesz to czego szukasz!</h2>
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
        ubezpieczeniowe. Obejmują swoją ochroną samochody, motocykle i inne
        pojazdy. Ubezpieczenie odpowiedzialności cywilnej (OC), jest
        najpopularniejszym i jednocześnie obowiązkowym ubezpieczeniem
        komunikacyjnym. W zależności od potrzeb naszych klientów, doradzamy
        kiedy warto zaopatrzyć się w dodatkowe ubezpieczenia takie jak
        Autocasco, Assistance czy NNW.
      </p>
    </>
  )
})

const CarsInsuranceImage = withFadeIn(
  () => <img src={'/static/car_insurance_img.jpeg'} />,
  2500
)

const OC = withSlideDown(() => {
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
      {showContent && (
        <div className={styles.insuranceContent}>
          <p>
            OC to ubezpieczenie odpowiedzialności cywilnej dla posiadaczy
            pojazdów mechanicznych, które chroni Cię przed odpowiedzialnością
            cywilną za szkody wyrządzone w wyniku kolizji lub wypadku w ruchu
            drogowym.
          </p>
          <img src={'/static/oc.jpeg'} />
        </div>
      )}
    </>
  )
})

const AC = withSlideDown(() => {
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
      {showContent && (
        <div className={styles.insuranceContent}>
          <p>
            Autocasco to dobrowolne ubezpieczenie pozwalające pokryć koszty
            naprawy pojazdu powstałe na skutek kolizji drogowej spowodowanej z
            winy ubezpieczonego, jak również rekompensuje stratę finansową
            powstałą w wyniku kradzieży pojazdu, czy innych zdarzeń losowych.
            Właściciel pojazdu może dobrać taki zakres ubezpieczenia, jaki jest
            dla niego najkorzystniejszy.
          </p>
          <img src={'/static/autocasco.jpeg'} />
        </div>
      )}
    </>
  )
})

const Assistance = withSlideDown(() => {
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

      {showContent && (
        <div className={styles.insuranceContent}>
          <p>
            Assistance to dobrowolne ubezpieczenie działające przez całą dobę.
            Zapewnia podstawową pomoc, w nieoczekiwanych zdarzeniach losowych,
            takich jak kolizja, awaria, wypadek czy kradzież pojazdu.
          </p>
          <img src={'/static/assistance.jpeg'} />
        </div>
      )}
    </>
  )
})

export default React.memo(CarsInsurance)
