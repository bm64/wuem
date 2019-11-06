import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/header.module.scss'

import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

import useWindowSize from '../hooks/useWindowSize'

function Header({
  headerRef,
  onStartPressed,
  onInsurancesPressed,
  onCreditLeasingPressed,
  onContactPressed,
  onAboutPressed,
  children,
}) {
  const { width } = useWindowSize()
  const [isCompact, setCompact] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const [showProgress, setShowProgress] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isCompact) setCompact(true)
      else if (window.scrollY < 300) setCompact(false)

      if (window.scrollY > 300 && showProgress) setShowProgress(false)
      else if (window.scrollY < 300) setShowProgress(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.container}>
      <div ref={headerRef} className={styles.header}>
        <div className={styles.headerLeft}>
          <div
            onClick={() => onStartPressed()}
            className={`${styles.logo} ${
              isCompact ? styles['logo--compact'] : ''
            }`}
          />
        </div>
        <div className={styles.headerMiddle}>
          {!showMenu ? (
            <FaBars
              className={styles.hamburgerIcon}
              onClick={() => setShowMenu(true)}
            />
          ) : (
            <FaTimes
              className={styles.hamburgerIcon}
              onClick={() => setShowMenu(false)}
            />
          )}

          <MenuItem text="Start" onItemPressed={() => onStartPressed()} />
          <MenuItem
            text="Ubezpieczenia"
            onItemPressed={() => onInsurancesPressed()}
          />
          <MenuItem
            text="Kredyt i Leasing"
            onItemPressed={() => onCreditLeasingPressed()}
          />
          {/*<MenuItem text="O nas" onItemPressed={() => onAboutPressed()} />*/}
          <MenuItem text="Kontakt" onItemPressed={() => onContactPressed()} />
        </div>

        <div className={styles.headerRight}>
          {width < 600 && (
            <a href="tel:+48509755700">
              <FaPhone className={styles.directCallButton} />
            </a>
          )}
          <div
            className={styles.callButton}
            style={isCompact ? { border: 'none' } : {}}
          >
            <span>+48 </span>
            <span>509 755 700</span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: showMenu && width <= 1200 ? 'initial' : 'none',
        }}
        className={styles.menuContent}
      >
        <MenuItem text="Start" onItemPressed={() => onStartPressed()} />
        <MenuItem
          text="Ubezpieczenia"
          onItemPressed={() => onInsurancesPressed()}
        />
        <MenuItem
          text="Kredyt i Leasing"
          onItemPressed={() => onCreditLeasingPressed()}
        />
        {/*<MenuItem text="O nas" onItemPressed={() => onAboutPressed()} />*/}
        <MenuItem text="Kontakt" onItemPressed={() => onContactPressed()} />
      </div>
      {showProgress && <> {children} </>}
    </div>
  )
}

function MenuItem({ text, onItemPressed }) {
  return (
    <div className={styles.menuItem} onClick={() => onItemPressed()}>
      <div className={styles.menuText}>{text}</div>
      <div className={styles.menuUnderline} />
    </div>
  )
}

export default Header
