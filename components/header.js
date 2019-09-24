import React, { useState, useEffect } from 'react'
import styles from '../styles/header.module.scss'
import { FaPhoneSquare } from 'react-icons/fa'

function MenuItem({ text, onItemPressed }) {
  return (
    <div className={styles.menu__item} onClick={() => onItemPressed()}>
      <div className={styles.menu__text}>{text}</div>
      <div className={styles.menu__underline} />
    </div>
  )
}

function Header({
  onStartPressed,
  onInsurancesPressed,
  onCreditLeasingPressed,
  onContactPressed,
  onAboutPressed,
}) {
  const [isCompact, setCompact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isCompact) setCompact(true)
      else if (window.scrollY < 300 && isCompact) setCompact(false)
    }

    window.addEventListener('scroll', handleScroll)
  })

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <img
            className={`${styles.logo} ${isCompact ? styles.logoCompact : ''}`}
            src={isCompact ? '/static/footer_logo2.png' : '/static/logo.png'}
          />
          <div className={styles.menu__container}>
            <MenuItem text="Start" onItemPressed={() => onStartPressed()} />
            <MenuItem
              text="Ubezpieczenia"
              onItemPressed={() => onInsurancesPressed()}
            />
            <MenuItem
              text="Kredyt i Leasing"
              onItemPressed={() => onCreditLeasingPressed()}
            />
            <MenuItem text="O nas" onItemPressed={() => onAboutPressed()} />
            <MenuItem text="Kontakt" onItemPressed={() => onContactPressed()} />
          </div>
        </div>
        <div className={styles.header__right}>
          <div
            className={styles.call__button}
            style={isCompact ? { border: 'none' } : {}}
          >
            <span>+48 509 755 700</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
