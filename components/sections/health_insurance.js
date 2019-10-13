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
      <div className={styles.healthSection}>
        <h2 className={styles.benefitsTitle}>
          Zadbaj o swoje <span>zdrowie</span> i Twoich bliskich
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
            <p>Pakiet badań</p>
          </div>
          <div
            className={`${styles.benefit} ${
              currentTab === 2 ? styles['benefit--selected'] : ''
            }`}
            onClick={() => setCurrentTab(2)}
          >
            <p>Prywatna opieka medyczna</p>
          </div>
        </div>
        <div className={styles.benefitContainer}>
          {currentTab === 0 && (
            <>
              <img className={styles.benefitImg} src="/static/health1.jpeg" />
              <p className={styles.benefitText}>
                Dzięki ubezpieczeniu zdrowotnemu posiadacz polisy oraz jego
                rodzina, otrzymuje dostęp do całodobowej informacji medycznej.
                Ubezpieczenie zapewnia również możliwość skorzystania z szeregu
                konsultacji lekarskich oraz ułatwia dostęp do wykonywania badań.
              </p>
            </>
          )}
          {currentTab === 1 && (
            <>
              <img className={styles.benefitImg} src="/static/health2.jpeg" />
              <p className={styles.benefitText}>
                Ubezpieczenie zdrowotne pozwala na przeprowadzenie szeregu badań
                w ramach posiadanej polisy. Dostęp dotyczy podstawowych lub
                rozszerzonych badań: diagnostycznych, laboratoryjnych,
                rentgenowskich, EKG.
              </p>
            </>
          )}
          {currentTab === 2 && (
            <>
              <img className={styles.benefitImg} src="/static/health3.jpeg" />
              <p className={styles.benefitText}>
                Prywatna opieka medyczna to najczęściej wybierane dobrowolne
                ubezpieczenie zdrowotne, gwarantujące dostęp do lekarzy i usług
                z pominięciem państwowej służby zdrowia.
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
