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
        { question: "Ecology:", options: ["is the study of interactions among organisms and between organisms and their environment", "is the study of individual organisms", "is the study of genetics", "is the study of chemistry"], correct: 0 },
        { question: "A scientist is studying several areas along an elevation gradient. She compares the type and abundance of organisms that colonize them prescribed burns (purposefully set, low-intensity fires) in the different areas along the change in elevation. What scale best describes her study?", options: ["Population ecology", "Community ecology", "Ecosystem ecology", "Global ecology"], correct: 1 },
        { question: "American Chestnut trees used to be one of the most common trees in the Eastern part of the United States. A fungus was introduced from another continent that sickened and killed nearly every chestnut tree in the country. An ecologist is trying to understand how certain trees resist the fungus, and how to get more fungus-resistant trees growing in the wild. This ecologist would be studying what type of ecology?", options: ["Community ecology", "Population ecology", "Ecosystem ecology", "Global ecology"], correct: 1 },
        { question: "You have been assigned to conduct a scientific study on the effects of four types of fertilizer on broccoli growth. You visit several broccoli farms to make observations and use these observations to find preliminary correlations and form hypotheses. To test your hypotheses, you set up five plots of broccoli—one plot for each fertilizer type plus a control plot, which is not fertilized. When you meet with your professor to discuss your progress, he tells you that your project is missing an important component of the scientific method. What is missing?", options: ["Forming hypotheses", "Making observations", "Replicating each fertilizer treatment in multiple plots", "Having a control group"], correct: 2 },
        { question: "Temperature is perhaps the most important factor in the distribution of organisms because:", options: ["organisms prefer warm temperatures", "most organisms are unable to regulate their body temperature precisely", "temperature affects water availability", "temperature controls light levels"], correct: 1 },
        { question: "How do corals react when water temperatures are too high?", options: ["They grow faster", "They expel their symbiotic algae", "They reproduce more", "They absorb more nutrients"], correct: 1 },
        { question: "The serotinous cones of certain pine trees, such as the longleaf pine, Pinus palustris, depend on _______ to release their seeds:", options: ["water", "fire", "wind", "animals"], correct: 1 },
        { question: "The photic zone in aquatic environments is typically about how deep?", options: ["50 m", "100 m", "200 m", "500 m"], correct: 1 },
        { question: "Why are red algae found in deeper oceanic waters?", options: ["They prefer cold temperatures", "They possess pigments that allow them utilize blue-green-light", "They don't need sunlight", "They avoid predators"], correct: 1 },
        { question: "In arid terrestrial environments, salt can accumulate in the soil because of:", options: ["high rainfall", "the settling and evaporation of water", "plant absorption", "wind erosion"], correct: 1 },
        { question: "In your biology lab, you are given a vial that contains fish urine. Your assignment is to predict whether the urine came from a fresh or saltwater species. You discover that the urine contains a high concentration of salts. What is your prediction for the fish's habitat? What is the concentration of solutes in the fish relative to its environment?", options: ["Freshwater; hyperosmotic", "Marine; hypoosmotic", "Freshwater; hypoosmotic", "Marine; hyperosmotic"], correct: 1 },
        { question: "The optimal pH range for most freshwater fishes and invertebrates is:", options: ["4–6", "6–9", "9–12", "1–4"], correct: 1 },
        { question: "The sea heats and cools:", options: ["faster than the land", "more slowly than the land", "at the same rate as land", "independently of land"], correct: 1 },
        { question: "The global patterns of atmospheric circulation and precipitation occur because of:", options: ["ocean currents", "rising masses of warm air and sinking masses of cool air", "mountain ranges", "vegetation patterns"], correct: 1 },
        { question: "What is adiabatic cooling?", options: ["cooling due to wind", "cooling due to the decrease in air pressure at higher elevations", "cooling due to water evaporation", "cooling due to shade"], correct: 1 },
        { question: "Currents in the ocean basins of the Northern Hemisphere always run in what direction?", options: ["counterclockwise", "clockwise", "north to south", "east to west"], correct: 1 },
        { question: "Most of Europe is in the _______ biome:", options: ["boreal forest", "temperate deciduous forest", "grassland", "mediterranean"], correct: 1 },
        { question: "Chaparral is:", options: ["a type of forest", "a type of shrubland/grassland", "a type of desert", "a type of wetland"], correct: 1 },
        { question: "You awaken to find yourself lying on the bare ground, dirty and injured. In the dim light, you can make out wreckage around you and surmise that you have survived a plane crash. Over the next few days, you wander the hot, humid area and find an amazing number of different plant and insect species. You are able to trap and eat several rodent size mammals, but do not see any larger mammals. Into what biome did your plane crash?", options: ["Temperate forest", "Tropical rain forest", "Savanna", "Desert"], correct: 1 },
        { question: "How would you best explain the existence of a mountain range that has abundant conifer trees, ferns, and mosses on the east side, but only sparse shrubby plants on the west side?", options: ["Temperature differences", "Precipitation differences due to a rain shadow on the west side produce the differing plant communities", "Soil differences", "Altitude differences"], correct: 1 },
        { question: "Lakes with elevated dissolved nutrients and low water clarity are called:", options: ["oligotrophic", "eutrophic", "mesotrophic", "dystrophic"], correct: 1 },
        { question: "Which of the following is a characteristic of tundra?", options: ["high temperatures", "permafrost", "abundant trees", "high precipitation"], correct: 1 },
        { question: "The Earth is spherical, which causes differences in the intensity of solar radiation at different latitudes. The Earth is also tilted on its axis at a 23.5° angle. How do you think this tilt affects the intensity of solar radiation?", options: ["It has no effect", "The sun's rays strike the Northern hemisphere more obliquely during its winter months and less obliquely during its summer months", "It only affects the Southern hemisphere", "It makes all seasons the same"], correct: 1 },
        { question: "The world can be divided approximately into six major biogeographic regions. Which of these is an accurate description of the properties of those regions?", options: ["All species exist in all regions", "Any single species rarely exists in more than one biogeographic region", "Regions have identical climates", "Regions are defined by political boundaries"], correct: 1 }
      ],
      56: [
        { question: "A group of interbreeding individuals occupying the same habitat at the same time is a(n):", options: ["community", "population", "ecosystem", "species"], correct: 1 },
        { question: "You find a notebook that has lots of equations, tables, and graphs in it. The tables have columns for the number of female offspring born over a year, the number of deaths over a year, and the number of individuals in various age classes. What subject do you think the owner of the notebook is studying? What type of tables are they most likely using?", options: ["ecology; data tables", "demography; life tables", "genetics; punnett squares", "physiology; growth charts"], correct: 1 },
        { question: "What is the simplest method to measure population density in a given area?", options: ["Use mark-recapture methods", "Count the number of organisms", "Measure biomass", "Use statistical sampling"], correct: 1 },
        { question: "A line transect would probably be the preferred method to quantify the population density of:", options: ["fish in a lake", "Ponderosa pine trees", "insects in soil", "bacteria in culture"], correct: 1 },
        { question: "A mark-recapture program marked 10 individuals in the first catch. The second catch has a total of 8 individuals, 4 of which were recaptures. What is the estimate of total population size?", options: ["16", "20", "24", "32"], correct: 1 },
        { question: "A good sampling method for quantifying the density of birds or bats is the use of:", options: ["line transects", "mist nets", "quadrat sampling", "camera traps"], correct: 1 },
        { question: "Dispersion is:", options: ["the movement of individuals between populations", "the spatial distribution of individuals", "the reproductive rate of a population", "the density of a population"], correct: 1 },
        { question: "Many species of birds form large flocks. What dispersion pattern describes this behavior?", options: ["uniform", "clumped", "random", "territorial"], correct: 1 },
        { question: "Why is a random dispersal pattern quite rare in nature?", options: ["Animals prefer to be near others", "Because resources in nature are rarely randomly spaced", "Predators prevent random distribution", "Weather patterns influence distribution"], correct: 1 },
        { question: "Lions, leopards, and other large terrestrial predators generally maintain well-defined territories. What kind of dispersion pattern would you expect this to produce?", options: ["clumped", "uniform", "random", "clustered"], correct: 1 },
        { question: "Organisms that produce all of their offspring in a single event are:", options: ["iteroparous", "semelparous", "viviparous", "oviparous"], correct: 1 },
        { question: "Organisms that reproduce repeatedly are said to be:", options: ["semelparous", "iteroparous", "hermaphroditic", "parthenogenetic"], correct: 1 },
        { question: "Which of these organisms is semelparous?", options: ["humans", "agave plants", "oak trees", "elephants"], correct: 1 },
        { question: "A fisheries biologist tells you she is studying a cohort of salmon returning to their birth river. What can you infer about those salmon?", options: ["They are all female", "They are the same age", "They are from different populations", "They have the same genetics"], correct: 1 },
        { question: "A survivorship curve with uniform death rates over time is most likely to be a type _______ curve:", options: ["I", "II", "III", "IV"], correct: 1 },
        { question: "A survivorship curve in which most individuals die late in life is a type _______ curve:", options: ["I", "II", "III", "IV"], correct: 0 },
        { question: "_______ selected species have a low rate of per capita growth:", options: ["r-", "K-", "N-", "S-"], correct: 1 },
        { question: "Parasitism usually affects populations in a _______ manner:", options: ["density-independent", "density-dependent", "random", "cyclical"], correct: 1 },
        { question: "What information is used to calculate the age-specific fertility rate, mx?", options: ["total population size", "number of female offspring born to females within a reproductive age class", "death rate by age", "migration rate"], correct: 1 },
        { question: "Which of these are reasons why population growth typically slows down when populations reach carrying capacity?", options: ["genetic diversity decreases", "resource limitation decreases birth rates", "mutations increase", "predation decreases"], correct: 1 },
        { question: "A plot of population size vs time that displays a J-shape is indicative of:", options: ["logistic growth", "exponential growth", "declining growth", "stable growth"], correct: 1 },
        { question: "The per capita growth rate of a population is best defined as:", options: ["birth rate only", "per capita birth rate minus per capita death rate", "death rate only", "immigration minus emigration"], correct: 1 },
        { question: "In the formula, dN/dt = rN(K-N)/K, the rate of population growth approaches zero as:", options: ["r approaches zero", "the population size approaches the carrying capacity", "K approaches zero", "N approaches zero"], correct: 1 },
        { question: "If the age-specific fertility rate is such that 100 females of age class x would produce 50 female offspring, what is the contribution of age class x to the overall population growth rate?", options: ["0.5", "can't be calculated", "50", "100"], correct: 1 },
        { question: "For some plants or animals, death comes somewhat randomly. Which individuals die is not related to how old / young they are. This describes which type of survivorship curve?", options: ["Type 1", "Type 2", "Type 3", "Type 4"], correct: 1 },
        { question: "Just because some plants have lots and lots of seeds does not mean that they will make lots and lots of adult plants. Most seeds either are eaten or become seedlings and die before becoming large, adult plants. This describes what type of survivorship curve?", options: ["Type 1", "Type 2", "Type 3", "Type 4"], correct: 2 },
        { question: "Modern humans show which type of survivorship curve?", options: ["Type 1", "Type 2", "Type 3", "Type 4"], correct: 0 },
        { question: "When a population has 100 individuals and r is zero, what will the population size be one generation later?", options: ["50", "100", "150", "200"], correct: 1 },
        { question: "When a population has 100 individuals and r is 1.0, what will the population size be one generation later? Assume it is nowhere near carrying capacity.", options: ["100", "200", "300", "400"], correct: 1 },
        { question: "When a population has 50 individuals and r is 0.5, what will the population size be one generation later? Assume it is nowhere near carrying capacity.", options: ["50", "75", "100", "125"], correct: 1 },
        { question: "Consider a population with 100 individuals and an r of 1.0. If the population is exactly at carrying capacity, what will the population size be one generation later?", options: ["50", "100", "150", "200"], correct: 1 },
        { question: "Consider a population with 1000 individuals, an r of 1.0 and a K of 2000. What will the population size be one generation later?", options: ["1000", "1500", "2000", "2500"], correct: 1 },
        { question: "Consider a population with 100 individuals, an r of 1.0 and a K of 200. What will the growth of the population over the next generation?", options: ["25", "50", "75", "100"], correct: 1 },
        { question: "The per capita growth rate (r) is used to calculate:", options: ["Population growth only at carrying capacity", "Population growth under any conditions", "Only birth rates", "Only death rates"], correct: 1 },
        { question: "Diseases spread most rapidly when a sick individual encounters a lot of other individuals during the day. This makes death due to disease a _______:", options: ["Density-independent factor", "Density-dependent factor", "Random factor", "Genetic factor"], correct: 1 },
        { question: "The purpose of a habitat corridor is to:", options: ["increase population density", "reduce the effects of habitat fragmentation", "prevent predation", "control disease spread"], correct: 1 },
        { question: "An r-selected species is more likely to show which of these life-history strategies?", options: ["A Type I survivorship curve", "A Type III survivorship curve (=few surviving early life)", "Large body size", "Long lifespan"], correct: 1 },
        { question: "A metapopulation consists mostly of:", options: ["one large population", "lots of small populations close enough to each other for organisms to move between them", "isolated populations with no gene flow", "extinct populations"], correct: 1 }
      ],
      57: [
        { question: "What is an example of a +/− interaction?", options: ["mutualism", "predation", "commensalism", "competition"], correct: 1 },
        { question: "What is an example of a +/+ interaction?", options: ["predation", "mutualism", "parasitism", "competition"], correct: 1 },
        { question: "The relationship of disease-causing organisms to an infected rabbit is one of:", options: ["mutualism", "commensalism", "parasitism", "predation"], correct: 2 },
        { question: "What situation below is best characterized as interference competition?", options: ["Birds eating from the same food source", "A tiger that excludes other tigers from its territory", "Plants growing in the same soil", "Fish feeding on plankton"], correct: 1 },
        { question: "Competition among individuals of different species is called:", options: ["intraspecific competition", "interspecific competition", "interference competition", "exploitation competition"], correct: 1 },
        { question: "Allelopathy is:", options: ["a type of mutualism", "a type of competition between plant species through chemicals", "a form of predation", "a defensive mechanism"], correct: 1 },
        { question: "Caterpillars of the same species on a large leaf each chew as much leaf as they can:", options: ["interference competition", "exploitation competition", "interspecific competition", "allelopathy"], correct: 1 },
        { question: "In competition between P. caudatum and P. bursaria, neither species goes extinct because they utilize different resources. This can be considered as evidence for:", options: ["competitive exclusion", "resource partitioning", "character displacement", "interference competition"], correct: 1 },
        { question: "You are studying the feeding habits of a group of four closely related bird species. You observe that all four species feed on insects. However, you notice that the species do not feed at the same time of day: one species feeds most actively at dawn, another during the middle of the day, another at dusk, and the last species feeds at night. What term would you use to describe this behavior?", options: ["competitive exclusion", "resource partitioning", "character displacement", "temporal isolation"], correct: 1 },
        { question: "Sympatric species:", options: ["are less likely to compete than allopatric species", "are more likely than allopatric species to display character displacement", "never show character displacement", "always go extinct"], correct: 1 },
        { question: "Several snake species that are harmless have very similar color patterns to the venomous coral snake. This is best described as an example of what?", options: ["Müllerian mimicry", "Batesian mimicry", "camouflage", "warning coloration"], correct: 1 },
        { question: "What form of coloration is shown by many seahorses?", options: ["warning coloration", "Batesian mimicry", "camouflage", "sexual selection"], correct: 2 },
        { question: "Secondary metabolites are produced to:", options: ["attract pollinators", "deter herbivores", "enhance photosynthesis", "increase growth"], correct: 1 },
        { question: "What is host plant resistance?", options: ["The ability to prevent herbivory through various defenses", "The ability to attract herbivores", "The ability to grow faster", "The ability to reproduce more"], correct: 0 },
        { question: "What might be the predominant lifestyle on Earth?", options: ["predation", "mutualism", "parasitism", "commensalism"], correct: 2 },
        { question: "Polyphagous parasites feed on:", options: ["only one host species", "many different host species", "only plant hosts", "only animal hosts"], correct: 1 },
        { question: "You find some rather strange plants in your backyard. They consist only of thin, pale yellow stems that are wrapped around other species of plants growing nearby. You experiment by unwrapping some of the strange yellow plants and planting half of them alone in pots of soil and half in pots with other plants from your yard. You water and fertilize both sets of pots, but after a few weeks you find that the yellow plants that were potted alone have died, while those potted with other plants are thriving. What term would you use to describe the strange yellow plants?", options: ["epiphytic", "holoparasitic", "saprophytic", "mutualistic"], correct: 1 },
        { question: "Many species of ants \"farm\" aphids, protecting them from predation and collecting concentrated sugars (i.e. honeydew) from them. This type of ant/aphid relationship is known as:", options: ["competitive mutualism", "defensive mutualism", "dispersive mutualism", "trophic mutualism"], correct: 1 },
        { question: "A mutualism in which each species can live without the other is termed:", options: ["an obligate mutualism", "a facultative mutualism", "a defensive mutualism", "a competitive mutualism"], correct: 1 },
        { question: "What is often true of the fruits eaten by birds and mammals?", options: ["They are green and camouflaged", "They are brightly colored", "They are toxic", "They are small and hard"], correct: 1 },
        { question: "The seeds of many plant species are dispersed by a harmless temporary attachment to an animal's fur or feathers. This form of dispersal can be classified as:", options: ["mutualism", "parasitism", "phoresy", "commensalism"], correct: 2 },
        { question: "Some scientists have suggested that recent outbreaks of sudden oak disease could be fought through the creation of transgenic plants with genetic resistance to sudden oak disease. What would be the most likely source of this genetic resistance?", options: ["laboratory-created genes", "the original host species in the native region of the disease", "unrelated plant species", "bacterial genes"], correct: 1 },
        { question: "Which of the following exert bottom-up control?", options: ["predators", "levels of calcium and nitrogen in the soil", "parasites", "disease"], correct: 1 },
        { question: "The nitrogen-limitation hypothesis states that organisms select food in terms of the nitrogen content of the tissue. Why might this be true?", options: ["Because nitrogen is rare in the environment", "Because many consumers need large amounts of nitrogen; for example, animal tissue contains about 10 times as much nitrogen as plant tissue", "Because nitrogen is toxic", "Because nitrogen determines taste"], correct: 1 },
        { question: "The eastern indigo snake often makes its home in abandoned gopher tortoise burrows. How would you characterize this relationship and its effect on each member?", options: ["mutualism: positive for both", "commensalism: positive for snake, neutral for tortoise", "parasitism: positive for snake, negative for tortoise", "competition: negative for both"], correct: 1 },
        { question: "Plants compete with other plants with the same four types of competition that animals use in their competition. Plants that are not shade-tolerant try to grow quickly and shade out any other individuals. Shading out means capturing light before it reaches any lower plants' leaves. What type of competition would these plants be performing?", options: ["Interference competition only", "Exploitation competition, although whether inter- or intra- specific cannot be determined by the question", "Intraspecific competition only", "Allelopathy"], correct: 1 },
        { question: "How does a pathogen spread through a population?", options: ["Susceptible individuals make infectious individuals sick", "Infectious individuals make susceptible individuals sick, then they recover", "Recovered individuals become susceptible again", "All individuals are equally likely to get sick"], correct: 1 },
        { question: "In terms of pathogen models, or herd immunity, someone who is vaccinated will be:", options: ["most similar to a susceptible person", "most similar to a recovered person", "most similar to an infectious person", "completely different from all categories"], correct: 1 },
        { question: "When a population reaches the threshold of herd immunity:", options: ["the pathogen's frequency will begin increasing", "the pathogen's frequency will begin decreasing", "the pathogen's frequency will remain constant", "everyone becomes immune"], correct: 1 },
        { question: "A zoonotic disease is:", options: ["a disease that only affects animals", "a disease of animals that has spread into humans", "a disease that only affects humans", "a disease that affects plants"], correct: 1 },
        { question: "Bottom-up control focuses upon the effects of:", options: ["predators on prey populations", "the population size of what a group of organisms eat", "disease on population size", "competition between species"], correct: 1 },
        { question: "For a species we wish to protect, the life stage with the highest indispensable mortality would be the:", options: ["life stage with the highest mortality rate", "life stage it is most important to protect", "life stage with the lowest mortality rate", "adult life stage"], correct: 1 }
      ],
      58: [
        { question: "Community ecology is best defined as the study of:", options: ["individual species behavior", "population dynamics", "how groups of species interact in the same place at the same time", "ecosystem energy flow"], correct: 2 },
        { question: "What is the general global pattern of species richness?", options: ["Decreasing from polar areas toward the tropics", "Increasing from polar areas toward the tropics", "Uniform across all latitudes", "Highest at mid-latitudes"], correct: 1 },
        { question: "If you (incorrectly) proposed that tundra, the world's largest land biome, contains high species richness, your proposal would be consistent with the:", options: ["latitudinal gradient hypothesis", "species-area hypothesis", "intermediate disturbance hypothesis", "productivity hypothesis"], correct: 1 },
        { question: "Based on what you know about various species richness hypotheses, a large, tropical area would likely have _______ species richness:", options: ["low", "high", "moderate", "variable"], correct: 1 },
        { question: "What is the most accurate statement about temporal variability of plant biomass of a community?", options: ["It increases as species diversity increases", "It decreases as species diversity increases", "It is unrelated to species diversity", "It remains constant regardless of diversity"], correct: 1 },
        { question: "What is an area of the Earth's surface currently undergoing primary succession?", options: ["Abandoned farmland", "Forest after wildfire", "Volcanoes in Iceland", "Pond becoming meadow"], correct: 2 },
        { question: "No matter what model is used to show community succession, the final stage is always:", options: ["a pioneer community", "a climax community", "a transitional community", "a disturbed community"], correct: 1 },
        { question: "In succession, the ability of one species to make the area more suitable for another species is called:", options: ["inhibition", "facilitation", "tolerance", "competition"], correct: 1 },
        { question: "The Shannon diversity index would be most valuable to:", options: ["a population geneticist studying mutations", "a conservation biologist deciding where to locate a new nature preserve", "a physiologist studying metabolism", "a molecular biologist studying DNA"], correct: 1 },
        { question: "The moraines left when glaciers retreat are characterized by:", options: ["high nitrogen content and rich organic matter", "low nitrogen content and little organic matter", "moderate nitrogen content", "variable nutrient content"], correct: 1 },
        { question: "What is considered to be the primary method of succession in the marine intertidal zone?", options: ["Facilitation", "Inhibition", "Tolerance", "Competition"], correct: 1 },
        { question: "In the island biogeography model, species richness is a balance between:", options: ["predation and competition", "immigration and extinction", "birth and death rates", "mutation and selection"], correct: 1 },
        { question: "In island biogeography, larger islands support ______ species than smaller islands:", options: ["fewer", "more", "the same number of", "different types of"], correct: 1 },
        { question: "Which of these types of islands is predicted to have the lowest number of species?", options: ["A large island near mainland", "A large island far from mainland", "A small island near mainland", "A small island far from mainland"], correct: 3 },
        { question: "Extinction rates on islands are predicted, based on island biogeography, to be lowest:", options: ["on small islands", "on large islands", "on distant islands", "on near islands"], correct: 1 },
        { question: "Species turnover on islands has been observed to be low. What does this suggest about succession on islands?", options: ["Succession is highly unpredictable", "Succession on most islands proceeds in a relatively predictable manner", "Succession doesn't occur on islands", "Succession is faster on islands"], correct: 1 },
        { question: "The number of bird species on islands near Papua New Guinea _______ as one gets farther from Papua New Guinea:", options: ["increases", "decreases", "remains constant", "varies randomly"], correct: 1 },
        { question: "Support for the succession mechanism of tolerance is found in research on plant communities that shows:", options: ["early species prevent later species from establishing", "succession is determined largely by species that exist in the ground as seeds or old roots", "each species facilitates the next", "succession is random"], correct: 1 },
        { question: "In 1992, mangrove forests along the southern Florida coast and the Florida Keys were severely damaged by Hurricane Andrew. Up to 94% mortality was recorded in some areas, with only the shortest individuals surviving. Scientists have monitored the region and by 2001, the forest canopy had closed and the main species were rapidly gaining biomass. This is an example of:", options: ["primary succession", "secondary succession", "climax community", "pioneer community"], correct: 1 },
        { question: "Predict the rank order of the following locations from lowest species richness to highest species richness, using the latitudinal gradient of species richness to form your prediction: temperate forest in North Carolina, steppe in Patagonia (southern tip of South America), rainforest in Costa Rica, boreal forest in Ontario (east-central Canada):", options: ["Rainforest, Temperate Forest, Boreal Forest, Steppe", "Steppe in Patagonia, Boreal Forest in Ontario, Temperate Forest in North Carolina, Rainforest in Costa Rica", "Boreal Forest, Steppe, Temperate Forest, Rainforest", "All have equal species richness"], correct: 1 },
        { question: "Which of these is a heterotroph?", options: ["a plant", "algae", "a fish", "bacteria that photosynthesize"], correct: 2 },
        { question: "In subarctic saltmarshes, scientists have found that the addition of calcium has no effect on productivity, but additional iron does increase productivity. In this example, iron:", options: ["is abundant", "is a limiting factor", "is toxic", "is unnecessary"], correct: 1 },
        { question: "How do primary producers provide energy for the food chain?", options: ["They consume other organisms", "They decompose organic matter", "They make their own organic molecules via photo- or chemosynthesis", "They absorb nutrients from soil"], correct: 2 },
        { question: "In food webs, chain lengths:", options: ["tend to be very long", "tend to be short", "are always exactly 5 levels", "vary randomly"], correct: 1 },
        { question: "The efficiency of energy transfer between trophic-levels averages about:", options: ["1%", "10%", "50%", "90%"], correct: 1 },
        { question: "A single oak tree can support hundreds of beetles, caterpillars and other primary consumers. This would be best represented by:", options: ["a normal pyramid of numbers", "an inverted pyramid of numbers", "a pyramid of biomass", "a pyramid of energy"], correct: 1 },
        { question: "What is gross primary production?", options: ["The energy used in respiration", "The carbon fixed during photosynthesis", "The biomass of consumers", "The energy lost as heat"], correct: 1 },
        { question: "Ecosystem ecology is primarily concerned with:", options: ["individual behavior", "population genetics", "movement of energy and materials through ecosystems", "species interactions only"], correct: 2 },
        { question: "Primary production is generally highest in:", options: ["deserts", "tundra", "wetlands", "grasslands"], correct: 2 },
        { question: "If gross primary production were to increase in an ecosystem, it would be reasonable to expect that:", options: ["the biomass of herbivores would decrease", "the biomass of herbivores would increase", "predators would disappear", "decomposers would decrease"], correct: 1 },
        { question: "What are the most important transformers of energy in ecosystems?", options: ["Herbivores", "Plants and algae", "Carnivores", "Decomposers"], correct: 1 },
        { question: "Which of these ecosystems has the lowest productivity?", options: ["tropical rainforest", "wetlands", "temperate grassland", "open ocean"], correct: 3 },
        { question: "When we use the Shannon diversity index to calculate the effective number of species, we are determining how many species would provide that same diversity value:", options: ["if all species were rare", "if the populations of each species were all the same size", "if only one species dominated", "if species were randomly distributed"], correct: 1 },
        { question: "The Island Biogeography Model's species-area relationship says that:", options: ["smaller islands will have more species", "larger islands will have more species", "island size doesn't matter", "all islands have equal species"], correct: 1 },
        { question: "Which of these predictions of the Equilibrium Model of Island Biogeography is least supported by evidence?", options: ["Immigration rates decrease with distance", "Extinction rates increase on smaller islands", "Species turnover relationships", "Larger islands have more species"], correct: 2 },
        { question: "Which of these is an accurate statement about the differences between production efficiency and trophic-level transfer efficiency?", options: ["They are the same thing", "Production efficiency measures how much of one organism's food becomes assimilated into that organism, while transfer efficiency does the same thing for the entire trophic level, not just one organism / species", "Transfer efficiency is always higher", "Production efficiency only applies to plants"], correct: 1 },
        { question: "If gross primary production were to increase in an ecosystem, most of that increase would end up as:", options: ["biomass of herbivores", "energy for detritivores", "biomass of carnivores", "unused energy"], correct: 1 },
        { question: "Aquatic dead zones are caused by:", options: ["lack of sunlight", "a lot of limiting nutrients getting into an aquatic ecosystem", "too much oxygen", "cold temperatures"], correct: 1 },
        { question: "How can marine biomass be stored much more in consumers than in producers?", options: ["Producers are less efficient", "Consumers grow faster than producers", "Producers grow quickly but also are eaten very quickly, so they don't accumulate a lot of biomass without passing it on", "Marine producers are small"], correct: 2 },
        { question: "In which type of pyramid do detritivores make up a substantial part of the pyramid?", options: ["Pyramid of numbers", "Pyramid of biomass", "Pyramid of energy", "Pyramid of diversity"], correct: 2 }
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
    60: 'Global Climate Change',
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