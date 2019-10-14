import Head from 'next/head'
import '../styles/layout.scss'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>WueM Finanse</title>
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
          href="http://wuemfinanse.pl/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <main>{children}</main>
    </>
  )
}
export default Layout
