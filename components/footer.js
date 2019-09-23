import styles from '../styles/footer.module.scss'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLine} />
        <img src="/static/footer_logo2.png" />
        <div className={styles.footerLine} />
      </div>
      <div className={styles.footerContent}>
        <p>Kontakt</p>
        <p>Polityka prywatnosci</p>
        <p>RODO</p>
        <p>© 2019 WueMFinanse.pl</p>
      </div>
    </div>
  )
}
export default Footer
