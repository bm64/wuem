import styles from "../styles/footer.module.scss";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkedAlt
} from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__top}>
        <hr className={styles.footer__line} />
        <img src="/static/footer_logo2.png" />
        <hr className={styles.footer__line} />
      </div>
      <div className={styles.footer__mid}>
        <div className={styles.footer__left}>
          <h1>
            biuro@wuemfinanse.pl <br />
            +48 509 755 700
          </h1>
        </div>
        <hr />
        <div className={styles.footer__right}>
          <div className={styles.list__container}>
            <h2>Ubezpieczenia</h2>
            <ul>
              <li>Ubezpieczenia pojazdów</li>
              <li>Ubezpieczenia zdrowotne</li>
              <li>Ubezpieczenia turystyczne</li>
              <li>Ubezpieczenia nieruchomości</li>
            </ul>
          </div>
          <div>
            <h2>Finanse</h2>
            <ul>
              <li>Kredyt</li>
              <li>Leasing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>Copyright © 2019 WueMFinanse</div>
    </div>
  );
}
export default Footer;
