'use client';

import React, { useMemo } from 'react';

interface ChapterReviewProps {
  chapterNumber: number;
  onBack: () => void;
}

const ChapterReview = React.memo(function ChapterReview({ chapterNumber, onBack }: ChapterReviewProps) {
  // Import questions data (same as in Quiz component)
  const getQuestionsForChapter = (chapter: number) => {
    switch (chapter) {
      case 54:
        return [
          {
            question: "Ecology:",
            options: ["is the study of interactions among organisms and between organisms and their environment", "is the study of individual organisms", "is the study of genetics", "is the study of chemistry"],
            correct: 0
          },
          {
            question: "A scientist is studying several areas along an elevation gradient. She compares the type and abundance of organisms that colonize them prescribed burns (purposefully set, low-intensity fires) in the different areas along the change in elevation. What scale best describes her study?",
            options: ["Population ecology", "Community ecology", "Ecosystem ecology", "Global ecology"],
            correct: 1
          },
          {
            question: "American Chestnut trees used to be one of the most common trees in the Eastern part of the United States. A fungus was introduced from another continent that sickened and killed nearly every chestnut tree in the country. An ecologist is trying to understand how certain trees resist the fungus, and how to get more fungus-resistant trees growing in the wild. This ecologist would be studying what type of ecology?",
            options: ["Community ecology", "Population ecology", "Ecosystem ecology", "Global ecology"],
            correct: 1
          },
          {
            question: "You have been assigned to conduct a scientific study on the effects of four types of fertilizer on broccoli growth. You visit several broccoli farms to make observations and use these observations to find preliminary correlations and form hypotheses. To test your hypotheses, you set up five plots of broccoli—one plot for each fertilizer type plus a control plot, which is not fertilized. When you meet with your professor to discuss your progress, he tells you that your project is missing an important component of the scientific method. What is missing?",
            options: ["Forming hypotheses", "Making observations", "Replicating each fertilizer treatment in multiple plots", "Having a control group"],
            correct: 2
          },
          {
            question: "Temperature is perhaps the most important factor in the distribution of organisms because:",
            options: ["organisms prefer warm temperatures", "most organisms are unable to regulate their body temperature precisely", "temperature affects water availability", "temperature controls light levels"],
            correct: 1
          },
          {
            question: "How do corals react when water temperatures are too high?",
            options: ["They grow faster", "They expel their symbiotic algae", "They reproduce more", "They absorb more nutrients"],
            correct: 1
          },
          {
            question: "The serotinous cones of certain pine trees, such as the longleaf pine, Pinus palustris, depend on _______ to release their seeds:",
            options: ["water", "fire", "wind", "animals"],
            correct: 1
          },
          {
            question: "The photic zone in aquatic environments is typically about how deep?",
            options: ["50 m", "100 m", "200 m", "500 m"],
            correct: 1
          },
          {
            question: "Why are red algae found in deeper oceanic waters?",
            options: ["They prefer cold temperatures", "They possess pigments that allow them utilize blue-green-light", "They don't need sunlight", "They avoid predators"],
            correct: 1
          },
          {
            question: "In arid terrestrial environments, salt can accumulate in the soil because of:",
            options: ["high rainfall", "the settling and evaporation of water", "plant absorption", "wind erosion"],
            correct: 1
          },
          {
            question: "In your biology lab, you are given a vial that contains fish urine. Your assignment is to predict whether the urine came from a fresh or saltwater species. You discover that the urine contains a high concentration of salts. What is your prediction for the fish's habitat? What is the concentration of solutes in the fish relative to its environment?",
            options: ["Freshwater; hyperosmotic", "Marine; hypoosmotic", "Freshwater; hypoosmotic", "Marine; hyperosmotic"],
            correct: 1
          },
          {
            question: "The optimal pH range for most freshwater fishes and invertebrates is:",
            options: ["4–6", "6–9", "9–12", "1–4"],
            correct: 1
          },
          {
            question: "The sea heats and cools:",
            options: ["faster than the land", "more slowly than the land", "at the same rate as land", "independently of land"],
            correct: 1
          },
          {
            question: "The global patterns of atmospheric circulation and precipitation occur because of:",
            options: ["ocean currents", "rising masses of warm air and sinking masses of cool air", "mountain ranges", "vegetation patterns"],
            correct: 1
          },
          {
            question: "What is adiabatic cooling?",
            options: ["cooling due to wind", "cooling due to the decrease in air pressure at higher elevations", "cooling due to water evaporation", "cooling due to shade"],
            correct: 1
          },
          {
            question: "Currents in the ocean basins of the Northern Hemisphere always run in what direction?",
            options: ["counterclockwise", "clockwise", "north to south", "east to west"],
            correct: 1
          },
          {
            question: "Most of Europe is in the _______ biome:",
            options: ["boreal forest", "temperate deciduous forest", "grassland", "mediterranean"],
            correct: 1
          },
          {
            question: "Chaparral is:",
            options: ["a type of forest", "a type of shrubland/grassland", "a type of desert", "a type of wetland"],
            correct: 1
          },
          {
            question: "You awaken to find yourself lying on the bare ground, dirty and injured. In the dim light, you can make out wreckage around you and surmise that you have survived a plane crash. Over the next few days, you wander the hot, humid area and find an amazing number of different plant and insect species. You are able to trap and eat several rodent size mammals, but do not see any larger mammals. Into what biome did your plane crash?",
            options: ["Temperate forest", "Tropical rain forest", "Savanna", "Desert"],
            correct: 1
          },
          {
            question: "How would you best explain the existence of a mountain range that has abundant conifer trees, ferns, and mosses on the east side, but only sparse shrubby plants on the west side?",
            options: ["Temperature differences", "Precipitation differences due to a rain shadow on the west side produce the differing plant communities", "Soil differences", "Altitude differences"],
            correct: 1
          },
          {
            question: "Lakes with elevated dissolved nutrients and low water clarity are called:",
            options: ["oligotrophic", "eutrophic", "mesotrophic", "dystrophic"],
            correct: 1
          },
          {
            question: "Which of the following is a characteristic of tundra?",
            options: ["high temperatures", "permafrost", "abundant trees", "high precipitation"],
            correct: 1
          },
          {
            question: "The Earth is spherical, which causes differences in the intensity of solar radiation at different latitudes. The Earth is also tilted on its axis at a 23.5° angle. How do you think this tilt affects the intensity of solar radiation?",
            options: ["It has no effect", "The sun's rays strike the Northern hemisphere more obliquely during its winter months and less obliquely during its summer months", "It only affects the Southern hemisphere", "It makes all seasons the same"],
            correct: 1
          },
          {
            question: "The world can be divided approximately into six major biogeographic regions. Which of these is an accurate description of the properties of those regions?",
            options: ["All species exist in all regions", "Any single species rarely exists in more than one biogeographic region", "Regions have identical climates", "Regions are defined by political boundaries"],
            correct: 1
          }
        ];
      case 56:
        return [
          {
            question: "A group of interbreeding individuals occupying the same habitat at the same time is a(n):",
            options: ["community", "population", "ecosystem", "species"],
            correct: 1
          },
          {
            question: "You find a notebook that has lots of equations, tables, and graphs in it. The tables have columns for the number of female offspring born over a year, the number of deaths over a year, and the number of individuals in various age classes. What subject do you think the owner of the notebook is studying? What type of tables are they most likely using?",
            options: ["ecology; data tables", "demography; life tables", "genetics; punnett squares", "physiology; growth charts"],
            correct: 1
          },
          {
            question: "What is the simplest method to measure population density in a given area?",
            options: ["Use mark-recapture methods", "Count the number of organisms", "Measure biomass", "Use statistical sampling"],
            correct: 1
          },
          {
            question: "A line transect would probably be the preferred method to quantify the population density of:",
            options: ["fish in a lake", "Ponderosa pine trees", "insects in soil", "bacteria in culture"],
            correct: 1
          },
          {
            question: "A mark-recapture program marked 10 individuals in the first catch. The second catch has a total of 8 individuals, 4 of which were recaptures. What is the estimate of total population size?",
            options: ["16", "20", "24", "32"],
            correct: 1
          },
          {
            question: "A good sampling method for quantifying the density of birds or bats is the use of:",
            options: ["line transects", "mist nets", "quadrat sampling", "camera traps"],
            correct: 1
          },
          {
            question: "Dispersion is:",
            options: ["the movement of individuals between populations", "the spatial distribution of individuals", "the reproductive rate of a population", "the density of a population"],
            correct: 1
          },
          {
            question: "Many species of birds form large flocks. What dispersion pattern describes this behavior?",
            options: ["uniform", "clumped", "random", "territorial"],
            correct: 1
          },
          {
            question: "Why is a random dispersal pattern quite rare in nature?",
            options: ["Animals prefer to be near others", "Because resources in nature are rarely randomly spaced", "Predators prevent random distribution", "Weather patterns influence distribution"],
            correct: 1
          },
          {
            question: "Lions, leopards, and other large terrestrial predators generally maintain well-defined territories. What kind of dispersion pattern would you expect this to produce?",
            options: ["clumped", "uniform", "random", "clustered"],
            correct: 1
          }
        ];
      case 57:
        return [
          {
            question: "What is an example of a +/− interaction?",
            options: ["mutualism", "predation", "commensalism", "competition"],
            correct: 1
          },
          {
            question: "What is an example of a +/+ interaction?",
            options: ["predation", "mutualism", "parasitism", "competition"],
            correct: 1
          },
          {
            question: "The relationship of disease-causing organisms to an infected rabbit is one of:",
            options: ["mutualism", "commensalism", "parasitism", "predation"],
            correct: 2
          },
          {
            question: "What situation below is best characterized as interference competition?",
            options: ["Birds eating from the same food source", "A tiger that excludes other tigers from its territory", "Plants growing in the same soil", "Fish feeding on plankton"],
            correct: 1
          },
          {
            question: "Competition among individuals of different species is called:",
            options: ["intraspecific competition", "interspecific competition", "interference competition", "exploitation competition"],
            correct: 1
          },
          {
            question: "Allelopathy is:",
            options: ["a type of mutualism", "a type of competition between plant species through chemicals", "a form of predation", "a defensive mechanism"],
            correct: 1
          },
          {
            question: "Caterpillars of the same species on a large leaf each chew as much leaf as they can:",
            options: ["interference competition", "exploitation competition", "interspecific competition", "allelopathy"],
            correct: 1
          },
          {
            question: "In competition between P. caudatum and P. bursaria, neither species goes extinct because they utilize different resources. This can be considered as evidence for:",
            options: ["competitive exclusion", "resource partitioning", "character displacement", "interference competition"],
            correct: 1
          },
          {
            question: "You are studying the feeding habits of a group of four closely related bird species. You observe that all four species feed on insects. However, you notice that the species do not feed at the same time of day: one species feeds most actively at dawn, another during the middle of the day, another at dusk, and the last species feeds at night. What term would you use to describe this behavior?",
            options: ["competitive exclusion", "resource partitioning", "character displacement", "temporal isolation"],
            correct: 1
          },
          {
            question: "Sympatric species:",
            options: ["are less likely to compete than allopatric species", "are more likely than allopatric species to display character displacement", "never show character displacement", "always go extinct"],
            correct: 1
          }
        ];
      case 58:
        return [
          {
            question: "Community ecology is best defined as the study of:",
            options: ["individual species behavior", "population dynamics", "how groups of species interact in the same place at the same time", "ecosystem energy flow"],
            correct: 2
          },
          {
            question: "What is the general global pattern of species richness?",
            options: ["Decreasing from polar areas toward the tropics", "Increasing from polar areas toward the tropics", "Uniform across all latitudes", "Highest at mid-latitudes"],
            correct: 1
          },
          {
            question: "If you (incorrectly) proposed that tundra, the world's largest land biome, contains high species richness, your proposal would be consistent with the:",
            options: ["latitudinal gradient hypothesis", "species-area hypothesis", "intermediate disturbance hypothesis", "productivity hypothesis"],
            correct: 1
          },
          {
            question: "Based on what you know about various species richness hypotheses, a large, tropical area would likely have _______ species richness:",
            options: ["low", "high", "moderate", "variable"],
            correct: 1
          },
          {
            question: "What is the most accurate statement about temporal variability of plant biomass of a community?",
            options: ["It increases as species diversity increases", "It decreases as species diversity increases", "It is unrelated to species diversity", "It remains constant regardless of diversity"],
            correct: 1
          },
          {
            question: "What is an area of the Earth's surface currently undergoing primary succession?",
            options: ["Abandoned farmland", "Forest after wildfire", "Volcanoes in Iceland", "Pond becoming meadow"],
            correct: 2
          },
          {
            question: "No matter what model is used to show community succession, the final stage is always:",
            options: ["a pioneer community", "a climax community", "a transitional community", "a disturbed community"],
            correct: 1
          },
          {
            question: "In succession, the ability of one species to make the area more suitable for another species is called:",
            options: ["inhibition", "facilitation", "tolerance", "competition"],
            correct: 1
          },
          {
            question: "The Shannon diversity index would be most valuable to:",
            options: ["a population geneticist studying mutations", "a conservation biologist deciding where to locate a new nature preserve", "a physiologist studying metabolism", "a molecular biologist studying DNA"],
            correct: 1
          },
          {
            question: "The moraines left when glaciers retreat are characterized by:",
            options: ["high nitrogen content and rich organic matter", "low nitrogen content and little organic matter", "moderate nitrogen content", "variable nutrient content"],
            correct: 1
          }
        ];
      default:
        return [];
    }
  };

  const questions = useMemo(() => getQuestionsForChapter(chapterNumber), [chapterNumber]);
  
  const chapterTitles: Record<number, string> = {
    54: 'Ecology and the Biosphere',
    55: 'Behavioral Ecology',
    56: 'Population Ecology',
    57: 'Community Ecology',
    58: 'Ecosystems and Restoration Ecology',
    59: 'Conservation Biology and Global Change',
  };

  const getAnswerLetter = (index: number) => {
    return String.fromCharCode(65 + index); // A, B, C, D
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