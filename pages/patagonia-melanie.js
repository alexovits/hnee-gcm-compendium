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
          <p>Since the year 2000 the garment production did more than double (Kampagne für Saubere Kleidung Deutschland e.V., 2022). The trend of cheap manufacturing, frequent consumption and short-lived garment use is called fast fashion (Niinimäki, Peters, Dahlbo, et al., 2020). The dimension the fashion industry reached increases the pressure on social and environmental systems coming with manufacturing of clothes. Therefore, a lot needs to be changed regarding the fashion industry. We as consumers can support the fashion industry in transforming by being willed to pay a higher price for sustainable produced clothes.
Patagonia has a strong reputation for sustainable performance and climate activism. They are keen to “build the best product, cause no unnecessary harm, and use business to inspire and implement solutions to the environmental crisis.” (Patagonia, 2022, j: p. 1).
In this text, the Doughnut economic model of Kate Raworth (Raworth, 2017) is used to analyze in which areas Patagonia is contributing to prevent shortfalls on life essentials (mostly employees) and in addition, how Patagonia is contributing on how we can achieve not to overshoot our planetary boundaries. To understand the urgency for transformation in this sector, a short overview of current impacts the fashion industry has on our planet will be given beforehand.</p>

          <h2>II. Impact of the Fashion Industry on social and ecological systems</h2>

          <h3>The supply chain of our clothes: What is happening?</h3>
          <p>A starting point to understand the impacts the fashion industry has on environmental and social systems is the differentiation of natural and synthetic raw material. Synthetic fibers are based on mineral oil. Natural fibers are mostly cotton. For both types of fiber, there are different steps in between before the spinning to yarn. From the spinning company, the yarn is transported to the fabric manufacturing. Afterwards, the fabric is dyed. The last production step is the tailoring, which is the most labor-intensive work (Jungmichel, Wick and Nill, 2021).</p>

          <h3>Ecological impacts of the fashion industry</h3>
          <p>The fashion industry is responsible for a high number of environmental threats along the textile value chain from production to consumption. It comes with a high water usage, chemical pollution, CO2 emissions and (textile) waste. The fashion industry is responsible for 92 million tonnes of waste produced per year. 79 trillion liters of water is consumed by this sector of industry (Niinimäki, Peters, Dahlbo, et al., 2020). Around ten per cent of the global greenhouse gas emissions are coming from the fashion- and shoe industry. The fashion industry alone is responsible for 1.2 billion CO2 (equivalent) emissions (Patagonia, 2022, k).
From an ecological perspective, the amount of garment produced is problematic, but the materials are also an issue. Anyway, finding the perfect material is not easy. 70 per cent of our clothes are made of synthetic fibers (Kampagne für Saubere Kleidung Deutschland e.V., 2022). Synthetic fibers are produced out of non-renewable resources, such as mineral oil (Jungmichel, Wick and Nill, 2021).
When washing these clothes, microplastic is released in the waste water system as well as the sea. Recycling these fibers is hardly possible. Clothes made of cotton are not contributing to the microplastic problem and can be recycled more easily. On the other hand, though, cotton production requires large amounts of water: one kilo cotton requires 15.000 liter of water (Kampagne für Saubere Kleidung Deutschland e.V., 2022).</p>

          <h3>Social impacts of the fashion industry</h3>
          <p>Garment production is very labor-intensive, and especially the manufacturing processes depend on manual work. This is also where many social issues are located. The factory owners are under high pressure from large companies to deliver in time and provide good quality at a low price. The pressure that factory owners are exposed to is transferred to the factory workers. This results in factory workers working under high pressure of performing and time. The violation of employment law is common. The workers are expected to work unpaid over hours (Kampagne für Saubere Kleidung Deutschland e.V., 2022).
In general, the manufacturing processes are situated in low-wage countries (i.e. Bangladesh, Cambodia or Myanmar), to keep the production costs at a minimum. Anyway, low wages are also coming with low working standards such as the protection of workers rights or safety in terms of accidents or health. Problems include insufficient accident prevention, child labor, forced labor, over hours, salaries under minimum wage standards, unequal payment between men and women as well as the prohibition of freedom of assembly and wage negotiations (Jungmichel, Wick and Nill, 2021).</p>

          <h2>III. Ecological Ceiling</h2>
          <h3>Engagement of Patagonia, contributing to overall ecological ceiling</h3>
          <p>The environmental engagement of Patagonia has several dimensions. The first one involves the transformation of their ever-day-business. This includes the reduction of environmental impacts along the supply chain. The basis of the environmental and social responsibility program is the “Patagonia Supplier Workplace Code of Conduct” which is applied throughout the supply chain including subcontractors, sub-suppliers and farms. The development of this program is important to clarify rules and expectations to the partner factories manufacturing products, since Patagonia is not owning these. Partner factories therefore need to maintain written environmental policies and standards, they need to comply with environmental laws and standards and need to be willed to be monitored (Patagonia, 2022, j).
The way how Patagonia is making business plays a key role in the overall contribution to the ecological ceiling. Patagonia is realizing, that we can not continue on the track we are right now. We can not continue producing so much clothes and continue the lifestyle of throwing them away after one season. The central message here is that they recognize the best thing we can do for the planet is to cut down consumption. Their business priority is not to sell as much as they can, but moreover to create long-lasting material with the possibility to be repaired and switch to renewable and recycled materials. Together with their partner Worn Wear, Patagonia established a network of repair centers across Europe. Through these centers around 1000 items are repaired monthly. In addition, since 2017 they are running a repair trailer with experts hosting repair events. To engage the consumers directly, they also organize DIY workshops where people can learn how to repair stuff themselves. If the product can not be repaired anymore, customers can give it back to Patagonia, and they will make sure it will not end in a landfill but will be recycled in a suitable way (Patagonia, 2022, m).
Together with Worn Wear they are also running an online second hand shop. People can trade in their Patagonia garment to a store. They will eventually repair it to make it suitable for the next customer (Worn Wear, n.d.).
The way how different materials are produced is having a large impact on ecological systems. Therefore, reducing the use of any virgin material by recycling and repairing is contributing a lot not to overshoot planetary boundaries. The goals of Patagonia to produce all garments out of recycled or renewable resources and make 100 % of packaging material reusable, degradable renewable or recyclable until 2025 is of high relevance for not overshooting different planetary boundaries (Patagonia, 2022, k). Namely, this contributes to climate change, chemical pollution, nitrogen and phosphorous loading, freshwater withdrawals, land conversion, biodiversity loss, ocean acidification and air pollution.
Besides reducing material, a fashion company can decide to use less environmentally harmful materials. Already now, Patagonia is using 100 % organic cotton for their virgin cotton (Patagonia, 2022, g). The preferable use of organic material is contributing to many dimensions of the doughnut: climate change, chemical pollution, nitrogen and phosphorous loading, biodiversity loss and air pollution (Shah, Bansal & Singh, 2018, McKinsey and Company, 2020, Altenbuchner, Vogel and Larcher, 2017). Regarding cotton, they are working on using regenerative organic certified cotton in the near future, which is recently the highest organic standard (Patagonia, 2022, i). Patagonia is also a founding member of the Regenerative Organic Alliance (Regenerative Organic Alliance, 2022).
Patagonia is trying to integrate the client in the choices he or she is making by being transparent. Their “Environmental Profit & Loss” metric is calculating carbon, water and waste costs. This metric can be found for each product they sell and is giving orientation to clients which product comes with what kind of costs (Patagonia, 2022, a).
So far, the mentioned points were related to their own matter: their business. But they are going a step further, to reach change and fight the environmental crisis. Patagonia is strongly supporting environmental activism. They especially pay attention to grass root environmental groups that identify the root causes of environmental problems and are willing to fight for long-term changes. Organizations do not just receive the funding, but will also profit from organized conferences with other organizations. This kind of skill sharing should support the change. With this activity, Patagonia is engaging in creating networks (Patagonia, 2022, f). And how do they support environmental activism? On the one hand, Patagonia is supporting environmental action though donating one % of their turnover to environmental programs and organizations worldwide. This is what the company is calling the “Earth Tax”, which is in place since 1985. Until now, 89 million US dollar were donated. In addition, Patagonia is also motivating other companies, to follow their engagement. Therefore, in 2002 Patagonia took another step and created the foundation: “1% for the Planet Clubs”. This is a club which has the purpose to motivate their members investing in environmental programs (Patagonia, 2022, o).
All the mentioned approaches that Patagonia is following or choices they are taking, are having impacts on the stability of the overall ecological ceiling: climate change, chemical pollution, nitrogen and phosphorous loading, freshwater withdrawals, land conversion, biodiversity loss, air pollution and ocean acidification. </p>

        <h3>Contribution to fight climate change</h3>
        <p>Patagonia is recognizing that the climate crisis is an existential threat and that every part of their business is implicated. More than 90 per cent of their emissions are coming from the supply chain, which therefore is the biggest challenge. The problem that they are facing here: Their partners rely on fossil fuels. Patagonia is recognizing that they can not just demand their partners not to use fossil fuels anymore, which is the reason why they invest in and finance suppliers that are willing to change. Their goal is to improve energy efficiency, implementing renewable energy and reducing the use of fossil fuels at the same time (Patagonia, 2022, a).
Patagonia set ambitious goals: until 2025 they want to achieve being carbon-neutral along the entire supply-chain. They want to achieve this by reducing their ecological footprint, investing in projects related to renewable energies and buying carbon compensation certificates (Patagonia, 2022, k).
Organic cotton production has in comparison to conventional cotton production lower global warming potential. This is mainly due to the differences in combustion of fossil fuel for agricultural machinery or irrigation methods. In addition, the primary energy demand for organic cotton production is lower (Shah, Bansal & Singh, 2018). Regenerative organic cotton comes with a healthier soil and higher carbon storage (Patagonia, 2022, i), which plays a key role to combat climate change.
The company is using recycled cotton to produce clothes. The recycled cotton can come from pre-consumer-scraps from the sewing factories. For the spring season 2022 32% of the cotton fabrics are made with recycled cotton (Patagonia, 2022, h). By using recycled cotton, the CO₂ (equivalent) emissions are reduced by 80% compared to using conventional virgin cotton (Patagonia, 2022, h).
Renewable energies are strongly linked to climate change. In the US, Patagonia achieved to supply 100 % of their energy demand out of renewable resources (Patagonia, 2022, l).
Regarding climate change mitigation, Patagonia is not just keen on transforming their own business, but they see the urgent need to help communities get off fossil fuels and demand systemic change from government and industry (Patagonia, 2022, a). These activities regarding climate change are also impacting other planetary boundaries, such as ocean acidification.
        </p>

        <h3>Contribution to reduce chemical pollution</h3>
        <p>Patagonia is using organic cotton for their products. This means less chemical pollution, since synthetic pesticides and herbicides are banned from the production (Patagonia, 2022, g).
They are working very hard on preventing that garment is ending in landfills or is burnt, which contributes to chemical pollution. Repairing and recycling programs are reasons for less garment actually being thrown away.
Outdoor clothes need to stand high expectations. They should be water repellant, robust and light. To achieve these qualities, the usage of chemicals can not always be avoided. The Durable Water Repellant (DWR) in example is used very frequently to make jackets and clothes water repellant. The DWR technology is based on the use of chemicals (perfluorocarbon-PFC) which are not biologically degradable, nevertheless it has a very high functionality. Anyway, Patagonia is seeking on stopping using DWR and finding other solutions to still meet the expectations of outdoor sport people. Until autumn 2022 they want to be free from PFC-products (Patagonia, 2022, e). </p>

        <h3>Contribution to reduce biodiversity loss</h3>
        <p>The fact that Patagonia is using 100% organic cotton and is eliminating the use of synthetic pesticides, herbicides and GMO seeds has positive impacts on the biodiversity. Organic methods support biodiversity and healthy ecosystems (Patagonia, 2022, g; McKinsey and Company, 2020; Altenbuchner, Vogel and Larcher, 2017).
The company is printing their catalogs on paper that is FSC (forest stewardship council) certified. Also, some of their equipment is certified by the FSC. Raw material that is FSC certified, derives from sustainable managed forests, where biodiversity (among others) is maintained (Patagonia, 2022, p).</p>

        <h2>IV. Social Foundation</h2>
        <h3>Engagement of Patagonia, contributing to overall social foundation</h3>
        <p>The “Patagonia Supplier Workplace Code of Conduct” mentioned earlier is the basis for an improved social situation throughout the supply chain. It is based on the International Labor Organization (ILO) standards. The code of conduct includes (among others) statements regarding child labor, forced labor, discrimination, freedom of association and collective bargaining, fair wages as well as health and safety (Patagonia, 2022, m).
Patagonia is a founding member of the Fair Labor Association (FLA) which was established to make fashion companies accountable for responsible labor practices. Membership of the FLA includes the accreditation of social responsibility programs, which was last conducted in 2017 (Patagonia, 2022, d).
Regarding certifications, 75 % of the products are already Fair Trade certified (Patagonia, 2022, l), indicating higher social standards. Patagonia is working on making parts of their products “Regenerative Organic Certified”. Besides ecological standards, this certification includes social standards for farmers as well. Social standards include democratic organizations, fair payment, freedom of association, good working conditions, no forced labor and long term commitments (Regenerative Organic, 2022).
Many of the actions Patagonia is engaging in, are contributing to prevent that people lack on life essentials defined by Raworth. Namely, the company is putting efforts into working towards better health conditions, decent income and work, education, peace and justice and social equity.
The life essentials of political voice and networks are also touched, but rather indirectly, by giving employees the right to join organizations and associations. Gender equality is addressed in the Code of conduct indirectly as well, by saying that discrimination because (among others) of gender is not tolerated (Patagonia, 2022, j). The topics housing, energy, water and food are not touched by the company. </p>

        <h3>Contribution to income and work</h3>
        <p>The code of conduct underlines that Patagonia is seeking to work with partners that are paying their workers an appropriate wage, being at least the minimum wage or exceeding it (Patagonia, 2022, j).
Patagonia is supporting a “living wage”, which is a wage that is covering a decent standard of living for the worker as well as for their families. The workers in the partner factories should receive a payment according to the minimum wage and the law of the country. Patagonia has embedded the living wage standard in their code of conduct and is developing approaches to improve wages in partner factories. In 2020 39 % of their assembly factories were paying a living wage to their workers (Patagonia, 2022, q).
Their goal is to make more products “Regenerative Organic Certified”. This is then also including major improvements regarding income and work. Standards in example include the implementation of living wages and fair payment for farmers (Regenerative Organic, 2022).
One side effect of producing organic crop is that the farmers are reducing their reliance on big agrochemical companies (like Bayer-Monsanto and Syngenta) (Patagonia, 2022, g). This can make their income more independent and profitable.
Patagonia introduced “Cotton in Conversion”, which is supporting farmers who are willing to convert their system. If they are still in the process of getting certified, they can already sell their crop. This brings higher stability and security to the farmers' income (Patagonia, 2022, g).</p>

        <h3>Contribution to peace and justice</h3>
        <p>This is a very broad category, but still one of the most important ones. Child and forced labor are not aligning with justice principles at all. Patagonia is clearly expressing themselves against child and forced labor in their supplier's code of conduct. That includes that no person should be employed under the age of 15 or until they have not completed their compulsory education. This rule is therefore also contributing to the life essential education. Forced labor is including bonded, prison or slave and is prohibited. Every worker should be treated with respect and dignity. Physical, psychological sexual or verbal harassment is namely prohibited (Patagonia, 2022, j).</p>

        <h3>Contribution to health</h3>
        <p>The cotton they are using is already grown and produced without chemicals. This contributes directly to the health of the workers who are not exposed to potentially toxic and carcinogenic compounds (Patagonia, 2022, g).
One part of the code of conduct is dealing with health and safety in particular. Here, Patagonia requests the factories to take a proactive approach to health and safety measures. The risk of health issues or accidents resulting from factory and work settings should be minimized by implementing policies, systems and trainings (Patagonia, 2022, j).
The overall working week should not exceed 48 hours maximum, contributing to a higher health situation in general (Patagonia, 2022, j). For young workers, they have a higher standard which includes that they should not be doing work that is compromising their health or safety (Patagonia, 2022, j).</p>

        <h2>V. Conclusion</h2>
        <h3>What can companies take away from this approach?</h3>
        <p>Patagonia can be seen as a role model within the fashion industry for many reasons:</p>
        <ol start="1" className={styles.numberedList}>
          <li>The biggest difference to other companies might be that they understand and communicate the most urgent message: Everyone needs to consume less and businesses need to produce fewer things but of higher quality. One example is their campaign “Don't buy this jacket” which had the goal to raise awareness towards our planet-harming consumption behavior (Patagonia, 2022, r).</li>
          <li>They are transforming their own business (regarding supply-chain and manufacturing) to reduce their own ecological footprint. Transformation is not easy. Especially in finding the right materials. Cotton needs water, synthetic fibers are full of microplastic and rely on fossil fuels in their production. Patagonia is taking the right way in trying to reduce the virgin products at all by recycling as much as they can to not produce more of the harmful material.</li>
          <li>Patagonia is not just waiting for transformation, they are constantly driving it forward. In example, they do not wait for science to find less environmentally harmful material, but they are moreover doing their own research and trying new materials (i.e. Patagonia, 2022, e).</li>
          <li>Patagonia comes with high social and ecological standards for the partnering factories. But what makes the situation different is: they are offering help for the process of transformation if a factory is willing to improving standards (Patagonia, 2022, j). The same goes with the farm production. The new program “Cotton in Conversion” supports the farmers on their way of transforming to organic cotton (Patagonia, 2022, g). </li>
          <li>Patagonia is taking their clients on board by making ecological impacts visible and understandable (Patagonia, 2022, a). </li>
          <li>They are engaging even further than their business area, by creating the “Earth Tax” (Patagonia, 2022, o).</li>
        </ol>
        <p>It is not easy for a company to shift from one business model to another. And Patagonia also had a way to come until they are where they are. The process can begin with a little step. Either starting at the manufacturing level by rethinking material choices or starting investing part of the company's profit to projects. Companies always need to deal with the question: Which customer type are we addressing? And are they willing to pay a higher price if we shift to a more sustainable production? For certain companies, there might be the challenge that they are not yet having those clients. That is where we as consumers need to act.  </p>
        <h3>Patagonia within the Doughnut Economy</h3>
        <p>In transforming their business model, Patagonia is contributing to secure that we do not overshoot planetary boundaries of the ecological ceiling. Regarding the ecological ceiling, many of their activities are touching the planetary boundaries of climate change and biodiversity loss. Chemical pollution, nitrogen and phosphorous loading, freshwater withdrawals, land conversion, air pollution and ocean acidification are as well touched through different activities. To the boundary ozone layer depletion they are not contributing directly, but they are not responsible for any emissions contributing to the depletion. In terms of the social foundation, Patagonia is contributing its part in making sure nobody (their employees) is falling short on life essentials. Regarding their employees, they are working towards better health conditions, decent income and work, education, peace and justice, gender equality, political voice, networks and social equity. Being a company gives them good possibilities to especially contribute to the field income and work. Firstly, by engaging in achieving higher wages for factory workers but also by improving different other social standards, they are being very keen on changing the business. They are not touching the areas of housing, energy, water and food, but at some point a fashion company also has its limits. Patagonia is a fashion company that in regard to the Doughnut economic model of Raworth is contributing both to the ecological and the social part to achieve a safe and just space for humanity. Patagonia therefore can be seen as a successful example in addressing ecological as well as social aspects within their business and beyond. Being a fashion industry includes ecological impacts in certain areas. They try to reduce the impacts they are having to not overshoot the boundaries. Areas which they are not explicitly impacting through their own ecological footprint, are still a matter for them, since they are donating one % of their profit to environmental activists engaging in different topics. Therefore, it can be said that Patagonia is contributing to the overall ecological ceiling, with an exception for the ozone layer depletion. The contribution of Patagonia in the environmental sense seems to be slightly higher than for the social foundation. Because the ecological ceiling is relevant to every person on the planet and the engagement of Patagonia regarding the social foundation mostly relates to their employees. Anyway, since Patagonia is a founding member of the Fair Labor Association (FLA) and the Regenerative Organic Alliance, they are also contributing to an overall improvement of social standards in the fashion industry. </p>

        <h2>References</h2>
        <ol start="1" className={styles.referenceList}>
          <li>Altenbuchner, C., Vogel, S., Larcher, M., 2017: Social, economic and environmental impacts of organic cotton production on the livelihood of smallholder farmers in Odisha, India. Renewable Agriculture and Food Systems. https://www.cambridge.org/core/journals/renewable-agriculture-and-food-systems/article/abs/social-economic-and-environmental-impacts-of-organic-cotton-production-on-the-livelihood-of-smallholder-farmers-in-odisha-india/922E6662E3D82E3B34CA119BC43F6F4A (Accessed: 28 July 2022)</li>
          <li>Jungmichel, N., Wick, K., Nill, Dr., M., 2021: KLEIDER mit HAKEN Fallstudie zur globalen Umweltinanspruchnahme durch die Herstellung unserer Kleidung.
https://www.umweltbundesamt.de/publikationen/kleider-haken (Accessed: 20 July 2022)</li>
          <li>Kampagne für Saubere Kleidung Deutschland e.V., 2022: Fast Fashion. https://saubere-kleidung.de/fast-fashion/ (Accessed: 20 July 2022)</li>
          <li>McKinsey and Company: Granskog, A., Laizet, F., Lobis, M. and Sawers, C., 2020: Biodiversity: The next frontier in sustainable fashion.
https://www.mckinsey.com/industries/retail/our-insights/biodiversity-the-next-frontier-in-sustainable-fashion  (Accessed: 28 July 2022)</li>
          <li>Niinimäki, K., Peters, G., Dahlbo, H. et al., 2020: The environmental price of fast fashion. Nat Rev Earth Environ 1, 189–200. https://www.nature.com/articles/s43017-020-0039-9?proof%3Dt (Accessed: 19 July 2022)</li>
          <li>Patagonia, 2022, a: Climate Goals.
https://eu.patagonia.com/gb/en/climate-goals/ (Accessed: 21 July 2022)</li>
          <li>Patagonia, 2022, b: Climate Goals: Help Suppliers Cut Emissions.
https://eu.patagonia.com/gb/en/climate-goals/#asset-modal-our-supply-chain (Accessed: 21 July 2022)</li>
          <li>Patagonia, 2022, c: Environmental Responsibility.
https://eu.patagonia.com/gb/en/environmental-responsibility-materials/  (Accessed: 25 July 2022)</li>
          <li>Patagonia, 2022, d: Fair Labor Association.
https://www.patagonia.com/our-footprint/fair-labor-association.html (Accessed: 27 July 2022)</li>
          <li>Patagonia, 2022, e: Fluorierteres DWR.
https://eu.patagonia.com/de/de/our-footprint/dwr-durable-water-repellent.html (Accessed: 26 July 2022)</li>
          <li>Patagonia, 2022, f: How we fund.
https://eu.patagonia.com/gb/en/how-we-fund/ (Accessed: 21 July 2022)</li>
          <li>Patagonia, 2022, g: Organic Cotton Fabric.
https://eu.patagonia.com/gb/en/our-footprint/organic-cotton.html (Accessed: 26 July 2022)</li>
          <li>Patagonia, 2022, h: Recycled Cotton Fabric.
https://eu.patagonia.com/gb/en/our-footprint/recycled-cotton.html (Accessed: 26 July 2022)</li>
          <li>Patagonia, 2022, i: Regenerative Organic Certified™ Cotton.
https://eu.patagonia.com/gb/en/our-footprint/regenerative-organic-certified-cotton.html (Accessed: 26 July 2022)</li>
          <li>Patagonia, 2022, j: Supplier Workplace Code of Conduct. https://www.patagonia.com/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dwa5177359/PDF-US/Patagonia_COC_English_02_13.pdf (Accessed: 27 July 2022)</li>
          <li>Patagonia, 2022, k: Umweltverantwortung.
https://eu.patagonia.com/de/de/our-responsibility-programs.html (Accessed: 28 July 2022)</li>
          <li>Patagonia, 2022, l: Unser Fußabdruck.
https://eu.patagonia.com/de/de/our-footprint/ (Accessed: 26 July 2022)</li>
          <li>Patagonia, 2022, m: Working with Factories.
https://www.patagonia.com/our-footprint/working-with-factories.html (Accessed: 27 July 2022)</li>
          <li>Patagonia, 2022, n. Worn wear.
https://eu.patagonia.com/gb/en/wornwear/ (Accessed: 27 July 2022)</li>
          <li>Patagonia, 2022, o: 1 per cent for the Planet.
https://eu.patagonia.com/gb/en/one-percent-for-the-planet.html (Accessed: 25 July 2022)</li>
          <li>Patagonia, 2022, p: Forest Stewardship Council.
https://eu.patagonia.com/de/de/our-footprint/forest-stewardship-council.html (Accessed: 25 July 2022)</li>
          <li>Patagonia, 2022, q: Living Wage.
https://www.patagonia.com/our-footprint/living-wage.html (Accessed: 25 July 2022)</li>
          <li>Patagonia, 2022, r: Don’t Buy This Jacket, Black Friday and the New York Times.
https://eu.patagonia.com/de/de/story-18615.html (Accessed: 28 July 2022)</li>
          <li>Raworth, K., 2017: Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist. London: Random House. </li>
          <li>Regenerative Organic Alliance, 2022: The Three Pillars Of Regenerative Organic Certified.
https://regenorganic.org/our-story/ (Accessed: 26 July 2022)</li>
          <li>Shah, P., Bansal, A., Singh, R.K., 2018: Life Cycle Assessment of Organic, BCI and Conventional Cotton: A Comparative Study of Cotton Cultivation Practices in India. In: Benetto, E., Gericke, K., Guiton, M. (eds) Designing Sustainable Technologies, Products and Policies. Springer, Cham. https://doi.org/10.1007/978-3-319-66981-6_8 (Accessed: 20 July 2022)</li>
          <li>Worn Wear, n.d.: Better than new gear.
https://wornwear.patagonia.com/ (Accessed: 25 July 2022)</li>
        </ol>
        </div>
      </main>
    </div>
  )
}
