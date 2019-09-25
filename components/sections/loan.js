import React, { useState } from 'react'
import styles from '../../styles/sections/loan.module.scss'

import withFadeIn from '../../animations/withFadeIn'

function Loan() {
  return (
    <>
      <div className={styles.imageSection}>
        <LoanText containerClass={styles['image-section__text']} />
        <LoanImage containerClass={styles['image-section__image']} />
      </div>
    </>
  )
}

const LoanText = withFadeIn(
  () => (
    <>
      <h2>Kredyt</h2>
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
  ),
  2000
)

const LoanImage = withFadeIn(() => <img src={'/static/loan_1.jpeg'} />, 2500)

export default Loan
