import React, { useState } from "react";
import Layout from "../components/layout";
import styles from "./index.module.css";
import {
  FaCar,
  FaHeartbeat,
  FaUmbrellaBeach,
  FaHome,
  FaHandshake,
  FaHandHoldingUsd
} from "react-icons/fa";
import Slider from "react-slick";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import CarsInsurance from "../components/sections/cars_insurance";
import HealthInsurance from "../components/sections/health_insurance";
import TravelInsurance from "../components/sections/travel_insurance";
import PropertyInsurance from "../components/sections/property_insurance";
import Loan from "../components/sections/loan";
import Leasing from "../components/sections/leasing";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };
  const [currentImage, setCurrentImage] = useState(1);
  const [currentSection, setCurrentSection] = useState(1);
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.carousel__container}>
          <div
            className={styles.carousel}
            style={{ transform: `translateX(${currentImage * 100}vw)` }}
          >
            <img className={styles.img1} src="/static/1.jpg" />
            <img className={styles.img2} src="/static/2.jpg" />
            <img className={styles.img3} src="/static/3.jpg" />
          </div>
          <div className={styles.carousel__buttons}>
            <button
              onClick={() => setCurrentImage(1)}
              className={styles.carousel__left}
            >
              Ubezpieczenia
            </button>
            <button
              onClick={() => setCurrentImage(0)}
              className={styles.carousel__right}
            >
              Kredyt i Leasing
            </button>
          </div>
        </div>
        {currentImage === 1 ? (
          <div className={styles.menu}>
            <div
              className={`${styles.menu__item} ${
                currentSection === 1 ? styles.menu__item__selected : ""
              }`}
              onClick={() => setCurrentSection(1)}
            >
              <FaCar className={styles.icon} />
              <p>Ubezpiecznia pojazdów</p>
            </div>
            <div
              className={`${styles.menu__item} ${
                currentSection === 2 ? styles.menu__item__selected : ""
              }`}
              onClick={() => setCurrentSection(2)}
            >
              <FaHeartbeat className={styles.icon} />
              <p>Ubezpieczenia zdrowotne</p>
            </div>
            <div
              className={`${styles.menu__item} ${
                currentSection === 3 ? styles.menu__item__selected : ""
              }`}
              onClick={() => setCurrentSection(3)}
            >
              <FaUmbrellaBeach className={styles.icon} />
              <p>Ubezpieczenia turystyczne</p>
            </div>
            <div
              className={`${styles.menu__item} ${
                currentSection === 4 ? styles.menu__item__selected : ""
              }`}
              onClick={() => setCurrentSection(4)}
            >
              <FaHome className={styles.icon} />
              <p>Ubezpieczenia nieruchomości</p>
            </div>
          </div>
        ) : (
          <div className={styles.menu}>
            <div
              className={`${styles.menu__item} ${
                currentSection === 5 ? styles.menu__item__selected : ""
              }`}
              onClick={() => setCurrentSection(5)}
            >
              <FaHandHoldingUsd className={styles.icon} />
              <p>Kredyt</p>
            </div>
            <div
              className={`${styles.menu__item} ${
                currentSection === 6 ? styles.menu__item__selected : ""
              }`}
              onClick={() => setCurrentSection(6)}
            >
              <FaHandshake className={styles.icon} />
              <p>Leasing</p>
            </div>
          </div>
        )}
      </div>
      {/*}<div className={styles.section}>
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
          <div className={styles.section__content}>
            <h1>Lorem Ipsum</h1>

            <span>
              Lorem ipsum dolor sit a met, consectetur adipiscing elit. Fusce
              fermentum pellentesque ligula, ac porta quam auctor ut. Vivamus
              tincidunt tellus sem, nec placerat nulla commodo vitae. In nec sem
              ac erat condimentum vestibulum eu quis mauris. Sed non lobortis
              nisl. Nunc placerat quis turpis ac ornare. Nunc ligula quam,
              hendrerit vitae pretium non, fermentum eu urna. Nunc euismod,
              lectus quis sodales sollicitudin, nulla odio accumsan mauris, vel
              lobortis metus urna a nulla.
            </span>
          </div>
        </ScrollAnimation>

        <img src="/static/section_img.jpg" className={styles.section__img} />
      </div>*/}
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
      <div className={styles.contact}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10197.168743002092!2d21.4199396!3d50.2864735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x646d734823f4f0c9!2sWueM%20Finanse%20Ubezpieczenia%20Leasing!5e0!3m2!1spl!2spl!4v1568406377686!5m2!1spl!2spl"
          width="700"
          height="500"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
        ></iframe>
        <div className={styles.contact__form}>
          <h1>Skontaktuj się z nami!</h1>
          <br />
          <h3>Masz pytanie? Potrzebujesz wyceny? Napisz do nas</h3>
          <br />
          <form>
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
            <br />
            <textarea
              type="text"
              className={styles.form__message}
              placeholder=" W czym możemy Ci pomóc"
            />
            <br />
            <div type="submit" className={styles.form__submit}>
              <span>Wyślij</span>
            </div>
            <br />
          </form>
        </div>
      </div>
    </Layout>
  );
}
export default Home;
