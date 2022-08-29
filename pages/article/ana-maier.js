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
        <h1 className={styles.articleTitle}>How Costa Rica reversed deforestation – An environmental success story</h1>
        <p id={styles.articleDate}>Updated at 28.08.2022</p>
        <p id={styles.author}>By Ana Maier</p>
        <div className={styles.divider}/>

        <div className={styles.articleImageContainer} id={styles.doughnutImage}>
          <img src="/personal-d/GCM personal donuts neu-13 Anna Maier.png" alt="doughnut" height="auto" className={styles.personalDoughnut}/>
          <span>Doughnut showing dimesions affected by this subject</span>
        </div>
        <h2>I. Introduction</h2>
        <p>Costa Rica was once the most deforested country in the world. Today, it is one of the few countries worldwide that has reversed deforestation, halted biodiversity loss, and increased forest cover to more than half of its total land area while also increasing economic growth (UN, 2021). The following text will explain the story of the remarkable turnaround of Costa Rica and analyse to which part of the doughnut economy it contributes. </p>
        <p>In the 1940s over 75% of Costa Rica was covered in indigenous woodland, primarily tropical rainforest. Extensive and unchecked logging in the following decades converted the nation's valuable forest resources into cash profits. By 1983, only 26% of the country's forest cover remained, and the annual rate of deforestation had risen to 50,000 hectares per year (Blasiak, 2011). The main driving forces for deforestation were agricultural activity - which was promoted by inappropriate policies that rewarded deforestation including cheap credit for cattle and land-titling laws - as well as the rapid expansion of the road system (UNFCCC, n.d.). However, after this all-time low in forest cover, an astonishing change happened, and Costa Rica almost completely reversed deforestation. The reasons for its success are numerous and complex. Political and economic instability caused by Central American wars, as well as a collapse in global meat, sugar, and coffee markets, resulted in the abandonment of a considerable proportion of agricultural land. In the 1980s, several environmental and conservation organisations gained prominence in advocating for change and a strong policy framework around reforestation, forest management and forest protection was implemented in Costa Rica (Hinojosa, 2017). Policymakers recognized the value of the country’s ecosystems and introduced the new concept of Payment for Ecosystem Services (PES) in 1997. This concept is based on the understanding that a healthy ecosystem provides valuable services such as carbon sequestration, water filtration and the provision of habitat for genetic resources. PES provides financial incentives for landowners to protect and conserve the forests (Blasiak, 2011).</p>
        <p>Another factor that promoted the conservation of Costa Rica’s forests is tourism. It provides more economic alternatives which change the incentives for land use. (Lewis, 2020). </p>
        <p>In Costa Rican culture, deep respect for nature plays a vital role. The national motto “pura vida” (English “pure life”) means gratitude and peace with oneself and the surrounding environment. According to Stewart Maginnis, global director of the nature-based solutions group at the International Union for Conservation of Nature (IUCN), this value has played a vital role in Costa Rica’s reforestation success (Lewis, 2020).</p>
        <p>According to the World Bank, today almost 60% of Costa Rica’s territory is covered in forest once again (The World Bank, n.d.).</p>

        <div className={styles.articleImageContainer}>
          <img id={styles.narrowImage} src="/ana-maier/1.png" alt="doughnut" height="auto" />
          <span>Fig.1. Forest Cover Map Costa Rica from 1940 to 2010 </span>
        </div>

        <h2>II. Costa Rica and the Doughnut Economy</h2>
        <p>For the 4th time in a row, Costa Rica ranks 1st on the Happy Planet index. With an average life expectancy of 80.3 years, Costa Ricans are happier and live longer than the residents of the most wealthy nations. (Happy Planet Index, 2022). However, Costa Rica’s GDP per capita is less than a quarter the size of many Western countries and North America. Based on traditional economics, the country’s success would not be possible (Charities Aid Foundation, n.d.). </p>

        <h2>III. Planetary boundaries</h2>
        <p>Within the framework of the planetary boundaries, the reforestation efforts of Costa Rica work towards creating a safe operating space for humanity and maintaining the resilience of the ecosystems. Out of the 9 planetary boundaries, it positively affects 4 categories: climate change, land conversion, biodiversity loss and air pollution. </p>

        <h2>IV. Planetary boundaries</h2>
        <p>Tropical forests play a crucial role in fighting rising carbon dioxide levels. Scientists estimate that they could store more carbon than humanity has emitted in the past 30 years by burning coal, oil, and natural gas. However, with continued global warming the ability of tropical forests to hold carbon could diminish and they could ultimately become a carbon source (Pennisi, 2020). Therefore, it is crucial to protect tropical forests worldwide and Costa Rica’s reversed deforestation has become a success story: </p>
        <p>Between 1997 and 2015 Costa Rica reduced 166 million tonnes of CO2e emissions (MtCO2e) due to deforestation. The land use sector in Costa Rica has for the first time become a carbon sink by absorbing about 5 million tCO² in 2014 (Climate Chance, 2020a).</p>

        <div className={styles.articleImageContainer}>
          <img src="/ana-maier/2.png" alt="doughnut" height="auto" />
          <span>Fig.2. Historical series of emissions and forest absorptions in Costa Rica </span>
        </div>

        <h2>V. Biodiversity</h2>
        <p>Costa Rica only makes up for 0.03% of the earth’s surface, however, the small Central American country contains nearly 6% of the world’s biodiversity. Its natural wealth, both in terms of species and ecosystems, can be explained by its privileged geographical location between North and South America, where countless species crossed for thousands of years. The broad expansion of its coasts on the Caribbean and Pacific sides as well as various mountain ranges are important factors to consider (Embajada de Costa Rica, n.d.).</p>
        <p>Deforestation was one of the major threats to biodiversity loss, but today Costa Rica’s nature is well protected. Costa Rica is considered a pioneer in effective tropical forest conservation policies due to its success in reversing deforestation. The National System of Conservation Areas (SINAC) covers 25-28% of the country’s terrestrial area with 32 national parks and 230 other protected areas (Tafoya et al., 2020). </p>

        <div className={styles.articleImageContainer}>
          <img src="/ana-maier/3.png" alt="doughnut" height="auto" />
          <span>Fig.3. Maier, A. (2020). Monteverde, Costa Rica 2020 </span>
        </div>

        <h2>VI. Social Foundation</h2>
        <p>In terms of the social foundations that create a safe and just space for humanity, the areas income & work, water, food and health are addressed by the Costa Rican reforestation efforts. </p>

        <h2>VII. Income & Work</h2>
        <p>Costa Rica’s PES Program has been a successful financial mechanism that provides an alternative source of income for forest owners. Between 1997 and 2019 more than 18,000 families including 2,788 women 6,888 men, 19 indigenous communities and 8,712 family associations have benefited from the PES program with a total investment of USD 524 million in PES projects. (UNFCCC, n.d.). The rise of the ecotourism industry has also created many jobs and has become a valuable source of income for its citizens. Costa Rica yearly welcomes around 3 million visitors. Over 60% choose Costa Rica for its nature, according to the tourism board. In 2019 tourism created a total of $4 billion in revenue, employed 200,000 people and accounts for around 8% of the country’s GDP (Lewis, 2020). </p>

        <h2>VIII. Conclusion</h2>
        <p>Costa Rica’s success story has shown that change is possible. Through effective sustainable policies, consistent politics, the involvement of its people and the creation of financial incentives the small Central American country has proven that ending deforestation benefits not only nature but also people and the economy. </p>

        <h2>References</h2>
        <ol start="1" className={styles.referenceList}>
          <li>Blasiak, R. (2011). Ethics and environmentalism: Costa Rica’s lesson - United Nations University. Https://Unu.Edu/. https://unu.edu/publications/articles/ethics-and-environmentalism-costa-ricas-lesson.html</li>
          <li>Charities Aid Foundation. (n.d.). Has the era of GDP as a progress measure ended | Paradox of Costa Rica. https://www.cafonline.org/giving-as-a-company/corporate-responsibility/expert-advice/the-crowd/has-the-era-of-gdp-as-the-measure-of-progress-ended</li>
          <li>Climate Chance. (2020)a. After ending deforestation: strategies and actions for viable land use. https://www.climate-chance.org/. https://www.climate-chance.org/wp-content/uploads/2020/09/costarica_landuse_climatechance_engl.pdf</li>
          <li>Climate Chance. (2020b). HISTORICAL SERIES OF EMISSIONS AND FOREST ABSORPTIONS IN COSTA RICA [Graph]. https://www.climate-chance.org/wp-content/uploads/2020/09/costarica_landuse_climatechance_engl.pdf</li>
          <li>Environment | Embajada de Costa Rica en DC. (n.d.). Http://Www.Costarica-Embassy.Org. Retrieved August 15, 2022, from http://www.costarica-embassy.org/index.php?q=node/12#:%7E:text=Costa%20Rica%20accounts%20for%20only,explained%20by%20its%20geographical%20position.</li>
          <li>Happy Planet Index. (n.d.). Happyplanetindex.Org. Retrieved August 15, 2022, from https://happyplanetindex.org/countries/?c=CRI</li>
          <li>Hinojosa, C. (2017). CASE STUDY: Payments for Ecosystem Services in Costa Rica. DCED. https://www.enterprise-development.org/wp-content/uploads/DCED-GGWG-Case-study-PES.pdf</li>
          <li>Innovation News Network. (2020). Forest Cover Costa Rica Map [Illustration]. Www.Innovationnewsnetwork.Com. https://www.innovationnewsnetwork.com/could-financial-incentives-help-preserve-tropical-forests/5607/</li>
          <li>Lewis, N. C. (2020, July 27). This country regrew its lost forest. Can the world learn from it? CNN. https://edition.cnn.com/2020/07/27/americas/reforestation-costa-rica-c2e-spc/index.html</li>
          <li>Moore, P. (2022, January 7). How Costa Rica reversed deforestation and raised millions for conservation. Dialogo Chino. https://dialogochino.net/en/climate-energy/how-costa-rica-deforestation-millions-for-conservation/</li>
          <li>Pennisi, E. (2020). Science. Science.Org. https://www.science.org/content/article/tropical-forests-soak-huge-amounts-greenhouse-gas-climate-change-could-end</li>
          <li>Tafoya, K. A., Brondizio, E. S., Johnson, C. E., Beck, P., Wallace, M., Quirós, R., & Wasserman, M. D. (2020). Effectiveness of Costa Rica’s Conservation Portfolio to Lower Deforestation, Protect Primates, and Increase Community Participation. Frontiers in Environmental Science, 8. https://doi.org/10.3389/fenvs.2020.580724</li>
          <li>The World Bank. (n.d.). Forest area (% of land area) - Costa Rica | Data. Https://Data.Worldbank.Org/. Retrieved August 15, 2022, from https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=CR</li>
          <li>UN. (2021, November 19). From the Field: Costa Rica points the way to a sustainable world. UN News. https://news.un.org/en/story/2021/10/1103812</li>
          <li>UNFCCC. (n.d.). Payments for Environmental Services Program | Costa Rica. Unfccc.Int. https://unfccc.int/climate-action/momentum-for-change/financing-for-climate-friendly-investment/payments-for-environmental-services-program</li>
        </ol>
      </div>
    </main>
  </div>
) }
