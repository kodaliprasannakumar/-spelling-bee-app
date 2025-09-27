import { SpellingChallenge, SpellingWord, WordList, SpellingRiddle, SpellingTrivia } from '@/types/spelling';

// Spelling Words Database
export const spellingWords: SpellingWord[] = [
  // Easy Words (Ages 5-8)
  { id: 'cat', word: 'cat', difficulty: 'easy', category: 'animals', phonetic: '/kæt/', definition: 'A small furry pet', example: 'The cat sat on the mat.' },
  { id: 'dog', word: 'dog', difficulty: 'easy', category: 'animals', phonetic: '/dɔːɡ/', definition: 'A loyal pet animal', example: 'The dog runs in the park.' },
  { id: 'sun', word: 'sun', difficulty: 'easy', category: 'nature', phonetic: '/sʌn/', definition: 'The bright star in our sky', example: 'The sun shines brightly.' },
  { id: 'moon', word: 'moon', difficulty: 'easy', category: 'nature', phonetic: '/muːn/', definition: 'The bright object in the night sky', example: 'The moon is full tonight.' },
  { id: 'book', word: 'book', difficulty: 'easy', category: 'school', phonetic: '/bʊk/', definition: 'Something you read', example: 'I love to read a good book.' },
  { id: 'tree', word: 'tree', difficulty: 'easy', category: 'nature', phonetic: '/triː/', definition: 'A tall plant with leaves', example: 'The tree has green leaves.' },
  { id: 'house', word: 'house', difficulty: 'easy', category: 'home', phonetic: '/haʊs/', definition: 'Where people live', example: 'My house is red.' },
  { id: 'car', word: 'car', difficulty: 'easy', category: 'transport', phonetic: '/kɑːr/', definition: 'A vehicle with wheels', example: 'The red car is fast.' },
  { id: 'ball', word: 'ball', difficulty: 'easy', category: 'toys', phonetic: '/bɔːl/', definition: 'A round object for playing', example: 'I throw the ball.' },
  { id: 'fish', word: 'fish', difficulty: 'easy', category: 'animals', phonetic: '/fɪʃ/', definition: 'An animal that lives in water', example: 'The fish swims in the ocean.' },

  // Medium Words (Ages 7-10)
  { id: 'elephant', word: 'elephant', difficulty: 'medium', category: 'animals', phonetic: '/ˈelɪfənt/', definition: 'A large animal with a trunk', example: 'The elephant is very big.' },
  { id: 'butterfly', word: 'butterfly', difficulty: 'medium', category: 'animals', phonetic: '/ˈbʌtərflaɪ/', definition: 'A colorful flying insect', example: 'The butterfly lands on the flower.' },
  { id: 'mountain', word: 'mountain', difficulty: 'medium', category: 'nature', phonetic: '/ˈmaʊntən/', definition: 'A very tall hill', example: 'We climbed the mountain.' },
  { id: 'computer', word: 'computer', difficulty: 'medium', category: 'technology', phonetic: '/kəmˈpjuːtər/', definition: 'A machine for work and games', example: 'I use the computer for homework.' },
  { id: 'adventure', word: 'adventure', difficulty: 'medium', category: 'activities', phonetic: '/ədˈventʃər/', definition: 'An exciting journey', example: 'Going camping is an adventure.' },
  { id: 'beautiful', word: 'beautiful', difficulty: 'medium', category: 'descriptive', phonetic: '/ˈbjuːtɪfəl/', definition: 'Very pretty or nice', example: 'The sunset is beautiful.' },
  { id: 'magical', word: 'magical', difficulty: 'medium', category: 'descriptive', phonetic: '/ˈmædʒɪkəl/', definition: 'Having special powers', example: 'The fairy has magical powers.' },
  { id: 'gigantic', word: 'gigantic', difficulty: 'medium', category: 'descriptive', phonetic: '/dʒaɪˈɡæntɪk/', definition: 'Very, very big', example: 'The dinosaur was gigantic.' },
  { id: 'mysterious', word: 'mysterious', difficulty: 'medium', category: 'descriptive', phonetic: '/mɪˈstɪriəs/', definition: 'Hard to understand or explain', example: 'The old house looks mysterious.' },
  { id: 'wonderful', word: 'wonderful', difficulty: 'medium', category: 'descriptive', phonetic: '/ˈwʌndərfəl/', definition: 'Very good or amazing', example: 'The party was wonderful.' },

  // Hard Words (Ages 9-12)
  { id: 'encyclopedia', word: 'encyclopedia', difficulty: 'hard', category: 'school', phonetic: '/ɪnˌsaɪkləˈpiːdiə/', definition: 'A book with lots of information', example: 'I looked it up in the encyclopedia.' },
  { id: 'photosynthesis', word: 'photosynthesis', difficulty: 'hard', category: 'science', phonetic: '/ˌfoʊtoʊˈsɪnθəsɪs/', definition: 'How plants make food from sunlight', example: 'Plants use photosynthesis to grow.' },
  { id: 'archaeologist', word: 'archaeologist', difficulty: 'hard', category: 'professions', phonetic: '/ˌɑːrkiˈɑːlədʒɪst/', definition: 'A scientist who studies old things', example: 'The archaeologist found ancient bones.' },
  { id: 'magnificent', word: 'magnificent', difficulty: 'hard', category: 'descriptive', phonetic: '/mæɡˈnɪfɪsənt/', definition: 'Extremely beautiful or impressive', example: 'The castle was magnificent.' },
  { id: 'extraordinary', word: 'extraordinary', difficulty: 'hard', category: 'descriptive', phonetic: '/ɪkˈstrɔːrdəneri/', definition: 'Very unusual or remarkable', example: 'The magic trick was extraordinary.' },
  { id: 'responsibility', word: 'responsibility', difficulty: 'hard', category: 'character', phonetic: '/rɪˌspɑːnsəˈbɪləti/', definition: 'Something you must take care of', example: 'Taking care of pets is a responsibility.' },
  { id: 'imagination', word: 'imagination', difficulty: 'hard', category: 'mind', phonetic: '/ɪˌmædʒɪˈneɪʃən/', definition: 'The ability to create pictures in your mind', example: 'Use your imagination to write stories.' },
  { id: 'celebration', word: 'celebration', difficulty: 'hard', category: 'activities', phonetic: '/ˌseləˈbreɪʃən/', definition: 'A special party or event', example: 'We had a celebration for my birthday.' },
  { id: 'transportation', word: 'transportation', difficulty: 'hard', category: 'transport', phonetic: '/ˌtrænspərˈteɪʃən/', definition: 'Ways to move from place to place', example: 'Cars and buses are transportation.' },
  { id: 'communication', word: 'communication', difficulty: 'hard', category: 'social', phonetic: '/kəˌmjuːnɪˈkeɪʃən/', definition: 'Talking and sharing ideas', example: 'Good communication helps friendships.' }
];

// Spelling Challenges
export const spellingChallenges: SpellingChallenge[] = [
  {
    id: 'speed-round',
    title: 'Speed Round! ⚡',
    description: 'Spell as many words as possible in 60 seconds!',
    type: 'speed',
    difficulty: 'easy',
    duration: 60,
    wordCount: 20,
    ageRange: { min: 6, max: 12 },
    instructions: [
      'You have 60 seconds to spell as many words as possible',
      'Type each word as fast as you can',
      'Don\'t worry about mistakes - keep going!',
      'Try to beat your best score!'
    ],
    rules: [
      'No hints allowed in speed mode',
      'Words appear one at a time',
      'Timer starts when you begin',
      'Score is based on correct words per minute'
    ],
    rewards: [
      'Speed Master badge for 15+ words',
      'Lightning Fast badge for 20+ words',
      'Speed Demon badge for 25+ words'
    ],
    icon: '⚡'
  },
  {
    id: 'memory-round',
    title: 'Memory Round! 🧠',
    description: 'Listen to 3 words, then spell them in order!',
    type: 'memory',
    difficulty: 'medium',
    duration: 120,
    wordCount: 3,
    ageRange: { min: 7, max: 12 },
    instructions: [
      'I\'ll say 3 words for you to remember',
      'Listen carefully to each word',
      'When I\'m done, spell them in the same order',
      'Take your time - accuracy is more important than speed!'
    ],
    rules: [
      'Words are spoken once only',
      'You must spell them in the correct order',
      'You can ask to hear them again once',
      'All 3 words must be correct to pass'
    ],
    rewards: [
      'Memory Master badge for perfect recall',
      'Eagle Ears badge for no repeats needed',
      'Perfect Memory badge for 5 perfect rounds'
    ],
    icon: '🧠'
  },
  {
    id: 'surprise-round',
    title: 'Surprise Round! 🎲',
    description: 'Mix spelling with riddles and fun trivia!',
    type: 'surprise',
    difficulty: 'medium',
    duration: 180,
    wordCount: 10,
    ageRange: { min: 8, max: 12 },
    instructions: [
      'Answer riddles and trivia questions',
      'The answer is a word you need to spell',
      'Use hints if you get stuck',
      'Have fun and learn something new!'
    ],
    rules: [
      'Read the riddle or question carefully',
      'Think about what the answer might be',
      'Spell the answer word correctly',
      'You can use hints for extra help'
    ],
    rewards: [
      'Riddle Master badge for solving all riddles',
      'Trivia Champion badge for perfect trivia',
      'Surprise Expert badge for completing 10 rounds'
    ],
    icon: '🎲'
  }
];

// Word Lists by Category
export const wordLists: WordList[] = [
  {
    id: 'animals-easy',
    name: 'Animal Friends',
    description: 'Easy animal words for beginners',
    words: spellingWords.filter(w => w.category === 'animals' && w.difficulty === 'easy'),
    difficulty: 'easy',
    category: 'animals',
    isCustom: false,
    createdAt: new Date()
  },
  {
    id: 'nature-easy',
    name: 'Nature Words',
    description: 'Words about the natural world',
    words: spellingWords.filter(w => w.category === 'nature' && w.difficulty === 'easy'),
    difficulty: 'easy',
    category: 'nature',
    isCustom: false,
    createdAt: new Date()
  },
  {
    id: 'school-medium',
    name: 'School Words',
    description: 'Words you use at school',
    words: spellingWords.filter(w => w.category === 'school' && w.difficulty === 'medium'),
    difficulty: 'medium',
    category: 'school',
    isCustom: false,
    createdAt: new Date()
  },
  {
    id: 'science-hard',
    name: 'Science Words',
    description: 'Advanced science vocabulary',
    words: spellingWords.filter(w => w.category === 'science' && w.difficulty === 'hard'),
    difficulty: 'hard',
    category: 'science',
    isCustom: false,
    createdAt: new Date()
  }
];

// Riddles for Surprise Round
export const spellingRiddles: SpellingRiddle[] = [
  {
    id: 'riddle-1',
    riddle: 'I am a big animal with a long trunk. What am I?',
    answer: 'elephant',
    difficulty: 'easy',
    category: 'animals',
    hints: ['It has big ears', 'It lives in Africa and Asia', 'It can carry heavy things']
  },
  {
    id: 'riddle-2',
    riddle: 'I am a colorful insect that flies from flower to flower. What am I?',
    answer: 'butterfly',
    difficulty: 'easy',
    category: 'animals',
    hints: ['I have beautiful wings', 'I start as a caterpillar', 'I help flowers grow']
  },
  {
    id: 'riddle-3',
    riddle: 'I am very tall and have leaves on top. What am I?',
    answer: 'tree',
    difficulty: 'easy',
    category: 'nature',
    hints: ['I grow in the ground', 'Birds build nests in me', 'I give shade on sunny days']
  },
  {
    id: 'riddle-4',
    riddle: 'I am a machine that helps you do homework and play games. What am I?',
    answer: 'computer',
    difficulty: 'medium',
    category: 'technology',
    hints: ['I have a screen and keyboard', 'You can use me to write', 'I can connect to the internet']
  },
  {
    id: 'riddle-5',
    riddle: 'I am very, very big - bigger than a house! What am I?',
    answer: 'mountain',
    difficulty: 'medium',
    category: 'nature',
    hints: ['I am very tall', 'People climb me for fun', 'Snow sometimes falls on me']
  }
];

// Trivia for Surprise Round
export const spellingTrivia: SpellingTrivia[] = [
  {
    id: 'trivia-1',
    question: 'What do you call a scientist who studies ancient things?',
    answer: 'archaeologist',
    options: ['archaeologist', 'astronomer', 'biologist', 'geologist'],
    difficulty: 'hard',
    category: 'professions',
    explanation: 'An archaeologist studies ancient civilizations and artifacts!'
  },
  {
    id: 'trivia-2',
    question: 'What is the process called when plants make food from sunlight?',
    answer: 'photosynthesis',
    options: ['photosynthesis', 'respiration', 'digestion', 'fermentation'],
    difficulty: 'hard',
    category: 'science',
    explanation: 'Photosynthesis is how plants use sunlight to make their own food!'
  },
  {
    id: 'trivia-3',
    question: 'What do you call a book with lots of information about many topics?',
    answer: 'encyclopedia',
    options: ['encyclopedia', 'dictionary', 'atlas', 'textbook'],
    difficulty: 'medium',
    category: 'school',
    explanation: 'An encyclopedia has information about many different subjects!'
  },
  {
    id: 'trivia-4',
    question: 'What do you call the ability to create pictures in your mind?',
    answer: 'imagination',
    options: ['imagination', 'memory', 'concentration', 'meditation'],
    difficulty: 'medium',
    category: 'mind',
    explanation: 'Imagination lets you create and see things in your mind!'
  },
  {
    id: 'trivia-5',
    question: 'What do you call something that is extremely beautiful or impressive?',
    answer: 'magnificent',
    options: ['magnificent', 'ordinary', 'simple', 'boring'],
    difficulty: 'hard',
    category: 'descriptive',
    explanation: 'Magnificent means something is extremely beautiful or impressive!'
  }
];

// Helper functions
export const getWordsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): SpellingWord[] => {
  return spellingWords.filter(word => word.difficulty === difficulty);
};

export const getWordsByCategory = (category: string): SpellingWord[] => {
  return spellingWords.filter(word => word.category === category);
};

export const getRandomWords = (count: number, difficulty?: 'easy' | 'medium' | 'hard'): SpellingWord[] => {
  let words = difficulty ? getWordsByDifficulty(difficulty) : spellingWords;
  const shuffled = [...words].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getChallengeById = (id: string): SpellingChallenge | undefined => {
  return spellingChallenges.find(challenge => challenge.id === id);
};

export const getWordById = (id: string): SpellingWord | undefined => {
  return spellingWords.find(word => word.id === id);
};

export const getRandomRiddle = (): SpellingRiddle => {
  const randomIndex = Math.floor(Math.random() * spellingRiddles.length);
  return spellingRiddles[randomIndex];
};

export const getRandomTrivia = (): SpellingTrivia => {
  const randomIndex = Math.floor(Math.random() * spellingTrivia.length);
  return spellingTrivia[randomIndex];
};
