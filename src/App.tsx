import { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { QuestionPage } from './components/QuestionPage';
import { ResultPage } from './components/ResultPage';
import { questions } from './data/dogMbtiData';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'question' | 'result';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [mbtiResult, setMbtiResult] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dogMbtiDarkMode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    // Apply dark class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save to localStorage
    localStorage.setItem('dogMbtiDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  const calculateMBTI = () => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    Object.values(answers).forEach(answer => {
      scores[answer as keyof typeof scores]++;
    });

    const mbti = 
      (scores.E >= scores.I ? 'E' : 'I') +
      (scores.S >= scores.N ? 'S' : 'N') +
      (scores.T >= scores.F ? 'T' : 'F') +
      (scores.J >= scores.P ? 'J' : 'P');

    return mbti;
  };

  const handleStartTest = () => {
    setCurrentPage('question');
    setCurrentQuestion(1);
    setAnswers({});
  };

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prev: Record<number, string>) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((prev: number) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev: number) => prev - 1);
    }
  };

  const handleComplete = () => {
    const result = calculateMBTI();
    setMbtiResult(result);
    setCurrentPage('result');
  };

  const handleRestart = () => {
    setCurrentPage('home');
    setCurrentQuestion(1);
    setAnswers({});
    setMbtiResult('');
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'home' && (
        <HomePage 
          onStartTest={handleStartTest} 
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      )}
      
      {currentPage === 'question' && (
        <QuestionPage
          currentQuestion={currentQuestion}
          answers={answers}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrev={handlePrev}
          onComplete={handleComplete}
          onHome={handleRestart}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      )}
      
      {currentPage === 'result' && (
        <ResultPage
          mbtiType={mbtiResult}
          onRestart={handleRestart}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      )}
      
      <Toaster />
    </div>
  );
}
