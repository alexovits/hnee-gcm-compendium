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

      <main className={styles.main}>

        <div className={styles.titleContainer}>
          <img src="/hnee_black.png" alt="hnee-logo" width="auto" id={styles.hneeTitle}/>
          <div className={styles.descCont}>

            <h1 className={styles.titleHeader}>Compendium on Planetary Boundaries</h1>
            <p className={styles.titleDescription}>
            Human development has led to an overexploitation of finite resources
            along with a mismatch of nations development. The challenge today is
            for less developed countries to catch up by not following the path of
            the developed countries as well as developed countries to go through
            a transformation to a sustainable path (Rockstöm, 2013). The world is
            going through systemic risk, global change has shown how societies
            and economies depend on earth's support systems.
            To face the struggle humanity is facing ahead, and considering
            how the economy is embedded within and dependent upon society and
            the living world, transformational change is needed for a sustainable
            and just way of living for everybody. For the purpose of this
            compendium the framework will be within donut economy and planetary
             boundaries.

            The GCM Class of 2021 have collected analyses and impressions
             on 27 different projects around the world that embody the
             socio-ecological transformation potential.
             </p>
             <a className={styles.readMoreAboutTitle} href="/about">
                Read more about it! &rarr;
             </a>
          </div>
          <img src="/main-d.png" alt="doughnut" height={'auto'} id={styles.titleImage}/>
        </div>
        <h2 className={styles.checkoutTitle}>Check out our inputs</h2>
        <div className={styles.divider} id={styles.homePagedivider}></div>
        {/* <p className={styles.filterInfo}>By clicking on one of the boxes below, you can search for projects that has an effect on the selected dimensions of the ecological ceiling or the social foundation.</p>*/}
        <div className={styles.mainFilterContainer}>
          <div className={styles.filterContainer}>
            <p>Ecological Ceiling</p>
            <div className={styles.filterWrapper}>
              <div className={styles.filterBox}>
                <span>Climate Change</span>
              </div>
              <div className={styles.filterBox}>
                <span>Climate Change</span>
              </div>
              <div className={styles.filterBox}>
                <span>Climate Change</span>
              </div>
              <div className={styles.filterBox}>
                <span>Climate Change</span>
              </div>
              <div className={styles.filterBox}>
                <span>Climate Change</span>
              </div>
              <div className={styles.filterBox}>
                <span>Climate Change</span>
              </div>
              <div className={styles.filterBox}>
                <span>Climate Change</span>
              </div>
              <div className={styles.filterBox}>
                <span>Climate Change</span>
              </div>
            </div>
          </div>
          <div className={styles.verticalDivider}></div>
          <div className={styles.filterContainer}>
            <p>Social Foundation</p>
          </div>
        </div>

        <div className={styles.grid}>
          <a href="/article/melanie" className={styles.card}>
            <h2>Towards a more sustainable fashion industry: What can companies learn from Patagonia?</h2>
            <p>Melanie Klawitter</p>
          </a>
          <a href="/poster/vale" className={styles.card}>
            <h2>Carbon Negative Country - Bhutan as a role model in climate action</h2>
            <p>Valentina García</p>
          </a>
          <a href="/poster/krissi" className={styles.card}>
            <h2>Education driving societal Transformation - the Project MakingAchange</h2>
            <p>Ann-Kristin Knickmann</p>
          </a>
          <a href="/poster/kira" className={styles.card}>
            <h2>Tiny Forests - Active reforestation for local transformation</h2>
            <p>Kira Bastian</p>
          </a>
          <a href="/article/ana-maier" className={styles.card}>
            <h2>How Costa Rica reversed deforestation – An environmental success story</h2>
            <p>Ana Maier</p>
          </a>
          <a href="/article/ana-moreno" className={styles.card}>
            <h2>"Ecobarrios" in Bogotá - Towards a 'generous cities' strategy</h2>
            <p>Ana Moreno</p>
          </a>
          <a href="/article/juan-coka" className={styles.card}>
            <h2>The city of change: a journey into the urban agriculture revolution in Berlin</h2>
            <p>Juan Coka</p>
          </a>
          <a href="/article/marcel" className={styles.card}>
            <h2>Pleistocene Park - Back to the Ice Age : How primeval ecosystems could mitigate climate change</h2>
            <p>Marcel Bongartz</p>
          </a>
          <a href="/podcast-x" className={styles.card}>
            <h2>Podcast about a topic</h2>
            <p>John Doe</p>
          </a>
        </div>
      </main>
    </div>
  )
}
