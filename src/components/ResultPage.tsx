import { Share2, RotateCcw, Home, Download, Moon, Sun, Heart, Sparkles } from 'lucide-react';
import { dogMbtiResults } from '../data/dogMbtiData';
import { toast } from 'sonner';

interface ResultPageProps {
  mbtiType: string;
  onRestart: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function ResultPage({ mbtiType, onRestart, isDarkMode, onToggleDarkMode }: ResultPageProps) {
  const result = dogMbtiResults[mbtiType];

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">결과를 찾을 수 없습니다</h2>
          <button onClick={onRestart} className="btn-primary">
            다시 시작하기
          </button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const shareText = `🐕 우리 강아지 MBTI 결과: ${result.title}\n\n${result.description}\n\n#강아지MBTI #댕댕이성격테스트`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '강아지 MBTI 테스트 결과',
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(shareText);
        toast.success('결과가 클립보드에 복사되었습니다! 📋');
      } catch (error) {
        toast.error('공유하기에 실패했습니다 😥');
      }
    }
  };

  const handleDownload = () => {
    // Create a simple text version for download
    const content = `🐕 강아지 MBTI 테스트 결과\n\n유형: ${result.type}\n제목: ${result.title}\n\n설명:\n${result.description}\n\n주요 특성:\n${result.traits.map(trait => `• ${trait}`).join('\n')}\n\n잘 맞는 유형:\n${result.compatibility.map(comp => `• ${comp}`).join('\n')}\n\n추천 활동:\n${result.activities.map(activity => `• ${activity}`).join('\n')}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `강아지_MBTI_${result.type}_결과.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('결과가 다운로드되었습니다! 📥');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onRestart}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-dog-primary dark:hover:text-dog-primary transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">홈으로</span>
            </button>
            
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800 dark:text-white">
                🎉 테스트 완료!
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
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Result Card */}
        <div className="card max-w-3xl mx-auto relative overflow-hidden">
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-10`} />
          
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 animate-pulse-slow">
            <Heart className="w-8 h-8 text-dog-primary/30" />
          </div>
          <div className="absolute bottom-4 left-4 animate-bounce-slow">
            <Sparkles className="w-6 h-6 text-dog-secondary/30" />
          </div>

          <div className="relative z-10">
            {/* Result Header */}
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{result.emoji}</div>
              <div className="inline-block bg-gradient-to-r from-dog-primary to-dog-secondary text-white px-6 py-2 rounded-full text-xl font-bold mb-4">
                {result.type}
              </div>
              <h1 className="text-4xl font-heading font-bold text-gray-800 dark:text-white mb-4">
                {result.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                {result.description}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Traits */}
              <div className="bg-gradient-to-br from-dog-primary/10 to-dog-primary/5 dark:from-dog-primary/20 dark:to-dog-primary/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  ✨ 주요 특성
                </h3>
                <ul className="space-y-2">
                  {result.traits.map((trait, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-dog-primary rounded-full" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibility */}
              <div className="bg-gradient-to-br from-dog-secondary/10 to-dog-secondary/5 dark:from-dog-secondary/20 dark:to-dog-secondary/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  💕 잘 맞는 유형
                </h3>
                <ul className="space-y-2">
                  {result.compatibility.map((comp, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-dog-secondary rounded-full" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div className="bg-gradient-to-br from-dog-accent/10 to-dog-accent/5 dark:from-dog-accent/20 dark:to-dog-accent/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  🎾 추천 활동
                </h3>
                <ul className="space-y-2">
                  {result.activities.map((activity, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-dog-accent rounded-full" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleShare}
                className="btn-primary flex items-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                결과 공유하기
              </button>
              
              <button
                onClick={handleDownload}
                className="btn-secondary flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                결과 저장하기
              </button>
              
              <button
                onClick={onRestart}
                className="btn-outline flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                다시 테스트하기
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                이 결과는 재미를 위한 것이며, 실제 강아지의 성격은 개체마다 다를 수 있습니다. 🐕💕
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
