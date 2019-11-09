import Head from 'next/head'
import '../styles/layout.scss'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>WueM Finanse - Ubezpieczenia, kredyt, leasing, finanse</title>
        <meta
          name="description"
          content="WuemFinanse Ubezpieczenia Finanse Mielec ul.Rynek 27 Godziny otwarcia: pn-pt 09:00 - 17:00 sob. 09:00 - 13:00 Usługi ubezpieczeniowe i finansowe
"
        />

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="shortcut icon"
          href="https://wuemfinanse.pl/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="https://wuemfinanse.pl/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <main>{children}</main>
    </>
  )
}
export default Layout
