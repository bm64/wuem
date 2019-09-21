import Header from './header'
import Head from 'next/head'
import Footer from './footer'
import '../styles/layout.scss'
function Layout({ children }) {
  return (
    <>
      <Head>
        <title>WueM Finanse</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
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

        <script src="https://kit.fontawesome.com/4a78aee91a.js" />
      </Head>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}
export default Layout
