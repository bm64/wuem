import styles from "./footer.module.css";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkedAlt
} from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footer__contact}>
          <p>Kontakt</p>
          <button type="button" className={styles.footer__button}>
            Zadzwoń teraz
          </button>
          <button type="button" className={styles.footer__button}>
            Wyślij wiadomość
          </button>
          <div className={styles.icons}>
            <button className={styles.icon__button}>
              <FaGooglePlusG />
            </button>
            <button className={styles.icon__button}>
              <FaFacebookF />
            </button>
            <button className={styles.icon__button}>
              <FaTwitter />
            </button>

            <button className={styles.icon__button}>
              <FaLinkedinIn />
            </button>
          </div>
        </div>
        <div className={styles.footer__address}>
          <FaMapMarkedAlt className={styles.footer__address_icon} />
          <span>
            ul.Rynek 27 I piętro,
            <br /> 39-300 Mielec
          </span>
        </div>
        <div className={styles.footer__logo}>
          <img className={styles.logo} src="/static/footer_logo.png" />
        </div>
        <div className={styles.footer__navigation}>
          <p>Nawigacja</p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a>Start</a>
            </li>
            <li>
              <a>Ubezpiecznia</a>
            </li>
            <li>
              <a>Kredyt i Leasing</a>
            </li>
            <li>
              <a>Kontakt</a>
            </li>
            <li>
              <a>RODO</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2019 Copyright: &nbsp;
        <a
          href="http://www.wuemfinanse.pl"
          style={{
            color: "#a69c68",
            textDecoration: "none"
          }}
        >
          {" "}
          WueMfinanse.pl
        </a>
      </div>
    </div>
  );
}
export default Footer;
