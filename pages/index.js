import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import indexStyles from './styles.js'

export default function Home() {
  return (
    <div className={indexStyles.container}>
      <Head>
       
      </Head>
      <h1>Landing | About | Highlights, like feature track, new release, news, new merch, etc...</h1>
    </div>
  )
}
