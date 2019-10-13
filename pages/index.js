import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import styles from '../styles/index.module.scss'
import {
  FaMapMarkedAlt,
  FaRegClock,
  FaRegEnvelope,
  FaPhoneVolume,
  FaArrowDown,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa'

import withFadeIn from '../animations/withFadeIn'

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

  const headerRef = useRef(null)
  const insurancesRef = useRef(null)
  const financesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = useCallback(
    ref => {
      window.scrollBy(
        0,
        ref.current.getBoundingClientRect().top -
          headerRef.current.getBoundingClientRect().height +
          5
      )
    },
    [headerRef]
  )

  const [isContentHovered, setIsContentHovered] = useState(false)

  const nextImage = useCallback(() => {
    setCurrentImage(currentImage === 0 ? 1 : 0)
  }, [currentImage])

  return (
    <Layout>
      <Header
        headerRef={headerRef}
        onStartPressed={() => window.scrollTo(0, 0)}
        onInsurancesPressed={() => {
          setCurrentImage(1)
          scrollTo(insurancesRef)
        }}
        onCreditLeasingPressed={() => {
          setCurrentImage(0)
          scrollTo(financesRef)
        }}
        onAboutPressed={() => {
          scrollTo(aboutRef)
        }}
        onContactPressed={() => {
          scrollTo(contactRef)
        }}
      >
        <ProgressBar
          reset={currentImage}
          shouldProgress={!isContentHovered}
          onProgressEnded={nextImage}
        />
      </Header>

      <div className={styles.carouselContainer}>
        <div
          className={styles.carousel}
          style={{
            transform: `translateX(${currentImage * 100}vw)`,
          }}
        >
          <div className={styles.carouselImage}></div>
          <div className={styles.carouselImage}></div>
        </div>
        <div className={styles.carouselContent}>
          {currentImage === 1 && (
            <InsurancesContent
              pauseProgress={setIsContentHovered}
              onMorePressed={() => scrollTo(insurancesRef)}
            />
          )}
          {currentImage === 0 && (
            <FinanceContent
              pauseProgress={setIsContentHovered}
              onMorePressed={() => scrollTo(financesRef)}
            />
          )}

          <FaArrowDown
            className={styles.arrow}
            onMouseEnter={() => setIsContentHovered(true)}
            onMouseLeave={() => setIsContentHovered(false)}
          />
        </div>
      </div>

      {currentImage === 1 && (
        <FaChevronRight
          className={styles.nextImageButton}
          onClick={() => setCurrentImage(0)}
        />
      )}
      {currentImage === 0 && (
        <FaChevronLeft
          className={styles.previousImageButton}
          onClick={() => setCurrentImage(1)}
        />
      )}

      <Insurances sectionRef={insurancesRef} />

      <div className={styles.sectionHeader}>
        <h1>Partnerzy</h1>
        <hr className={styles.medium_bottom_line} />
      </div>

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
      <Loans sectionRef={financesRef} />
      <div ref={contactRef} className={styles.sectionHeader}>
        <h1>Najczęściej zadawane pytania</h1>
        <hr className={styles.medium_bottom_line} />
      </div>
      <FAQ />
      {/*<About sectionRef={aboutRef} />*/}

      <div ref={contactRef} className={styles.sectionHeader}>
        <h1>Masz pytanie?</h1>
        <hr className={styles.medium_bottom_line} />
      </div>

      <div className={styles.contact}>
        <ContactInfo />
        <div className={styles.contactDivider}>
          <div className={styles.line} />
          <p>LUB</p>
          <div className={styles.line} />
        </div>
        <ContactForm />
      </div>
      <div className={styles.mapContainer}>
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
      <Cookies />
    </Layout>
  )
}

function ProgressBar({
  shouldProgress,
  onProgressEnded,
  reset,
  duration = 7000,
}) {
  const progressRef = useRef(null)

  const [startValue, setStartValue] = useState(null)
  const startWidth = useMemo(() => {
    if (typeof window === 'undefined') return 0
    return (startValue * window.innerWidth) / 100
  }, [startValue])

  const [isProgressing, setIsProgressing] = useState(false)
  const progressInterval = useState(null)

  const startProgress = () => {
    if (progressInterval.current) clearInterval(progressInterval.current)

    progressInterval.current = setInterval(() => {
      if (progressRef.current) {
        const hasEnded =
          progressRef.current.getBoundingClientRect().width >
          window.innerWidth - 30
        if (hasEnded) {
          if (onProgressEnded) onProgressEnded()
          clearInterval(progressInterval.current)
          setTimeout(() => setStartValue(0), 100)
        }
      }
    }, 200)

    setIsProgressing(true)
  }

  const stopProgress = () => {
    if (progressInterval.current) clearInterval(progressInterval.current)

    setStartValue(null)
    setIsProgressing(false)
  }

  const pauseProgress = () => {
    if (progressInterval.current) clearInterval(progressInterval.current)

    setStartValue(
      (progressRef.current.getBoundingClientRect().width * 100) /
        window.innerWidth
    )
    setIsProgressing(false)
  }

  useEffect(() => {
    if (startValue === 0) {
      stopProgress()
      setTimeout(() => startProgress(), 300)
    }
  }, [startValue])

  useEffect(() => {
    if (!shouldProgress) pauseProgress()
    else startProgress()
  }, [shouldProgress])

  useEffect(() => {
    stopProgress()
    setTimeout(() => startProgress(), 300)
  }, [reset])

  return (
    <div
      ref={progressRef}
      className={styles.progressBar}
      style={{
        transition: isProgressing
          ? `width ${(duration * (1.0 - startValue / 100)) / 1000}s linear`
          : '',
        width: isProgressing ? '100%' : startWidth,
      }}
    />
  )
}

const InsurancesContent = withFadeIn(({ pauseProgress, onMorePressed }) => (
  <div className={styles.carouselText}>
    <h1>Ubezpieczenia dla Ciebie i Twoich bliskich</h1>
    <p>
      Niezależnie, czy jesteś osobą prywatną, czy firmą, w naszej ofercie
      znajdziesz ubezpieczenia dopasowane do twoich potrzeb.
    </p>
    <div
      onMouseEnter={() => pauseProgress(true)}
      onMouseLeave={() => pauseProgress(false)}
      className={styles.carouselButton}
      onClick={() => onMorePressed()}
    >
      Sprawdź ofertę
    </div>
  </div>
))

const FinanceContent = withFadeIn(({ pauseProgress, onMorePressed }) => (
  <div className={styles.carouselText}>
    <h1>Kredyt i leasing na każdą kieszeń</h1>
    <p>
      Pomagamy wybrać najlepsze metody finansowania dla przedsiębiorców i osób
      prywatnych.
    </p>
    <div
      onMouseEnter={() => pauseProgress(true)}
      onMouseLeave={() => pauseProgress(false)}
      className={styles.carouselButton}
      onClick={() => onMorePressed()}
    >
      Sprawdź ofertę
    </div>
  </div>
))

const About = ({ sectionRef }) => (
  <div ref={sectionRef} className={styles.about}>
    <div className={styles.aboutImage} />
    <div className={styles.aboutText}>
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

const ContactInfo = () => (
  <div className={styles.contactSection} style={{ flex: 2 }}>
    <h1 className={styles.contactHeadline}>Odwiedź nas!</h1>
    <div className={styles.infoItem}>
      <FaMapMarkedAlt />
      <div className={styles.contactText}>
        <h2>Adres:</h2>
        <p>Rynek 27/I piętro</p>
        <p>39-300 Mielec</p>
      </div>
    </div>
    <div className={styles.infoItem}>
      <FaRegClock />
      <div className={styles.contactText}>
        <h2>Godziny otwarcia:</h2>
        <p>pn-pt 09:00 - 17:00</p>
        <p>sob. 09:00 - 13:00</p>
      </div>
    </div>
    <div className={styles.infoItem}>
      <FaRegEnvelope />
      <div className={styles.contactText}>
        <h2>E-mail:</h2>
        <p>kontakt@wuemfinanse.pl</p>
      </div>
    </div>
    <div className={styles.infoItem}>
      <FaPhoneVolume />
      <div className={styles.contactText}>
        <h2>Telefon:</h2>
        <p>+48 509 755 700</p>
      </div>
    </div>
  </div>
)

const ContactForm = () => {
  const [didSubmit, setDidSubmit] = useState(false)
  return (
    <form
      method={'post'}
      action={'/mail.php'}
      className={styles.contactSection}
      style={{ flex: 3 }}
      onSubmit={e => {
        e.preventDefault()
        setDidSubmit(true)
      }}
    >
      <h2 className={styles.contactHeadline}>Napisz do nas!</h2>
      <input
        type="text"
        name="name"
        className={styles.contactInput}
        placeholder="Twoje imię"
      />
      <input
        type="text"
        name="email"
        className={styles.contactInput}
        placeholder="Twój adres e-mail"
      />
      <textarea
        type="text"
        name="body"
        className={styles.messageInput}
        placeholder="W czym możemy Ci pomóc"
      />
      <label className={styles.contactAgreement}>
        <input type="checkbox" />
        <p>
          Wyrażam zgodę na na przetwarzanie danych osobowych zgodnie z ustawą o
          ochronie danych osobowych. Podanie danych jest dobrowolne, ale
          niezbędne do przetworzenia zapytania. Dane wpisane w formularzu
          kontaktowym będą przetwarzane w celu udzielenia odpowiedzi na
          przesłane zapytanie oraz w celach marketingowych zgodnie z regulaminem
          Polityki prywatności. Administratorem danych osobowych jest WueM
          finanse w Mielcu (39-300) na rynku.
        </p>
      </label>
      {!didSubmit && (
        <div type="submit" value="Wyslij" className={styles.submitButton}>
          Wyślij
        </div>
      )}
      {didSubmit && <div>Wyslano</div>}
    </form>
  )
}

const Cookies = () => {
  const [showAlert, setShowAlert] = useState(true)
  return showAlert ? (
    <div className={styles.cookies}>
      <p>
        Używamy technologii cookies w celu personalizacji treści, udostępniania
        funkcji mediów społecznościowych oraz analizowania ruchu w Internecie.
        Kliknij <span>tu</span> aby dowiedziec sie wiecej
      </p>
      <FaTimes onClick={() => setShowAlert(false)} />
    </div>
  ) : null
}

export default Home
