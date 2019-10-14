import React, { useState, useMemo } from 'react'

import styles from '../../styles/sections/travel_insurance.module.scss'

import withFadeIn from '../../animations/withFadeIn'

import { FaBus, FaFly, FaPlane } from 'react-icons/fa'

function TravelInsurance() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <>
      <div className={styles.imageSection}>
        <TravelInsuranceText containerClass={styles['image-section__text']} />
        <TravelInsuranceImage containerClass={styles['image-section__image']} />
      </div>
      <div className={styles.travelSection}>
        <div className={styles.left}>
          <div className={styles.travelHeadline}>
            <h2> z naszymi ubezpieczeniami </h2>
            <h3>Bądź bezpieczny gdzie tylko chcesz</h3>
          </div>
          {currentTab === 0 && <img src={'/static/travel1.jpeg'} />}
          {currentTab === 1 && <img src={'/static/travel2.jpeg'} />}
          {currentTab === 2 && <img src={'/static/travel3.jpeg'} />}
        </div>
        <div className={styles.right}>
          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${
                currentTab === 0 ? styles['tab--selected'] : ''
              }`}
              onClick={() => setCurrentTab(0)}
            >
              <FaBus />
              <h3>Wycieczki krajowe</h3>
            </div>
            <div
              className={`${styles.tab} ${
                currentTab === 1 ? styles['tab--selected'] : ''
              }`}
              onClick={() => setCurrentTab(1)}
            >
              <FaPlane />
              <h3>Wycieczki zagraniczne</h3>
            </div>
            <div
              className={`${styles.tab} ${
                currentTab === 2 ? styles['tab--selected'] : ''
              }`}
              onClick={() => setCurrentTab(2)}
            >
              <FaFly />
              <h3>Ubezpiecznie multitravel</h3>
            </div>
          </div>
          <div className={styles.benefitContainer}>
            {currentTab === 0 && (
              <div className={styles.benefit}>
                <p className={styles.benefitsHeader}>
                  Ubezpieczenie turystyczne na terenie RP gwarantuje:
                </p>
                <ul className={styles.insuranceBenefits}>
                  <li>Pokrycie kosztów leczenia i transportu do szpitala </li>
                  <li>Odszkodowanie w razie nieszczęśliwego wypadku </li>
                  <li>Odszkodowanie za skradziony lub zniszczony bagaż </li>
                  <li>Koszty odwołania podróży </li>
                </ul>
              </div>
            )}
            {currentTab === 1 && (
              <div className={styles.benefit}>
                <p className={styles.benefitsHeader}>
                  Ubezpieczenie turystyczne dla wycieczek zagranicznych
                  gwarantuje:
                </p>
                <ul className={styles.insuranceBenefits}>
                  <li>Pokrycie kosztów leczenia</li>
                  <li>Odszkodowanie w razie nieszczęśliwego wypadku</li>
                  <li>Odszkodowanie za zniszczony bagaż lub sprzęt sportowy</li>
                  <li>Transport do Polski</li>
                </ul>
              </div>
            )}
            {currentTab === 2 && (
              <div className={styles.benefit}>
                <p className={styles.benefitsHeader}>
                  Ubezpieczenie multitravel gwarantuje:
                </p>
                <ul className={styles.insuranceBenefits}>
                  <li>Pokrycie kosztów odwołania wyjazdu oraz leczenia</li>
                  <li>Pokrycie kosztów utraty bagażu</li>
                  <li>
                    Zabezpieczenie w przypadku nagłego zachorowania bądź wypadku
                  </li>
                  <li>Ochrona w razie wypadku podczas aktywności sportowych</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const TravelInsuranceText = withFadeIn(() => {
  return (
    <>
      <h2>
        Ubezpieczenia <span>turystyczne</span>
      </h2>
      <p>
        Ubezpieczenie turystyczne zapewnia ochronę oraz komfort spokojnego i
        bezpiecznego wyjazdu dla osób udających się za granicę w celach
        wypoczynkowych, turystycznych, edukacyjnych oraz biznesowych. Zadaniem
        polisy turystycznej jest zagwarantowanie pomocy medycznej,
        organizacyjnej i finansowej po wypadku w obcym kraju.
      </p>
    </>
  )
})

const TravelInsuranceImage = withFadeIn(
  () => <img src={'/static/travel_insurance_img.jpeg'} />,
  2500
)

export default React.memo(TravelInsurance)
