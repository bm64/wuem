import styles from "./header.module.css";
import { FaPhoneSquare } from "react-icons/fa";

function MenuItem({ text }) {
  return (
    <div className={styles.menu__item}>
      <div className={styles.menu__text}>{text}</div>
      <div className={styles.menu__underline} />
    </div>
  );
}
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header__left}>
        <div className={styles.logo__container}>
          <img className={styles.logo} src="/static/logo.png" />
        </div>
        <div className={styles.menu__container}>
          <MenuItem text="Start" />
          <MenuItem text="Ubezpieczenia" />
          <MenuItem text="Kredyt i Leasing" />
          <MenuItem text="Kontakt" />
        </div>
      </div>
      <div className={styles.header__right}>
        <FaPhoneSquare className={styles.icon} />

        <MenuItem text="123-123-123" />
      </div>
    </div>
  );
}
export default Header;
