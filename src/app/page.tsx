'use client';

import React, { useState, useCallback, Suspense } from 'react';
import ChapterSelection from './components/ChapterSelection';
import Quiz from './components/Quiz';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

export default function Home() {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const handleSelectChapter = useCallback((chapter: number) => {
    setSelectedChapter(chapter);
  }, []);

  const handleBack = useCallback(() => {
    setSelectedChapter(null);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        {/* Background gradient for iOS-like aesthetic */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 pointer-events-none">
          {/* Animated background elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-200/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative min-h-screen">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <LoadingSpinner size="lg" />
            </div>
          }>
            {selectedChapter ? (
              <Quiz 
                chapter={selectedChapter}
                onBack={handleBack}
              />
            ) : (
              <ChapterSelection onSelectChapter={handleSelectChapter} />
            )}
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
}
