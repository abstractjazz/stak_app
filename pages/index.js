import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import indexStyles from './styles.js'

export default function Home() {
  return (
    <div className={indexStyles.container}>
      <Head>
        <title>All 7z</title>
      </Head>
      <h1>YO!</h1>
    </div>
  )
}
