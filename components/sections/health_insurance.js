import React, { useState } from 'react'
import styles from '../../styles/sections/health_insurance.module.scss'

import withFadeIn from '../../animations/withFadeIn'

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
        Ubezpieczenia zdrowotne, w razie choroby lub wypadku, gwarantują dostęp
        do niezbędnych świadczeń z zakresu opieki medycznej. Dodatkowo
        zapewniają zabezpieczenie finansowe dla osoby ubezpieczonej oraz jej
        rodziny. Spośród wielu pakietów ubezpieczeń zdrowotnych, pomagamy wybrać
        te najbardziej dopasowane do potrzeb naszego klienta.
      </p>
    </>
  )
})

const HealthInsuranceImage = withFadeIn(
  () => <img src={'/static/health_insurance_img.jpeg'} />,
  2500
)
export default React.memo(HealthInsurance)
