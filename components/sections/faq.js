import React from 'react'
import styles from '../../styles/sections/faq.module.scss'

import { FaQuestionCircle } from 'react-icons/fa'

function FAQ() {
  return (
    <div className={styles.fixedSection}>
      <h2 className={styles.headline}> Najczesciej zadawane pytania </h2>
      <div className={styles.questions}>
        <Question
          title={`Czy ubezpieczenie komunikacyjne OC  jest obowiązkowe?`}
          answer={`
          Tak, ubezpieczenie odpowiedzialności cywilnej (OC), jest obowiązkowe dla posiadaczy pojazdów mechanicznych. Aby zwiększyć zakres ochrony dla siebie i swojego pojazdu, możemy wyposażyć się w ubezpieczenia dobrowolne takie jak Autocasco, Assistance, czy NNW.`}
        />
        <Question
          title={'Czym grozi brak ubezpieczenia oc pojazdu?'}
          answer={`Właściciel pojazdu bez aktualnego ubezpieczenia OC, który jednocześnie jest sprawcą kolizji / wypadku, musi ponieść koszty naprawienia wyrządzonej szkody oraz opłacić karę za brak ubezpieczenia.`}
        />
        <Question
          title={'Czy ubezpieczenie OC pojazdu można opłacać w ratach?'}
          answer={`Tak, istnieje możliwość rozłożenia płatności na raty. Najczęściej, skutkiem tego jest wzrost ceny składki. Ubezpieczenie OC zazwyczaj zawierane jest na okres 12 miesięcy, przez co istnieje możliwość płatności kwartalnej bądź comiesięcznej. `}
        />
        <Question
          title={`Co wpływa na wysokość składki OC?`}
          answer={`Na wysokość składki ma wpływ wiele czynników. Najważniejsze z nich to: miejsce zameldowania właściciela pojazdu, marka i model pojazdu, pojemność silnika, wiek właściciela i ewentualnych współwłaścicieli, oraz przebieg ubezpieczenia.`}
        />
        <Question
          title={`Czy mogę nabyć polisę dla kogoś innego?`}
          answer={`Tak, jeśli jesteś z nim spokrewniony. Typowym przykładem nabywania polis na życie dla kogoś innego są polisy posagowe. Wykupuje je rodzic lub opiekun prawny dla swojego dziecka. Dziecko, – gdy osiągnie odpowiedni wiek – będzie mogło korzystać ze świadczenia.`}
        />
        <Question
          title={`Czy Leasing tylko na samochód?`}
          answer={`
          Dla osób prowadzących działalność gospodarczą, to nie tylko auto, ale praktycznie wszystkie potrzebne narzędzia i nieruchomości. Obecnie coraz częściej leasingowane są maszyny, sprzęt specjalistyczny, sprzęt elektroniczny czy wyposażenie wnętrz.`}
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

export default React.memo(FAQ)
