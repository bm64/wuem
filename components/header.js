import React, { useState, useEffect, useRef } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import styles from '../styles/header.module.scss'

import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

function usePortal() {
  const root = useRef(document.createElement('div'))

  useEffect(() => {
    const parent = document.querySelector('main')
    parent.appendChild(root.current)

    return () => root.current.remove()
  }, [])

  return root.current
}

const NavigationModal = ({ children }) => {
  const target = usePortal('main')
  return createPortal(children, target)
}

import useWindowSize from '../hooks/useWindowSize'

function Header({
  onStartPressed,
  onInsurancesPressed,
  onCreditLeasingPressed,
  onContactPressed,
  onAboutPressed,
}) {
  const { width } = useWindowSize()
  const [isCompact, setCompact] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isCompact) setCompact(true)
      else if (window.scrollY < 300) setCompact(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <img
              className={`${styles.logo}`}
              style={
                isCompact || width < 600
                  ? {
                      height: '5rem',
                      transform: 'scale(0.66, 0.66)',
                    }
                  : {
                      height: '6rem',
                    }
              }
              src={
                isCompact || width < 600
                  ? '/static/footer_logo2.png'
                  : '/static/logo.png'
              }
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
            <MenuItem text="O nas" onItemPressed={() => onAboutPressed()} />
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
          <MenuItem text="O nas" onItemPressed={() => onAboutPressed()} />
          <MenuItem text="Kontakt" onItemPressed={() => onContactPressed()} />
        </div>
      </div>
    </>
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
