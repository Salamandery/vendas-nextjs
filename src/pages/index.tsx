import type { NextPage } from 'next'
import Head from 'next/head'
import {
    Layout
} from 'components';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>VendasTs</title>
        <meta name="description" content="VendasTs created by Rodolfo M F Abreu - nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
