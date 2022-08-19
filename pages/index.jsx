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
          <img src="/hnee.png" alt="hnee-logo" width="auto" id={styles.hneeTitle}/>
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
          <a href="/patagonia-melanie" className={styles.card}>
            <h2>Towards a more sustainable fashion industry: What can companies learn from Patagonia?</h2>
            <p>Melanie Klawitter</p>
          </a>
          <a href="/patagonia-melanie" className={styles.card}>
            <h2>Towards a more sustainable fashion industry: What can companies learn from Patagonia?</h2>
            <p>Melanie Klawitter</p>
          </a>
          <a href="/patagonia-melanie" className={styles.card}>
            <h2>Towards a more sustainable fashion industry: What can companies learn from Patagonia?</h2>
            <p>Melanie Klawitter</p>
          </a>
          <a href="/patagonia-melanie" className={styles.card}>
            <h2>Towards a more sustainable fashion industry: What can companies learn from Patagonia?</h2>
            <p>Melanie Klawitter</p>
          </a>
          <a href="/patagonia-melanie" className={styles.card}>
            <h2>Towards a more sustainable fashion industry: What can companies learn from Patagonia?</h2>
            <p>Melanie Klawitter</p>
          </a>
          <a href="/patagonia-melanie" className={styles.card}>
            <h2>Towards a more sustainable fashion industry: What can companies learn from Patagonia?</h2>
            <p>Melanie Klawitter</p>
          </a>
          <a href="/patagonia-melanie" className={styles.card}>
            <h2>Towards a more sustainable fashion industry: What can companies learn from Patagonia?</h2>
            <p>Melanie Klawitter</p>
          </a>
          <a href="/patagonia-melanie" className={styles.card}>
            <h2>Towards a more sustainable fashion industry: What can companies learn from Patagonia?</h2>
            <p>Melanie Klawitter</p>
          </a>
        </div>
      </main>
    </div>
  )
}
