import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
  <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="description" content="All 7z: Music, Lifestyle, Merch" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow"/>
        <meta property="og:title" content="All 7z: Music, Lifestyle, Merch"/>
        <meta property="og:site_name" content="All 7z Brand"/>
        <meta property="og:description" content="Explore the All 7z Brand. West Coast Music, Lifestyle, Merch"/>
        <meta property="twitter:title" content="All 7z: Music, Lifestyle, Merch"/>
        <meta property="twitter:description" content="Explore the All 7z Brand. West Coast Music, Lifestyle, Merch"/>
      </Head>
      <Component {...pageProps} />
  </>
  )
}

export default MyApp
