'use client';

import React, { useState } from 'react';
import ChapterReview from './ChapterReview';

interface ReviewAnswersProps {
  onBack: () => void;
}

const ReviewAnswers = React.memo(function ReviewAnswers({ onBack }: ReviewAnswersProps) {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const chapters = [
    { id: 54, title: 'Ecology and the Biosphere', available: true },
    { id: 56, title: 'Population Ecology', available: true },
    { id: 57, title: 'Community Ecology', available: true },
    { id: 58, title: 'Ecosystems and Restoration Ecology', available: true },
    { id: 59, title: 'Conservation Biology and Global Change', available: false },
    { id: 60, title: 'Global Climate Change', available: false },
  ];

  if (selectedChapter !== null) {
    return (
      <ChapterReview 
        chapterNumber={selectedChapter}
        onBack={() => setSelectedChapter(null)}
      />
    );
  }

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
              <span className="font-medium">Back to Quiz</span>
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Review Answers</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Chapter Selection */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Select a Chapter to Review
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a chapter to view all questions and answers in an organized study format. 
            Correct answers are highlighted for easy memorization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="relative">
              <button
                onClick={() => chapter.available && setSelectedChapter(chapter.id)}
                disabled={!chapter.available}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                  chapter.available 
                    ? 'hover:scale-105 hover:shadow-lg border-gray-200 hover:border-blue-300 bg-white' 
                    : 'opacity-50 cursor-not-allowed border-gray-100 bg-gray-50'
                }`}
                style={{
                  boxShadow: chapter.available 
                    ? '0 4px 20px rgba(0, 0, 0, 0.08)' 
                    : '0 2px 10px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 font-bold text-lg">
                    {chapter.id}
                  </span>
                  {chapter.available && (
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  {chapter.title}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {chapter.available 
                    ? 'Click to review all questions and answers'
                    : 'Coming soon'
                  }
                </p>
              </button>
              
              {!chapter.available && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Study Tips */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Study Tips
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Correct answers are <strong className="bg-yellow-200 px-1 rounded">highlighted in yellow</strong> for quick identification</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Use this section to review before taking the quiz</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Focus on the highlighted answers to improve memorization</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default ReviewAnswers;