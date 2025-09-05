export interface Question {
  id: number;
  text: string;
  options: {
    A: { text: string; type: string };
    B: { text: string; type: string };
  };
}

export interface DogMbtiResult {
  type: string;
  title: string;
  description: string;
  traits: string[];
  compatibility: string[];
  activities: string[];
  emoji: string;
  color: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "새로운 공원에 갔을 때, 우리 강아지는?",
    options: {
      A: { text: "다른 강아지들에게 먼저 다가가서 인사해요", type: "E" },
      B: { text: "조용히 관찰하며 천천히 적응해요", type: "I" }
    }
  },
  {
    id: 2,
    text: "산책 중 새로운 냄새를 맡았을 때?",
    options: {
      A: { text: "냄새의 근원을 찾기 위해 구체적으로 탐색해요", type: "S" },
      B: { text: "상상 속에서 어떤 모험이 있을지 생각하며 걸어요", type: "N" }
    }
  },
  {
    id: 3,
    text: "다른 강아지가 아플 때, 우리 강아지는?",
    options: {
      A: { text: "논리적으로 해결책을 찾으려고 해요 (어디가 아픈지 확인)", type: "T" },
      B: { text: "감정적으로 위로하고 곁에 있어줘요", type: "F" }
    }
  },
  {
    id: 4,
    text: "일상 루틴에 대한 우리 강아지의 반응은?",
    options: {
      A: { text: "정해진 시간에 밥 먹고 산책하는 걸 좋아해요", type: "J" },
      B: { text: "그때그때 기분에 따라 행동하는 걸 좋아해요", type: "P" }
    }
  },
  {
    id: 5,
    text: "가족 모임이나 파티에서 우리 강아지는?",
    options: {
      A: { text: "모든 사람에게 관심을 받으려고 해요", type: "E" },
      B: { text: "조용한 곳에서 한두 명과 조용히 시간을 보내요", type: "I" }
    }
  },
  {
    id: 6,
    text: "새로운 장난감을 줬을 때?",
    options: {
      A: { text: "즉시 어떻게 작동하는지 꼼꼼히 살펴봐요", type: "S" },
      B: { text: "창의적인 놀이 방법을 상상하며 실험해요", type: "N" }
    }
  },
  {
    id: 7,
    text: "다른 강아지와 갈등이 생겼을 때?",
    options: {
      A: { text: "명확한 규칙을 정해서 해결하려고 해요", type: "T" },
      B: { text: "서로의 감정을 이해하려고 노력해요", type: "F" }
    }
  },
  {
    id: 8,
    text: "하루 일과를 계획할 때?",
    options: {
      A: { text: "언제 밥 먹고, 언제 산책할지 정해두는 걸 좋아해요", type: "J" },
      B: { text: "그 순간의 기분에 따라 자유롭게 행동해요", type: "P" }
    }
  },
  {
    id: 9,
    text: "에너지를 충전하는 방법은?",
    options: {
      A: { text: "다른 강아지들과 활발하게 놀아요", type: "E" },
      B: { text: "혼자만의 조용한 시간을 가져요", type: "I" }
    }
  },
  {
    id: 10,
    text: "문제를 해결할 때?",
    options: {
      A: { text: "현실적이고 실용적인 방법을 선택해요", type: "S" },
      B: { text: "창의적이고 독특한 방법을 시도해요", type: "N" }
    }
  },
  {
    id: 11,
    text: "주인이 슬플 때?",
    options: {
      A: { text: "무엇이 문제인지 분석하려고 해요", type: "T" },
      B: { text: "무조건 위로부터 해드려요", type: "F" }
    }
  },
  {
    id: 12,
    text: "여행이나 이동할 때?",
    options: {
      A: { text: "미리 계획을 세우고 준비하는 걸 좋아해요", type: "J" },
      B: { text: "즉흥적으로 새로운 경험을 즐겨요", type: "P" }
    }
  }
];

export const dogMbtiResults: Record<string, DogMbtiResult> = {
  ENFJ: {
    type: "ENFJ",
    title: "카리스마 리더독 🌟",
    description: "다른 강아지들의 리더 역할을 자연스럽게 맡는 카리스마 있는 강아지예요. 모든 가족 구성원을 챙기고 돌보는 것을 좋아합니다.",
    traits: ["사교적", "배려심 깊음", "책임감 강함", "영감을 주는"],
    compatibility: ["INFP", "ENFP", "INFJ"],
    activities: ["그룹 훈련", "가족 모임", "다른 강아지들과의 놀이"],
    emoji: "🌟",
    color: "from-yellow-400 to-orange-500"
  },
  ENFP: {
    type: "ENFP",
    title: "열정적인 모험독 🎾",
    description: "항상 새로운 것에 호기심이 많고 열정적인 강아지예요. 창의적인 놀이를 좋아하고 주변을 즐겁게 만듭니다.",
    traits: ["호기심 많음", "창의적", "활발함", "낙천적"],
    compatibility: ["INFJ", "INTJ", "ENFJ"],
    activities: ["새로운 장소 탐험", "창의적 놀이", "다양한 액티비티"],
    emoji: "🎾",
    color: "from-pink-400 to-purple-500"
  },
  ENTJ: {
    type: "ENTJ",
    title: "야심찬 대장독 👑",
    description: "타고난 리더십을 가진 강아지예요. 목표 지향적이고 효율성을 중시하며, 가족을 보호하는 것에 책임감을 느낍니다.",
    traits: ["리더십", "목표 지향적", "결단력", "보호 본능"],
    compatibility: ["INTP", "INFP", "ENFP"],
    activities: ["훈련", "경비", "리더십 게임"],
    emoji: "👑",
    color: "from-red-500 to-pink-500"
  },
  ENTP: {
    type: "ENTP",
    title: "똑똑한 발명독 💡",
    description: "새로운 아이디어와 가능성을 탐구하는 것을 좋아하는 똑똑한 강아지예요. 창의적인 문제 해결 능력이 뛰어납니다.",
    traits: ["혁신적", "논리적", "적응력 강함", "호기심"],
    compatibility: ["INFJ", "INTJ", "ENFJ"],
    activities: ["퍼즐 게임", "새로운 트릭 배우기", "탐험"],
    emoji: "💡",
    color: "from-blue-400 to-purple-500"
  },
  ESFJ: {
    type: "ESFJ",
    title: "다정한 돌봄독 💕",
    description: "가족 모든 구성원을 따뜻하게 돌보는 것을 좋아하는 다정한 강아지예요. 화합과 조화를 중시합니다.",
    traits: ["다정함", "돌봄", "협조적", "충성심"],
    compatibility: ["ISFP", "INFP", "ESFP"],
    activities: ["가족과의 시간", "돌봄 놀이", "일상 루틴"],
    emoji: "💕",
    color: "from-pink-300 to-rose-400"
  },
  ESFP: {
    type: "ESFP",
    title: "즐거운 연예독 🎭",
    description: "항상 즐겁고 활기찬 에너지로 주변을 밝게 만드는 강아지예요. 순간을 즐기며 자유로운 영혼을 가지고 있습니다.",
    traits: ["즐거움", "자유로움", "친근함", "즉흥적"],
    compatibility: ["ISFJ", "ESFJ", "ISFP"],
    activities: ["파티", "즉흥적 놀이", "사람들과의 교감"],
    emoji: "🎭",
    color: "from-yellow-300 to-orange-400"
  },
  ESTJ: {
    type: "ESTJ",
    title: "책임감 있는 관리독 📋",
    description: "질서와 규칙을 중시하며 책임감이 강한 강아지예요. 가족의 안전과 일상을 체계적으로 관리합니다.",
    traits: ["책임감", "체계적", "실용적", "신뢰할 수 있음"],
    compatibility: ["ISFP", "ISTP", "ESFP"],
    activities: ["규칙적인 훈련", "가족 보호", "일상 루틴"],
    emoji: "📋",
    color: "from-green-500 to-teal-500"
  },
  ESTP: {
    type: "ESTP",
    title: "활동적인 스포츠독 ⚽",
    description: "에너지가 넘치고 활동적인 강아지예요. 현재 순간을 즐기며 실용적인 문제 해결을 좋아합니다.",
    traits: ["활동적", "현실적", "적응력", "에너지 넘침"],
    compatibility: ["ISFJ", "ISTJ", "ESFJ"],
    activities: ["스포츠", "야외 활동", "액션 게임"],
    emoji: "⚽",
    color: "from-orange-400 to-red-500"
  },
  INFJ: {
    type: "INFJ",
    title: "신비로운 예언독 🔮",
    description: "깊은 통찰력을 가진 신비로운 강아지예요. 가족의 감정을 잘 이해하고 조용히 지혜로운 조언을 줍니다.",
    traits: ["통찰력", "직관적", "신비로움", "깊은 이해"],
    compatibility: ["ENFP", "ENTP", "ENFJ"],
    activities: ["조용한 관찰", "깊은 유대감 형성", "명상적 활동"],
    emoji: "🔮",
    color: "from-purple-500 to-indigo-600"
  },
  INFP: {
    type: "INFP",
    title: "꿈꾸는 예술독 🎨",
    description: "순수하고 이상주의적인 강아지예요. 깊은 감정을 가지고 있으며 자신만의 특별한 세계관을 가지고 있습니다.",
    traits: ["이상주의", "창의적", "순수함", "깊은 감정"],
    compatibility: ["ENFJ", "ENTJ", "ENFP"],
    activities: ["창의적 놀이", "혼자만의 시간", "자연과의 교감"],
    emoji: "🎨",
    color: "from-blue-300 to-purple-400"
  },
  INTJ: {
    type: "INTJ",
    title: "전략가 마스터독 🎯",
    description: "독립적이고 전략적 사고를 하는 강아지예요. 효율성을 추구하며 자신만의 독특한 방식으로 문제를 해결합니다.",
    traits: ["전략적", "독립적", "효율적", "목표 지향"],
    compatibility: ["ENFP", "ENTP", "INFJ"],
    activities: ["전략 게임", "독립적 활동", "계획적 훈련"],
    emoji: "🎯",
    color: "from-gray-600 to-blue-700"
  },
  INTP: {
    type: "INTP",
    title: "사색하는 철학독 🤔",
    description: "논리적이고 분석적인 사고를 하는 철학자 같은 강아지예요. 새로운 아이디어와 이론에 관심이 많습니다.",
    traits: ["논리적", "분석적", "독창적", "사색적"],
    compatibility: ["ENTJ", "ENFJ", "ESFJ"],
    activities: ["퍼즐", "탐구 활동", "혼자 사색하기"],
    emoji: "🤔",
    color: "from-indigo-400 to-blue-600"
  },
  ISFJ: {
    type: "ISFJ",
    title: "따뜻한 수호독 🛡️",
    description: "조용하지만 따뜻한 마음을 가진 강아지예요. 가족을 보호하고 돌보는 것을 최우선으로 생각합니다.",
    traits: ["보호적", "돌봄", "충실함", "신중함"],
    compatibility: ["ESFP", "ESTP", "ESFJ"],
    activities: ["가족 보호", "조용한 놀이", "일상 케어"],
    emoji: "🛡️",
    color: "from-green-400 to-blue-500"
  },
  ISFP: {
    type: "ISFP",
    title: "순수한 예술독 🌸",
    description: "온화하고 예술적 감성을 가진 강아지예요. 평화로운 환경을 좋아하며 자연스러운 아름다움을 추구합니다.",
    traits: ["온화함", "예술적", "평화로움", "자연 친화적"],
    compatibility: ["ESFJ", "ESTJ", "ENFJ"],
    activities: ["자연 산책", "조용한 놀이", "미적 경험"],
    emoji: "🌸",
    color: "from-pink-200 to-purple-300"
  },
  ISTJ: {
    type: "ISTJ",
    title: "신뢰할 수 있는 충직독 🏰",
    description: "매우 신뢰할 수 있고 책임감이 강한 강아지예요. 전통을 중시하며 안정성과 질서를 추구합니다.",
    traits: ["신뢰성", "책임감", "안정성", "전통적"],
    compatibility: ["ESFP", "ESTP", "ISFP"],
    activities: ["규칙적인 활동", "전통적 놀이", "안정적인 루틴"],
    emoji: "🏰",
    color: "from-brown-400 to-gray-600"
  },
  ISTP: {
    type: "ISTP",
    title: "실용적인 수리독 🔧",
    description: "실용적이고 손재주가 좋은 강아지예요. 문제가 생기면 조용히 효과적인 해결책을 찾아냅니다.",
    traits: ["실용적", "손재주", "문제 해결", "독립적"],
    compatibility: ["ESFJ", "ESTJ", "ISFJ"],
    activities: ["문제 해결 게임", "실용적 훈련", "도구 활용"],
    emoji: "🔧",
    color: "from-gray-500 to-green-600"
  }
};
