import React from 'react'
import styles from '../styles/footer.module.scss'

function Footer({ onContactPressed, onRodoPressed, onPolicyPressed }) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLine} />
        <img src="/static/footer_logo2.png" />
        <div className={styles.footerLine} />
      </div>
      <div className={styles.footerContent}>
        <p onClick={() => onContactPressed()}>Kontakt</p>
        <p onClick={() => onPolicyPressed()}>Polityka prywatnosci </p>
        <p onClick={() => onRodoPressed()}>RODO </p>
        <p>© 2019 WueMFinanse.pl</p>
      </div>
    </div>
  )
}
export default React.memo(Footer)
