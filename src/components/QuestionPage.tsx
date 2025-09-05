import { ChevronLeft, ChevronRight, Home, Moon, Sun } from 'lucide-react';
import { questions } from '../data/dogMbtiData';

interface QuestionPageProps {
  currentQuestion: number;
  answers: Record<number, string>;
  onAnswer: (questionId: number, answer: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onComplete: () => void;
  onHome: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function QuestionPage({
  currentQuestion,
  answers,
  onAnswer,
  onNext,
  onPrev,
  onComplete,
  onHome,
  isDarkMode,
  onToggleDarkMode
}: QuestionPageProps) {
  const question = questions.find(q => q.id === currentQuestion);
  const progress = (Object.keys(answers).length / questions.length) * 100;
  const canGoNext = answers[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length;

  if (!question) return null;

  const handleOptionClick = (option: 'A' | 'B') => {
    onAnswer(currentQuestion, question.options[option].type);
  };

  const handleNext = () => {
    if (isLastQuestion && Object.keys(answers).length === questions.length) {
      onComplete();
    } else {
      onNext();
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onHome}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-dog-primary dark:hover:text-dog-primary transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">홈으로</span>
            </button>
            
            <div className="text-center">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                질문 {currentQuestion} / {questions.length}
              </div>
            </div>

            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="다크모드 토글"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-dog-primary to-dog-secondary h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="card max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🐕</div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mb-2">
              {question.text}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              우리 강아지에게 더 가까운 모습을 선택해주세요
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick('A')}
              className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left group ${
                answers[currentQuestion] === question.options.A.type
                  ? 'border-dog-primary bg-dog-primary/10 dark:bg-dog-primary/20'
                  : 'border-gray-200 dark:border-gray-600 hover:border-dog-primary/50 dark:hover:border-dog-primary/50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                  answers[currentQuestion] === question.options.A.type
                    ? 'border-dog-primary bg-dog-primary text-white'
                    : 'border-gray-300 dark:border-gray-600 group-hover:border-dog-primary'
                }`}>
                  A
                </div>
                <div className="text-lg font-medium text-gray-800 dark:text-white">
                  {question.options.A.text}
                </div>
              </div>
            </button>

            <button
              onClick={() => handleOptionClick('B')}
              className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left group ${
                answers[currentQuestion] === question.options.B.type
                  ? 'border-dog-secondary bg-dog-secondary/10 dark:bg-dog-secondary/20'
                  : 'border-gray-200 dark:border-gray-600 hover:border-dog-secondary/50 dark:hover:border-dog-secondary/50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                  answers[currentQuestion] === question.options.B.type
                    ? 'border-dog-secondary bg-dog-secondary text-white'
                    : 'border-gray-300 dark:border-gray-600 group-hover:border-dog-secondary'
                }`}>
                  B
                </div>
                <div className="text-lg font-medium text-gray-800 dark:text-white">
                  {question.options.B.text}
                </div>
              </div>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={onPrev}
              disabled={currentQuestion === 1}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              이전
            </button>

            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                canGoNext
                  ? 'btn-primary hover:shadow-lg transform hover:scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
              }`}
            >
              {isLastQuestion && Object.keys(answers).length === questions.length ? '결과 보기' : '다음'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
