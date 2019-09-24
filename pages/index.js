import React, { useState, useRef } from 'react'
import styles from '../styles/index.module.scss'
import {
  FaMapMarkedAlt,
  FaRegClock,
  FaRegEnvelope,
  FaPhoneVolume,
  FaArrowDown,
} from 'react-icons/fa'

import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

import Slider from 'react-slick'

import Insurances from '../components/insurances'
import Loans from '../components/loans'

import FAQ from '../components/sections/faq'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
}

function Home() {
  const [currentImage, setCurrentImage] = useState(1)

  const insurancesRef = useRef(null)
  const loansRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <Layout>
      <Header
        onStartPressed={() => window.scrollTo(0, 0)}
        onInsurancesPressed={() => {
          setCurrentImage(1)
          window.scrollBy(
            0,
            insurancesRef.current.getBoundingClientRect().top -
              insurancesRef.current.getBoundingClientRect().height +
              40
          )
        }}
        onCreditLeasingPressed={() => {
          setCurrentImage(0)
          window.scrollBy(
            0,
            loansRef.current.getBoundingClientRect().top -
              loansRef.current.getBoundingClientRect().height +
              40
          )
        }}
        onContactPressed={() => {
          window.scrollBy(
            0,
            contactRef.current.getBoundingClientRect().top -
              (contactRef.current.getBoundingClientRect().height + 40)
          )
        }}
      />
      <div className={styles.carousel__container}>
        <div
          className={styles.carousel}
          style={{ transform: `translateX(${currentImage * 100}vw)` }}
        >
          <div className={styles.carousel__image} style={{ left: '0vw' }}></div>
          <div
            className={styles.carousel__image}
            style={{ left: '-100vw' }}
          ></div>
        </div>
        <div className={styles.carousel__text}>
          <h1>Poznaj nasze ubezpieczenia</h1>
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle przykładowy wypełniacz w przemyśle.
          </p>
          <div
            className={styles.carousel__button}
            onClick={() => window.scrollTo(0, window.innerHeight - 80)}
          >
            Sprawdź ofertę
          </div>
        </div>
        <FaArrowDown className={styles.arrow} />
      </div>

      <Insurances sectionRef={insurancesRef} />
      <Loans sectionRef={loansRef} />

      <FAQ />
      <About />

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

      <div ref={contactRef} className={styles.section_header}>
        <h1>Masz pytanie?</h1>
        <hr className={styles.medium_bottom_line} />
      </div>
      <div className={styles.contact}>
        <ContactInfo />
        <div className={styles.info__divider}>
          <div className={styles.line} />
          <p>LUB</p>
          <div className={styles.line} />
        </div>
        <ContactForm />
      </div>
      <div className={styles.map__container}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10197.168743002092!2d21.4199396!3d50.2864735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x646d734823f4f0c9!2sWueM%20Finanse%20Ubezpieczenia%20Leasing!5e0!3m2!1spl!2spl!4v1568916799182!5m2!1spl!2spl"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
        />
      </div>
      <Footer
        onContactPressed={() =>
          window.scrollBy(
            0,
            contactRef.current.getBoundingClientRect().top -
              (contactRef.current.getBoundingClientRect().height + 40)
          )
        }
      />
    </Layout>
  )
}

const About = () => (
  <div className={styles.aboutUs}>
    <div className={styles.aboutUs__image} />
    <div className={styles.aboutUs__text}>
      <h1>O naszej firmie</h1>
      <p>
        WueM Finanse to Ogólnie znana teza głosi, iż użytkownika może rozpraszać
        zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd.
        WueM Finanse to Ogólnie znana teza głosi, iż użytkownika może rozpraszać
        zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd.
        WueM Finanse to Ogólnie znana teza głosi, iż użytkownika może rozpraszać
        zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd.
      </p>
    </div>
  </div>
)

const ContactForm = () => (
  <form className={styles.contact__form}>
    <h1>Napisz do nas!</h1>
    <input type="text" className={styles.form__name} placeholder="Twoje imię" />
    <input
      type="text"
      className={styles.form__mail}
      placeholder="Twój adres e-mail"
    />
    <textarea
      type="text"
      className={styles.form__message}
      placeholder="W czym możemy Ci pomóc"
    />
    <div type="submit" className={styles.form__submit}>
      Wyślij
    </div>
  </form>
)

const ContactInfo = () => (
  <div className={styles.contact__info}>
    <h1 className={styles.info__headline}>Odwiedź nas!</h1>
    <div className={styles.info__location}>
      <div className={styles.contact__icon__wrapper}>
        <FaMapMarkedAlt style={{ margin: 'auto 0', fontSize: '50px' }} />
      </div>
      <div className={styles.contact__text}>
        <h2>Adres:</h2>
        <p>Rynek 27/I piętro</p>
        <p>39-300 Mielec</p>
      </div>
    </div>
    <div className={styles.info__hours}>
      <div className={styles.contact__icon__wrapper}>
        <FaRegClock style={{ margin: 'auto 0', fontSize: '50px' }} />
      </div>
      <div className={styles.contact__text}>
        <h2>Godziny otwarcia:</h2>
        <p>pn-pt 09:00 - 17:00</p>
        <p>sob. 09:00 - 13:00</p>
      </div>
    </div>
    <div className={styles.info__email}>
      <div className={styles.contact__icon__wrapper}>
        <FaRegEnvelope style={{ margin: 'auto 0', fontSize: '50px' }} />
      </div>
      <div className={styles.contact__text}>
        <h2>E-mail:</h2>
        <p>biuro@wuemfinanse.pl</p>
      </div>
    </div>
    <div className={styles.info__phone}>
      <div className={styles.contact__icon__wrapper}>
        <FaPhoneVolume style={{ margin: 'auto 0', fontSize: '50px' }} />
      </div>
      <div className={styles.contact__text}>
        <h2>Telefon:</h2>
        <p>+48 509 755 700</p>
      </div>
    </div>
  </div>
)

export default Home
