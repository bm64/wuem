import React, {useState} from 'react';
import Layout from '../components/layout';
import styles from '../styles/index.module.scss';
import {
  FaCar,
  FaHeartbeat,
  FaUmbrellaBeach,
  FaHome,
  FaHandshake,
  FaHandHoldingUsd,
  FaMapMarkedAlt,
  FaPhone,
  FaRegClock,
  FaRegEnvelope,
  FaPhoneVolume,
  FaArrowDown,
} from 'react-icons/fa';

import Slider from 'react-slick';
import CarsInsurance from '../components/sections/cars_insurance';
import HealthInsurance from '../components/sections/health_insurance';
import TravelInsurance from '../components/sections/travel_insurance';
import PropertyInsurance from '../components/sections/property_insurance';
import Loan from '../components/sections/loan';
import Leasing from '../components/sections/leasing';

import withFadeIn from '../animations/withFadeIn';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

function Home() {
  const [currentImage, setCurrentImage] = useState(1);
  const [currentSection, setCurrentSection] = useState(3);

  return (
    <Layout>
      <div className={styles.carousel__container}>
        <div
          className={styles.carousel}
          style={{transform: `translateX(${currentImage * 100}vw)`}}>
          <img
            className={styles.carousel__image}
            style={{left: '0vw'}}
            src="/static/1.jpg"
          />
          <img
            className={styles.carousel__image}
            style={{left: '-100vw'}}
            src="/static/2.jpg"
          />
        </div>
      </div>

      <MenuBar
        currentImage={currentImage}
        currentSection={currentSection}
        changeSection={setCurrentSection}
      />
      <FaArrowDown className={styles.arrow} />

      {currentSection === 1 && <CarsInsurance />}
      {currentSection === 2 && <HealthInsurance />}
      {currentSection === 3 && <TravelInsurance />}
      {currentSection === 4 && <PropertyInsurance />}
      {currentSection === 5 && <Loan />}
      {currentSection === 6 && <Leasing />}

      <div className={styles.slider__container}>
        <Slider {...settings} className={styles.slider}>
          <div>
            <img className={styles.slider__img} src="/static/logo_row1.png" />
          </div>
          <div>
            <img className={styles.slider__img} src="/static/logo_row2.png" />
          </div>
          <div>
            <img className={styles.slider__img} src="/static/logo_row3.png" />
          </div>
          <div>
            <img className={styles.slider__img} src="/static/logo_row4.png" />
          </div>
          <div>
            <img className={styles.slider__img} src="/static/logo_row5.png" />
          </div>
        </Slider>
      </div>
      <div className={styles.contact_header}>
        <h1>Skontaktuj się z nami!</h1>
        <hr className={styles.medium_bottom_line} />
      </div>
      <div className={styles.contact}>
        <div className={styles.contact__info}>
          <div className={styles.info__location}>
            <div className={styles.contact__icon__wrapper}>
              <FaMapMarkedAlt style={{margin: 'auto 0', fontSize: '50px'}} />
            </div>
            <div className={styles.contact__text}>
              <h2>Adres:</h2>
              <p>Rynek 27/I piętro</p>
              <p>39-300 Mielec</p>
            </div>
          </div>
          <div className={styles.info__hours}>
            <div className={styles.contact__icon__wrapper}>
              <FaRegClock style={{margin: 'auto 0', fontSize: '50px'}} />
            </div>
            <div className={styles.contact__text}>
              <h2>Godziny otwarcia:</h2>
              <p>pn-pt 09:00 - 17:00</p>
              <p>sob. 09:00 - 13:00</p>
            </div>
          </div>
          <div className={styles.info__email}>
            <div className={styles.contact__icon__wrapper}>
              <FaRegEnvelope style={{margin: 'auto 0', fontSize: '50px'}} />
            </div>
            <div className={styles.contact__text}>
              <h2>E-mail:</h2>
              <p>biuro@wuemfinanse.pl</p>
            </div>
          </div>
          <div className={styles.info__phone}>
            <div className={styles.contact__icon__wrapper}>
              <FaPhoneVolume style={{margin: 'auto 0', fontSize: '50px'}} />
            </div>
            <div className={styles.contact__text}>
              <h2>Telefon:</h2>
              <p>+48 509 755 700</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
}

const MenuBar = ({currentImage, currentSection, changeSection}) => {
  return (
    <>
      {currentImage === 1 ? (
        <div className={styles.menu}>
          <div
            className={`${styles.menu__item} ${
              currentSection === 1 ? styles['menu__item--selected'] : ''
            }`}
            onClick={() => changeSection(1)}>
            <FaCar className={styles['menu__item-icon']} />
            <p>Ubezpiecznia pojazdów</p>
          </div>
          <div
            className={`${styles.menu__item} ${
              currentSection === 2 ? styles['menu__item--selected'] : ''
            }`}
            onClick={() => changeSection(2)}>
            <FaHeartbeat className={styles['menu__item-icon']} />
            <p>Ubezpieczenia zdrowotne</p>
          </div>
          <div
            className={`${styles.menu__item} ${
              currentSection === 3 ? styles['menu__item--selected'] : ''
            }`}
            onClick={() => changeSection(3)}>
            <FaUmbrellaBeach className={styles['menu__item-icon']} />
            <p>Ubezpieczenia turystyczne</p>
          </div>
          <div
            className={`${styles.menu__item} ${
              currentSection === 4 ? styles['menu__item--selected'] : ''
            }`}
            onClick={() => changeSection(4)}>
            <FaHome className={styles['menu__item-icon']} />
            <p>Ubezpieczenia nieruchomości</p>
          </div>
        </div>
      ) : (
        <div className={styles.menu}>
          <div
            className={`${styles.menu__item} ${
              currentSection === 5 ? styles['menu__item--selected'] : ''
            }`}
            onClick={() => changeSection(5)}>
            <FaHandHoldingUsd className={styles['menu__item-icon']} />
            <p>Kredyt</p>
          </div>
          <div
            className={`${styles.menu__item} ${
              currentSection === 6 ? styles['menu__item--selected'] : ''
            }`}
            onClick={() => changeSection(6)}>
            <FaHandshake className={styles['menu__item-icon']} />
            <p>Leasing</p>
          </div>
        </div>
      )}
    </>
  );
};

const ContactForm = withFadeIn(() => (
  <form className={styles.contact__form}>
    <h1>Masz pytanie? Napisz do nas!</h1>
    <input
      type="text"
      className={styles.form__name}
      placeholder=" Twoje imię"
    />
    <input
      type="text"
      className={styles.form__mail}
      placeholder=" Twój adres e-mail"
    />
    <textarea
      type="text"
      className={styles.form__message}
      placeholder=" W czym możemy Ci pomóc"
    />
    <div type="submit" className={styles.form__submit}>
      Wyślij
    </div>
  </form>
));

export default Home;
