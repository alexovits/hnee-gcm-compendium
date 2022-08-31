import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import { MapInteractionCSS } from 'react-map-interaction';
import YoutubeEmbed from "../YoutubeEmbed";

export default function Podcast() {
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
          <h1 className={styles.articleTitle}>How housing cooperatives contribute for a more sustainable life in Germany</h1>
          <p id={styles.articleDate}>Updated at 30.08.2022</p>
          <p id={styles.author}>By Caro Munkert</p>
          <div className={styles.divider}/>

          <div className={styles.articleImageContainer} id={styles.doughnutImage}>
            <img src="/personal-d/GCM personal donuts-20 Caro.png" alt="doughnut" height="auto" className={styles.personalDoughnut}/>
            <span>Fig.1 Doughnut showing dimesions affected by this subject</span>
          </div>
          <div className="App">
            <YoutubeEmbed embedId="7aYcfU2i7zw" />
          </div>
        </div>
        <iframe className={styles.spotify} src="https://open.spotify.com/embed/episode/7sHfztHkdWyyz8uDqgeUuE?utm_source=generator" width="50%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </main>
    </div>
  )
}

  // <Spotify wide link="https://open.spotify.com/track/1AObGJHBNGq23MkG3ZDjbJ?si=9e74036029444879"/>
