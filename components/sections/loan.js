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
        Kredyt to pisemna umowa między bankiem a kredytobiorcą, wyniku której
        bank udostępnia określoną sumę pieniędzy. Kredytobiorca zobowiązuje się
        do zwrotu całej kwoty kredytu w określonym czasie, najczęściej w formie
        comiesięcznych rat. Klientom indywidualnym banki najczęściej udzielają
        kredytów hipotecznych, gotówkowych, samochodowych, podczas gdy wśród
        kredytów firmowych najpopularniejsze to kredyty obrotowe oraz
        inwestycyjne. W zależności od potrzeb naszych klientów, pomagamy dobrać
        najlepszy sposób finansowania
      </p>
    </>
  ),
  2000
)

const LoanImage = withFadeIn(() => <img src={'/static/loan.jpeg'} />, 2500)

export default React.memo(Loan)
