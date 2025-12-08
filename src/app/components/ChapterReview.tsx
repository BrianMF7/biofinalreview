'use client';

import React, { useMemo } from 'react';

interface ChapterReviewProps {
  chapterNumber: number;
  onBack: () => void;
}

const ChapterReview = React.memo(function ChapterReview({ chapterNumber, onBack }: ChapterReviewProps) {
  // Complete questions data matching Quiz.tsx exactly
  const getQuestionsForChapter = (chapter: number) => {
    const sampleQuestions = {
      54: [
        { question: "Ecology:", options: ["is the study of interactions among organisms and between organisms and their environment"], correct: 0 },
        { question: "A scientist is studying several areas along an elevation gradient. She compares the type and abundance of organisms that colonize them prescribed burns (purposefully set, low-intensity fires) in the different areas along the change in elevation. What scale best describes her study?", options: ["Community ecology"], correct: 0 },
        { question: "American Chestnut trees used to be one of the most common trees in the Eastern part of the United States. A fungus was introduced from another continent that sickened and killed nearly every chestnut tree in the country. An ecologist is trying to understand how certain trees resist the fungus, and how to get more fungus-resistant trees growing in the wild. This ecologist would be studying what type of ecology?", options: ["Population ecology"], correct: 0 },
        { question: "You have been assigned to conduct a scientific study on the effects of four types of fertilizer on broccoli growth. You visit several broccoli farms to make observations and use these observations to find preliminary correlations and form hypotheses. To test your hypotheses, you set up five plots of broccoli—one plot for each fertilizer type plus a control plot, which is not fertilized. When you meet with your professor to discuss your progress, he tells you that your project is missing an important component of the scientific method. What is missing?", options: ["Replicating each fertilizer treatment in multiple plots"], correct: 0 },
        { question: "Temperature is perhaps the most important factor in the distribution of organisms because:", options: ["most organisms are unable to regulate their body temperature precisely."], correct: 0 },
        { question: "How do corals react when water temperatures are too high?", options: ["They expel their symbiotic algae."], correct: 0 },
        { question: "The serotinous cones of certain pine trees, such as the longleaf pine, Pinus palustris, depend on_________ to release their seeds:", options: ["fire"], correct: 0 },
        { question: "The photic zone in aquatic environments is typically about how deep?", options: ["100 m"], correct: 0 },
        { question: "Why are red algae found in deeper oceanic waters?", options: ["They possess pigments that allow them utilize blue-green-light."], correct: 0 },
        { question: "In arid terrestrial environments, salt can accumulate in the soil because of:", options: ["the settling and evaporation of water."], correct: 0 },
        { question: "In your biology lab, you are given a vial that contains fish urine. Your assignment is to predict whether the urine came from a fresh or saltwater species. You discover that the urine contains a high concentration of salts. What is your prediction for the fish's habitat? What is the concentration of solutes in the fish relative to its environment?", options: ["Marine; hypoosmotic"], correct: 0 },
        { question: "The optimal pH range for most freshwater fishes and invertebrates is:", options: ["6–9."], correct: 0 },
        { question: "The sea heats and cools:", options: ["more slowly than the land."], correct: 0 },
        { question: "The global patterns of atmospheric circulation and precipitation occur because of:", options: ["rising masses of warm air and sinking masses of cool air."], correct: 0 },
        { question: "What is adiabatic cooling?", options: ["cooling due to the decrease in air pressure at higher elevations"], correct: 0 },
        { question: "Currents in the ocean basins of the Northern Hemisphere always run in what direction?", options: ["clockwise"], correct: 0 },
        { question: "Most of Europe is in the_________ biome:", options: ["temperate deciduous forest"], correct: 0 },
        { question: "Chaparral is:", options: ["a type of shrubland/grassland."], correct: 0 },
        { question: "You awaken to find yourself lying on the bare ground, dirty and injured. In the dim light, you can make out wreckage around you and surmise that you have survived a plane crash. Over the next few days, you wander the hot, humid area and find an amazing number of different plant and insect species. You are able to trap and eat several rodent size mammals, but do not see any larger mammals. Into what biome did your plane crash?", options: ["Tropical rain forest"], correct: 0 },
        { question: "How would you best explain the existence of a mountain range that has abundant conifer trees, ferns, and mosses on the east side, but only sparse shrubby plants on the west side?", options: ["Precipitation differences due to a rain shadow on the west side produce the differing plant communities."], correct: 0 },
        { question: "Lakes with elevated dissolved nutrients and low water clarity are called:", options: ["eutrophic"], correct: 0 },
        { question: "Which of the following is a characteristic of tundra?", options: ["permafrost"], correct: 0 },
        { question: "The Earth is spherical, which causes differences in the intensity of solar radiation at different latitudes. The Earth is also tilted on its axis at a 23.5° angle. How do you think this tilt affects the intensity of solar radiation?", options: ["The sun's rays strike the Northern hemisphere more obliquely during its winter months and less obliquely during its summer months."], correct: 0 },
        { question: "The world can be divided approximately into six major biogeographic regions. Which of these is an accurate description of the properties of those regions?", options: ["Any single species rarely exists in more than one biogeographic region."], correct: 0 }
      ],
      56: [
        { question: "A group of interbreeding individuals occupying the same habitat at the same time is a(n):", options: ["population"], correct: 0 },
        { question: "You find a notebook that has lots of equations, tables, and graphs in it. The tables have columns for the number of female offspring born over a year, the number of deaths over a year, and the number of individuals in various age classes. What subject do you think the owner of the notebook is studying? What type of tables are they most likely using?", options: ["demography; life tables"], correct: 0 },
        { question: "What is the simplest method to measure population density in a given area?", options: ["Count the number of organisms."], correct: 0 },
        { question: "A line transect would probably be the preferred method to quantify the population density of:", options: ["Ponderosa pine trees."], correct: 0 },
        { question: "A mark-recapture program marked 10 individuals in the first catch. The second catch has a total of 8 individuals, 4 of which were recaptures. What is the estimate of total population size?", options: ["20"], correct: 0 },
        { question: "A good sampling method for quantifying the density of birds or bats is the use of:", options: ["mist nets."], correct: 0 },
        { question: "Dispersion is:", options: ["the spatial distribution of individuals."], correct: 0 },
        { question: "Many species of birds form large flocks. What dispersion pattern describes this behavior?", options: ["clumped"], correct: 0 },
        { question: "Why is a random dispersal pattern quite rare in nature?", options: ["Because resources in nature are rarely randomly spaced."], correct: 0 },
        { question: "Lions, leopards, and other large terrestrial predators generally maintain well-defined territories. What kind of dispersion pattern would you expect this to produce?", options: ["uniform"], correct: 0 },
        { question: "Organisms that produce all of their offspring in a single event are:", options: ["semelparous"], correct: 0 },
        { question: "Organisms that reproduce repeatedly are said to be:", options: ["iteroparous"], correct: 0 },
        { question: "Which of these organisms is semelparous?", options: ["agave plants"], correct: 0 },
        { question: "A fisheries biologist tells you she is studying a cohort of salmon returning to their birth river. What can you infer about those salmon?", options: ["They are the same age."], correct: 0 },
        { question: "A survivorship curve with uniform death rates over time is most likely to be a type_________ curve:", options: ["II"], correct: 0 },
        { question: "A survivorship curve in which most individuals die late in life is a type_________ curve:", options: ["1"], correct: 0 },
        { question: "_________ selected species have a low rate of per capita growth:", options: ["K-"], correct: 0 },
        { question: "Parasitism usually affects populations in a_________ manner:", options: ["density-dependent"], correct: 0 },
        { question: "What information is used to calculate the age-specific fertility rate, mx?", options: ["number of female offspring born to females within a reproductive age class"], correct: 0 },
        { question: "Which of these are reasons why population growth typically slows down when populations reach carrying capacity?", options: ["resource limitation decreases birth rates."], correct: 0 },
        { question: "A plot of population size vs time that displays a J-shape is indicative of:", options: ["exponential growth."], correct: 0 },
        { question: "The per capita growth rate of a population is best defined as:", options: ["per capita birth rate minus per capita death rate."], correct: 0 },
        { question: "In the formula, dN/dt = rN(K-N)/K, the rate of population growth approaches zero as:", options: ["the population size approaches the carrying capacity."], correct: 0 },
        { question: "If the age-specific fertility rate is such that 100 females of age class x would produce 50 female offspring, what is the contribution of age class x to the overall population growth rate?", options: ["can't be calculated"], correct: 0 },
        { question: "For some plants or animals, death comes somewhat randomly. Which individuals die is not related to how old / young they are. This describes which type of survivorship curve?", options: ["Type 2"], correct: 0 },
        { question: "Just because some plants have lots and lots of seeds does not mean that they will make lots and lots of adult plants. Most seeds either are eaten or become seedlings and die before becoming large, adult plants. This describes what type of survivorship curve?", options: ["Type 3"], correct: 0 },
        { question: "Modern humans show which type of survivorship curve?", options: ["Type 1"], correct: 0 },
        { question: "When a population has 100 individuals and r is zero, what will the population size be one generation later?", options: ["100"], correct: 0 },
        { question: "When a population has 100 individuals and r is 1.0, what will the population size be one generation later? Assume it is nowhere near carrying capacity.", options: ["200"], correct: 0 },
        { question: "When a population has 50 individuals and r is 0.5, what will the population size be one generation later? Assume it is nowhere near carrying capacity.", options: ["75"], correct: 0 },
        { question: "Consider a population with 100 individuals and an r of 1.0. If the population is exactly at carrying capacity, what will the population size be one generation later?", options: ["100"], correct: 0 },
        { question: "Consider a population with 1000 individuals, an r of 1.0 and a K of 2000. What will the population size be one generation later?", options: ["1500"], correct: 0 },
        { question: "Consider a population with 100 individuals, an r of 1.0 and a K of 200. What will the growth of the population over the next generation?", options: ["50"], correct: 0 },
        { question: "The per capita growth rate ( r) is used to calculate:", options: ["Population growth under any conditions."], correct: 0 },
        { question: "Diseases spread most rapidly when a sick individual encounters a lot of other individuals during the day. This makes death due to disease a_________:", options: ["Density-dependent factor"], correct: 0 },
        { question: "The purpose of a habitat corridor is to:", options: ["reduce the effects of habitat fragmentation."], correct: 0 },
        { question: "An r-selected species is more likely to show which of these life-history strategies?", options: ["A Type III survivorship curve (=few surviving early life)"], correct: 0 },
        { question: "A metapopulation consists mostly of:", options: ["lots of small populations close enough to each other for organisms to move between them."], correct: 0 }
      ],
      57: [
        { question: "What is an example of a +/− interaction?", options: ["predation"], correct: 0 },
        { question: "What is an example of a +/+ interaction?", options: ["mutualism"], correct: 0 },
        { question: "The relationship of disease-causing organisms to an infected rabbit is one of:", options: ["parasitism"], correct: 0 },
        { question: "What situation below is best characterized as interference competition?", options: ["A tiger that excludes other tigers from its territory."], correct: 0 },
        { question: "Competition among individuals of different species is called:", options: ["interspecific competition."], correct: 0 },
        { question: "Allelopathy is:", options: ["a type of competition between plant species through chemicals."], correct: 0 },
        { question: "Caterpillars of the same species on a large leaf each chew as much leaf as they can:", options: ["exploitation competition."], correct: 0 },
        { question: "In competition between P. caudatum and P. bursaria, neither species goes extinct because they utilize different resources. This can be considered as evidence for:", options: ["resource partitioning."], correct: 0 },
        { question: "You are studying the feeding habits of a group of four closely related bird species. You observe that all four species feed on insects. However, you notice that the species do not feed at the same time of day: one species feeds most actively at dawn, another during the middle of the day, another at dusk, and the last species feeds at night. What term would you use to describe this behavior?", options: ["resource partitioning"], correct: 0 },
        { question: "Sympatric species:", options: ["are more likely than allopatric species to display character displacement."], correct: 0 },
        { question: "Several snake species that are harmless have very similar color patterns to the venomous coral snake. This is best described as an example of what?", options: ["Batesian mimicry"], correct: 0 },
        { question: "What form of coloration is shown by many seahorses?", options: ["camouflage"], correct: 0 },
        { question: "Secondary metabolites are produced to:", options: ["deter herbivores."], correct: 0 },
        { question: "What is host plant resistance?", options: ["The ability to prevent herbivory through various defenses."], correct: 0 },
        { question: "What might be the predominant lifestyle on Earth?", options: ["parasitism"], correct: 0 },
        { question: "Polyphagous parasites feed on:", options: ["many different host species."], correct: 0 },
        { question: "You find some rather strange plants in your backyard. They consist only of thin, pale yellow stems that are wrapped around other species of plants growing nearby. You experiment by unwrapping some of the strange yellow plants and planting half of them alone in pots of soil and half in pots with other plants from your yard. You water and fertilize both sets of pots, but after a few weeks you find that the yellow plants that were potted alone have died, while those potted with other plants are thriving. What term would you use to describe the strange yellow plants?", options: ["holoparasitic"], correct: 0 },
        { question: "Many species of ants \"farm\" aphids, protecting them from predation and collecting concentrated sugars (i.e. honeydew) from them. This type of ant/aphid relationship is known as:", options: ["defensive mutualism."], correct: 0 },
        { question: "A mutualism in which each species can live without the other is termed:", options: ["a facultative mutualism."], correct: 0 },
        { question: "What is often true of the fruits eaten by birds and mammals?", options: ["They are brightly colored."], correct: 0 },
        { question: "The seeds of many plant species are dispersed by a harmless temporary attachment to an animal's fur or feathers. This form of dispersal can be classified as:", options: ["phoresy."], correct: 0 },
        { question: "Some scientists have suggested that recent outbreaks of sudden oak disease could be fought through the creation of transgenic plants with genetic resistance to sudden oak disease. What would be the most likely source of this genetic resistance?", options: ["the original host species in the native region of the disease"], correct: 0 },
        { question: "Which of the following exert bottom-up control?", options: ["levels of calcium and nitrogen in the soil"], correct: 0 },
        { question: "The nitrogen-limitation hypothesis states that organisms select food in terms of the nitrogen content of the tissue. Why might this be true?", options: ["Because many consumers need large amounts of nitrogen, for example, animal tissue contains about 10 times as much nitrogen as plant tissue."], correct: 0 },
        { question: "The eastern indigo snake often makes its home in abandoned gopher tortoise burrows. How would you characterize this relationship and its effect on each member?", options: ["commensalism: positive for snake, neutral for tortoise"], correct: 0 },
        { question: "Plants compete with other plants with the same four types of competition that animals use in their competition. Plants that are not shade-tolerant try to grow quickly and shade out any other individuals. Shading out means capturing light before it reaches any lower plants' leaves. What type of competition would these plants be performing?", options: ["Exploitation competition, although whether inter- or intra- specific cannot be determined by the question."], correct: 0 },
        { question: "How does a pathogen spread through a population?", options: ["Infectious individuals make susceptible individuals sick, then they recover."], correct: 0 },
        { question: "In terms of pathogen models, or herd immunity, someone who is vaccinated will be:", options: ["most similar to a recovered person."], correct: 0 },
        { question: "When a population reaches the threshold of herd immunity:", options: ["the pathogen's frequency will begin decreasing."], correct: 0 },
        { question: "A zoonotic disease is:", options: ["a disease of animals that has spread into humans."], correct: 0 },
        { question: "Bottom-up control focuses upon the effects of:", options: ["the population size of what a group of organisms eat."], correct: 0 },
        { question: "For a species we wish to protect, the life stage with the highest indispensable mortality would be the:", options: ["life stage it is most important to protect."], correct: 0 }
      ],
      58: [
        { question: "Community ecology is best defined as the study of:", options: ["how groups of species interact in the same place at the same time."], correct: 0 },
        { question: "What is the general global pattern of species richness?", options: ["Increasing from polar areas toward the tropics"], correct: 0 },
        { question: "If you (incorrectly) proposed that tundra, the world's largest land biome, contains high species richness, your proposal would be consistent with the:", options: ["species-area hypothesis."], correct: 0 },
        { question: "Based on what you know about various species richness hypotheses, a large, tropical area would likely have _________ species richness:", options: ["high"], correct: 0 },
        { question: "What is the most accurate statement about temporal variability of plant biomass of a community?", options: ["It decreases as species diversity increases."], correct: 0 },
        { question: "What is an area of the Earth's surface currently undergoing primary succession?", options: ["Volcanoes in Iceland"], correct: 0 },
        { question: "No matter what model is used to show community succession, the final stage is always:", options: ["a climax community."], correct: 0 },
        { question: "In succession, the ability of one species to make the area more suitable for another species is called:", options: ["facilitation."], correct: 0 },
        { question: "The Shannon diversity index would be most valuable to:", options: ["a conservation biologist deciding where to locate a new nature preserve."], correct: 0 },
        { question: "The moraines left when glaciers retreat are characterized by:", options: ["low nitrogen content and little organic matter."], correct: 0 },
        { question: "What is considered to be the primary method of succession in the marine intertidal zone?", options: ["Inhibition"], correct: 0 },
        { question: "In the island biogeography model, species richness is a balance between:", options: ["immigration and extinction."], correct: 0 },
        { question: "In island biogeography, larger islands support ______ species than smaller islands:", options: ["more"], correct: 0 },
        { question: "Which of these types of islands is predicted to have the lowest number of species?", options: ["A small island far from mainland"], correct: 0 },
        { question: "Extinction rates on islands are predicted, based on island biogeography, to be lowest:", options: ["on large islands."], correct: 0 },
        { question: "Species turnover on islands has been observed to be low. What does this suggest about succession on islands?", options: ["Succession on most islands proceeds in a relatively predictable manner."], correct: 0 },
        { question: "The number of bird species on islands near Papua New Guinea_________ as one gets farther from Papua New Guinea:", options: ["decreases"], correct: 0 },
        { question: "Support for the succession mechanism of tolerance is found in research on plant communities that shows:", options: ["succession is determined largely by species that exist in the ground as seeds or old roots."], correct: 0 },
        { question: "In 1992, mangrove forests along the southern Florida coast and the Florida Keys were severely damaged by Hurricane Andrew. Up to 94% mortality was recorded in some areas, with only the shortest individuals surviving. Scientists have monitored the region and by 2001, the forest canopy had closed and the main species were rapidly gaining biomass. This is an example of:", options: ["secondary succession."], correct: 0 },
        { question: "Predict the rank order of the following locations from lowest species richness to highest species richness, using the latitudinal gradient of species richness to form your prediction:temperate forest in North Carolina, steppe in Patagonia (southern tip of South America), rainforest in Costa Rica, boreal forest in Ontario (east-central Canada):", options: ["Steppe in Patagonia, Boreal Forest in Ontario, Temperate Forest in North Carolina, Rainforest in Costa Rica"], correct: 0 },
        { question: "Which of these is a heterotroph?", options: ["a fish"], correct: 0 },
        { question: "In subarctic saltmarshes, scientists have found that the addition of calcium has no effect on productivity, but additional iron does increase productivity. In this example, iron:", options: ["is a limiting factor."], correct: 0 },
        { question: "How do primary producers provide energy for the food chain?", options: ["They make their own organic molecules via photo- or chemosynthesis."], correct: 0 },
        { question: "In food webs, chain lengths:", options: ["tend to be short."], correct: 0 },
        { question: "The efficiency of energy transfer between trophic-levels averages about:", options: ["10%."], correct: 0 },
        { question: "A single oak tree can support hundreds of beetles, caterpillars and other primary consumers. This would be best represented by:", options: ["an inverted pyramid of numbers."], correct: 0 },
        { question: "What is gross primary production?", options: ["The carbon fixed during photosynthesis"], correct: 0 },
        { question: "Ecosystem ecology is primarily concerned with:", options: ["movement of energy and materials through ecosystems."], correct: 0 },
        { question: "Primary production is generally highest in:", options: ["wetlands"], correct: 0 },
        { question: "If gross primary production were to increase in an ecosystem, it would be reasonable to expect that:", options: ["the biomass of herbivores would increase."], correct: 0 },
        { question: "What are the most important transformers of energy in ecosystems?", options: ["Plants and algae"], correct: 0 },
        { question: "Which of these ecosystems has the lowest productivity?", options: ["open ocean"], correct: 0 },
        { question: "When we use the Shannon diversity index to calculate the effective number of species, we are determining how many species would provide that same diversity value:", options: ["if the populations of each species were all the same size."], correct: 0 },
        { question: "The Island Biogeography Model's species-area relationship says that:", options: ["larger islands will have more species"], correct: 0 },
        { question: "Which of these predictions of the Equilibrium Model of Island Biogeography is least supported by evidence?", options: ["Species turnover relationships"], correct: 0 },
        { question: "Which of these is an accurate statement about the differences between production efficiency and trophic-level transfer efficiency?", options: ["Production efficiency measures how much of one organism's food becomes assimilated into that organism, while transfer efficiency does the same thing for the entire trophic level, not just one organism / species."], correct: 0 },
        { question: "If gross primary production were to increase in an ecosystem, most of that increase would end up as:", options: ["energy for detritivores."], correct: 0 },
        { question: "Aquatic dead zones are caused by:", options: ["a lot of limiting nutrients getting into an aquatic ecosystem."], correct: 0 },
        { question: "How can marine biomass be stored much more in consumers than in producers?", options: ["Producers grow quickly but also are eaten very quickly, so they don't accumulate a lot of biomass without passing it on."], correct: 0 },
        { question: "In which type of pyramid do detritivores make up a substantial part of the pyramid?", options: ["Pyramid of energy"], correct: 0 }
      ]
      ,
      59: [
        { question: "If the age structure of a country's population is balanced, what prediction can be made about the near future?", options: ["The population will not increase rapidly."], correct: 0 },
        { question: "You are studying with a classmate who asks you about the concept of a replacement rate. She wants to know what happens to a population if the replacement rate is reached? She also assumes the average human replacement rate is 2.0. What would you tell her?", options: ["When replacement rate is reached, the population is in equilibrium. The replacement rate is greater than 2.0 because some individuals die before they reproduce."], correct: 0 },
        { question: "World human population in 2017 was approximately:", options: ["7.5 billion."], correct: 0 },
        { question: "What percentage of the population are under the age of 15 in West Africa?", options: ["~50"], correct: 0 },
        { question: "What naturally occurring process is responsible for keeping the earth warm enough to sustain life?", options: ["Greenhouse effect"], correct: 0 },
        { question: "The Earth's surface releases_________ that is absorbed by the atmosphere, stabilizing or raising atmospheric temperature.", options: ["long-wave infrared radiation"], correct: 0 },
        { question: "What will be a consequence if current predictions of global warming are accurate?", options: ["Organisms will need to migrate or adapt quickly in order to survive."], correct: 0 },
        { question: "Which organism would be most likely to be able to survive rapid global climate change?", options: ["an insect that can feed upon many different plant species"], correct: 0 },
        { question: "Replacing forests with agricultural or urban areas can significantly affect the water cycle. Why is this?", options: ["Less moisture is evapotranspired into the atmosphere after deforestation."], correct: 0 },
        { question: "The movement of chemicals through ecosystems is known as:", options: ["biogeochemical cycling."], correct: 0 },
        { question: "How does DDT in the environment affect many birds?", options: ["decreased reproductive rate"], correct: 0 },
        { question: "Biogeochemical cycles involve:", options: ["the movement of chemicals through ecosystems."], correct: 0 },
        { question: "The process by which elevated nutrient levels lead to an overgrowth of algae and the subsequent depletion of water oxygen levels is known as:", options: ["eutrophication."], correct: 0 },
        { question: "Where are the largest reserves of carbon on the planet?", options: ["rocks and fossil fuels"], correct: 0 },
        { question: "Each year, plants and algae remove approximately_________ of the [CO2] in the atmosphere.", options: ["1/7th"], correct: 0 },
        { question: "What percentage of the earth's atmosphere consists of nitrogen gas?", options: ["78%"], correct: 0 },
        { question: "Ammonification is the conversion of_________ to [ammonia] and [ammonium].", options: ["organic nitrogen"], correct: 0 },
        { question: "The process by which soil bacteria convert [ammonia] or [ammonium] to nitrate is called:", options: ["nitrification."], correct: 0 },
        { question: "Deforestation in areas like Madagascar can significantly affect the water cycle. Why is this?", options: ["Less moisture is transpired into the atmosphere after deforestation."], correct: 0 },
        { question: "Lead is known to undergo biomagnification and accumulate in bones. What do you predict will happen to lead taken up by a tiger after it dies in the wild?", options: ["The lead will reenter the food web via detritivores and decomposers."], correct: 0 },
        { question: "What do you think would result if nitrogen-fixing cyanobacteria populations suddenly declined?", options: ["Aquatic primary production would decline, particularly in regions not subject to fertilizer runoff."], correct: 0 },
        { question: "What substance would you expect to accumulate in soil as a result of increased acid precipitation?", options: ["Ammonia"], correct: 0 },
        { question: "Lakes with elevated dissolved nutrients and low water clarity are called:", options: ["eutrophic."], correct: 0 },
        { question: "Which organism would be least likely to be able to survive rapid global climate change?", options: ["An insect species that lays its eggs and feeds upon a single plant species with a short flowering period"], correct: 0 },
        { question: "Sea levels are rising as the Earth's temperature increases, mainly because:", options: ["glaciers are melting."], correct: 0 },
        { question: "Which cause of habitat destruction is the fastest-growing and most destructive use of land?", options: ["Urbanization"], correct: 0 },
        { question: "One type of habitat loss is particularly destructive. This habitat is known for being especially species-rich, full of oxygen-generating trees, plus many plants that might provide genetic variability for crop plants or secondary metabolites with pharmaceutical properties. Which habitat?", options: ["Tropical rainforest"], correct: 0 },
        { question: "What percent of the world's land is used for crops and livestock pastures?", options: ["37%"], correct: 0 },
        { question: "In India, the cattle disease rinderpest caused only mild illness, but in Africa the same disease killed over 80% of the cattle across the continent. What is the best explanation for the difference?", options: ["Genetic resistance in the Indian cattle due to prior exposure"], correct: 0 },
        { question: "In the summer of 2016, people sweltering in the midwestern United States didn't say, \"It's not the heat, it's the humidity.\" Instead, they said \"It's the cornsweat.\" Many blamed surrounding acres of cornfields for increasing the perceived temperature, already at record levels. Considering what you know about the water cycle, what information might address this idea?", options: ["Since 90% of the water in the atmosphere over land arrived there by evapotranspiration, it is reasonable to conclude that increased acreage of corn cultivation could increase local humidity."], correct: 0 },
        { question: "Hawaiian honeycreepers, which are closely related to North American finches, have been devastated by the introduction of mosquitoes and now survive only at sufficiently high elevations which are devoid of mosquitoes. Given what you know about the potential problems 1with introduced species,2 why have mosquitoes been so detrimental to Hawaiian honeycreepers when birds all over the world have been exposed to mosquitoes with little or no negative consequences?", options: ["Mosquitoes are not native to Hawaii and hence Hawaiian honeycreepers have evolved no defenses against the diseases that mosquitoes transmit."], correct: 0 },
        { question: "Introduced species become invasive when they:", options: ["expand their range and outcompete native species."], correct: 0 },
        { question: "The amount of land needed to produce all the resources someone uses and to absorb all the image they release through their choices is called their:", options: ["ecological footprint."], correct: 0 },
        { question: "Which of these best describes how global warming works?", options: ["Heat that would normally be lost into space is instead trapped and bounced around in the atmosphere."], correct: 0 },
        { question: "The Intergovernmental Panel on Climate Change reported in 2007 that atmospheric carbon dioxide levels will nearly double by the end of this century. If this happens, what will be the atmospheric concentration of carbon dioxide?", options: ["700 ppm"], correct: 0 }
      ],
      60: [
        { question: "Biological diversity is composed of what three levels?", options: ["genetic; species; and ecosystem diversity"], correct: 0 },
        { question: "In the context of biodiversity, genetic diversity consists of:", options: ["the amount of genetic variation that occurs within and between populations"], correct: 0 },
        { question: "Endangered species:", options: ["are in danger of extinction throughout all or most of their range."], correct: 0 },
        { question: "Threatened species:", options: ["are species likely to become endangered in the future."], correct: 0 },
        { question: "Ecosystem diversity:", options: ["refers to the structure and function within an ecosystem."], correct: 0 },
        { question: "According to the diversity-stability hypothesis:", options: ["A loss of any species from an ecosystem leads to an approximately equal decline in stability."], correct: 0 },
        { question: "According to the redundancy hypothesis, species are redundant if:", options: ["they could be eliminated or replaced by others with little loss of ecosystem function."], correct: 0 },
        { question: "The idiosyncratic hypothesis suggests that:", options: ["Ecosystem function changes unpredictably as the number of species increases or decreases."], correct: 0 },
        { question: "In a series of field experiments, David Tilman and colleagues investigated biodiversity and ecosystem function. They found a relationship between:", options: ["species richness and ecosystem function."], correct: 0 },
        { question: "Megadiversity countries are those countries that:", options: ["have the largest number of endemic plant species."], correct: 0 },
        { question: "Geographic biodiversity \"hot spots\":", options: ["have ≥1500 endemic plant species and have lost ≥70% of the original habitat."], correct: 0 },
        { question: "An endemic species is one that:", options: ["is found in only one particular place or region."], correct: 0 },
        { question: "The study of the spatial arrangement of elements in communities and ecosystems is known as:", options: ["landscape ecology."], correct: 0 },
        { question: "What shape park is preferable for minimizing edge effects?", options: ["circular"], correct: 0 },
        { question: "The propagation of animals and plants outside their natural habitat is called:", options: ["captive breeding."], correct: 0 },
        { question: "In an effort to protect and breed the California condor, a rescue program:", options: ["captured the few remaining wild birds to breed them in captivity."], correct: 0 },
        { question: "Which of these is the best example of an umbrella species?", options: ["northern spotted owl"], correct: 0 },
        { question: "The wild Tasmanian devil population has decreased 70% since 1996 due to a contagious form of cancer known as Devil Facial Tumor Disease. Researchers have found several individuals that show partial resistance to the cancer. Attempts to breed these individuals and preserve their DNA in the population would fall under what level of biological diversity?", options: ["Genetic diversity"], correct: 0 },
        { question: "As you walk between classes on your college campus, you notice squirrels busily burying acorns. You realize you are witnessing what ecosystem service?", options: ["Seed dispersal"], correct: 0 },
        { question: "You are conducting a long term study of ecosystem functioning in a freshwater lake. You and your field assistants gather data for many biotic and abiotic factors, including species diversity, water and benthic quality, and turbidity. Over the ten years of your study, you find that the abundance of water lilies is correlated with several other factors. When water toxicity and turbidity are high and water pH is abnormally low, water lilies quickly become scarce, followed by periods where fish, amphibians, and water birds are also scarce or absent. In years water nutrient levels are very high, water lilies quickly become abundant, followed by years where wading birds are scarce. From these data, you conclude that water lilies are:", options: ["an indicator species."], correct: 0 },
        { question: "Grizzly bears have large geographic ranges that consist of mosaics of forests and grasslands at varying altitudes. Grizzlies also require relatively pristine water sources in their range. Based on this, what species type best describes grizzly bears?", options: ["umbrella species."], correct: 0 },
        { question: "The Florida panther, as an appealing symbol of Florida's conservation campaign, serves as a(n):", options: ["flagship species."], correct: 0 },
        { question: "In the northeastern Pacific ocean, sea otters occur at a relatively low abundance. By preying upon sea urchins, sea otters maintain underwater kelp (large algae) \"forests\", which would otherwise be decimated by the herbivorous sea urchins. The kelp forests supply food for a wide variety of marine organisms, as well as providing refuge from predation and nursery habitat for juveniles. Based on this, what type of species best describes sea otters?", options: ["keystone species"], correct: 0 },
        { question: "A nonprofit conservation organization receives a sizeable donation and decides to purchase several thousand acres of \"high desert\" in southern California. This particular type of desert has an intermediate level of species diversity and few unique species. However, much of the original areas of high desert have been converted to suburban housing and shopping. The decision by the nonprofit to preserve this area was most likely based upon what conservation strategy?", options: ["Conservation of representative habitats"], correct: 0 },
        { question: "On a field study in Costa Rica, you discover a new species of frog! After careful work to determine the size and range of the population, you conclude sadly that the species has very few individuals in an ever-shrinking limited range. The entire species could be wiped out at any time. When you write up your report on the frog, how should you describe its status?", options: ["Endangered"], correct: 0 },
        { question: "A lack of genetic diversity in a species usually results in:", options: ["less ability to adapt to change in the environment."], correct: 0 },
        { question: "Which of these is the best defintion for what an ecosystem service is?", options: ["Any benefit humans get from healthy, functioning ecosystems."], correct: 0 },
        { question: "In temperate forest ecosystems that have been logged or otherwise have relatively few species, the productivity (an ecosystem function) is much lower than in forest ecosystems that have more species. The maximum number of species in an ecosystem varies tremendously across similar habitats on different continents. Despite that variation, the maximum ecosystem function is similar. If the ecosystem function relates to species richness when there are few species, but not as much when there are many, this is evidence for which hypothesis?", options: ["Diversity - Stability hypothesis"], correct: 0 },
        { question: "Cloning is a type of:", options: ["captive breeding."], correct: 0 },
        { question: "Sustainable development is best defined as:", options: ["allowing people to improve their lifestyle while still maintaining natural resources."], correct: 0 }
      ]
    };

    return sampleQuestions[chapter as keyof typeof sampleQuestions] || [];
  };

  const questions = useMemo(() => getQuestionsForChapter(chapterNumber), [chapterNumber]);
  
  const chapterTitles: Record<number, string> = {
    54: 'Ecology and the Biosphere',
    56: 'Population Ecology',
    57: 'Community Ecology',
    58: 'Ecosystems and Restoration Ecology',
    59: 'Conservation Biology and Global Change',
    60: 'Biodiversity and Conservation Biology',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Chapters</span>
            </button>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center flex-1">
              Chapter {chapterNumber}: {chapterTitles[chapterNumber]}
            </h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Chapter Info */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full text-blue-800 font-medium mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{questions.length} Questions Available</span>
          </div>
          <p className="text-gray-600">
            Review all questions and answers for this chapter. Correct answers are{' '}
            <span className="bg-yellow-200 px-2 py-1 rounded font-semibold">highlighted in yellow</span>{' '}
            for easy memorization.
          </p>
        </div>

        {/* Questions and Answers */}
        <div className="space-y-12">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="text-left">
              <p className="text-base sm:text-lg leading-relaxed text-gray-900 mb-4">
                <span className="font-medium">{question.question}</span>{" "}
                <span className="bg-yellow-300 font-bold text-gray-900 px-2 py-1 rounded">
                  {question.options[question.correct]}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Chapter Selection</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ChapterReview;