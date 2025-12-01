// Utility types for the quiz application

export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface QuizState {
  currentQuestion: number;
  selectedAnswer: number | null;
  answers: number[];
  showResult: boolean;
  quizCompleted: boolean;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  answers: number[];
}

// Helper functions
export const calculateScore = (answers: number[], questions: Question[]): number => {
  return answers.reduce((score, answer, index) => {
    return score + (answer === questions[index].correct ? 1 : 0);
  }, 0);
};

export const getScoreColor = (percentage: number): string => {
  if (percentage >= 80) return 'green';
  if (percentage >= 60) return 'yellow';
  return 'red';
};

export const getScoreMessage = (percentage: number): string => {
  if (percentage >= 90) return 'Excellent work!';
  if (percentage >= 80) return 'Great job!';
  if (percentage >= 70) return 'Good performance!';
  if (percentage >= 60) return 'Keep practicing!';
  return 'Need more study time.';
};