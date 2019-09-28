import React, { useState } from 'react'
import styles from '../styles/loans.module.scss'

import { FaHandHoldingUsd, FaHandshake } from 'react-icons/fa'

import Loan from './sections/loan.js'
import Leasing from './sections/leasing.js'

function Loans({ sectionRef }) {
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <>
      <div ref={sectionRef} className={styles.sectionHeader}>
        <h1>Kredyt i Leasing</h1>
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
          <FaHandHoldingUsd className={styles['menu__item-icon']} />
          <p>Kredyt</p>
        </div>
        <div
          className={`${styles.menu__item} ${
            currentSection === 1 ? styles['menu__item--selected'] : ''
          }`}
          onClick={() => setCurrentSection(1)}
        >
          <FaHandshake className={styles['menu__item-icon']} />
          <p>Leasing</p>
        </div>
      </div>

      {currentSection === 0 && <Loan />}
      {currentSection === 1 && <Leasing />}
    </>
  )
}

export default React.memo(Loans)
