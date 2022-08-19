import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MapInteractionCSS } from 'react-map-interaction';

export default function Home() {
  return (
    <div className={styles.mainImageZoomContainer}>
      <Head>
        <title>Compendium</title>
        <meta name="description" content="Compendium" />
        <link rel="icon" href="../public/hnee-green.png" />
      </Head>
      <div className={styles.articleHeader}>
        <a href="/">
          <img src="/hnee.png" href="/" alt="hnee-logo" width="auto" id={styles.hneeArticleHeader}/>
        </a>
      </div>
      <div className={styles.mapContainer}>
        <MapInteractionCSS>
          <img src="poster/worldwide.jpg" width={'auto'} className={styles.zoomImage}/>
        </MapInteractionCSS>
      </div>
    </div>
  )
}
