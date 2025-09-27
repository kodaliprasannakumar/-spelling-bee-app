export interface ChatMessage {
  id: string;
  sender: 'dr-ai' | 'user';
  message: string;
  timestamp: Date;
  type: 'text' | 'safety' | 'encouragement' | 'guidance' | 'experiment';
  emoji?: string;
  isTyping?: boolean;
}

export interface Experiment {
  id: string;
  title: string;
  description: string;
  ageRange: { min: number; max: number };
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number; // minutes
  safetyLevel: 'green' | 'yellow' | 'red';
  materials: string[];
  steps: ExperimentStep[];
  safetyWarnings: string[];
  learningObjectives: string[];
  howItWorks: string;
  image: string;
}

export interface ExperimentStep {
  step: number;
  title: string;
  description: string;
  safety: string;
  image: string;
  completed?: boolean;
}

export interface DrAIResponse {
  message: string;
  type: 'greeting' | 'guidance' | 'safety' | 'encouragement' | 'troubleshooting' | 'experiment';
  emoji: string;
  action?: 'next-step' | 'safety-check' | 'celebration' | 'experiment-start';
  experimentId?: string;
}

export type AvatarState = 
  | 'idle'        // 🤖 Normal friendly state
  | 'thinking'    // 🤔 Processing user input
  | 'excited'     // 🎉 Celebrating success
  | 'teaching'    // 📚 Explaining science
  | 'warning'     // ⚠️ Safety reminder
  | 'celebrating' // 🎊 Experiment completed
  | 'processing'  // ⚡ AI processing
  | 'analyzing';  // 📊 Data analysis

export interface ChatbotState {
  messages: ChatMessage[];
  currentExperiment: Experiment | null;
  currentStep: number;
  isTyping: boolean;
  avatarState: AvatarState;
  experimentProgress: number;
  safetyAcknowledged: boolean;
}

