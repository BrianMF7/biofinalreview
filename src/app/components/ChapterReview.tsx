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
            question: "Which of the following organisms are considered ecosystem engineers?",
            options: ["Wolves", "Beavers", "Eagles", "Deer"],
            correct: 1
          },
          {
            question: "An ecologist studying the growth of plant populations compares the type and abundance of organisms that colonize them from prescribed burns (purposefully set, low-intensity fires) in the different areas along the change in elevation. What scale best describes her study?",
            options: ["Population ecology", "Community ecology", "Ecosystem ecology", "Global ecology"],
            correct: 1
          },
          {
            question: "Which of the following best describes the study of community ecology?",
            options: ["The study of populations of organisms", "The study of how organisms interact with their physical environment", "The study of interactions between different species", "The study of individual organisms"],
            correct: 2
          },
          {
            question: "What is the primary difference between weather and climate?",
            options: ["Weather refers to long-term patterns, climate refers to short-term conditions", "Weather refers to short-term conditions, climate refers to long-term patterns", "Weather and climate are the same thing", "Weather occurs on land, climate occurs in water"],
            correct: 1
          },
          {
            question: "Which biome is characterized by permafrost?",
            options: ["Temperate grassland", "Tropical rainforest", "Tundra", "Desert"],
            correct: 2
          },
          {
            question: "The benthic zone in aquatic ecosystems refers to:",
            options: ["The surface water where photosynthesis occurs", "The bottom of the water body", "The area between high and low tides", "The open water area"],
            correct: 1
          },
          {
            question: "Which of the following is NOT a major abiotic factor that determines the characteristics of terrestrial biomes?",
            options: ["Temperature", "Precipitation", "Soil pH", "Predator density"],
            correct: 3
          },
          {
            question: "Coral reefs are primarily found in:",
            options: ["Cold, deep ocean waters", "Warm, shallow ocean waters", "Freshwater lakes", "Arctic regions"],
            correct: 1
          },
          {
            question: "The aphotic zone in aquatic ecosystems is characterized by:",
            options: ["High levels of photosynthesis", "No light penetration", "Floating organisms only", "High oxygen levels"],
            correct: 1
          },
          {
            question: "Which of the following best describes the rain shadow effect?",
            options: ["Increased precipitation on the windward side of mountains", "Decreased precipitation on the leeward side of mountains", "Equal precipitation on both sides of mountains", "Increased temperature on mountain slopes"],
            correct: 1
          },
          {
            question: "Estuaries are characterized by:",
            options: ["Constant salinity levels", "Mixing of freshwater and saltwater", "Only marine organisms", "High temperature stability"],
            correct: 1
          },
          {
            question: "The littoral zone in lakes refers to:",
            options: ["The deepest part of the lake", "The open water area", "The shallow area near the shore", "The area with no oxygen"],
            correct: 2
          },
          {
            question: "Which biome has the highest primary productivity?",
            options: ["Desert", "Tundra", "Tropical rainforest", "Temperate grassland"],
            correct: 2
          },
          {
            question: "Thermoregulation in organisms is primarily a response to:",
            options: ["Light availability", "Temperature variation", "Water availability", "Soil nutrients"],
            correct: 1
          },
          {
            question: "The turnover in temperate lakes occurs due to:",
            options: ["Temperature changes affecting water density", "Wind patterns", "Fish migration", "Seasonal plant growth"],
            correct: 0
          },
          {
            question: "Which of the following is a characteristic of the pelagic zone?",
            options: ["Bottom-dwelling organisms", "High light penetration throughout", "Open water environment", "Attached plant life"],
            correct: 2
          },
          {
            question: "Upwelling in oceans results in:",
            options: ["Decreased nutrient availability", "Increased primary productivity", "Lower oxygen levels", "Warmer surface temperatures"],
            correct: 1
          },
          {
            question: "The taiga biome is also known as:",
            options: ["Temperate deciduous forest", "Boreal forest", "Chaparral", "Savanna"],
            correct: 1
          },
          {
            question: "Which factor most influences the distribution of vegetation in terrestrial biomes?",
            options: ["Altitude", "Latitude", "Longitude", "Ocean currents"],
            correct: 1
          },
          {
            question: "Microclimate refers to:",
            options: ["Global weather patterns", "Climate conditions in a very small area", "Seasonal weather changes", "Ocean temperature patterns"],
            correct: 1
          },
          {
            question: "The intertidal zone is characterized by:",
            options: ["Constant submersion in water", "Constant exposure to air", "Regular exposure to both air and water", "Only freshwater organisms"],
            correct: 2
          },
          {
            question: "Which of the following adaptations is most common in desert organisms?",
            options: ["Large body size", "Water conservation mechanisms", "Thick fur", "Bright coloration"],
            correct: 1
          },
          {
            question: "The greenhouse effect in Earth's atmosphere is caused by:",
            options: ["Oxygen and nitrogen", "Carbon dioxide and water vapor", "Helium and hydrogen", "Methane only"],
            correct: 1
          },
          {
            question: "Which biome is characterized by drought-resistant shrubs and mild, wet winters?",
            options: ["Desert", "Chaparral", "Tundra", "Boreal forest"],
            correct: 1
          },
          {
            question: "Oligotrophic lakes are characterized by:",
            options: ["High nutrient levels", "Low oxygen levels", "High algae growth", "Low nutrient levels"],
            correct: 3
          },
          {
            question: "The study of how organisms interact with their environment is called:",
            options: ["Evolution", "Ecology", "Taxonomy", "Physiology"],
            correct: 1
          },
          {
            question: "Which of the following is an example of a biotic factor?",
            options: ["Temperature", "Rainfall", "Soil pH", "Competition between species"],
            correct: 3
          },
          {
            question: "The zone in the ocean where photosynthesis can occur is called:",
            options: ["Benthic zone", "Abyssal zone", "Photic zone", "Bathyal zone"],
            correct: 2
          },
          {
            question: "Seasonal changes in temperate regions are primarily caused by:",
            options: ["Distance from the ocean", "Earth's tilt on its axis", "Elevation changes", "Wind patterns"],
            correct: 1
          },
          {
            question: "Which of the following statements about tropical rainforests is correct?",
            options: ["They have nutrient-rich soils", "They have low biodiversity", "They have rapid nutrient cycling", "They experience significant temperature variation"],
            correct: 2
          }
        ];
      case 55:
        return [
          {
            question: "Which of the following best describes innate behavior?",
            options: ["Behavior that is learned through experience", "Behavior that is genetically programmed", "Behavior that changes with age", "Behavior that requires practice"],
            correct: 1
          },
          {
            question: "Imprinting typically occurs during:",
            options: ["Adulthood", "A critical period early in life", "Old age", "Any time in life equally"],
            correct: 1
          },
          {
            question: "A fixed action pattern is:",
            options: ["A learned sequence of behaviors", "A stereotyped behavioral sequence", "A behavior that varies greatly", "A behavior only seen in captivity"],
            correct: 1
          },
          {
            question: "Which of the following is an example of associative learning?",
            options: ["Habituation", "Classical conditioning", "Imprinting", "Fixed action patterns"],
            correct: 1
          },
          {
            question: "Altruistic behavior in animals is best explained by:",
            options: ["Individual fitness benefits", "Kin selection", "Random chance", "Environmental pressure"],
            correct: 1
          },
          {
            question: "Territorial behavior in animals primarily functions to:",
            options: ["Attract mates only", "Secure resources", "Increase population size", "Reduce genetic diversity"],
            correct: 1
          },
          {
            question: "The waggle dance of honeybees communicates information about:",
            options: ["Danger in the hive", "Location of food sources", "Mating opportunities", "Weather conditions"],
            correct: 1
          },
          {
            question: "Optimal foraging theory predicts that animals will:",
            options: ["Always eat the largest prey", "Maximize energy gained per unit time spent foraging", "Eat only one type of food", "Forage randomly"],
            correct: 1
          },
          {
            question: "Sexual selection can result in:",
            options: ["Traits that reduce survival", "Only benefits to females", "Reduced reproductive success", "Identical males and females"],
            correct: 0
          },
          {
            question: "Migration in animals is primarily controlled by:",
            options: ["Daily weather changes", "Circadian rhythms", "Circannual rhythms", "Social interactions only"],
            correct: 2
          },
          {
            question: "Which of the following is NOT a component of animal communication?",
            options: ["Signal", "Receiver", "Response", "Photosynthesis"],
            correct: 3
          },
          {
            question: "Reciprocal altruism occurs when:",
            options: ["Animals help relatives only", "Animals help others expecting future benefits", "Animals always act selfishly", "Animals help randomly"],
            correct: 1
          },
          {
            question: "The study of animal behavior is called:",
            options: ["Ethology", "Ecology", "Evolution", "Embryology"],
            correct: 0
          },
          {
            question: "Habituation is:",
            options: ["Learning to respond to a stimulus", "Learning to ignore a repeated harmless stimulus", "Learning through trial and error", "Learning through imitation"],
            correct: 1
          },
          {
            question: "Courtship behaviors primarily function to:",
            options: ["Find food", "Establish territory", "Attract mates and ensure species recognition", "Build nests"],
            correct: 2
          },
          {
            question: "Hamilton's rule states that altruistic behavior will be selected for when:",
            options: ["rB > C", "rB < C", "rB = C", "B > rC"],
            correct: 0
          },
          {
            question: "Which type of learning involves trial and error?",
            options: ["Classical conditioning", "Imprinting", "Operant conditioning", "Habituation"],
            correct: 2
          },
          {
            question: "Pheromones are primarily used for:",
            options: ["Thermoregulation", "Chemical communication", "Digestion", "Photosynthesis"],
            correct: 1
          },
          {
            question: "Inclusive fitness refers to:",
            options: ["Only an individual's reproductive success", "An individual's genetic contribution to future generations through offspring and relatives", "Physical strength", "Longevity"],
            correct: 1
          },
          {
            question: "Which of the following is an example of innate behavior?",
            options: ["A bird learning to sing", "A dog learning to sit", "A baby turtle heading to the ocean after hatching", "A monkey using tools"],
            correct: 2
          },
          {
            question: "Cognitive learning involves:",
            options: ["Simple stimulus-response patterns", "Complex problem solving and reasoning", "Only genetic programming", "Automatic responses"],
            correct: 1
          },
          {
            question: "The concept of a supernormal stimulus means:",
            options: ["A normal environmental trigger", "An exaggerated stimulus that triggers stronger responses than natural stimuli", "A weak stimulus", "No stimulus at all"],
            correct: 1
          },
          {
            question: "Cooperative breeding occurs when:",
            options: ["All individuals breed simultaneously", "Non-breeding individuals help care for offspring", "Animals breed in isolation", "Only the strongest individuals breed"],
            correct: 1
          },
          {
            question: "Circadian rhythms are primarily controlled by:",
            options: ["Food availability", "Social interactions", "Light-dark cycles", "Temperature only"],
            correct: 2
          },
          {
            question: "Which of the following best describes the difference between proximate and ultimate causes of behavior?",
            options: ["Proximate causes are evolutionary, ultimate causes are immediate", "Proximate causes are immediate mechanisms, ultimate causes are evolutionary explanations", "They are the same thing", "Only proximate causes are important"],
            correct: 1
          },
          {
            question: "Sexual dimorphism is typically the result of:",
            options: ["Identical selection pressures on males and females", "Different selection pressures on males and females", "Random genetic drift", "Environmental pollution"],
            correct: 1
          },
          {
            question: "Which of the following is true about game theory in behavioral ecology?",
            options: ["It only applies to games animals play", "It analyzes behavioral strategies in competitive situations", "It's not relevant to biology", "It only applies to humans"],
            correct: 1
          },
          {
            question: "Parent-offspring conflict occurs because:",
            options: ["Parents and offspring share identical interests", "Parents and offspring have different optimal strategies", "Offspring are always selfish", "Parents are always altruistic"],
            correct: 1
          },
          {
            question: "The evolutionarily stable strategy (ESS) is:",
            options: ["A strategy that never changes", "A strategy that cannot be invaded by alternative strategies", "Always the most aggressive strategy", "Random behavior"],
            correct: 1
          },
          {
            question: "Kin selection explains:",
            options: ["Why animals are always selfish", "Why animals may help relatives at a cost to themselves", "Why animals migrate", "Why animals compete for food"],
            correct: 1
          }
        ];
      case 56:
        return [
          {
            question: "Population density is defined as:",
            options: ["The number of births per year", "The number of individuals per unit area", "The growth rate of a population", "The age structure of a population"],
            correct: 1
          },
          {
            question: "Which of the following factors would NOT directly affect population growth rate?",
            options: ["Birth rate", "Death rate", "Immigration", "Genetic diversity"],
            correct: 3
          },
          {
            question: "The exponential growth model assumes:",
            options: ["Limited resources", "Constant growth rate", "Increasing death rate", "Decreasing birth rate"],
            correct: 1
          },
          {
            question: "Carrying capacity (K) represents:",
            options: ["The maximum growth rate", "The maximum population size an environment can sustain", "The minimum population size", "The birth rate minus death rate"],
            correct: 1
          },
          {
            question: "In the logistic growth model, population growth rate is highest when:",
            options: ["N = 0", "N = K", "N = K/2", "N > K"],
            correct: 2
          },
          {
            question: "Density-dependent factors include:",
            options: ["Natural disasters", "Weather", "Competition for resources", "Volcanic eruptions"],
            correct: 2
          },
          {
            question: "A Type I survivorship curve is characterized by:",
            options: ["High mortality early in life", "Constant mortality throughout life", "High mortality late in life", "No mortality"],
            correct: 2
          },
          {
            question: "Which of the following is a density-independent factor?",
            options: ["Competition", "Predation", "Disease", "Hurricane"],
            correct: 3
          },
          {
            question: "The intrinsic rate of increase (r) is:",
            options: ["Always positive", "The maximum per capita growth rate", "Independent of population size", "The same for all species"],
            correct: 1
          },
          {
            question: "A population with a broad-based age pyramid has:",
            options: ["More older individuals", "More younger individuals", "Equal age distribution", "Declining birth rate"],
            correct: 1
          },
          {
            question: "Metapopulations consist of:",
            options: ["One large continuous population", "Several connected subpopulations", "Only extinct populations", "Populations of different species"],
            correct: 1
          },
          {
            question: "The demographic transition is characterized by:",
            options: ["High birth and death rates", "Low birth and death rates", "A shift from high to low birth and death rates", "Constant population size"],
            correct: 2
          },
          {
            question: "Which reproductive strategy is associated with r-selected species?",
            options: ["Few offspring, high parental care", "Many offspring, low parental care", "Long lifespan", "Large body size"],
            correct: 1
          },
          {
            question: "K-selected species typically have:",
            options: ["High reproductive rates", "Short lifespans", "High competitive ability", "Small body size"],
            correct: 2
          },
          {
            question: "Population bottlenecks result in:",
            options: ["Increased genetic diversity", "Reduced genetic diversity", "No change in genetic diversity", "Only beneficial mutations"],
            correct: 1
          },
          {
            question: "The founder effect occurs when:",
            options: ["A population grows rapidly", "A small group establishes a new population", "A population becomes extinct", "Resources become unlimited"],
            correct: 1
          },
          {
            question: "Which of the following best describes a source population?",
            options: ["A population that is declining", "A population where births exceed deaths", "A population dependent on immigration", "An extinct population"],
            correct: 1
          },
          {
            question: "Sink populations are characterized by:",
            options: ["High birth rates", "Immigration exceeding emigration", "Deaths exceeding births", "Stable population size"],
            correct: 2
          },
          {
            question: "The Allee effect describes:",
            options: ["Exponential population growth", "Reduced fitness at low population densities", "Increased fitness at high densities", "Constant fitness regardless of density"],
            correct: 1
          },
          {
            question: "Life tables provide information about:",
            options: ["Only birth rates", "Only death rates", "Age-specific mortality and reproduction", "Migration patterns"],
            correct: 2
          },
          {
            question: "Which age structure indicates a growing population?",
            options: ["Column-shaped", "Urn-shaped", "Pyramid-shaped", "Diamond-shaped"],
            correct: 2
          },
          {
            question: "The term 'ecology' was first coined by:",
            options: ["Charles Darwin", "Ernst Haeckel", "Alfred Wallace", "Gregor Mendel"],
            correct: 1
          },
          {
            question: "Population viability analysis helps determine:",
            options: ["Optimal harvesting rates", "Extinction probability", "Migration routes", "Feeding behaviors"],
            correct: 1
          },
          {
            question: "Which factor is most important for small population persistence?",
            options: ["Large territory", "High genetic diversity", "Fast reproduction", "Strong competition"],
            correct: 1
          },
          {
            question: "Dispersal in populations primarily functions to:",
            options: ["Find food only", "Avoid inbreeding and find new habitats", "Establish dominance", "Synchronize breeding"],
            correct: 1
          },
          {
            question: "The minimum viable population size is:",
            options: ["Always 50 individuals", "The smallest population that can persist long-term", "The carrying capacity", "The maximum population size"],
            correct: 1
          },
          {
            question: "Exponential growth is represented by the equation:",
            options: ["dN/dt = rN", "dN/dt = rN(K-N)/K", "N = K", "dN/dt = K"],
            correct: 0
          },
          {
            question: "Environmental resistance includes:",
            options: ["Only biotic factors", "Only abiotic factors", "Both biotic and abiotic limiting factors", "Only positive factors"],
            correct: 2
          },
          {
            question: "Which survivorship curve is typical of most birds?",
            options: ["Type I", "Type II", "Type III", "Type IV"],
            correct: 1
          },
          {
            question: "Population momentum refers to:",
            options: ["How fast populations move", "Continued growth due to age structure", "Population decline", "Migration speed"],
            correct: 1
          }
        ];
      case 57:
        return [
          {
            question: "A community in ecology refers to:",
            options: ["All organisms in a specific area", "All individuals of one species", "All interacting populations in an area", "Only plant species in an area"],
            correct: 2
          },
          {
            question: "The competitive exclusion principle states that:",
            options: ["Two species can coexist indefinitely", "Two species with identical niches cannot coexist", "Competition always benefits both species", "Only the largest species survives"],
            correct: 1
          },
          {
            question: "Resource partitioning allows species to:",
            options: ["Compete more intensively", "Coexist by using different resources", "Eliminate competitors", "Use identical resources"],
            correct: 1
          },
          {
            question: "A fundamental niche represents:",
            options: ["Where a species actually lives", "The full range of conditions a species can tolerate", "Only the feeding habits of a species", "The smallest area a species needs"],
            correct: 1
          },
          {
            question: "Character displacement refers to:",
            options: ["Species becoming more similar", "Evolution of differences where species overlap", "Species migration", "Extinction of species"],
            correct: 1
          },
          {
            question: "Which of the following is an example of mutualism?",
            options: ["Predator-prey relationship", "Tapeworm in host", "Bees pollinating flowers", "Competition for food"],
            correct: 2
          },
          {
            question: "In a predator-prey relationship, an increase in prey population typically leads to:",
            options: ["Decrease in predator population", "Increase in predator population", "No change in predator population", "Extinction of predators"],
            correct: 1
          },
          {
            question: "Keystone species are important because they:",
            options: ["Are the most abundant", "Are the largest species", "Have disproportionate effects on community structure", "Are always predators"],
            correct: 2
          },
          {
            question: "Primary succession occurs:",
            options: ["After a forest fire", "On bare rock or new land", "After agricultural abandonment", "In existing communities"],
            correct: 1
          },
          {
            question: "The intermediate disturbance hypothesis suggests that:",
            options: ["No disturbance is best for diversity", "Extreme disturbance maximizes diversity", "Moderate disturbance maximizes diversity", "Disturbance always reduces diversity"],
            correct: 2
          },
          {
            question: "Which of the following best describes commensalism?",
            options: ["Both species benefit", "One benefits, one is harmed", "One benefits, one is unaffected", "Both species are harmed"],
            correct: 2
          },
          {
            question: "Trophic cascades occur when:",
            options: ["Plants affect herbivores only", "Changes in top predators affect lower trophic levels", "Only herbivores are involved", "There are no predators"],
            correct: 1
          },
          {
            question: "The species-area relationship shows that:",
            options: ["Larger areas have fewer species", "Area doesn't affect species number", "Larger areas generally have more species", "Only small areas have species"],
            correct: 2
          },
          {
            question: "Edge effects in fragmented habitats typically result in:",
            options: ["Increased interior conditions", "Changed microclimatic conditions", "No environmental changes", "Larger habitat patches"],
            correct: 1
          },
          {
            question: "Coevolution occurs when:",
            options: ["Species evolve independently", "Two species evolve in response to each other", "Only one species evolves", "Evolution stops"],
            correct: 1
          },
          {
            question: "The Shannon diversity index measures:",
            options: ["Only species richness", "Only species evenness", "Both species richness and evenness", "Population size"],
            correct: 2
          },
          {
            question: "Climax communities are characterized by:",
            options: ["Rapid species turnover", "High stability and low change", "Only pioneer species", "Constant disturbance"],
            correct: 1
          },
          {
            question: "Which type of mimicry involves a harmless species resembling a harmful one?",
            options: ["Müllerian mimicry", "Batesian mimicry", "Aggressive mimicry", "Protective mimicry"],
            correct: 1
          },
          {
            question: "Apparent competition occurs when:",
            options: ["Species directly compete for resources", "Species share a common predator", "Species ignore each other", "Species cooperate"],
            correct: 1
          },
          {
            question: "The term 'guild' in community ecology refers to:",
            options: ["All species in a community", "Species that use resources similarly", "Only predatory species", "Plant species only"],
            correct: 1
          },
          {
            question: "Bottom-up control in communities is driven by:",
            options: ["Predators", "Resource availability", "Competition", "Disease"],
            correct: 1
          },
          {
            question: "Top-down control in communities is driven by:",
            options: ["Resource availability", "Predation", "Plant growth", "Soil nutrients"],
            correct: 1
          },
          {
            question: "Facilitation in ecological succession means:",
            options: ["Early species inhibit later ones", "Early species help establish later ones", "All species arrive simultaneously", "No species interactions occur"],
            correct: 1
          },
          {
            question: "The tolerance model of succession suggests that:",
            options: ["Early species are required for later ones", "Early species inhibit later ones", "Later species can establish independently", "Succession doesn't occur"],
            correct: 2
          },
          {
            question: "Invasive species often succeed because they:",
            options: ["Are always larger", "Lack natural enemies", "Are always native", "Cannot reproduce"],
            correct: 1
          },
          {
            question: "The paradox of the plankton refers to:",
            options: ["Lack of plankton diversity", "High diversity despite limited resources", "Plankton extinction", "Plankton predation"],
            correct: 1
          },
          {
            question: "Metacommunities consist of:",
            options: ["One large community", "Connected local communities", "Only extinct communities", "Unconnected communities"],
            correct: 1
          },
          {
            question: "Alpha diversity refers to:",
            options: ["Diversity between communities", "Diversity within a community", "Regional diversity", "Global diversity"],
            correct: 1
          },
          {
            question: "Beta diversity refers to:",
            options: ["Diversity within a community", "Diversity between communities", "Species abundance", "Population size"],
            correct: 1
          },
          {
            question: "Which factor most influences community structure in intertidal zones?",
            options: ["Temperature only", "Tidal exposure and wave action", "Soil pH", "Air pressure"],
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