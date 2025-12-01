'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface MobileMenuProps {
  chapter: number;
  currentQuestion: number;
  totalQuestions: number;
  onBack: () => void;
  onQuestionSelect?: (questionIndex: number) => void;
}

const MobileMenu = React.memo(function MobileMenu({ 
  chapter, 
  currentQuestion, 
  totalQuestions, 
  onBack, 
  onQuestionSelect 
}: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (isMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen, handleClickOutside]);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 p-3 sm:p-4" style={{ paddingTop: 'max(12px, env(safe-area-inset-top))' }}>
        <div 
          className="flex items-center justify-between rounded-2xl px-3 sm:px-4 py-2 sm:py-3"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          <button
            onClick={onBack}
            className="flex items-center px-3 py-2 rounded-xl transition-all duration-300 active:scale-95"
            style={{
              background: 'rgba(0, 0, 0, 0.05)',
            }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </button>

          <div className="text-center flex-1 mx-4">
            <h1 className="text-sm font-semibold text-gray-900">
              Chapter {chapter}
            </h1>
            <p className="text-xs text-gray-600">
              {currentQuestion + 1} / {totalQuestions}
            </p>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu p-2 rounded-xl transition-all duration-300 active:scale-95"
            style={{
              background: 'rgba(0, 0, 0, 0.05)',
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 px-4">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 p-3 sm:p-4" style={{ paddingTop: 'calc(80px + env(safe-area-inset-top))' }}>
          <div 
            className="mobile-menu rounded-2xl p-4 sm:p-6 max-h-[70vh] overflow-y-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Question Navigator
            </h3>
            
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: totalQuestions }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onQuestionSelect?.(index);
                    setIsMenuOpen(false);
                  }}
                  className={`w-10 h-10 rounded-xl font-medium text-sm transition-all duration-300 active:scale-95 ${
                    currentQuestion === index
                      ? 'text-white'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  style={{
                    background: currentQuestion === index 
                      ? 'linear-gradient(135deg, #3B82F6, #8B5CF6)'
                      : 'rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full mt-6 py-3 px-4 rounded-xl font-medium transition-all duration-300 active:scale-95"
              style={{
                background: 'rgba(0, 0, 0, 0.05)',
                color: '#374151',
              }}
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </>
  );
});

export default MobileMenu;