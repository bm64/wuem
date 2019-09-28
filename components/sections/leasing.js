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
      Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce fermentum
      pellentesque ligula, ac porta quam auctor ut. Vivamus tincidunt tellus
      sem, nec placerat nulla commodo vitae. In nec sem ac erat condimentum
      vestibulum eu quis mauris. Sed non lobortis nisl. Nunc placerat quis
      turpis ac ornare. Nunc ligula quam, hendrerit vitae pretium non, fermentum
      eu urna. Nunc euismod, lectus quis sodales sollicitudin, nulla odio
      accumsan mauris, vel lobortis metus urna a nulla.
    </p>
  </>
))

const LeasingImage = withFadeIn(
  () => <img src={'/static/leasing_1.jpeg'} />,
  2000
)

export default React.memo(Leasing)
