import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleHeader from './ArticleHeader'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Compendium</title>
        <meta name="description" content="Compendium" />
        <link rel="icon" href="../public/hnee-green.png" />
      </Head>

      <main className={styles.mainArticle}>
        <ArticleHeader/>
        <div className={styles.articleContainer}>
          <h1 className={styles.articleTitle}>Planetary Health</h1>
          <p id={styles.articleDate}>Updated at 23.07.2022</p>
          <p id={styles.author}>By Valentina Garcia & Owen Wooden</p>
          <div className={styles.divider}/>

          <h2>I. Introduction</h2>
          <p>In 2009 a proposal of a novel concept was presented by the Stockholm Resilience Centre, the “Planetary Boundaries” for humanity to continue developing with respect to the functioning of the Earth System (Rockström et al., 2009). Humans constitute the dominant driver of change to the earth system, this year the Stockholm resilience Centre published the current state of the planetary boundaries. In Figure 1 it can be seen the 9 categories and how we have passed beyond the boundaries into unprecedented territory on some of them (Cornell, 2022). Human activities increasingly influence earth climate and ecosystems, having this approach show how transformational change at different scales is needed.</p>

          <div className={styles.articleImageContainer}>
            <img src="/planet-boundary.png" alt="doughnut" height="auto"/>
            <span>Fig.1. Planetary Boundaries based on analysis in Persson et al 2022 and Steffen et al 2015</span>
          </div>

          <h2>II. Planetary Health</h2>
          <p>In the 2015 final report from the Rockefeller Foundation-Lancet Commission on Planetary Health, a new conception of how human conditions, particularly those of health and wellbeing, can be understood through a lens of human and natural systems. Particularly, this conception situated human wellbeing as nested within larger human and natural systems, with planetary health as “the achievement of the highest attainable standard of health, wellbeing, and equity worldwide through judicious attention to the human systems—political, economic, and social—that shape the future of humanity and the Earth’s natural systems which define the safe environmental limits within which humanity can flourish. Put simply, planetary health is the health of human civilization and the state of the natural systems on which it depends.” (Whitmee, et al, 2015). The implications of this perspective are that human wellbeing relies on the wellbeing of natural systems, and that any solutions which are developed to improve human wellbeing must not be at the cost of environmental degradation. This approach has many similarities to the concept of planetary boundaries, albeit with the explicit focus on health and wellbeing. Additionally, planetary health introduces the continued importance of improving human wellbeing in addition to the wellbeing of natural systems, which is not addressed within the concept of planetary boundaries, which only stipulate that human activities stay within assigned limits, regardless of any societal improvements which may or may not take place.</p>
          <p>Planetary health, while useful as a tool to re-conceptualize the relationship between human and nature wellbeing, does not offer a complex enough framework in order to analyze the ways in which projects and approaches are capable of enacting changes in diverse sectors and scopes. As such, it is necessary to explore other frameworks that encourage the nesting of human wellbeing within the wellbeing of natural systems, as well as provide sector- and scope-specific criteria through which projects can be evaluated.</p>

          <div className={styles.articleImageContainer}>
            <img src="/main-d.png" alt="doughnut" height="auto"/>
            <span>Fig.2. The Doughnut of social and planetary boundaries.</span>
          </div>

          <h2>III. Doughnut economy</h2>
          <p>Meanwhile, when considering the complexity that humanity reached, a core challenge is how economies and businesses can develop to a sustainable path instead of keeping the economic growth principle. In 2012 Kate Raworth presented “Doughnut Economics” offering a vision of how humanity can succeed with a new model (Raworth, 2017). It has become internationally applied given its holistic scope and visual simplicity, coupled with its scientific grounding (About, 2022).  Kate Raworth presents a social foundation and an ecological ceiling where the space in between is where humanity can meet their need within the means of the planet (Raworth, 2017).
In other words the social foundation is to ensure within explicit fields the fulfillment of life’s essentials for everybody and an ecological ceiling, to ensure that humanity does not go over the planetary boundaries that protect Earth's life-supporting systems as observed in Figure 2. </p>

          <p>To face the struggle humanity is facing ahead, and considering how the economy is embedded within and dependent upon society and the living world, transformational change is needed for a sustainable and just way of living for everybody.</p>

        <h2>References</h2>
        <ol start="1" className={styles.referenceList}>
          <li>Raworth, K. (2017) Why it's time for Doughnut Economics. IPPR Progressive ReviewVolume 24, Issue 3 p. 216-222. https://doi.org/10.1111/newe.12058</li>
          <li>Raworth, K. (2017) Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist. Chelsea Green Publishing. https://books.google.de/books?id=7A4lDgAAQBAJ&dq=doughnut+economy&lr=&hl=es&source=gbs_navlinks_s</li>
          <li>About Doughnut Economics. (2022). Doughnut Economics Action Lab. https://doughnuteconomics.org/about-doughnut-economics</li>
          <li>Rockström, J., Sachs, J. D., Öhman, M. C., & Schmidt-Traub, G. (2013). Sustainable development and planetary boundaries. Sustainable Development Solutions Network..
Rockström, J. (2010). Planetary boundaries. Smil, Harvesting the Biosphere. https://books.google.de/books?hl=es&lr=&id=M276DwAAQBAJ&oi=fnd&pg=PT106&dq=planetary+boundaries&ots=6wq-HbYC0Q&sig=3kY16kPutSGLLnm0AydX1H4K-JM&redir_esc=y#v=onepage&q=planetary%20boundaries&f=false</li>
          <li>Rockström, J., W. Steffen, K. Noone, Å. Persson, F. S. Chapin, III, E. Lambin, T. M. Lenton, M. Scheffer, C. Folke, H. Schellnhuber, B. Nykvist, C. A. De Wit, T. Hughes, S. van der Leeuw, H. Rodhe, S. Sörlin, P. K. Snyder, R. Costanza, U. Svedin, M. Falkenmark, L. Karlberg, R. W. Corell, V. J. Fabry, J. Hansen, B. Walker, D. Liverman, K. Richardson, P. Crutzen, and J. Foley. (2009). Planetary boundaries:exploring the safe operating space for humanity. Ecology and Society 14(2): 32. [online] URL: http://www.ecologyandsociety.org/vol14/iss2/art32/</li>
          <li>Cornell, S. (2022). Planetary Boundaries. Stockholm Resilience Centre. https://www.stockholmresilience.org/research/planetary-boundaries.html</li>
          <li>Outside the Safe Operating Space of the Planetary Boundary for Novel Entities. https://pubs.acs.org/doi/10.1021/acs.est.1c04158?fig=tgr1&ref=pdf</li>
          <li>Safeguarding human health in the Anthropocene epoch: report of The Rockefeller Foundation–Lancet Commission on planetary health
https://www.thelancet.com/action/showPdf?pii=S0140-6736%2815%2960901-1</li>
          <li>Book: Raworth, Kate - Doughnut Economics_ Seven Ways to Think Like a 21st-Century Economist</li>
        </ol>
        </div>
      </main>
    </div>
  )
}
