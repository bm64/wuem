import React, { useState } from 'react'

import styles from '../../styles/sections/property_insurance.module.scss'

import withFadeIn from '../../animations/withFadeIn'

function PropertyInsurance() {
  return (
    <>
      <div className={styles.imageSection}>
        <PropertyInsuranceText containerClass={styles['image-section__text']} />
        <PropertyInsuranceImage
          containerClass={styles['image-section__image']}
        />
      </div>
      <div className={styles.propertySection}>
        <h2 className={styles.propertyHeadline}>
          Zabezpiecz swoje rodzinne progi juz <span>dzis</span>
        </h2>
        <Cards />
      </div>
    </>
  )
}

const PropertyInsuranceText = withFadeIn(() => {
  return (
    <>
      <h2>
        Ubezpieczenia <span>majątkowe</span>
      </h2>
      <p>
        Ubezpieczenia majątkowe zapewniają ochronę mienia w przypadku kradzieży,
        uszkodzenia lub innych zdarzeń losowych. Należy pamiętać o tym, że
        wysokość składki zależy od wartości ubezpieczanego mienia. Pakiety
        ubezpieczeń majątkowych oferują różne zakresy ochrony nieruchomości.
        Doradzamy naszym klientom który pakiet jest dla nich odpowiedni.
      </p>
    </>
  )
})

const PropertyInsuranceImage = withFadeIn(
  () => <img src={'/static/property_insurance_img.jpeg'} />,
  2500
)

const Cards = withFadeIn(
  () => (
    <div className={styles.cards}>
      <HouseInsurance />
      <FlatInsurance />
      <HouseInBuildInsurance />
    </div>
  ),
  2000
)

const HouseInsurance = () => (
  <div className={styles.card}>
    <img src="/static/property1.jpeg" />
    <h3>Dom i Mieszkanie</h3>
    <p>
      Ubez­pie­cze­nie domu lub miesz­ka­nia gwa­ran­tuje pokry­cie strat
      powsta­łych w wyniku zda­rzeń loso­wych, bądź dzia­łal­no­ści osób
      trze­cich. Wyso­kość wypła­co­nej sumy, oraz zakres ochrony, zależą od
      rodzaju wybra­nej polisy.
    </p>
  </div>
)

const FlatInsurance = () => (
  <div className={styles.card}>
    <img src="/static/property2.jpeg" />
    <h3>Co jest chronione w ramach ubezpieczenia?</h3>
    <ul>
      <li>mury/ściany</li>
      <li>stałe elementy (np. posadzka, okna, armatura, sanitarna)</li>
      <li>wyposażenie (np. meble, sprzęt RTV i AGD)</li>
      <li>życie i zdrowie lokatorów</li>
    </ul>
  </div>
)

const HouseInBuildInsurance = () => (
  <div className={styles.card}>
    <img src="/static/property3.jpeg" />
    <h3>Home Assistance</h3>
    <p>
      Home Assi­stance zapew­nia pomoc w nagłych i nie­prze­wi­dzia­nych
      awa­riach. Zamiast odszko­do­wa­nia, osoba ubez­pie­czona może liczyć na
      usługi takie jak dar­mowa naprawa sprzętu RTV i AGD, ser­wis
      infor­ma­tyczny, lub pomoc fachowca np. hydrau­lika, ślu­sa­rza itd.
    </p>
  </div>
)

export default React.memo(PropertyInsurance)
