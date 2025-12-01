'use client';

import React from 'react';

interface AnswerOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
  letter: string;
  showFeedback?: boolean;
  isCorrect?: boolean;
  correctAnswerIndex?: number;
}

const AnswerOption = React.memo(function AnswerOption({ 
  option, 
  index, 
  isSelected, 
  onSelect, 
  letter,
  showFeedback = false,
  isCorrect = false,
  correctAnswerIndex
}: AnswerOptionProps) {
  const isCorrectAnswer = correctAnswerIndex === index;
  const isWrongSelection = showFeedback && isSelected && !isCorrect;
  const getButtonStyle = () => {
    if (showFeedback) {
      if (isCorrectAnswer) {
        // Correct answer - always green
        return {
          background: 'rgba(34, 197, 94, 0.15)',
          border: '2px solid rgba(34, 197, 94, 0.6)',
          boxShadow: '0 8px 25px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        };
      } else if (isWrongSelection) {
        // Wrong selected answer - red
        return {
          background: 'rgba(239, 68, 68, 0.15)',
          border: '2px solid rgba(239, 68, 68, 0.6)',
          boxShadow: '0 8px 25px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        };
      } else {
        // Other options during feedback - muted
        return {
          background: 'rgba(156, 163, 175, 0.1)',
          border: '1px solid rgba(156, 163, 175, 0.3)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        };
      }
    } else {
      // Normal state
      return {
        background: isSelected ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.7)',
        border: `1px solid ${isSelected ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.4)'}`,
        boxShadow: isSelected 
          ? '0 8px 25px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)' 
          : '0 4px 20px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      };
    }
  };

  const getRingClass = () => {
    if (showFeedback) {
      if (isCorrectAnswer) return 'ring-2 ring-green-500 ring-offset-2 ring-offset-white';
      if (isWrongSelection) return 'ring-2 ring-red-500 ring-offset-2 ring-offset-white';
      return '';
    }
    return isSelected ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-white' : '';
  };

  return (
    <button
      onClick={() => !showFeedback && onSelect(index)}
      disabled={showFeedback}
      className={`group p-3 sm:p-4 lg:p-6 rounded-2xl text-left transition-all duration-300 touch-manipulation min-h-[56px] w-full ${
        !showFeedback ? 'hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg' : 'cursor-not-allowed'
      } ${getRingClass()}`}
      style={{
        ...getButtonStyle(),
        touchAction: 'manipulation',
      }}
    >
      <div className="flex items-start">
        {/* Option Letter Circle */}
        <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 mr-3 sm:mr-4 flex items-center justify-center font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 ${
          showFeedback 
            ? isCorrectAnswer
              ? 'border-green-500 bg-green-500 text-white shadow-lg'
              : isWrongSelection
              ? 'border-red-500 bg-red-500 text-white shadow-lg'
              : 'border-gray-300 bg-gray-100 text-gray-500'
            : isSelected 
              ? 'border-blue-500 bg-blue-500 text-white shadow-lg' 
              : 'border-gray-300 bg-white text-gray-600 group-hover:border-blue-300 group-hover:bg-blue-50'
        }`}>
          {showFeedback && isCorrectAnswer ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : showFeedback && isWrongSelection ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            letter
          )}
        </div>
        
        {/* Option Text */}
        <div className="flex-1 pt-1">
          <span className={`text-sm sm:text-base lg:text-lg leading-relaxed break-words transition-colors duration-300 ${
            showFeedback
              ? isCorrectAnswer
                ? 'text-green-800 font-semibold'
                : isWrongSelection
                ? 'text-red-800 font-semibold'
                : 'text-gray-500'
              : isSelected 
                ? 'text-gray-900 font-medium' 
                : 'text-gray-700 group-hover:text-gray-900'
          }`}>
            {option}
          </span>
        </div>
        
        {/* Selection/Feedback Indicator */}
        {(isSelected || (showFeedback && isCorrectAnswer)) && (
          <div className="flex-shrink-0 ml-4 pt-1">
            {showFeedback && isCorrectAnswer ? (
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : showFeedback && isWrongSelection ? (
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : !showFeedback && isSelected ? (
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : null}
          </div>
        )}
      </div>
    </button>
  );
});

export default AnswerOption;