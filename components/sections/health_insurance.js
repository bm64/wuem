import React, { useState } from 'react'
import styles from '../../styles/sections/health_insurance.module.scss'

import withScrollIn from '../../animations/withScrollIn'
import withFadeIn from '../../animations/withFadeIn'

import { withLeftSlideIn } from '../../animations/withSlideIn'

import { FaUserShield, FaStethoscope, FaCreditCard } from 'react-icons/fa'

function HealthInsurance() {
  const [currentTab, setCurrentTab] = useState(0)
  return (
    <>
      <div className={styles.imageSection}>
        <HealthInsuranceText containerClass={styles['image-section__text']} />
        <HealthInsuranceImage containerClass={styles['image-section__image']} />
      </div>
      <div className={styles.fixedSection}>
        <h2 className={styles.benefitsTitle}>
          Z nami poczujesz sie <span>bezpiecznie</span> w kazdym momencie
        </h2>
        <div className={styles.benefits}>
          <div
            className={`${styles.benefit} ${
              currentTab === 0 ? styles['benefit--selected'] : ''
            }`}
            onClick={() => setCurrentTab(0)}
          >
            <p>Ochrona dla calej rodziny</p>
          </div>
          <div
            className={`${styles.benefit} ${
              currentTab === 1 ? styles['benefit--selected'] : ''
            }`}
            onClick={() => setCurrentTab(1)}
          >
            <p>Polisa bez badan lekarskich</p>
          </div>
          <div
            className={`${styles.benefit} ${
              currentTab === 2 ? styles['benefit--selected'] : ''
            }`}
            onClick={() => setCurrentTab(2)}
          >
            <p>Polisa bez badan lekarskich</p>
          </div>
        </div>
        <div className={styles.benefitContainer}>
          {currentTab === 0 && (
            <>
              <img src="/static/health1.jpg" />
              <p className={styles.benefitText}>
                Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce
                fermentum pellentesque ligula, ac porta quam auctor ut. Vivamus
                tincidunt tellus sem, nec placerat nulla commodo vitae. In nec
                sem ac erat condimentum vestibulum eu quis mauris. Sed non
                lobortis nisl. Nunc placerat quis turpis ac ornare.
              </p>
            </>
          )}
          {currentTab === 1 && (
            <>
              <img src="/static/health1.jpg" />
              <p className={styles.benefitText}>
                Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce
                fermentum pellentesque ligula, ac porta quam auctor ut. Vivamus
                tincidunt tellus sem, nec placerat nulla commodo vitae. In nec
                sem ac erat condimentum vestibulum eu quis mauris. Sed non
                lobortis nisl. Nunc placerat quis turpis ac ornare.
              </p>
            </>
          )}
          {currentTab === 2 && (
            <>
              <img src="/static/health1.jpg" />
              <p className={styles.benefitText}>
                Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce
                fermentum pellentesque ligula, ac porta quam auctor ut. Vivamus
                tincidunt tellus sem, nec placerat nulla commodo vitae. In nec
                sem ac erat condimentum vestibulum eu quis mauris. Sed non
                lobortis nisl. Nunc placerat quis turpis ac ornare.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

const HealthInsuranceText = withFadeIn(() => {
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

const HealthInsuranceImage = withFadeIn(
  () => <img src={'/static/health_insurance_img.jpeg'} />,
  2500
)
export default HealthInsurance
