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
  FaUnderline,
} from 'react-icons/fa'

import useLocalStorage from '../hooks/useLocalStorage'

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

  const [showRodo, setShowRodo] = useState(false)
  const [showPolicy, setShowPolicy] = useState(false)

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
        <ContactForm onPolicyPressed={() => setShowPolicy(true)} />
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
        onRodoPressed={() => setShowRodo(true)}
        onPolicyPressed={() => setShowPolicy(true)}
        onContactPressed={() =>
          window.scrollBy(
            0,
            contactRef.current.getBoundingClientRect().top -
              (contactRef.current.getBoundingClientRect().height + 40)
          )
        }
      />
      {showRodo === true && (
        <div
          className={styles.policyContainer}
          onClick={() => setShowRodo(false)}
        >
          <div className={styles.policy}>
            <p>
              <strong></strong>
            </p>
            <p style={{ textAlign: 'center' }}>
              <strong>Klauzula informacyjna do formularzy kontaktowych</strong>
              <br />
              <strong>Informacje ogólne</strong>
            </p>
            <br />
            <p>
              Zgodnie z art. 13 ust. 1 i ust. 2 Rozporządzenia Parlamentu
              Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
              sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
              osobowych i w sprawie swobodnego przepływu takich danych oraz
              uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
              danych) (Dz.U.UE.L.2016.119.1 z dnia 04.05.2016), dalej zwanym
              RODO, informujemy, że:
            </p>
            <br />
            <p>
              - Administratorem danych osobowych jest{' '}
              <strong>WueM Finanse Waldemar Maziarz</strong> &nbsp;z siedzibą w
              Mielcu 39-300 przy ul. Rynek 27, posiadająca NIP 8171001795.
            </p>
            <p>
              - Z Administratorem danych można skontaktować się: listownie na
              adres: 39-300 Mielec, ul. Rynek 27.
            </p>
            <p>
              - Państwa dane osobowe pozyskane przez Administratora przetwarzane
              będą w celu udzielenia odpowiedzi na email przesłany przez
              formularz kontaktowy, to jest w celu podjęcia działań na żądanie
              osoby, której dane dotyczą, przed zawarciem umowy (art. 6 ust 1
              lit. a i b RODO).
            </p>
            <p>
              - Odbiorcami danych osobowych podanych przez Państwa w treści
              zapytania przesłanego za pomocą formularza kontaktowego mogą być
              podmioty, którym administrator powierzył przetwarzanie danych
              (tzw. procesorzy) np. obsługa IT.
            </p>
            <p>
              - Dane osobowe nie będą przekazywane do państwa trzeciego ani
              organizacji międzynarodowej.
            </p>
            <p>
              - Dane osobowe przetwarzane do celu obsługi zapytania będą
              przechowywane przez okres trwania korespondencji uzasadniony
              rodzajem zapytania (jednak nie dłużej niż przez okres 6 miesięcy
              od daty zakończenia korespondencji), ewentualnie do czasu
              wcześniejszego odwołania zgody na przetwarzanie.
              <br />- W zależności od tego, jakie będą rezultaty prowadzonej
              korespondencji, dane albo będą dalej przetwarzane w celu
              realizacji umowy o czym osoba, której dane dotyczą zostanie
              odrębnie poinformowana, albo zostaną usunięte, jeżeli nie dojdzie
              do nawiązania współpracy.
            </p>
            <p>
              - Osobie, której dane osobowe dotyczą, przysługuje prawo dostępu
              do treści swoich danych osobowych oraz prawo ich sprostowania,
              usunięcia, ograniczenia przetwarzania, prawo do przenoszenia
              danych, prawo wniesienia sprzeciwu wobec przetwarzania danych, a
              jeżeli przetwarzanie odbywa się na podstawie zgody: prawo do
              cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z
              prawem przetwarzania, którego dokonano na podstawie zgody przed
              jej cofnięciem.
            </p>
            <p>
              - Aby skorzystać z praw wskazanych powyżej, proszę się kontaktować
              z Administratorem danych na dane kontaktowe podane w pkt 2
              powyżej.
            </p>
            <p>
              - Jeśli osoba, której dane osobowe dotyczą, uzna, iż przetwarzanie
              jej danych osobowych narusza przepisy o ochronie danych osobowych,
              przysługuje jej prawo wniesienia skargi do organu nadzorczego
              zajmującego się ochroną danych osobowych to jest Prezesa Urzędu
              Ochrony Danych Osobowych.
            </p>
            <p>- Podanie danych osobowych jest dobrowolne.</p>
            <p>
              - WueM Finanse Waldemar Maziarz może korzystać z systemów
              służących do zautomatyzowanego podejmowania decyzji. Następujące
              decyzje są podejmowane w sposób zautomatyzowany: profilowanie
              wykonywane jest w oparciu o posiadane dane, w szczególności takie
              jak: dane dotyczące świadczonych usług, dane transmisyjne, dane o
              lokalizacji, informacje pozyskane za pomocą tzw. plików cookies.
              Profilowanie ma wpływ na informacje marketingowe oraz oferty,
              jakie Państwo będą otrzymywać (oferta dopasowana do Państwa
              potrzeb).
            </p>

            <p style={{ textAlign: 'center' }}>
              <br />
              <strong>
                Część II. Prawo do sprzeciwu z przyczyn związanych ze szczególną
                sytuacją
              </strong>
              <br />
              <br />
            </p>
            <p>
              Ponadto zgodnie z art. 21 ust. 1 i ust. 4 RODO informujemy, iż:
            </p>
            <br />
            <p>
              - Osobie, której dane osobowe dotyczą, przysługuje prawo
              wniesienia sprzeciwu – z przyczyn związanych zjej szczególną
              sytuacją - wobec przetwarzania dotyczących jej danych osobowych w
              przypadku, gdyby przetwarzanie danych osobowych następowało na
              następujących podstawach:
              <br />
              a) przetwarzanie danych osobowych jest niezbędne do wykonania
              zadania realizowanego w interesie publicznym lub w ramach
              sprawowania władzy publicznej powierzonej Administratorowi danych
              osobowych,
              <br />
              b) przetwarzane danych osobowych jest niezbędne do celów
              wynikających z prawnie uzasadnionych interesów realizowanych przez
              Administratora lub stronę trzecią.
            </p>
            <p>
              - Sprzeciw, o którym mowa w pkt 1 należy zgłosić Administratorowi
              danych.
            </p>
            <p>
              - Z Administratorem danych można skontaktować się: listownie na
              adres:{' '}
              <strong>
                WueM Finanse Waldemar Maziarz lub przez email:
                kontakt@wuemfinanse.pl.
              </strong>
            </p>
            <p>
              - Zgodnie z art. 21 ust. 1 RODO, zgłaszając sprzeciw, należy
              wskazać jego przyczyny związane ze szczególną sytuacją osoby,
              której dane dotyczą.
            </p>
            <br />
            <p style={{ textAlign: 'center' }}>
              <strong>
                Część III. Prawo do sprzeciwu wobec przetwarzania danych do
                celów marketingu bezpośredniego
              </strong>
            </p>
            <br />
            <p>
              Ponadto zgodnie z art. 21 ust. 2 i ust. 4 RODO informujemy, iż:
            </p>
            <br />
            <p>
              - Osobie, której dane osobowe dotyczą, przysługuje prawo
              wniesienia sprzeciwu wobec przetwarzania jej danych osobowych w
              przypadku gdyby przetwarzanie następowało do celów marketingu
              bezpośredniego, w tym profilowania.
            </p>
            <p>
              - Prawo do sprzeciwu przysługuje w zakresie, w jakim przetwarzanie
              danych osobowych jest związane zmarketingiem bezpośrednim.
            </p>
            <p>
              - Sprzeciw, o którym mowa w pkt 1 należy zgłosić Administratorowi
              danych.
            </p>
            <p>
              - Z Administratorem danych można skontaktować się: listownie na
              adres: WueM Finanse Waldemar Maziarz lub przez email:
              kontakt@wuemfinanse.pl.
            </p>

            <p></p>
            <p></p>
          </div>
        </div>
      )}
      {showPolicy === true && (
        <div
          className={styles.policyContainer}
          onClick={() => setShowPolicy(false)}
        >
          <div className={styles.policy}>
            <p style={{ textAlign: 'center' }}>
              <strong>Polityka Prywatności</strong>
            </p>
            <p style={{ textAlign: 'center' }}>
              <strong>
                Polityka prywatności opisuje zasady przetwarzania przez nas
                informacji na Twój temat, w tym danych osobowych oraz
                ciasteczek, czyli tzw. cookies.
              </strong>
            </p>
            <br />
            <p style={{ textAlign: 'center' }}>
              <strong>1. Informacje ogólne</strong>
            </p>
            <br />
            <p>
              1) Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
              adresem: www.wuemfinanse.pl
            </p>
            <p>
              2) Operatorem serwisu oraz Administratorem danych osobowych jest:
              WueM Finanse Waldemar Maziarz, ul. Rynek
            </p>
            <p>27, 39-300 Mielec</p>
            <p>
              3) Adres kontaktowy poczty elektronicznej operatora:
              kontakt@wuemfinanse.pl
            </p>
            <p>
              4) Operator jest Administratorem Twoich danych osobowych w
              odniesieniu do danych podanych dobrowolnie w
            </p>
            <p>Serwisie.</p>
            <p>5) Serwis wykorzystuje dane osobowe w następujących celach:</p>
            <p>a) Obsługa zapytań przez formularz</p>
            <p>b) Realizacja zamówionych usług</p>
            <p>c) Prezentacja oferty lub informacji</p>
            <p>
              6) Serwis realizuje funkcje pozyskiwania informacji o
              użytkownikach i ich zachowaniu w następujący sposób:
            </p>
            <p>
              a) Poprzez dobrowolnie wprowadzone w formularzach dane, które
              zostają wprowadzone do systemów
            </p>
            <p>Operatora.</p>
            <p>
              b) Poprzez zapisywanie w urządzeniach końcowych plików cookie
              (tzw. „ciasteczka”).
            </p>
            <p>
              <br />
            </p>
            <p style={{ textAlign: 'center' }}>
              <strong>
                2. Wybrane metody ochrony danych stosowane przez Operatora
              </strong>
            </p>
            <br />
            <p>
              1) Miejsca logowania i wprowadzania danych osobowych są chronione
              w warstwie transmisji (certyfikat SSL). Dzięki temu
            </p>
            <p>
              dane osobowe i dane logowania, wprowadzone na stronie, zostają
              zaszyfrowane w komputerze użytkownika i mogą
            </p>
            <p>być odczytane jedynie na docelowym serwerze.</p>
            <p>2) Operator okresowo zmienia swoje hasła administracyjne.</p>
            <p>
              3) Istotnym elementem ochrony danych jest regularna aktualizacja
              wszelkiego oprogramowania, wykorzystywanego
            </p>
            <p>
              przez Operatora do przetwarzania danych osobowych, co w
              szczególności oznacza regularne aktualizacje
            </p>
            <p>komponentów programistycznych.</p>
            <p style={{ textAlign: 'center' }}>
              <strong>3. Hosting</strong>
            </p>
            <br />
            <p>
              1) Serwis jest hostowany (technicznie utrzymywany) na serwera
              operatora: Globtel Internet Szymon Hersztek
            </p>
            <p>
              4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania
              danych
            </p>
            <p>
              1) W niektórych sytuacjach Administrator ma prawo przekazywać
              Twoje dane osobowe innym odbiorcom, jeśli będzie to
            </p>
            <p>
              niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania
              obowiązków ciążących na Administratorze.
            </p>
            <p>Dotyczy to takich grup odbiorców:</p>
            <p>
              a) upoważnieni pracownicy i współpracownicy, którzy korzystają z
              danych w celu realizacji celu działania strony
            </p>
            <p>
              2) Twoje dane osobowe będą przechowywane przez okres niezbędny do
              realizacji celów, dla których zostały
            </p>
            <p>
              zgromadzone, a po upływie tego okresu przez okres oraz w zakresie
              wymaganym przez przepisy powszechnie
            </p>
            <p>obowiązującego prawa.</p>
            <p>3) Przysługuje Ci prawo żądania od Administratora:</p>
            <p>a) dostępu do danych osobowych Ciebie dotyczących,</p>
            <p>b) ich sprostowania,</p>
            <p>c) usunięcia,</p>
            <p>d) ograniczenia przetwarzania,</p>
            <p>e) oraz przenoszenia danych.</p>
            <p>
              4) Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
              przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania
            </p>
            <p>
              danych osobowych w celu wykonania prawnie uzasadnionych interesów
              realizowanych przez Administratora, w tym
            </p>
            <p>
              profilowania, przy czym prawo sprzeciwu nie będzie mogło być
              wykonane w przypadku istnienia ważnych prawnie
            </p>
            <p>
              uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie
              interesów, praw i wolności, w szczególności
            </p>
            <p>ustalenia, dochodzenia lub obrony roszczeń.</p>
            <p>
              5) Na działania Administratora przysługuje skarga do Prezesa
              Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193
            </p>
            <p>Warszawa.</p>
            <p>
              6) Podanie danych osobowych jest dobrowolne, lecz niezbędne do
              obsługi Serwisu.
            </p>
            <p>
              7) W stosunku do Ciebie mogą być podejmowane czynności polegające
              na zautomatyzowanym podejmowaniu decyzji, w
            </p>
            <p>
              tym profilowaniu w celu świadczenia usług w ramach zawartej umowy
              oraz w celu prowadzenia przez Administratora
            </p>
            <p>marketingu bezpośredniego.</p>

            <p>
              8) Dane osobowe nie są przekazywane od krajów trzecich w
              rozumieniu przepisów o ochronie danych osobowych.
            </p>
            <p>
              Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.
            </p>
          </div>
        </div>
      )}
      <Cookies onPolicyPressed={() => setShowPolicy(true)} />
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
      znajdziesz ubezpieczenia dopasowane do twoich potrzeb
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
      prywatnych
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

const ContactForm = ({ onPolicyPressed }) => {
  const [didSubmit, setDidSubmit] = useState(false)
  return (
    <form
      method={'post'}
      action={'/contactform.php'}
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
          ochronie danych osobowych. Podanie danych jest dobrowolne i niezbędne
          do przetworzenia zapytania. Informacje zawarte w formularzu
          kontaktowym będą wykorzystywane w celu udzielenia odpowiedzi na
          przesłane zapytanie oraz w celach marketingowych zgodnie z regulaminem{' '}
          <span
            style={{ textDecoration: 'underline' }}
            onClick={() => onPolicyPressed()}
          >
            Polityki prywatności
          </span>
          . Administratorem danych osobowych jest WueM Finanse z siedzibą w
          Mielcu(39-300) ul. Rynek 27.
        </p>
      </label>
      {!didSubmit && (
        <button type="submit" name="submit" className={styles.submitButton}>
          Wyślij
        </button>
      )}
      {didSubmit && <div>Wyslano</div>}
    </form>
  )
}

const Cookies = ({ onPolicyPressed }) => {
  const [hasAcceptedCookies, setHasAcceptedCookies] = useLocalStorage(
    'hasAcceptedCookies',
    false
  )

  return !hasAcceptedCookies ? (
    <div className={styles.cookies}>
      <p>
        Używamy technologii cookies w celu personalizacji treści, udostępniania
        funkcji mediów społecznościowych oraz analizowania ruchu w Internecie.
        Kliknij{' '}
        <span
          style={{ textDecoration: 'underline' }}
          onClick={() => onPolicyPressed()}
        >
          tu
        </span>{' '}
        aby dowiedziec sie wiecej
      </p>
      <FaTimes onClick={() => setHasAcceptedCookies(true)} />
    </div>
  ) : null
}

export default Home
