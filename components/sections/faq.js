import React from 'react'
import styles from '../../styles/sections/faq.module.scss'

import { FaQuestionCircle } from 'react-icons/fa'

function FAQ() {
  return (
    <div className={styles.fixedSection}>
      <h2 className={styles.headline}> Najczesciej zadawane pytania </h2>
      <div className={styles.questions}>
        <Question
          title={`Kiedy potrzebuję ubezpieczenia na życie?`}
          answer={`
Generalnie, im wcześniej, tym lepiej. Tu liczy się czas. Im wcześniej się ubezpieczysz, tym więcej zyskasz i będziesz mógł to zrobić na korzystniejszych warunkach. Najlepiej jest więc ubezpieczyć się wraz z podjęciem pierwszej pracy zawodowej. Wysokość płaconej przez Ciebie składki będzie zależeć od Twojego wieku, wykonywanego zawodu, stanu zdrowia, a także uprawianych sportów.`}
        />
        <Question
          title={'Jaki jest zakres obowiązkowego ubezpieczenia OC?'}
          answer={`Ubezpieczeniem OC objęta jest odpowiedzialność cywilna każdej osoby, która kierując pojazdem mechanicznym w okresie trwania odpowiedzialności ubezpieczeniowej, wyrządziła szkodę  w związku z ruchem tego pojazdu.`}
        />
        <Question
          title={
            'Czy w ramach prywatnego ubezpieczenia muszę stać w kolejkach do lekarza?'
          }
          answer={`Nie. W ramach prywatnej polisy zdrowotnej Ubezpieczony ma zagwarantowane bezpłatne leczenie w prywatnych przychodniach i centach medycznych współpracujących z Ubezpieczycielem. Ubezpieczony dzwoni do wybranej przychodni i umawia się na konkretny dzień i godzinę. Dotyczy to zarówno wizyt u lekarzy pierwszego kontaktu, jak i wizyt u lekarzy specjalistów.`}
        />
        <Question
          title={`Co to jest suma ubezpieczenia?`}
          answer={`To ustalona w umowie ubezpieczenia kwota pieniężna stanowiąca górną granicę odpowiedzialności zakładu ubezpieczeń za szkody poniesione bądź wyrządzone przez ubezpieczonego w okresie na jaki umowa została zawarta.`}
        />
        <Question
          title={`Czy mogę nabyć polisę dla kogoś innego?`}
          answer={`Tak, jeśli jesteś z nim spokrewniony. Typowym przykładem nabywania polis na życie dla kogoś innego są polisy posagowe. Wykupuje je rodzic lub opiekun prawny dla swojego dziecka. Dziecko, – gdy osiągnie odpowiedni wiek – będzie mogło korzystać ze świadczenia.`}
        />
        <Question
          title={`Złamałem palec - co mam zrobić żeby dostać odszkodowanie?`}
          answer={`
Jeżeli doznałeś uszczerbku na zdrowiu i posiadasz ubezpieczenie NNW, jak najszybciej zgłoś zaistniałe zdarzenie do towarzystwa. Zakład ubezpieczeń na pewno będzie wymagał pełnej dokumentacji potwierdzającej to zdarzenie. Towarzystwo ma na wypłatę odszkodowania 30 dni – licząc od daty otrzymania zawiadomienia o wypadku.`}
        />
      </div>
    </div>
  )
}

const defaultTitle = 'Lorem ipsum dolor sit a met, consectetur adipiscing elit?'
const defaultAnswer = `
        ipsum dolor sit a met, consectetur adipiscing elit. Fusce fermentum
        pellentesque ligula, ac porta quam auctor ut. Vivamus tincidunt tellus
        sem, nec placerat nulla commodo vitae. In nec sem ac erat condimentum
        vestibulum eu quis mauris.
`

const Question = ({ title = defaultTitle, answer = defaultAnswer }) => (
  <div className={styles.question}>
    <FaQuestionCircle />
    <h3>{title}</h3>
    <div className={styles.answer}>
      <p>{answer}</p>
    </div>
  </div>
)

export default FAQ
