// Spelling Lab - TypeScript Interfaces

export interface SpellingWord {
  id: string;
  word: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  phonetic?: string;
  definition?: string;
  example?: string;
  image?: string;
}

export interface SpellingChallenge {
  id: string;
  title: string;
  description: string;
  type: 'speed' | 'memory' | 'surprise' | 'practice';
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number; // seconds
  wordCount: number;
  ageRange: { min: number; max: number };
  instructions: string[];
  rules: string[];
  rewards: string[];
  icon: string;
}

export interface SpellingSession {
  id: string;
  challengeId: string;
  startTime: Date;
  endTime?: Date;
  words: SpellingWord[];
  userAnswers: SpellingAnswer[];
  score: number;
  accuracy: number;
  timeSpent: number;
  completed: boolean;
}

export interface SpellingAnswer {
  wordId: string;
  userSpelling: string;
  isCorrect: boolean;
  timeSpent: number; // milliseconds
  attempts: number;
  hintsUsed: number;
}

export interface SpellingProgress {
  totalSessions: number;
  totalWords: number;
  correctWords: number;
  accuracy: number;
  averageTime: number;
  challengesCompleted: string[];
  achievements: string[];
  hardestWords: string[];
  favoriteCategories: string[];
  streak: number;
  currentStreak: number;
  bestStreak: number;
  totalTimeSpent: number;
  lastActive: Date;
}

export interface SpellingBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface WordList {
  id: string;
  name: string;
  description: string;
  words: SpellingWord[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  isCustom: boolean;
  createdBy?: string;
  createdAt: Date;
}

export interface SpellingHint {
  type: 'phonetic' | 'definition' | 'example' | 'letter' | 'syllable';
  content: string;
  used: boolean;
}

export interface SpellingSettings {
  soundEnabled: boolean;
  hintsEnabled: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number;
  autoAdvance: boolean;
  showPhonetics: boolean;
  showDefinitions: boolean;
}

export interface SpellingStats {
  daily: {
    sessions: number;
    words: number;
    accuracy: number;
    timeSpent: number;
  };
  weekly: {
    sessions: number;
    words: number;
    accuracy: number;
    timeSpent: number;
  };
  monthly: {
    sessions: number;
    words: number;
    accuracy: number;
    timeSpent: number;
  };
  allTime: {
    sessions: number;
    words: number;
    accuracy: number;
    timeSpent: number;
  };
}

export interface SpellingLeaderboard {
  id: string;
  name: string;
  score: number;
  accuracy: number;
  rank: number;
  avatar?: string;
}

export interface SpellingRiddle {
  id: string;
  riddle: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  hints: string[];
}

export interface SpellingTrivia {
  id: string;
  question: string;
  answer: string;
  options: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  explanation: string;
}
