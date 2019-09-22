import React, { useState, useEffect } from 'react'
import styles from '../styles/header.module.scss'
import { FaPhoneSquare } from 'react-icons/fa'

function MenuItem({ text }) {
  return (
    <div className={styles.menu__item}>
      <div className={styles.menu__text}>{text}</div>
      <div className={styles.menu__underline} />
    </div>
  )
}

function Header() {
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
            <MenuItem text="Start" />
            <MenuItem text="Ubezpieczenia" />
            <MenuItem text="Kredyt i Leasing" />
            <MenuItem text="Kontakt" />
          </div>
        </div>
        <div className={styles.header__right}>
          <FaPhoneSquare className={styles.header__icon} />
          {/*<MenuItem text="+48 509 755 700"></MenuItem>*/}
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
