// Autonomous Vehicle Lab - TypeScript Interfaces

export interface DrivingScenario {
  id: string;
  title: string;
  description: string;
  ageRange: { min: number; max: number };
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number; // minutes
  safetyLevel: 'green' | 'yellow' | 'red';
  materials: string[];
  steps: ScenarioStep[];
  safetyWarnings: string[];
  learningObjectives: string[];
  howItWorks: string;
  image: string;
}

export interface ScenarioStep {
  id: number;
  instruction: string;
  visualCue: string; // Icon or emoji
  expectedAction: string;
  codeBlocks: CodeBlock[];
  explanation: string;
  safety: string;
}

export interface CodeBlock {
  id: string;
  type: 'if' | 'then' | 'else' | 'action' | 'condition';
  text: string;
  color: string;
  category: 'sensors' | 'actions' | 'logic';
}

export interface TrafficScenario {
  id: string;
  title: string;
  description: string;
  situation: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  ethicalConsiderations: string[];
  safetyLevel: 'green' | 'yellow' | 'red';
}

export interface DataTrainingTask {
  id: string;
  imageUrl: string;
  category: 'traffic-lights' | 'stop-signs' | 'pedestrians' | 'road-signs';
  labels: string[];
  correctLabels: string[];
  difficulty: number;
  explanation: string;
}

export interface VehicleProgress {
  userId: string;
  completedScenarios: string[];
  currentScenario: string | null;
  currentStep: number;
  codingScore: number;
  trafficScore: number;
  trainingScore: number;
  achievements: string[];
  totalTimeSpent: number;
  lastActivity: Date;
}

export interface ChatMessage {
  id: string;
  sender: 'captain-auto' | 'user';
  message: string;
  timestamp: Date;
  type: 'text' | 'guidance' | 'safety' | 'encouragement' | 'celebration';
}

export interface CaptainAutoResponse {
  message: string;
  type: 'greeting' | 'guidance' | 'safety' | 'encouragement' | 'celebration' | 'teaching';
  emoji: string;
  action?: 'next-step' | 'safety-check' | 'celebration' | 'debugging';
}

export interface VehicleLabState {
  currentScenario: DrivingScenario | null;
  currentTrafficScenario: TrafficScenario | null;
  currentTrainingTask: DataTrainingTask | null;
  progress: VehicleProgress | null;
  messages: ChatMessage[];
  captainAutoState: 'idle' | 'thinking' | 'speaking' | 'celebrating' | 'warning';
  isCodingMode: boolean;
  isTrafficMode: boolean;
  isTrainingMode: boolean;
}
