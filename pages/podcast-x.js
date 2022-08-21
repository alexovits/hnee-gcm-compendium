import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MapInteractionCSS } from 'react-map-interaction';
import YoutubeEmbed from "./YoutubeEmbed";
import Spotify from 'react-spotify-embed';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Compendium</title>
        <meta name="description" content="Compendium" />
        <link rel="icon" href="../public/hnee-green.png" />
      </Head>
      <main className={styles.mainArticle}>

      <div className={styles.articleHeader}>
        <a href="/">
          <img src="/hnee.png" href="/" alt="hnee-logo" width="auto" id={styles.hneeArticleHeader}/>
        </a>
      </div>
      <div className={styles.articleContainer}>
        <h1 className={styles.articleTitle}>Is China building roads good or bad? Hmmm, I wonder.</h1>
        <p id={styles.articleDate}>Updated at 30.07.2022</p>
        <p id={styles.author}>By John Doe</p>
        <div className={styles.divider}/>

        <div className={styles.articleImageContainer} id={styles.doughnutImage}>
          <img src="/personal-d/d-12.png" alt="doughnut" height="auto" className={styles.personalDoughnut}/>
          <span>Fig.1 Doughnut showing dimesions affected by this subject</span>
        </div>
        <div className="App">
          <YoutubeEmbed embedId="qx8Gb_zwj8Q" />
        </div>
        <Spotify wide link="https://open.spotify.com/track/1AObGJHBNGq23MkG3ZDjbJ?si=9e74036029444879"/>
      </div>
      </main>

    </div>
  )
}
