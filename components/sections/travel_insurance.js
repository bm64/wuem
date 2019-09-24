import React, { useState, useMemo } from 'react'

import styles from '../../styles/sections/travel_insurance.module.scss'

import withScrollIn from '../../animations/withScrollIn'
import { withLeftSlideIn, withRightSlideIn } from '../../animations/withSlideIn'

import { FaBus, FaFly, FaPlane } from 'react-icons/fa'

function TravelInsurance() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <>
      <div className={styles.imageSection}>
        <TravelInsuranceText containerClass={styles['image-section__text']} />
        <img src={'/static/travel_insurance_img.jpeg'} />
      </div>
      <div className={styles.travelSection}>
        <div className={styles.left}>
          <div className={styles.travelHeadline}>
            <h2>Badz bezpieczny </h2>
            <h3>Sprawdz nasze ubezpieczenia turystyczne...</h3>
          </div>
          {currentTab === 0 && <img src={'/static/travel1.jpg'} />}
          {currentTab === 1 && <img src={'/static/travel2.jpg'} />}
          {currentTab === 2 && <img src={'/static/travel3.jpg'} />}
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
          <ul className={styles.insuranceBenefits}>
            <li>Bendonc na wakacjach jebiemy cie w dupe</li>
            <li>Bendonc na wakacjach jebiemy cie w dupe</li>
            <li>Bendonc na wakacjach jebiemy cie w dupe</li>
            <li>Bendonc na wakacjach jebiemy cie w dupe</li>
          </ul>
        </div>
      </div>
    </>
  )
}

const TravelInsuranceText = withLeftSlideIn(() => {
  return (
    <>
      <h2>
        Ubezpieczenia <span>turystyczne</span>
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

export default TravelInsurance
