'use client';

import React, { useState, useMemo, useCallback } from 'react';
import MobileMenu from './MobileMenu';
import AnswerOption from './AnswerOption';

interface QuizProps {
  chapter: number;
  onBack: () => void;
}

// Chapter 54 Questions
const sampleQuestions = {
  54: [
    { 
      id: 1, 
      question: "Ecology:", 
      options: ["is the study of genetics", "is the study of individual organisms", "is the study of chemistry", "is the study of interactions among organisms and between organisms and their environment"], 
      correct: 3 
    },
    { 
      id: 2, 
      question: "A scientist is studying several areas along an elevation gradient. She compares the type and abundance of organisms that colonize them prescribed burns (purposefully set, low-intensity fires) in the different areas along the change in elevation. What scale best describes her study?", 
      options: ["Global ecology", "Ecosystem ecology", "Population ecology", "Community ecology"], 
      correct: 3 
    },
    { 
      id: 3, 
      question: "American Chestnut trees used to be one of the most common trees in the Eastern part of the United States. A fungus was introduced from another continent that sickened and killed nearly every chestnut tree in the country. An ecologist is trying to understand how certain trees resist the fungus, and how to get more fungus-resistant trees growing in the wild. This ecologist would be studying what type of ecology?", 
      options: ["Population ecology", "Global ecology", "Ecosystem ecology", "Community ecology"], 
      correct: 0 
    },
    { 
      id: 4, 
      question: "You have been assigned to conduct a scientific study on the effects of four types of fertilizer on broccoli growth. You visit several broccoli farms to make observations and use these observations to find preliminary correlations and form hypotheses. To test your hypotheses, you set up five plots of broccoli—one plot for each fertilizer type plus a control plot, which is not fertilized. When you meet with your professor to discuss your progress, he tells you that your project is missing an important component of the scientific method. What is missing?", 
      options: ["Making observations", "Replicating each fertilizer treatment in multiple plots", "Forming hypotheses", "Having a control group"], 
      correct: 1 
    },
    { 
      id: 5, 
      question: "Temperature is perhaps the most important factor in the distribution of organisms because:", 
      options: ["most organisms are unable to regulate their body temperature precisely", "temperature affects water availability", "temperature controls light levels", "organisms prefer warm temperatures"], 
      correct: 0 
    },
    { 
      id: 6, 
      question: "How do corals react when water temperatures are too high?", 
      options: ["They expel their symbiotic algae", "They absorb more nutrients", "They reproduce more", "They grow faster"], 
      correct: 0 
    },
    { 
      id: 7, 
      question: "The serotinous cones of certain pine trees, such as the longleaf pine, Pinus palustris, depend on _______ to release their seeds:", 
      options: ["wind", "fire", "water", "animals"], 
      correct: 1 
    },
    { 
      id: 8, 
      question: "The photic zone in aquatic environments is typically about how deep?", 
      options: ["100 m", "500 m", "50 m", "200 m"], 
      correct: 0 
    },
    { 
      id: 9, 
      question: "Why are red algae found in deeper oceanic waters?", 
      options: ["They prefer cold temperatures", "They don't need sunlight", "They possess pigments that allow them utilize blue-green-light", "They avoid predators"], 
      correct: 2 
    },
    { 
      id: 10, 
      question: "In arid terrestrial environments, salt can accumulate in the soil because of:", 
      options: ["plant absorption", "wind erosion", "high rainfall", "the settling and evaporation of water"], 
      correct: 3 
    },
    { 
      id: 11, 
      question: "In your biology lab, you are given a vial that contains fish urine. Your assignment is to predict whether the urine came from a fresh or saltwater species. You discover that the urine contains a high concentration of salts. What is your prediction for the fish's habitat? What is the concentration of solutes in the fish relative to its environment?", 
      options: ["Freshwater; hypoosmotic", "Marine; hypoosmotic", "Marine; hyperosmotic", "Freshwater; hyperosmotic"], 
      correct: 1 
    },
    { 
      id: 12, 
      question: "The optimal pH range for most freshwater fishes and invertebrates is:", 
      options: ["1–4", "9–12", "6–9", "4–6"], 
      correct: 2 
    },
    { 
      id: 13, 
      question: "The sea heats and cools:", 
      options: ["independently of land", "more slowly than the land", "faster than the land", "at the same rate as land"], 
      correct: 1 
    },
    { 
      id: 14, 
      question: "The global patterns of atmospheric circulation and precipitation occur because of:", 
      options: ["mountain ranges", "vegetation patterns", "rising masses of warm air and sinking masses of cool air", "ocean currents"], 
      correct: 2 
    },
    { 
      id: 15, 
      question: "What is adiabatic cooling?", 
      options: ["cooling due to wind", "cooling due to the decrease in air pressure at higher elevations", "cooling due to shade", "cooling due to water evaporation"], 
      correct: 1 
    },
    { 
      id: 16, 
      question: "Currents in the ocean basins of the Northern Hemisphere always run in what direction?", 
      options: ["east to west", "counterclockwise", "north to south", "clockwise"], 
      correct: 3 
    },
    { 
      id: 17, 
      question: "Most of Europe is in the _______ biome:", 
      options: ["temperate deciduous forest", "mediterranean", "grassland", "boreal forest"], 
      correct: 0 
    },
    { 
      id: 18, 
      question: "Chaparral is:", 
      options: ["a type of shrubland/grassland", "a type of wetland", "a type of forest", "a type of desert"], 
      correct: 0 
    },
    { 
      id: 19, 
      question: "You awaken to find yourself lying on the bare ground, dirty and injured. In the dim light, you can make out wreckage around you and surmise that you have survived a plane crash. Over the next few days, you wander the hot, humid area and find an amazing number of different plant and insect species. You are able to trap and eat several rodent size mammals, but do not see any larger mammals. Into what biome did your plane crash?", 
      options: ["Desert", "Savanna", "Tropical rain forest", "Temperate forest"], 
      correct: 2 
    },
    { 
      id: 20, 
      question: "How would you best explain the existence of a mountain range that has abundant conifer trees, ferns, and mosses on the east side, but only sparse shrubby plants on the west side?", 
      options: ["Temperature differences", "Precipitation differences due to a rain shadow on the west side produce the differing plant communities", "Soil differences", "Altitude differences"], 
      correct: 1 
    },
    { 
      id: 21, 
      question: "Lakes with elevated dissolved nutrients and low water clarity are called:", 
      options: ["oligotrophic", "mesotrophic", "dystrophic", "eutrophic"], 
      correct: 3 
    },
    { 
      id: 22, 
      question: "Which of the following is a characteristic of tundra?", 
      options: ["high temperatures", "high precipitation", "abundant trees", "permafrost"], 
      correct: 3 
    },
    { 
      id: 23, 
      question: "The Earth is spherical, which causes differences in the intensity of solar radiation at different latitudes. The Earth is also tilted on its axis at a 23.5° angle. How do you think this tilt affects the intensity of solar radiation?", 
      options: ["The sun's rays strike the Northern hemisphere more obliquely during its winter months and less obliquely during its summer months", "It makes all seasons the same", "It only affects the Southern hemisphere", "It has no effect"], 
      correct: 0 
    },
    { 
      id: 24, 
      question: "The world can be divided approximately into six major biogeographic regions. Which of these is an accurate description of the properties of those regions?", 
      options: ["Regions have identical climates", "Regions are defined by political boundaries", "All species exist in all regions", "Any single species rarely exists in more than one biogeographic region"], 
      correct: 3 
    }
  ],
  56: [
    { 
      id: 1, 
      question: "A group of interbreeding individuals occupying the same habitat at the same time is a(n):", 
      options: ["ecosystem", "community", "population", "species"], 
      correct: 2 
    },
    { 
      id: 2, 
      question: "You find a notebook that has lots of equations, tables, and graphs in it. The tables have columns for the number of female offspring born over a year, the number of deaths over a year, and the number of individuals in various age classes. What subject do you think the owner of the notebook is studying? What type of tables are they most likely using?", 
      options: ["demography; life tables", "physiology; growth charts", "ecology; data tables", "genetics; punnett squares"], 
      correct: 0 
    },
    { 
      id: 3, 
      question: "What is the simplest method to measure population density in a given area?", 
      options: ["Use statistical sampling", "Measure biomass", "Count the number of organisms", "Use mark-recapture methods"], 
      correct: 2 
    },
    { 
      id: 4, 
      question: "A line transect would probably be the preferred method to quantify the population density of:", 
      options: ["Ponderosa pine trees", "bacteria in culture", "fish in a lake", "insects in soil"], 
      correct: 0 
    },
    { 
      id: 5, 
      question: "A mark-recapture program marked 10 individuals in the first catch. The second catch has a total of 8 individuals, 4 of which were recaptures. What is the estimate of total population size?", 
      options: ["32", "20", "16", "24"], 
      correct: 1 
    },
    { 
      id: 6, 
      question: "A good sampling method for quantifying the density of birds or bats is the use of:", 
      options: ["line transects", "mist nets", "quadrat sampling", "camera traps"], 
      correct: 1 
    },
    { 
      id: 7, 
      question: "Dispersion is:", 
      options: ["the reproductive rate of a population", "the movement of individuals between populations", "the density of a population", "the spatial distribution of individuals"], 
      correct: 3 
    },
    { 
      id: 8, 
      question: "Many species of birds form large flocks. What dispersion pattern describes this behavior?", 
      options: ["uniform", "territorial", "random", "clumped"], 
      correct: 3 
    },
    { 
      id: 9, 
      question: "Why is a random dispersal pattern quite rare in nature?", 
      options: ["Animals prefer to be near others", "Because resources in nature are rarely randomly spaced", "Predators prevent random distribution", "Weather patterns influence distribution"], 
      correct: 1 
    },
    { 
      id: 10, 
      question: "Lions, leopards, and other large terrestrial predators generally maintain well-defined territories. What kind of dispersion pattern would you expect this to produce?", 
      options: ["uniform", "clustered", "clumped", "random"], 
      correct: 0 
    },
    { 
      id: 11, 
      question: "Organisms that produce all of their offspring in a single event are:", 
      options: ["semelparous", "viviparous", "iteroparous", "oviparous"], 
      correct: 0 
    },
    { 
      id: 12, 
      question: "Organisms that reproduce repeatedly are said to be:", 
      options: ["iteroparous", "hermaphroditic", "parthenogenetic", "semelparous"], 
      correct: 0 
    },
    { 
      id: 13, 
      question: "Which of these organisms is semelparous?", 
      options: ["agave plants", "humans", "oak trees", "elephants"], 
      correct: 0 
    },
    { 
      id: 14, 
      question: "A fisheries biologist tells you she is studying a cohort of salmon returning to their birth river. What can you infer about those salmon?", 
      options: ["They are all female", "They are from different populations", "They are the same age", "They have the same genetics"], 
      correct: 2 
    },
    { 
      id: 15, 
      question: "A survivorship curve with uniform death rates over time is most likely to be a type _______ curve:", 
      options: ["II", "I", "IV", "III"], 
      correct: 0 
    },
    { 
      id: 16, 
      question: "A survivorship curve in which most individuals die late in life is a type _______ curve:", 
      options: ["IV", "II", "III", "I"], 
      correct: 3 
    },
    { 
      id: 17, 
      question: "_______ selected species have a low rate of per capita growth:", 
      options: ["S-", "K-", "r-", "N-"], 
      correct: 1 
    },
    { 
      id: 18, 
      question: "Parasitism usually affects populations in a _______ manner:", 
      options: ["random", "density-dependent", "density-independent", "cyclical"], 
      correct: 1 
    },
    { 
      id: 19, 
      question: "What information is used to calculate the age-specific fertility rate, mx?", 
      options: ["migration rate", "number of female offspring born to females within a reproductive age class", "death rate by age", "total population size"], 
      correct: 1 
    },
    { 
      id: 20, 
      question: "Which of these are reasons why population growth typically slows down when populations reach carrying capacity?", 
      options: ["predation decreases", "genetic diversity decreases", "mutations increase", "resource limitation decreases birth rates"], 
      correct: 3 
    },
    { 
      id: 21, 
      question: "A plot of population size vs time that displays a J-shape is indicative of:", 
      options: ["exponential growth", "logistic growth", "stable growth", "declining growth"], 
      correct: 0 
    },
    { 
      id: 22, 
      question: "The per capita growth rate of a population is best defined as:", 
      options: ["death rate only", "birth rate only", "immigration minus emigration", "per capita birth rate minus per capita death rate"], 
      correct: 3 
    },
    { 
      id: 23, 
      question: "In the formula, dN/dt = rN(K-N)/K, the rate of population growth approaches zero as:", 
      options: ["N approaches zero", "the population size approaches the carrying capacity", "K approaches zero", "r approaches zero"], 
      correct: 1 
    },
    { 
      id: 24, 
      question: "If the age-specific fertility rate is such that 100 females of age class x would produce 50 female offspring, what is the contribution of age class x to the overall population growth rate?", 
      options: ["can't be calculated", "50", "0.5", "100"], 
      correct: 0 
    },
    { 
      id: 25, 
      question: "For some plants or animals, death comes somewhat randomly. Which individuals die is not related to how old / young they are. This describes which type of survivorship curve?", 
      options: ["Type 4", "Type 1", "Type 2", "Type 3"], 
      correct: 2 
    },
    { 
      id: 26, 
      question: "Just because some plants have lots and lots of seeds does not mean that they will make lots and lots of adult plants. Most seeds either are eaten or become seedlings and die before becoming large, adult plants. This describes what type of survivorship curve?", 
      options: ["Type 2", "Type 3", "Type 4", "Type 1"], 
      correct: 1 
    },
    { 
      id: 27, 
      question: "Modern humans show which type of survivorship curve?", 
      options: ["Type 4", "Type 2", "Type 3", "Type 1"], 
      correct: 3 
    },
    { 
      id: 28, 
      question: "When a population has 100 individuals and r is zero, what will the population size be one generation later?", 
      options: ["100", "200", "150", "50"], 
      correct: 0 
    },
    { 
      id: 29, 
      question: "When a population has 100 individuals and r is 1.0, what will the population size be one generation later? Assume it is nowhere near carrying capacity.", 
      options: ["100", "400", "300", "200"], 
      correct: 3 
    },
    { 
      id: 30, 
      question: "When a population has 50 individuals and r is 0.5, what will the population size be one generation later? Assume it is nowhere near carrying capacity.", 
      options: ["50", "100", "125", "75"], 
      correct: 3 
    },
    { 
      id: 31, 
      question: "Consider a population with 100 individuals and an r of 1.0. If the population is exactly at carrying capacity, what will the population size be one generation later?", 
      options: ["200", "50", "150", "100"], 
      correct: 3 
    },
    { 
      id: 32, 
      question: "Consider a population with 1000 individuals, an r of 1.0 and a K of 2000. What will the population size be one generation later?", 
      options: ["1000", "2500", "1500", "2000"], 
      correct: 2 
    },
    { 
      id: 33, 
      question: "Consider a population with 100 individuals, an r of 1.0 and a K of 200. What will the growth of the population over the next generation?", 
      options: ["25", "50", "75", "100"], 
      correct: 1 
    },
    { 
      id: 34, 
      question: "The per capita growth rate (r) is used to calculate:", 
      options: ["Population growth under any conditions", "Only birth rates", "Only death rates", "Population growth only at carrying capacity"], 
      correct: 0 
    },
    { 
      id: 35, 
      question: "Diseases spread most rapidly when a sick individual encounters a lot of other individuals during the day. This makes death due to disease a _______:", 
      options: ["Random factor", "Genetic factor", "Density-dependent factor", "Density-independent factor"], 
      correct: 2 
    },
    { 
      id: 36, 
      question: "The purpose of a habitat corridor is to:", 
      options: ["control disease spread", "increase population density", "prevent predation", "reduce the effects of habitat fragmentation"], 
      correct: 3 
    },
    { 
      id: 37, 
      question: "An r-selected species is more likely to show which of these life-history strategies?", 
      options: ["A Type III survivorship curve (=few surviving early life)", "Large body size", "Long lifespan", "A Type I survivorship curve"], 
      correct: 0 
    },
    { 
      id: 38, 
      question: "A metapopulation consists mostly of:", 
      options: ["extinct populations", "isolated populations with no gene flow", "one large population", "lots of small populations close enough to each other for organisms to move between them"], 
      correct: 3 
    }
  ],
  57: [
    { 
      id: 1, 
      question: "What is an example of a +/− interaction?", 
      options: ["predation", "competition", "mutualism", "commensalism"], 
      correct: 0 
    },
    { 
      id: 2, 
      question: "What is an example of a +/+ interaction?", 
      options: ["predation", "mutualism", "competition", "parasitism"], 
      correct: 1 
    },
    { 
      id: 3, 
      question: "The relationship of disease-causing organisms to an infected rabbit is one of:", 
      options: ["predation", "mutualism", "parasitism", "commensalism"], 
      correct: 2 
    },
    { 
      id: 4, 
      question: "What situation below is best characterized as interference competition?", 
      options: ["Plants growing in the same soil", "A tiger that excludes other tigers from its territory", "Birds eating from the same food source", "Fish feeding on plankton"], 
      correct: 1 
    },
    { 
      id: 5, 
      question: "Competition among individuals of different species is called:", 
      options: ["interspecific competition", "interference competition", "intraspecific competition", "exploitation competition"], 
      correct: 0 
    },
    { 
      id: 6, 
      question: "Allelopathy is:", 
      options: ["a defensive mechanism", "a type of competition between plant species through chemicals", "a form of predation", "a type of mutualism"], 
      correct: 1 
    },
    { 
      id: 7, 
      question: "Caterpillars of the same species on a large leaf each chew as much leaf as they can:", 
      options: ["interference competition", "allelopathy", "exploitation competition", "interspecific competition"], 
      correct: 2 
    },
    { 
      id: 8, 
      question: "In competition between P. caudatum and P. bursaria, neither species goes extinct because they utilize different resources. This can be considered as evidence for:", 
      options: ["resource partitioning", "competitive exclusion", "character displacement", "interference competition"], 
      correct: 0 
    },
    { 
      id: 9, 
      question: "You are studying the feeding habits of a group of four closely related bird species. You observe that all four species feed on insects. However, you notice that the species do not feed at the same time of day: one species feeds most actively at dawn, another during the middle of the day, another at dusk, and the last species feeds at night. What term would you use to describe this behavior?", 
      options: ["character displacement", "resource partitioning", "temporal isolation", "competitive exclusion"], 
      correct: 1 
    },
    { 
      id: 10, 
      question: "Sympatric species:", 
      options: ["are more likely than allopatric species to display character displacement", "always go extinct", "are less likely to compete than allopatric species", "never show character displacement"], 
      correct: 0 
    },
    { 
      id: 11, 
      question: "Several snake species that are harmless have very similar color patterns to the venomous coral snake. This is best described as an example of what?", 
      options: ["camouflage", "warning coloration", "Müllerian mimicry", "Batesian mimicry"], 
      correct: 3 
    },
    { 
      id: 12, 
      question: "What form of coloration is shown by many seahorses?", 
      options: ["camouflage", "warning coloration", "sexual selection", "Batesian mimicry"], 
      correct: 0 
    },
    { 
      id: 13, 
      question: "Secondary metabolites are produced to:", 
      options: ["increase growth", "attract pollinators", "deter herbivores", "enhance photosynthesis"], 
      correct: 2 
    },
    { 
      id: 14, 
      question: "What is host plant resistance?", 
      options: ["The ability to grow faster", "The ability to reproduce more", "The ability to attract herbivores", "The ability to prevent herbivory through various defenses"], 
      correct: 3 
    },
    { 
      id: 15, 
      question: "What might be the predominant lifestyle on Earth?", 
      options: ["mutualism", "commensalism", "parasitism", "predation"], 
      correct: 2 
    },
    { 
      id: 16, 
      question: "Polyphagous parasites feed on:", 
      options: ["many different host species", "only plant hosts", "only animal hosts", "only one host species"], 
      correct: 0 
    },
    { 
      id: 17, 
      question: "You find some rather strange plants in your backyard. They consist only of thin, pale yellow stems that are wrapped around other species of plants growing nearby. You experiment by unwrapping some of the strange yellow plants and planting half of them alone in pots of soil and half in pots with other plants from your yard. You water and fertilize both sets of pots, but after a few weeks you find that the yellow plants that were potted alone have died, while those potted with other plants are thriving. What term would you use to describe the strange yellow plants?", 
      options: ["epiphytic", "saprophytic", "holoparasitic", "mutualistic"], 
      correct: 2 
    },
    { 
      id: 18, 
      question: "Many species of ants \"farm\" aphids, protecting them from predation and collecting concentrated sugars (i.e. honeydew) from them. This type of ant/aphid relationship is known as:", 
      options: ["dispersive mutualism", "competitive mutualism", "trophic mutualism", "defensive mutualism"], 
      correct: 3 
    },
    { 
      id: 19, 
      question: "A mutualism in which each species can live without the other is termed:", 
      options: ["a defensive mutualism", "an obligate mutualism", "a competitive mutualism", "a facultative mutualism"], 
      correct: 3 
    },
    { 
      id: 20, 
      question: "What is often true of the fruits eaten by birds and mammals?", 
      options: ["They are green and camouflaged", "They are toxic", "They are brightly colored", "They are small and hard"], 
      correct: 2 
    },
    { 
      id: 21, 
      question: "The seeds of many plant species are dispersed by a harmless temporary attachment to an animal's fur or feathers. This form of dispersal can be classified as:", 
      options: ["mutualism", "commensalism", "parasitism", "phoresy"], 
      correct: 3 
    },
    { 
      id: 22, 
      question: "Some scientists have suggested that recent outbreaks of sudden oak disease could be fought through the creation of transgenic plants with genetic resistance to sudden oak disease. What would be the most likely source of this genetic resistance?", 
      options: ["unrelated plant species", "bacterial genes", "laboratory-created genes", "the original host species in the native region of the disease"], 
      correct: 3 
    },
    { 
      id: 23, 
      question: "Which of the following exert bottom-up control?", 
      options: ["disease", "parasites", "predators", "levels of calcium and nitrogen in the soil"], 
      correct: 3 
    },
    { 
      id: 24, 
      question: "The nitrogen-limitation hypothesis states that organisms select food in terms of the nitrogen content of the tissue. Why might this be true?", 
      options: ["Because many consumers need large amounts of nitrogen; for example, animal tissue contains about 10 times as much nitrogen as plant tissue", "Because nitrogen determines taste", "Because nitrogen is rare in the environment", "Because nitrogen is toxic"], 
      correct: 0 
    },
    { 
      id: 25, 
      question: "The eastern indigo snake often makes its home in abandoned gopher tortoise burrows. How would you characterize this relationship and its effect on each member?", 
      options: ["commensalism: positive for snake, neutral for tortoise", "mutualism: positive for both", "parasitism: positive for snake, negative for tortoise", "competition: negative for both"], 
      correct: 0 
    },
    { 
      id: 26, 
      question: "Plants compete with other plants with the same four types of competition that animals use in their competition. Plants that are not shade-tolerant try to grow quickly and shade out any other individuals. Shading out means capturing light before it reaches any lower plants' leaves. What type of competition would these plants be performing?", 
      options: ["Exploitation competition, although whether inter- or intra- specific cannot be determined by the question", "Allelopathy", "Intraspecific competition only", "Interference competition only"], 
      correct: 0 
    },
    { 
      id: 27, 
      question: "How does a pathogen spread through a population?", 
      options: ["All individuals are equally likely to get sick", "Recovered individuals become susceptible again", "Susceptible individuals make infectious individuals sick", "Infectious individuals make susceptible individuals sick, then they recover"], 
      correct: 3 
    },
    { 
      id: 28, 
      question: "In terms of pathogen models, or herd immunity, someone who is vaccinated will be:", 
      options: ["most similar to an infectious person", "most similar to a susceptible person", "completely different from all categories", "most similar to a recovered person"], 
      correct: 3 
    },
    { 
      id: 29, 
      question: "When a population reaches the threshold of herd immunity:", 
      options: ["everyone becomes immune", "the pathogen's frequency will begin increasing", "the pathogen's frequency will remain constant", "the pathogen's frequency will begin decreasing"], 
      correct: 3 
    },
    { 
      id: 30, 
      question: "A zoonotic disease is:", 
      options: ["a disease that affects plants", "a disease that only affects humans", "a disease of animals that has spread into humans", "a disease that only affects animals"], 
      correct: 2 
    },
    { 
      id: 31, 
      question: "Bottom-up control focuses upon the effects of:", 
      options: ["competition between species", "the population size of what a group of organisms eat", "predators on prey populations", "disease on population size"], 
      correct: 1 
    },
    { 
      id: 32, 
      question: "For a species we wish to protect, the life stage with the highest indispensable mortality would be the:", 
      options: ["life stage with the highest mortality rate", "life stage with the lowest mortality rate", "adult life stage", "life stage it is most important to protect"], 
      correct: 3 
    }
  ],
  58: [
    { 
      id: 1, 
      question: "Community ecology is best defined as the study of:", 
      options: ["individual species behavior", "ecosystem energy flow", "how groups of species interact in the same place at the same time", "population dynamics"], 
      correct: 2 
    },
    { 
      id: 2, 
      question: "What is the general global pattern of species richness?", 
      options: ["Uniform across all latitudes", "Decreasing from polar areas toward the tropics", "Increasing from polar areas toward the tropics", "Highest at mid-latitudes"], 
      correct: 2 
    },
    { 
      id: 3, 
      question: "If you (incorrectly) proposed that tundra, the world's largest land biome, contains high species richness, your proposal would be consistent with the:", 
      options: ["intermediate disturbance hypothesis", "productivity hypothesis", "species-area hypothesis", "latitudinal gradient hypothesis"], 
      correct: 2 
    },
    { 
      id: 4, 
      question: "Based on what you know about various species richness hypotheses, a large, tropical area would likely have _______ species richness:", 
      options: ["high", "variable", "moderate", "low"], 
      correct: 0 
    },
    { 
      id: 5, 
      question: "What is the most accurate statement about temporal variability of plant biomass of a community?", 
      options: ["It remains constant regardless of diversity", "It decreases as species diversity increases", "It increases as species diversity increases", "It is unrelated to species diversity"], 
      correct: 1 
    },
    { 
      id: 6, 
      question: "What is an area of the Earth's surface currently undergoing primary succession?", 
      options: ["Volcanoes in Iceland", "Forest after wildfire", "Pond becoming meadow", "Abandoned farmland"], 
      correct: 0 
    },
    { 
      id: 7, 
      question: "No matter what model is used to show community succession, the final stage is always:", 
      options: ["a disturbed community", "a climax community", "a pioneer community", "a transitional community"], 
      correct: 1 
    },
    { 
      id: 8, 
      question: "In succession, the ability of one species to make the area more suitable for another species is called:", 
      options: ["facilitation", "inhibition", "competition", "tolerance"], 
      correct: 0 
    },
    { 
      id: 9, 
      question: "The Shannon diversity index would be most valuable to:", 
      options: ["a conservation biologist deciding where to locate a new nature preserve", "a population geneticist studying mutations", "a molecular biologist studying DNA", "a physiologist studying metabolism"], 
      correct: 0 
    },
    { 
      id: 10, 
      question: "The moraines left when glaciers retreat are characterized by:", 
      options: ["moderate nitrogen content", "high nitrogen content and rich organic matter", "variable nutrient content", "low nitrogen content and little organic matter"], 
      correct: 3 
    },
    { 
      id: 11, 
      question: "What is considered to be the primary method of succession in the marine intertidal zone?", 
      options: ["Inhibition", "Competition", "Tolerance", "Facilitation"], 
      correct: 0 
    },
    { 
      id: 12, 
      question: "In the island biogeography model, species richness is a balance between:", 
      options: ["mutation and selection", "predation and competition", "immigration and extinction", "birth and death rates"], 
      correct: 2 
    },
    { 
      id: 13, 
      question: "In island biogeography, larger islands support ______ species than smaller islands:", 
      options: ["different types of", "more", "fewer", "the same number of"], 
      correct: 1 
    },
    { 
      id: 14, 
      question: "Which of these types of islands is predicted to have the lowest number of species?", 
      options: ["A small island near mainland", "A large island near mainland", "A large island far from mainland", "A small island far from mainland"], 
      correct: 3 
    },
    { 
      id: 15, 
      question: "Extinction rates on islands are predicted, based on island biogeography, to be lowest:", 
      options: ["on near islands", "on large islands", "on distant islands", "on small islands"], 
      correct: 1 
    },
    { 
      id: 16, 
      question: "Species turnover on islands has been observed to be low. What does this suggest about succession on islands?", 
      options: ["Succession on most islands proceeds in a relatively predictable manner", "Succession is faster on islands", "Succession is highly unpredictable", "Succession doesn't occur on islands"], 
      correct: 0 
    },
    { 
      id: 17, 
      question: "The number of bird species on islands near Papua New Guinea _______ as one gets farther from Papua New Guinea:", 
      options: ["varies randomly", "decreases", "increases", "remains constant"], 
      correct: 1 
    },
    { 
      id: 18, 
      question: "Support for the succession mechanism of tolerance is found in research on plant communities that shows:", 
      options: ["early species prevent later species from establishing", "succession is random", "each species facilitates the next", "succession is determined largely by species that exist in the ground as seeds or old roots"], 
      correct: 3 
    },
    { 
      id: 19, 
      question: "In 1992, mangrove forests along the southern Florida coast and the Florida Keys were severely damaged by Hurricane Andrew. Up to 94% mortality was recorded in some areas, with only the shortest individuals surviving. Scientists have monitored the region and by 2001, the forest canopy had closed and the main species were rapidly gaining biomass. This is an example of:", 
      options: ["secondary succession", "primary succession", "climax community", "pioneer community"], 
      correct: 0 
    },
    { 
      id: 20, 
      question: "Predict the rank order of the following locations from lowest species richness to highest species richness, using the latitudinal gradient of species richness to form your prediction: temperate forest in North Carolina, steppe in Patagonia (southern tip of South America), rainforest in Costa Rica, boreal forest in Ontario (east-central Canada):", 
      options: ["Steppe in Patagonia, Boreal Forest in Ontario, Temperate Forest in North Carolina, Rainforest in Costa Rica", "Boreal Forest, Steppe, Temperate Forest, Rainforest", "All have equal species richness", "Rainforest, Temperate Forest, Boreal Forest, Steppe"], 
      correct: 0 
    },
    { 
      id: 21, 
      question: "Which of these is a heterotroph?", 
      options: ["a fish", "bacteria that photosynthesize", "algae", "a plant"], 
      correct: 0 
    },
    { 
      id: 22, 
      question: "In subarctic saltmarshes, scientists have found that the addition of calcium has no effect on productivity, but additional iron does increase productivity. In this example, iron:", 
      options: ["is a limiting factor", "is toxic", "is abundant", "is unnecessary"], 
      correct: 0 
    },
    { 
      id: 23, 
      question: "How do primary producers provide energy for the food chain?", 
      options: ["They absorb nutrients from soil", "They consume other organisms", "They decompose organic matter", "They make their own organic molecules via photo- or chemosynthesis"], 
      correct: 3 
    },
    { 
      id: 24, 
      question: "In food webs, chain lengths:", 
      options: ["tend to be short", "vary randomly", "tend to be very long", "are always exactly 5 levels"], 
      correct: 0 
    },
    { 
      id: 25, 
      question: "The efficiency of energy transfer between trophic-levels averages about:", 
      options: ["90%", "50%", "10%", "1%"], 
      correct: 2 
    },
    { 
      id: 26, 
      question: "A single oak tree can support hundreds of beetles, caterpillars and other primary consumers. This would be best represented by:", 
      options: ["a pyramid of energy", "a pyramid of biomass", "a normal pyramid of numbers", "an inverted pyramid of numbers"], 
      correct: 3 
    },
    { 
      id: 27, 
      question: "What is gross primary production?", 
      options: ["The biomass of consumers", "The energy used in respiration", "The energy lost as heat", "The carbon fixed during photosynthesis"], 
      correct: 3 
    },
    { 
      id: 28, 
      question: "Ecosystem ecology is primarily concerned with:", 
      options: ["individual behavior", "species interactions only", "movement of energy and materials through ecosystems", "population genetics"], 
      correct: 2 
    },
    { 
      id: 29, 
      question: "Primary production is generally highest in:", 
      options: ["tundra", "deserts", "wetlands", "grasslands"], 
      correct: 2 
    },
    { 
      id: 30, 
      question: "If gross primary production were to increase in an ecosystem, it would be reasonable to expect that:", 
      options: ["the biomass of herbivores would increase", "decomposers would decrease", "the biomass of herbivores would decrease", "predators would disappear"], 
      correct: 0 
    },
    { 
      id: 31, 
      question: "What are the most important transformers of energy in ecosystems?", 
      options: ["Carnivores", "Plants and algae", "Herbivores", "Decomposers"], 
      correct: 1 
    },
    { 
      id: 32, 
      question: "Which of these ecosystems has the lowest productivity?", 
      options: ["temperate grassland", "open ocean", "tropical rainforest", "wetlands"], 
      correct: 1 
    },
    { 
      id: 33, 
      question: "When we use the Shannon diversity index to calculate the effective number of species, we are determining how many species would provide that same diversity value:", 
      options: ["if species were randomly distributed", "if all species were rare", "if the populations of each species were all the same size", "if only one species dominated"], 
      correct: 2 
    },
    { 
      id: 34, 
      question: "The Island Biogeography Model's species-area relationship says that:", 
      options: ["all islands have equal species", "island size doesn't matter", "smaller islands will have more species", "larger islands will have more species"], 
      correct: 3 
    },
    { 
      id: 35, 
      question: "Which of these predictions of the Equilibrium Model of Island Biogeography is least supported by evidence?", 
      options: ["Immigration rates decrease with distance", "Species turnover relationships", "Extinction rates increase on smaller islands", "Larger islands have more species"], 
      correct: 1 
    },
    { 
      id: 36, 
      question: "Which of these is an accurate statement about the differences between production efficiency and trophic-level transfer efficiency?", 
      options: ["Production efficiency only applies to plants", "Transfer efficiency is always higher", "Production efficiency measures how much of one organism's food becomes assimilated into that organism, while transfer efficiency does the same thing for the entire trophic level, not just one organism / species", "They are the same thing"], 
      correct: 2 
    },
    { 
      id: 37, 
      question: "If gross primary production were to increase in an ecosystem, most of that increase would end up as:", 
      options: ["biomass of herbivores", "energy for detritivores", "biomass of carnivores", "unused energy"], 
      correct: 1 
    },
    { 
      id: 38, 
      question: "Aquatic dead zones are caused by:", 
      options: ["too much oxygen", "a lot of limiting nutrients getting into an aquatic ecosystem", "cold temperatures", "lack of sunlight"], 
      correct: 1 
    },
    { 
      id: 39, 
      question: "How can marine biomass be stored much more in consumers than in producers?", 
      options: ["Producers are less efficient", "Marine producers are small", "Producers grow quickly but also are eaten very quickly, so they don't accumulate a lot of biomass without passing it on", "Consumers grow faster than producers"], 
      correct: 2 
    },
    { 
      id: 40, 
      question: "In which type of pyramid do detritivores make up a substantial part of the pyramid?", 
      options: ["Pyramid of energy", "Pyramid of biomass", "Pyramid of diversity", "Pyramid of numbers"], 
      correct: 0 
    }
  ],
  59: [
    { id: 1, question: "If the age structure of a country's population is balanced, what prediction can be made about the near future?", options: ["The population will increase rapidly.", "The population will not increase rapidly.", "The population will oscillate.", "The population will decrease rapidly."], correct: 1 },
    { id: 2, question: "You are studying with a classmate who asks you about the concept of a replacement rate. She wants to know what happens to a population if the replacement rate is reached? She also assumes the average human replacement rate is 2.0. What would you tell her?", options: ["Replacement rate being 2.0 means population will double every generation.", "The population will grow exponentially once replacement rate is reached.", "When replacement rate is reached, the population is in equilibrium. The replacement rate is greater than 2.0 because some individuals die before they reproduce.", "Replacement rate has no effect on population size."], correct: 2 },
    { id: 3, question: "World human population in 2017 was approximately:", options: ["10 billion.", "5 billion.", "3.5 billion.", "7.5 billion."], correct: 3 },
    { id: 4, question: "What percentage of the population are under the age of 15 in West Africa?", options: ["~5", "~25", "~50", "~10"], correct: 2 },
    { id: 5, question: "What naturally occurring process is responsible for keeping the earth warm enough to sustain life?", options: ["Greenhouse effect", "Plate tectonics", "Solar flares", "Ozone depletion"], correct: 0 },
    { id: 6, question: "The Earth's surface releases_________ that is absorbed by the atmosphere, stabilizing or raising atmospheric temperature.", options: ["microwave radiation", "shortwave visible radiation", "ultraviolet radiation", "long-wave infrared radiation"], correct: 3 },
    { id: 7, question: "What will be a consequence if current predictions of global warming are accurate?", options: ["Global biodiversity will automatically increase.", "No species will be affected.", "Organisms will need to migrate or adapt quickly in order to survive.", "Weather patterns will remain unchanged."], correct: 2 },
    { id: 8, question: "Which organism would be most likely to be able to survive rapid global climate change?", options: ["a plant with a very narrow temperature tolerance", "a specialist insect feeding on a single plant species", "a large slow-reproducing mammal", "an insect that can feed upon many different plant species"], correct: 3 },
    { id: 9, question: "Replacing forests with agricultural or urban areas can significantly affect the water cycle. Why is this?", options: ["More moisture is evapotranspired after deforestation.", "Less moisture is evapotranspired into the atmosphere after deforestation.", "Deforestation has no effect on the water cycle.", "The total precipitation always increases after deforestation."], correct: 1 },
    { id: 10, question: "The movement of chemicals through ecosystems is known as:", options: ["trophic transfer.", "ecological succession.", "primary production.", "biogeochemical cycling."], correct: 3 },
    { id: 11, question: "How does DDT in the environment affect many birds?", options: ["improved survival", "decreased reproductive rate", "increased reproductive rate", "no effect"], correct: 1 },
    { id: 12, question: "Biogeochemical cycles involve:", options: ["only energy flow", "the movement of chemicals through ecosystems.", "only decomposition", "only primary production"], correct: 1 },
    { id: 13, question: "The process by which elevated nutrient levels lead to an overgrowth of algae and the subsequent depletion of water oxygen levels is known as:", options: ["denitrification.", "acidification.", "eutrophication.", "biomagnification."], correct: 2 },
    { id: 14, question: "Where are the largest reserves of carbon on the planet?", options: ["surface ocean water", "the atmosphere", "living biomass", "rocks and fossil fuels"], correct: 3 },
    { id: 15, question: "Each year, plants and algae remove approximately_________ of the [CO2] in the atmosphere.", options: ["1/2", "1/100th", "all of it", "1/7th"], correct: 3 },
    { id: 16, question: "What percentage of the earth's atmosphere consists of nitrogen gas?", options: ["78%", "0.04%", "21%", "50%"], correct: 0 },
    { id: 17, question: "Ammonification is the conversion of_________ to [ammonia] and [ammonium].", options: ["nitrate", "ammonia", "nitrogen gas", "organic nitrogen"], correct: 3 },
    { id: 18, question: "The process by which soil bacteria convert [ammonia] or [ammonium] to nitrate is called:", options: ["nitrogen fixation.", "denitrification.", "nitrification.", "ammonification."], correct: 2 },
    { id: 19, question: "Deforestation in areas like Madagascar can significantly affect the water cycle. Why is this?", options: ["More moisture is transpired after deforestation.", "Deforestation increases annual rainfall.", "Less moisture is transpired into the atmosphere after deforestation.", "Deforestation does not affect transpiration."], correct: 2 },
    { id: 20, question: "Lead is known to undergo biomagnification and accumulate in bones. What do you predict will happen to lead taken up by a tiger after it dies in the wild?", options: ["The lead will spontaneously vaporize.", "The lead will be destroyed and disappear.", "The lead will be excreted by scavengers without consequence.", "The lead will reenter the food web via detritivores and decomposers."], correct: 3 },
    { id: 21, question: "What do you think would result if nitrogen-fixing cyanobacteria populations suddenly declined?", options: ["Fish biomass would immediately double.", "There would be no effect on primary production.", "Aquatic primary production would increase.", "Aquatic primary production would decline, particularly in regions not subject to fertilizer runoff."], correct: 3 },
    { id: 22, question: "What substance would you expect to accumulate in soil as a result of increased acid precipitation?", options: ["Glucose", "Ammonia", "Oxygen", "Calcium carbonate"], correct: 1 },
    { id: 23, question: "Lakes with elevated dissolved nutrients and low water clarity are called:", options: ["mesotrophic.", "oligotrophic.", "dystrophic.", "eutrophic."], correct: 3 },
    { id: 24, question: "Which organism would be least likely to be able to survive rapid global climate change?", options: ["A rapidly reproducing microbe", "An insect species that lays its eggs and feeds upon a single plant species with a short flowering period", "A generalist insect that feeds on many plants", "A migratory bird with flexible diet"], correct: 1 },
    { id: 25, question: "Sea levels are rising as the Earth's temperature increases, mainly because:", options: ["the Earth's volume is expanding.", "more water is created chemically.", "glaciers are melting.", "the ocean is evaporating."], correct: 2 },
    { id: 26, question: "Which cause of habitat destruction is the fastest-growing and most destructive use of land?", options: ["Natural succession", "Urbanization", "Small-scale subsistence farming", "Volcanic activity"], correct: 1 },
    { id: 27, question: "One type of habitat loss is particularly destructive. This habitat is known for being especially species-rich, full of oxygen-generating trees, plus many plants that might provide genetic variability for crop plants or secondary metabolites with pharmaceutical properties. Which habitat?", options: ["Boreal forest", "Tropical rainforest", "Desert", "Temperate grassland"], correct: 1 },
    { id: 28, question: "What percent of the world's land is used for crops and livestock pastures?", options: ["37%", "60%", "5%", "10%"], correct: 0 },
    { id: 29, question: "In India, the cattle disease rinderpest caused only mild illness, but in Africa the same disease killed over 80% of the cattle across the continent. What is the best explanation for the difference?", options: ["Genetic resistance in the Indian cattle due to prior exposure", "Rinderpest is a different virus in Africa", "Different species of cattle in India", "Climate differences"], correct: 0 },
    { id: 30, question: "In the summer of 2016, people sweltering in the midwestern United States didn't say, \"It's not the heat, it's the humidity.\" Instead, they said \"It's the cornsweat.\" Many blamed surrounding acres of cornfields for increasing the perceived temperature, already at record levels. Considering what you know about the water cycle, what information might address this idea?", options: ["Since 90% of the water in the atmosphere over land arrived there by evapotranspiration, it is reasonable to conclude that increased acreage of corn cultivation could increase local humidity.", "Irrigation always decreases atmospheric moisture.", "Evapotranspiration is irrelevant to local humidity.", "Cornfields reduce evapotranspiration and decrease humidity."], correct: 0 },
    { id: 31, question: "Hawaiian honeycreepers, which are closely related to North American finches, have been devastated by the introduction of mosquitoes and now survive only at sufficiently high elevations which are devoid of mosquitoes. Given what you know about the potential problems 1with introduced species,2 why have mosquitoes been so detrimental to Hawaiian honeycreepers when birds all over the world have been exposed to mosquitoes with little or no negative consequences?", options: ["Hawaiian birds are naturally sterile.", "Mosquitoes in Hawaii are larger and more voracious.", "Honeycreepers prefer high elevations for other reasons.", "Mosquitoes are not native to Hawaii and hence Hawaiian honeycreepers have evolved no defenses against the diseases that mosquitoes transmit."], correct: 3 },
    { id: 32, question: "Introduced species become invasive when they:", options: ["expand their range and outcompete native species.", "are removed by predators.", "fail to reproduce.", "immediately go extinct."], correct: 0 },
    { id: 33, question: "The amount of land needed to produce all the resources someone uses and to absorb all the image they release through their choices is called their:", options: ["sustainability index.", "ecological footprint.", "carbon tax.", "biocapacity."], correct: 1 },
    { id: 34, question: "Which of these best describes how global warming works?:", options: ["Heat that would normally be lost into space is instead trapped and bounced around in the atmosphere.", "The Sun is producing more total energy than before.", "The Earth is moving closer to the Sun.", "Greenhouse gases cool the atmosphere."], correct: 0 },
    { id: 35, question: "The Intergovernmental Panel on Climate Change reported in 2007 that atmospheric carbon dioxide levels will nearly double by the end of this century. If this happens, what will be the atmospheric concentration of carbon dioxide?", options: ["350 ppm", "1000 ppm", "700 ppm", "200 ppm"], correct: 2 }
  ],
  60: [
    { id: 1, question: "Biological diversity is composed of what three levels?", options: ["genetic; species; and ecosystem diversity", "individual; population; and ecosystem diversity", "genetic; population; and community diversity", "species; population; and community diversity"], correct: 0 },
    { id: 2, question: "In the context of biodiversity, genetic diversity consists of:", options: ["the total number of individuals in a population", "the amount of genetic variation that occurs within and between populations", "the variety of different ecosystems in a region", "the number of different species in an ecosystem"], correct: 1 },
    { id: 3, question: "Endangered species:", options: ["are extinct in the wild but survive in captivity", "are in danger of extinction throughout all or most of their range", "are found only in protected areas", "have stable populations throughout their range"], correct: 1 },
    { id: 4, question: "Threatened species:", options: ["are abundant in their natural habitat", "are already extinct", "are species likely to become endangered in the future", "have recovered from near extinction"], correct: 2 },
    { id: 5, question: "Ecosystem diversity:", options: ["counts only endangered species", "focuses solely on genetic variation", "refers to the structure and function within an ecosystem", "measures only the number of species present"], correct: 2 },
    { id: 6, question: "According to the diversity-stability hypothesis:", options: ["A loss of any species from an ecosystem leads to an approximately equal decline in stability", "species diversity has no effect on ecosystem stability", "only keystone species affect ecosystem stability", "ecosystem stability increases exponentially with species number"], correct: 0 },
    { id: 7, question: "According to the redundancy hypothesis, species are redundant if:", options: ["they could be eliminated or replaced by others with little loss of ecosystem function", "they have large population sizes", "they are endangered", "they are found in multiple ecosystems"], correct: 0 },
    { id: 8, question: "The idiosyncratic hypothesis suggests that:", options: ["all species contribute equally to ecosystem function", "species can be easily replaced without consequence", "keystone species control all ecosystem functions", "Ecosystem function changes unpredictably as the number of species increases or decreases"], correct: 3 },
    { id: 9, question: "In a series of field experiments, David Tilman and colleagues investigated biodiversity and ecosystem function. They found a relationship between:", options: ["population size and genetic diversity", "habitat area and species number only", "species richness and ecosystem function", "climate and species distribution"], correct: 2 },
    { id: 10, question: "Megadiversity countries are those countries that:", options: ["spend the most on conservation", "have the most protected land area", "have the largest number of endemic plant species", "have the highest population density"], correct: 2 },
    { id: 11, question: "Geographic biodiversity \"hot spots\":", options: ["have ≥1500 endemic plant species and have lost ≥70% of the original habitat", "are regions with high temperatures", "are areas with recent volcanic activity", "contain the world's largest ecosystems"], correct: 0 },
    { id: 12, question: "An endemic species is one that:", options: ["is introduced to new habitats", "is found in only one particular place or region", "migrates seasonally", "lives in multiple continents"], correct: 1 },
    { id: 13, question: "The study of the spatial arrangement of elements in communities and ecosystems is known as:", options: ["population genetics", "landscape ecology", "community biology", "ecosystem dynamics"], correct: 1 },
    { id: 14, question: "What shape park is preferable for minimizing edge effects?", options: ["linear", "circular", "rectangular", "triangular"], correct: 1 },
    { id: 15, question: "The propagation of animals and plants outside their natural habitat is called:", options: ["captive breeding", "habitat restoration", "ecosystem management", "species reintroduction"], correct: 0 },
    { id: 16, question: "In an effort to protect and breed the California condor, a rescue program:", options: ["relocated the birds to different states", "established protected nesting sites only", "provided supplemental feeding in the wild", "captured the few remaining wild birds to breed them in captivity"], correct: 3 },
    { id: 17, question: "Which of these is the best example of an umbrella species?", options: ["house sparrow", "northern spotted owl", "fruit fly", "domestic cat"], correct: 1 },
    { id: 18, question: "The wild Tasmanian devil population has decreased 70% since 1996 due to a contagious form of cancer known as Devil Facial Tumor Disease. Researchers have found several individuals that show partial resistance to the cancer. Attempts to breed these individuals and preserve their DNA in the population would fall under what level of biological diversity?", options: ["Species diversity", "Community diversity", "Genetic diversity", "Ecosystem diversity"], correct: 2 },
    { id: 19, question: "As you walk between classes on your college campus, you notice squirrels busily burying acorns. You realize you are witnessing what ecosystem service?", options: ["Water filtration", "Pest control", "Seed dispersal", "Pollination"], correct: 2 },
    { id: 20, question: "You are conducting a long term study of ecosystem functioning in a freshwater lake. You and your field assistants gather data for many biotic and abiotic factors, including species diversity, water and benthic quality, and turbidity. Over the ten years of your study, you find that the abundance of water lilies is correlated with several other factors. When water toxicity and turbidity are high and water pH is abnormally low, water lilies quickly become scarce, followed by periods where fish, amphibians, and water birds are also scarce or absent. In years water nutrient levels are very high, water lilies quickly become abundant, followed by years where wading birds are scarce. From these data, you conclude that water lilies are:", options: ["a keystone species", "a flagship species", "an indicator species", "an umbrella species"], correct: 2 },
    { id: 21, question: "Grizzly bears have large geographic ranges that consist of mosaics of forests and grasslands at varying altitudes. Grizzlies also require relatively pristine water sources in their range. Based on this, what species type best describes grizzly bears?", options: ["keystone species", "flagship species", "indicator species", "umbrella species"], correct: 3 },
    { id: 22, question: "The Florida panther, as an appealing symbol of Florida's conservation campaign, serves as a(n):", options: ["umbrella species", "flagship species", "keystone species", "indicator species"], correct: 1 },
    { id: 23, question: "In the northeastern Pacific ocean, sea otters occur at a relatively low abundance. By preying upon sea urchins, sea otters maintain underwater kelp (large algae) \"forests\", which would otherwise be decimated by the herbivorous sea urchins. The kelp forests supply food for a wide variety of marine organisms, as well as providing refuge from predation and nursery habitat for juveniles. Based on this, what type of species best describes sea otters?", options: ["umbrella species", "indicator species", "flagship species", "keystone species"], correct: 3 },
    { id: 24, question: "A nonprofit conservation organization receives a sizeable donation and decides to purchase several thousand acres of \"high desert\" in southern California. This particular type of desert has an intermediate level of species diversity and few unique species. However, much of the original areas of high desert have been converted to suburban housing and shopping. The decision by the nonprofit to preserve this area was most likely based upon what conservation strategy?", options: ["Protection of keystone species", "Conservation of representative habitats", "Preservation of flagship species", "Conservation of endemic species"], correct: 1 },
    { id: 25, question: "On a field study in Costa Rica, you discover a new species of frog! After careful work to determine the size and range of the population, you conclude sadly that the species has very few individuals in an ever-shrinking limited range. The entire species could be wiped out at any time. When you write up your report on the frog, how should you describe its status?", options: ["Vulnerable", "Near threatened", "Threatened", "Endangered"], correct: 3 },
    { id: 26, question: "A lack of genetic diversity in a species usually results in:", options: ["faster reproduction rates", "improved disease resistance", "less ability to adapt to change in the environment", "increased population size"], correct: 2 },
    { id: 27, question: "Which of these is the best definition for what an ecosystem service is?", options: ["Any benefit humans get from healthy, functioning ecosystems", "The management of natural resources", "The protection of endangered species", "The study of ecosystem components"], correct: 2 },
    { id: 28, question: "In temperate forest ecosystems that have been logged or otherwise have relatively few species, the productivity (an ecosystem function) is much lower than in forest ecosystems that have more species. The maximum number of species in an ecosystem varies tremendously across similar habitats on different continents. Despite that variation, the maximum ecosystem function is similar. If the ecosystem function relates to species richness when there are few species, but not as much when there are many, this is evidence for which hypothesis?", options: ["Idiosyncratic hypothesis", "Keystone species hypothesis", "Diversity-Stability hypothesis", "Redundancy hypothesis"], correct: 2 },
    { id: 29, question: "Cloning is a type of:", options: ["habitat restoration", "genetic modification", "species reintroduction", "captive breeding"], correct: 3 },
    { id: 30, question: "Sustainable development is best defined as:", options: ["using only renewable energy sources", "eliminating all industrial activities", "protecting all natural areas from human use", "allowing people to improve their lifestyle while still maintaining natural resources"], correct: 3 }
  ],
};

const Quiz = React.memo(function Quiz({ chapter, onBack }: QuizProps) {
  const questions = useMemo(() => sampleQuestions[chapter as keyof typeof sampleQuestions] || [], [chapter]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  // Check if this is a coming soon chapter
  const isComingSoon = useMemo(() => false, [chapter]); // All chapters now available

  const handleAnswerSelect = useCallback((answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  }, []);

  const handleNext = () => {
    if (selectedAnswer !== null && !showFeedback) {
      // Show feedback first
      const correct = selectedAnswer === questions[currentQuestion].correct;
      setIsAnswerCorrect(correct);
      setShowFeedback(true);
    } else if (showFeedback) {
      // Move to next question or finish quiz
      const newAnswers = [...answers, selectedAnswer!];
      setAnswers(newAnswers);
      setShowFeedback(false);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setQuizCompleted(true);
        setShowResult(true);
      }
    }
  };

  const handlePrevious = () => {
    if (showFeedback) {
      // If showing feedback, just hide it
      setShowFeedback(false);
    } else if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
      // Remove the last answer
      setAnswers(answers.slice(0, -1));
    }
  };

  const calculateScore = useCallback(() => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === questions[index]?.correct ? 1 : 0);
    }, 0);
  }, [answers, questions]);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setQuizCompleted(false);
    setShowFeedback(false);
    setIsAnswerCorrect(false);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't handle keyboard if showing result or coming soon
      if (showResult || isComingSoon) return;

      // Number keys 1-4 to select answers
      if (e.key >= '1' && e.key <= '4') {
        const answerIndex = parseInt(e.key) - 1;
        if (answerIndex < questions[currentQuestion]?.options.length) {
          handleAnswerSelect(answerIndex);
        }
      }
      // Enter key to submit/continue
      else if (e.key === 'Enter') {
        if (selectedAnswer !== null || showFeedback) {
          handleNext();
        }
      }
      // Arrow keys for navigation
      else if (e.key === 'ArrowLeft') {
        if (currentQuestion > 0 || showFeedback) {
          handlePrevious();
        }
      }
      else if (e.key === 'ArrowRight') {
        if (selectedAnswer !== null || showFeedback) {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentQuestion, selectedAnswer, showFeedback, showResult, isComingSoon, questions, handleAnswerSelect]);

  // Coming Soon page for chapters 59 and 60
  if (isComingSoon) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl">
          {/* Coming Soon Card */}
          <div 
            className="rounded-3xl p-8 sm:p-12 text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8)
              `,
            }}
          >
            {/* Icon */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Chapter {chapter} Coming Soon!
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              This chapter is currently being prepared. Check back soon for comprehensive questions and answers.
            </p>
            
            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-8 h-1 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-8 h-1 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-8 h-1 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-8 h-1 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 animate-pulse rounded-full"></div>
              </div>
              <p className="text-sm text-gray-500">
                Chapters 54, 56, 57, 58, 59, 60 complete • All chapters available
              </p>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBack}
                className="px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(59, 130, 246, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  color: 'white',
                }}
              >
                Back to Chapters
              </button>
              
              {chapter === 59 && (
                <button
                  onClick={() => window.location.href = '#chapter-60'}
                  className="px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#374151',
                  }}
                >
                  Preview Chapter 60
                </button>
              )}
              
              {chapter === 60 && (
                <button
                  onClick={() => window.location.href = '#chapter-59'}
                  className="px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#374151',
                  }}
                >
                  Preview Chapter 59
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl">
          {/* Results Card */}
          <div 
            className="rounded-3xl p-8 sm:p-12 text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8)
              `,
            }}
          >
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
              percentage >= 80 ? 'bg-green-100' : percentage >= 60 ? 'bg-yellow-100' : 'bg-red-100'
            }`}>
              <span className={`text-3xl font-bold ${
                percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {percentage}%
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Quiz Complete!
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              You scored {score} out of {questions.length} questions correct
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(59, 130, 246, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  color: 'white',
                }}
              >
                Retake Quiz
              </button>
              <button
                onClick={onBack}
                className="px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#374151',
                }}
              >
                Back to Chapters
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Menu */}
      <MobileMenu
        chapter={chapter}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        onBack={onBack}
      />

      {/* Desktop Header */}
      <div className="hidden lg:block p-4 sm:p-6 pt-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center px-4 py-2 rounded-2xl font-medium transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
            }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          
          <div className="text-center">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
              Chapter {chapter} Quiz
            </h1>
            <p className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>

        {/* Desktop Progress Bar */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 p-4 sm:p-6 pt-32 lg:pt-6">
        <div className="w-full max-w-4xl mx-auto">
          <div 
            className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12 min-h-[60vh] sm:min-h-0"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8)
              `,
            }}
          >
            {/* Question */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 leading-relaxed break-words">
                {questions[currentQuestion]?.question}
              </h2>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {questions[currentQuestion]?.options.map((option, index) => {
                const letters = ['A', 'B', 'C', 'D'];
                return (
                  <AnswerOption
                    key={index}
                    option={option}
                    index={index}
                    isSelected={selectedAnswer === index}
                    onSelect={handleAnswerSelect}
                    letter={letters[index]}
                    showFeedback={showFeedback}
                    isCorrect={isAnswerCorrect}
                    correctAnswerIndex={questions[currentQuestion]?.correct}
                  />
                );
              })}
            </div>

            {/* Feedback Message */}
            {showFeedback && (
              <div className={`mb-6 p-4 rounded-2xl text-center transition-all duration-500 ${
                isAnswerCorrect 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className={`flex items-center justify-center mb-2 ${
                  isAnswerCorrect ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isAnswerCorrect ? (
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="font-semibold text-lg">
                    {isAnswerCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                <p className={`text-sm ${isAnswerCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {isAnswerCorrect 
                    ? 'Great job! You got it right.' 
                    : `The correct answer is ${['A', 'B', 'C', 'D'][questions[currentQuestion]?.correct]}.`
                  }
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 pt-4 border-t border-gray-200/50 sm:border-none sm:pt-0">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0 && !showFeedback}
                className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-medium transition-all duration-300 min-h-[48px] ${
                  (currentQuestion === 0 && !showFeedback)
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:scale-105 active:scale-95'
                }`}
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#374151',
                }}
              >
                {showFeedback ? 'Back' : 'Previous'}
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswer === null && !showFeedback}
                className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-medium transition-all duration-300 min-h-[48px] ${
                  (selectedAnswer === null && !showFeedback)
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:scale-105 active:scale-95'
                }`}
                style={{
                  background: (selectedAnswer !== null || showFeedback) ? 'rgba(59, 130, 246, 0.8)' : 'rgba(156, 163, 175, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${(selectedAnswer !== null || showFeedback) ? 'rgba(59, 130, 246, 0.3)' : 'rgba(156, 163, 175, 0.3)'}`,
                  color: 'white',
                }}
              >
                {showFeedback 
                  ? (currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question')
                  : (currentQuestion === questions.length - 1 ? 'Finish' : 'Check Answer')
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Quiz;