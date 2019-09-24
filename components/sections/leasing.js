import React, { useState } from 'react'
import styles from '../../styles/sections/leasing.module.scss'

import withScrollIn from '../../animations/withScrollIn'

import { withLeftSlideIn } from '../../animations/withSlideIn'

function Leasing() {
  return (
    <>
      <div className={styles.imageSection}>
        <LeasingText containerClass={styles['image-section__text']} />
        <img src={'insurance.jpeg'} />
      </div>
    </>
  )
}

const LeasingText = withLeftSlideIn(() => (
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

export default withScrollIn(Leasing)
