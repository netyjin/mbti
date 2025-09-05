import { Dog, Heart, Moon, Sun, Sparkles } from 'lucide-react';

interface HomePageProps {
  onStartTest: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function HomePage({ onStartTest, isDarkMode, onToggleDarkMode }: HomePageProps) {
  return (
    <div className="min-h-screen dog-gradient flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center text-white relative">
        {/* Dark Mode Toggle */}
        <button
          onClick={onToggleDarkMode}
          className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
          aria-label="다크모드 토글"
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6 text-yellow-300" />
          ) : (
            <Moon className="w-6 h-6 text-purple-200" />
          )}
        </button>

        {/* Floating Dogs */}
        <div className="absolute top-10 left-10 animate-bounce-slow">
          <Dog className="w-12 h-12 text-white/60" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse-slow">
          <Heart className="w-8 h-8 text-pink-200" />
        </div>
        <div className="absolute bottom-20 left-20 animate-wiggle">
          <Sparkles className="w-10 h-10 text-yellow-200" />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-heading font-bold leading-tight">
              🐕 강아지 MBTI
            </h1>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-yellow-100">
              우리 댕댕이는 어떤 성격일까?
            </h2>
          </div>

          <p className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto leading-relaxed">
            12가지 재미있는 질문으로 알아보는 <br />
            우리 강아지의 특별한 성격 유형! 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={onStartTest}
              className="group relative overflow-hidden bg-white text-dog-primary font-bold text-xl px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3">
                🎾 테스트 시작하기
                <Sparkles className="w-6 h-6 group-hover:animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-dog-primary to-dog-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold">정확한 분석</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-semibold">16가지 유형</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl mb-2">💡</div>
              <div className="font-semibold">상세한 설명</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-3xl mb-2">❤️</div>
              <div className="font-semibold">무료 테스트</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
