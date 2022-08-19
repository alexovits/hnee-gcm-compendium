import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Compendium</title>
        <meta name="description" content="Compendium" />
        <link rel="icon" href="/hnee-green.png" />
      </Head>

      <main className={styles.mainArticle}>
        <div className={styles.articleHeader}>
          <a href="/">
            <img src="/hnee.png" href="/sdfsd" alt="hnee-logo" width="auto" id={styles.hneeArticleHeader}/>
          </a>
        </div>
        <div className={styles.articleContainer}>
          <h1 className={styles.articleTitle}>Towards a more sustainable fashion industry: What can companies learn from Patagonia?</h1>
          <p id={styles.articleDate}>Updated at 30.07.2022</p>
          <p id={styles.author}>By Melanie Klawitter</p>
          <div className={styles.divider}/>

          <div className={styles.articleImageContainer} id={styles.doughnutImage}>
            <img src="/personal-d/d-12.png" alt="doughnut" height="auto" className={styles.personalDoughnut}/>
            <span>Fig.1 Doughnut showing dimesions affected by this subject</span>
          </div>

          <h2>I. Introduction</h2>
          <p>Paragraph</p>

        <h2>References</h2>
        <ol start="1" className={styles.referenceList}>
          <li>refi</li>
          <li></li>
        </ol>
        </div>
      </main>
    </div>
  )
}
