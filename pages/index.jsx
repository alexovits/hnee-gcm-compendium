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
            <div>
              <p>Melanie Klawitter</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/article/simon" className={styles.card}>
            <h2>The German Renewable Energy Sources Act (EEG)</h2>
            <div>
              <p>Simon Schreck</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/poster/vale" className={styles.card}>
            <h2>Carbon Negative Country - Bhutan as a role model in climate action</h2>
            <div>
              <p>Valentina García</p>
              <p id={styles.posterColorType} className={styles.cardType}>Poster</p>
            </div>
          </a>
          <a href="/poster/krissi" className={styles.card}>
            <h2>Education driving societal Transformation - the Project MakingAchange</h2>
            <div>
              <p>Ann-Kristin Knickmann</p>
              <p id={styles.posterColorType} className={styles.cardType}>Poster</p>
            </div>
          </a>
          <a href="/podcast/caro" className={styles.card}>
            <h2>How housing cooperatives contribute for a more sustainable life in Germany</h2>
            <div>
              <p>Caro Munkert</p>
              <p id={styles.podcastColorType} className={styles.cardType}>Podcast</p>
            </div>
          </a>
          <a href="/podcast/juri" className={styles.card}>
            <h2>Chinas Eco-Civilization and a green BRI - alternatives for sustainable development?</h2>
            <div>
              <p>Juri Häbler</p>
              <p id={styles.podcastColorType} className={styles.cardType}>Podcast</p>
            </div>
          </a>
          <a href="/poster/kira" className={styles.card}>
            <h2>Tiny Forests - Active reforestation for local transformation</h2>
            <div>
              <p>Kira Bastian</p>
              <p id={styles.posterColorType} className={styles.cardType}>Poster</p>
            </div>
          </a>
          <a href="/article/ana-maier" className={styles.card}>
            <h2>How Costa Rica reversed deforestation – An environmental success story</h2>
            <div>
              <p>Ana Maier</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/article/ana-moreno" className={styles.card}>
            <h2>"Ecobarrios" in Bogotá - Towards a 'generous cities' strategy</h2>
            <div>
              <p>Ana Moreno</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/article/juan-coka" className={styles.card}>
            <h2>The city of change: a journey into the urban agriculture revolution in Berlin</h2>
            <div>
              <p>Juan Coka</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/article/marcel" className={styles.card}>
            <h2>Pleistocene Park - Back to the Ice Age : How primeval ecosystems could mitigate climate change</h2>
            <div>
              <p>Marcel Bongartz</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/article/madeleine" className={styles.card}>
            <h2>Challenges of managing forest reserves: case study of Atewa range forest reserve, Ghana</h2>
            <div>
              <p>Madeleine Maomou</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/article/abi" className={styles.card}>
            <h2>Green Justice: Initial Reflections on the National Green Tribunal  of India</h2>
            <div>
              <p>Abilash Desu</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/podcast/mali" className={styles.card}>
            <h2>Radio drama as a means to save the cross river Gorillas in Nigeria</h2>
            <div>
              <p>Mali Bruecker</p>
              <p id={styles.podcastColorType} className={styles.cardType}>Podcast</p>
            </div>
          </a>
          <a href="/podcast/lukas" className={styles.card}>
            <h2>Health for Future: How does the climate crisis impact human health and what needs to be done about it?</h2>
            <div>
              <p>Lukas Kiefer</p>
              <p id={styles.podcastColorType} className={styles.cardType}>Podcast</p>
            </div>
          </a>
          <a href="/article/sarah" className={styles.card}>
            <h2>“SAVE THE BEES", but which ones? </h2>
            <div>
              <p>Sarah Megnint</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/article/kevin" className={styles.card}>
            <h2>The economy for the common good - An economic model for the future</h2>
            <div>
              <p>Kevin Essa</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/article/linda" className={styles.card}>
            <h2>Seeking a safe and just space for water use in Germany</h2>
            <div>
              <p>Linda Schwarz</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
          <a href="/article/till" className={styles.card}>
            <h2>Blue Economy in Bangladesh</h2>
            <div>
              <p>Till Odde Heitmann</p>
              <p id={styles.articleColorType} className={styles.cardType}>Article</p>
            </div>
          </a>
        </div>
      </main>
    </div>
  )
}
