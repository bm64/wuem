import { useState } from 'react'
import styles from '../styles/insurances.module.scss'

import { FaCar, FaHeartbeat, FaUmbrellaBeach, FaHome } from 'react-icons/fa'

import CarsInsurance from '../components/sections/cars_insurance'
import HealthInsurance from '../components/sections/health_insurance'
import TravelInsurance from '../components/sections/travel_insurance'
import PropertyInsurance from '../components/sections/property_insurance'

function Insurances({ sectionRef }) {
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <>
      <div ref={sectionRef} className={styles.sectionHeader}>
        <h1>Rodzaje ubezpieczeń</h1>
        <p>
          Lorem ipsum dolor sit a met, consectetur adipiscing elit. <br />
          Fusce fermentum pellentesque ligula
        </p>
        <hr className={styles.medium_bottom_line} />
      </div>

      <div className={styles.menu}>
        <div
          className={`${styles.menu__item} ${
            currentSection === 0 ? styles['menu__item--selected'] : ''
          }`}
          onClick={() => setCurrentSection(0)}
        >
          <FaCar className={styles['menu__item-icon']} />
          <p>Ubezpiecznia pojazdów</p>
        </div>
        <div
          className={`${styles.menu__item} ${
            currentSection === 1 ? styles['menu__item--selected'] : ''
          }`}
          onClick={() => setCurrentSection(1)}
        >
          <FaHeartbeat className={styles['menu__item-icon']} />
          <p>Ubezpieczenia zdrowotne</p>
        </div>
        <div
          className={`${styles.menu__item} ${
            currentSection === 2 ? styles['menu__item--selected'] : ''
          }`}
          onClick={() => setCurrentSection(2)}
        >
          <FaUmbrellaBeach className={styles['menu__item-icon']} />
          <p>Ubezpieczenia turystyczne</p>
        </div>
        <div
          className={`${styles.menu__item} ${
            currentSection === 3 ? styles['menu__item--selected'] : ''
          }`}
          onClick={() => setCurrentSection(3)}
        >
          <FaHome className={styles['menu__item-icon']} />
          <p>Ubezpieczenia nieruchomości</p>
        </div>
      </div>
      {currentSection === 0 && <CarsInsurance />}
      {currentSection === 1 && <HealthInsurance />}
      {currentSection === 2 && <TravelInsurance />}
      {currentSection === 3 && <PropertyInsurance />}
    </>
  )
}

export default Insurances
