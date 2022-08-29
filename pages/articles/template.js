import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import ArticleHeader from '../ArticleHeader'

export default function Home() { return (
  <div className={styles.container}>

    <Head>
      <title>Compendium</title>
      <meta name="description" content="Compendium" />
      <link rel="icon" href="../public/hnee-green.png" />
    </Head>

    <main className={styles.mainArticle}>
      <ArticleHeader/>
      <div className={styles.articleContainer}>
        <h1 className={styles.articleTitle}>"Ecobarrios" in Bogotá - Towards a 'generous cities' strategy based on Abya Yala alternatives to development.</h1>
        <p id={styles.articleDate}>Updated at 24.08.2022</p>
        <p id={styles.author}>By Ana Moreno</p>
        <div className={styles.divider}/>

        <div className={styles.articleImageContainer} id={styles.doughnutImage}>
          <img src="/personal-d/GCM personal donuts neu-23 Ana Moreno.png" alt="doughnut" height="auto" className={styles.personalDoughnut}/>
          <span>Doughnut showing dimesions affected by this subject</span>
        </div>
        <h2>I. Introduction</h2>
        <p>As a global key factor in social and environmental (UNEP, 2020) degradation, urban areas draw the public attention in seeking solutions to overcome their unsustainable functioning. In this regard, "Ecobarrios" or “eco-neighborhoods" is a living
          proposal created by different communities worldwide for more than thirty years.</p>
        <p>Herein, the experience of "Ecobarrios" in "the Bogotá Eastern Hills"-Colombia is analyzed, starting with their historical evolution and conception, followed by the fundamental features in the light of “the doughnut economy model” (Raworth, 2017).
          The latter means that the "Ecobarrios" contribute to an “embedded economy” (Raworth, 2017) and its participation in both the social foundation and the planetary boundaries model.</p>

        <div className={styles.articleImageContainer}>
          <img src="/ana-moreno/3_ Figure 2.jpg" alt="doughnut" height="auto" />
          <span>Fig.1. Tall buildings: Gentrification Bosque Calderon Neighborhood (El Tiempo, 2015)</span>
        </div>

        <h2>II. What is going on?</h2>
        <h3>Looking at the trajectory: Bogotá and its Eastern Hills</h3>
        <p>According to the National Administrative Statistics Department (DANE, 2021), the Colombian transition from a rural to an urban country was determined by migratory movements as a result of the armed conflict since the 20th century, where victims
          of forced displacement and internal migrants came from the countryside to the peri-urban areas. DANE asserts, that the "population is forced to request shelter from relatives or to build houses with waste materials in areas that have a low access
          to public services and, in many cases, are at risk of disaster" (DANE, 2021), by occupying land through invasions or informal market housing. </p>

        <div className={styles.articleImageContainer}>
          <img id={styles.narrowImage} src="/ana-moreno/6_ Figure 3.jpg" alt="doughnut" height="auto" />
          <span>Fig.2. Minga: Indigenous word used now in urban activities. (2020)</span>
        </div>

        <h2>References</h2>
        <ol start="1" className={styles.referenceList}>
          <li>Álvarez Cubillos, H. H. (2010). Pensando en Ecobarrios: Una propuesta a las políticas de reasentamiento y políticas de Hábitat. Bogotá: CINEP. Retrieved from https://issuu.com/escobarriossc/docs/ecobarrios</li>
        </ol>
      </div>
    </main>
  </div>
) }
