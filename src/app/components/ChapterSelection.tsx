'use client';

import React from 'react';

interface ChapterSelectionProps {
  onSelectChapter: (chapter: number) => void;
}

const chapters = [
  { id: 54, title: "Chapter 54", description: "Ecology - Study of organisms and their environment" },
  { id: 56, title: "Chapter 56", description: "Population Ecology - Demographics and growth patterns" },
  { id: 57, title: "Chapter 57", description: "Species Interactions - Competition, predation, and mutualism" },
  { id: 58, title: "Chapter 58", description: "Community & Ecosystem Ecology - Succession and energy flow" },
  { id: 59, title: "Chapter 59", description: "Conservation Biology - Coming soon!" },
  { id: 60, title: "Chapter 60", description: "Global Climate Change - Coming soon!" },
];

const ChapterSelection = React.memo(function ChapterSelection({ onSelectChapter }: ChapterSelectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Bio Final Study Quiz
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Select a chapter to begin your quiz. Test your knowledge and prepare for your final exam.
          </p>
        </div>

        {/* Chapter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {chapters.map((chapter, index) => {
            const isComingSoon = chapter.id === 59 || chapter.id === 60;
            return (
            <button
              key={chapter.id}
              onClick={() => onSelectChapter(chapter.id)}
              className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 touch-manipulation hover-lift"
              style={{
                background: isComingSoon ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${isComingSoon ? 'rgba(156, 163, 175, 0.4)' : 'rgba(255, 255, 255, 0.4)'}`,
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `,
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl ${
                isComingSoon 
                  ? 'from-gray-500/10 via-gray-400/10 to-gray-500/10' 
                  : 'from-blue-500/10 via-purple-500/10 to-pink-500/10'
              }`} />
              
              {/* Coming Soon Badge */}
              {isComingSoon && (
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                  Coming Soon
                </div>
              )}
              
              {/* Floating elements for visual interest */}
              <div className={`absolute -top-2 -right-2 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                isComingSoon 
                  ? 'bg-gradient-to-br from-gray-400/20 to-gray-500/20' 
                  : 'bg-gradient-to-br from-blue-400/20 to-purple-400/20'
              }`} />
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                    isComingSoon 
                      ? 'text-gray-700 group-hover:text-gray-800' 
                      : 'text-gray-900 group-hover:text-blue-700'
                  }`}>
                    {chapter.title}
                  </h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 ${
                    isComingSoon 
                      ? 'bg-gradient-to-r from-gray-400 to-gray-500' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}>
                    {isComingSoon ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg 
                        className="w-5 h-5 text-white transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                  isComingSoon 
                    ? 'text-gray-500 group-hover:text-gray-600' 
                    : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  {chapter.description}
                </p>
                
                {/* Status indicator */}
                <div className="mt-4 flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 transition-opacity duration-300 ${
                    isComingSoon 
                      ? 'bg-yellow-500 opacity-60 group-hover:opacity-100' 
                      : 'bg-green-500 opacity-60 group-hover:opacity-100'
                  }`} />
                  <span className={`text-xs font-medium transition-colors duration-300 ${
                    isComingSoon 
                      ? 'text-gray-400 group-hover:text-gray-500' 
                      : 'text-gray-500 group-hover:text-gray-600'
                  }`}>
                    {isComingSoon ? 'In development' : 'Ready to start'}
                  </span>
                </div>
              </div>
            </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/60 backdrop-blur-lg border border-white/30 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Ready to test your knowledge
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ChapterSelection;