import React, { useState } from 'react'
import styles from '../../styles/sections/leasing.module.scss'

import withFadeIn from '../../animations/withFadeIn'

function Leasing() {
  return (
    <>
      <div className={styles.imageSection}>
        <LeasingText containerClass={styles['image-section__text']} />
        <LeasingImage containerClass={styles['image-section__image']} />
      </div>
    </>
  )
}

const LeasingText = withFadeIn(() => (
  <>
    <h2>Leasing</h2>
    <p>
      Leasing to połączenie kredytu i dzierżawy. Jako leasingobiorca korzystasz
      z przedmiotu na warunkach ściśle ustalonych w umowie przez leasingodawcę.
      Przez określony czas, przedmiot leasingu jest udostępniony do Twojego
      użytku, a po upływie tego czasu istnieje możliwość wykupu tego przedmiotu.
      Obecnie leasing to nie tylko auto, ale praktycznie wszystkie niezbędne
      sprzęty i nieruchomości.
    </p>
  </>
))

const LeasingImage = withFadeIn(
  () => <img src={'/static/leasing.jpeg'} />,
  2000
)

export default React.memo(Leasing)
