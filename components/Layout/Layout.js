import Head from 'next/head'
import styles from './Layout.module.css'
import Header from '../Header'


export default function Layout({ children, home }) {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="kendric's website"
        />
      </Head>
      <Header showTypist={home}/>
      <main>{children}</main>
    </div>
  )
}