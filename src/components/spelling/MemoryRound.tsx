import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Play, RotateCcw, Trophy, CheckCircle, XCircle, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { SpellingWord, SpellingAnswer } from '@/types/spelling';
import { tts } from '@/utils/textToSpeech';

interface MemoryRoundProps {
  words: SpellingWord[];
  onComplete: (score: number, accuracy: number, timeSpent: number) => void;
  onReset: () => void;
}

const MemoryRound: React.FC<MemoryRoundProps> = ({ words, onComplete, onReset }) => {
  const [phase, setPhase] = useState<'intro' | 'listening' | 'spelling' | 'results'>('intro');
  const [currentRound, setCurrentRound] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const [answers, setAnswers] = useState<SpellingAnswer[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [allRounds, setAllRounds] = useState<SpellingWord[][]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const TOTAL_ROUNDS = 20;
  const WORDS_PER_ROUND = 3;

  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const accuracy = answers.length > 0 ? (correctAnswers / answers.length) * 100 : 0;
  const timeSpent = startTime ? Math.round((Date.now() - startTime.getTime()) / 1000) : 0;
  
  // Get current round's words
  const currentRoundWords = allRounds[currentRound] || [];
  
  // Generate all rounds on component mount
  useEffect(() => {
    const rounds: SpellingWord[][] = [];
    for (let i = 0; i < TOTAL_ROUNDS; i++) {
      // Generate 3 random words for each round
      const roundWords = words.slice(i * WORDS_PER_ROUND, (i + 1) * WORDS_PER_ROUND);
      if (roundWords.length === WORDS_PER_ROUND) {
        rounds.push(roundWords);
      }
    }
    setAllRounds(rounds);
  }, [words]);

  useEffect(() => {
    if (phase === 'spelling' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [phase, currentWordIndex]);

  const startListening = async () => {
    setPhase('listening');
    setIsPlaying(true);
    setStartTime(new Date());
    
    // Start playing all words
    await playAllWords();
  };

  const playWord = (word: SpellingWord, index: number) => {
    return new Promise<void>((resolve) => {
      // Use actual text-to-speech
      console.log(`Playing word ${index + 1}: ${word.word}`);
      tts.speakWordQuick(word.word);
      
      // Wait for speech to complete (approximate timing)
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const playAllWords = async () => {
    for (let i = 0; i < currentRoundWords.length; i++) {
      await playWord(currentRoundWords[i], i);
    }
    setIsPlaying(false);
    setPhase('spelling');
  };

  // Auto-speak when spelling phase starts
  useEffect(() => {
    console.log('Memory Round useEffect triggered:', { phase, wordsLength: currentRoundWords.length, currentWordIndex, currentRound }); // Debug log
    if (phase === 'spelling' && currentRoundWords.length > 0) {
      const timer = setTimeout(() => {
        const currentWord = currentRoundWords[currentWordIndex];
        console.log('Current word for auto-speak:', currentWord); // Debug log
        if (currentWord && currentWord.word) {
          console.log('Auto-speaking word:', currentWord.word); // Debug log
          tts.speakWordQuick(currentWord.word);
        } else {
          console.log('No word to speak or word is invalid'); // Debug log
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [phase, currentRoundWords, currentRound]);

  // Auto-speak when moving to next word in spelling phase
  useEffect(() => {
    if (phase === 'spelling' && currentWordIndex > 0) {
      const timer = setTimeout(() => {
        const currentWord = currentRoundWords[currentWordIndex];
        console.log('Auto-speaking next word:', currentWord); // Debug log
        if (currentWord && currentWord.word) {
          tts.speakWordQuick(currentWord.word);
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [currentWordIndex, phase, currentRoundWords]);

  const handleWordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInputs[currentWordIndex]) return;

    const currentWord = currentRoundWords[currentWordIndex];
    const isCorrect = userInputs[currentWordIndex].toLowerCase().trim() === currentWord.word.toLowerCase();
    
    const newAnswer: SpellingAnswer = {
      wordId: currentWord.id,
      userSpelling: userInputs[currentWordIndex].trim(),
      isCorrect,
      timeSpent: 0,
      attempts: 1,
      hintsUsed: 0
    };

    setAnswers(prev => [...prev, newAnswer]);

    if (currentWordIndex < currentRoundWords.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      // Round completed, check if there are more rounds
      if (currentRound < TOTAL_ROUNDS - 1) {
        // Move to next round
        setCurrentRound(prev => prev + 1);
        setCurrentWordIndex(0);
        setUserInputs([]);
        setPhase('intro');
      } else {
        // All rounds completed
        setPhase('results');
        setShowResults(true);
      }
    }
  };

  const handleInputChange = (value: string) => {
    const newInputs = [...userInputs];
    newInputs[currentWordIndex] = value;
    setUserInputs(newInputs);
  };

  const handleComplete = () => {
    onComplete(correctAnswers, accuracy, timeSpent);
  };

  const resetRound = () => {
    setPhase('intro');
    setCurrentRound(0);
    setCurrentWordIndex(0);
    setUserInputs([]);
    setAnswers([]);
    setIsPlaying(false);
    setShowResults(false);
    setStartTime(null);
  };

  const replayWords = () => {
    setPhase('listening');
    setIsPlaying(true);
  };

  if (showResults) {
    return (
      <Card className="p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-purple-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Memory Round Complete! 🧠
          </h2>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{correctAnswers}</div>
              <div className="text-sm text-gray-600">Words Correct</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{Math.round(accuracy)}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{timeSpent}s</div>
              <div className="text-sm text-gray-600">Time Taken</div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900">Your Results:</h3>
            <div className="space-y-2">
              {words.map((word, index) => {
                const answer = answers[index];
                return (
                  <div key={word.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      {answer?.isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="font-medium">{word.word}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {answer?.userSpelling || 'Not answered'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button onClick={handleComplete} className="bg-green-600 hover:bg-green-700">
              <Trophy className="w-4 h-4 mr-2" />
              Continue
            </Button>
            <Button onClick={resetRound} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </motion.div>
      </Card>
    );
  }

  if (phase === 'intro') {
    return (
      <Card className="p-8 text-center">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Brain className="w-10 h-10 text-purple-600" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Memory Round {currentRound + 1} of {TOTAL_ROUNDS}! 🧠
        </h2>
        
        <p className="text-gray-600 mb-6">
          I'll say {currentRoundWords.length} words for you to remember. 
          Listen carefully, then spell them in the same order!
        </p>
        
        <div className="mb-6">
          <div className="flex justify-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress: {currentRound + 1}/{TOTAL_ROUNDS} rounds</span>
          </div>
          <Progress value={((currentRound + 1) / TOTAL_ROUNDS) * 100} className="w-full max-w-xs mx-auto" />
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-purple-900 mb-2">Instructions:</h3>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Listen to all {currentRoundWords.length} words carefully</li>
            <li>• Remember the order they were spoken</li>
            <li>• Spell them in the same order</li>
            <li>• Take your time - accuracy is important!</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-2">Words you'll hear:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {currentRoundWords.map((word, index) => (
              <Badge key={word.id} variant="outline" className="text-sm">
                {index + 1}. 🧠🗣️
              </Badge>
            ))}
          </div>
        </div>

        <Button onClick={startListening} className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
          <Play className="w-5 h-5 mr-2" />
          Start Listening
        </Button>
      </Card>
    );
  }

  if (phase === 'listening') {
    return (
      <Card className="p-8 text-center">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Volume2 className="w-10 h-10 text-purple-600" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Round {currentRound + 1} - Listen Carefully! 👂
        </h2>
        
        <p className="text-gray-600 mb-6">
          I'm about to say {currentRoundWords.length} words. Remember them in order!
        </p>
        
        <div className="mb-6">
          <div className="flex justify-center mb-2">
            <span className="text-sm font-medium text-gray-700">Round {currentRound + 1} of {TOTAL_ROUNDS}</span>
          </div>
          <Progress value={((currentRound + 1) / TOTAL_ROUNDS) * 100} className="w-full max-w-xs mx-auto" />
        </div>

        {isPlaying && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6"
          >
            <div className="text-lg font-semibold text-purple-900 mb-2">
              Playing words...
            </div>
            <div className="text-sm text-purple-700">
              Listen carefully and remember the order!
            </div>
          </motion.div>
        )}

        <Button 
          onClick={playAllWords} 
          className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
          disabled={isPlaying}
        >
          <Play className="w-5 h-5 mr-2" />
          {isPlaying ? 'Playing...' : 'Play Words'}
        </Button>
      </Card>
    );
  }

  if (phase === 'spelling') {
    return (
      <Card className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="text-lg font-semibold text-gray-900">
            Round {currentRound + 1} - Word {currentWordIndex + 1} of {currentRoundWords.length}
          </div>
          <div className="flex gap-2">
            <Button onClick={replayWords} variant="outline" size="sm">
              <Volume2 className="w-4 h-4 mr-1" />
              Replay
            </Button>
          </div>
        </div>

        <Progress 
          value={((currentWordIndex + 1) / currentRoundWords.length) * 100} 
          className="mb-8"
        />

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">🧠</span>
            <h3 className="text-2xl font-bold text-gray-900">
              Spell word #{currentWordIndex + 1}
            </h3>
            <span className="text-3xl">🗣️</span>
          </div>
          <p className="text-gray-600 mb-4">
            Remember the order - this is word {currentWordIndex + 1} of {currentRoundWords.length}
          </p>
          <Button
            onClick={() => {
              const currentWord = currentRoundWords[currentWordIndex];
              console.log('Manual speak clicked:', currentWord); // Debug log
              if (currentWord && currentWord.word) {
                console.log('Speaking word manually:', currentWord.word); // Debug log
                tts.speakWordQuick(currentWord.word);
              } else {
                console.log('No word to speak or word is invalid'); // Debug log
              }
            }}
            variant="outline"
            size="sm"
            className="bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200"
          >
            <Volume2 className="w-4 h-4 mr-2" />
            Hear Word Again
          </Button>
        </div>

        {/* Word Information Display */}
        {currentRoundWords[currentWordIndex] && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-blue-900 mb-4">
                Word #{currentWordIndex + 1} Information
              </h4>
              
              {/* Phonetic Pronunciation */}
              {currentRoundWords[currentWordIndex].phonetic && (
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-sm font-medium text-blue-700">Phonetic:</span>
                    <span className="text-lg font-mono text-blue-800">
                      /{currentRoundWords[currentWordIndex].phonetic}/
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => tts.speakWordQuick(`Phonetic: ${currentRoundWords[currentWordIndex].phonetic}`)}
                      className="bg-white hover:bg-blue-100"
                    >
                      <Volume2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Definition */}
              {currentRoundWords[currentWordIndex].definition && (
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-sm font-medium text-blue-700">Definition:</span>
                    <span className="text-base text-blue-800">
                      {currentRoundWords[currentWordIndex].definition}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => tts.speakWordQuick(`Definition: ${currentRoundWords[currentWordIndex].definition}`)}
                      className="bg-white hover:bg-blue-100"
                    >
                      <Volume2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Example */}
              {currentRoundWords[currentWordIndex].example && (
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-sm font-medium text-blue-700">Example:</span>
                    <span className="text-sm text-blue-800 italic">
                      {currentRoundWords[currentWordIndex].example}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => tts.speakWordQuick(`Example: ${currentRoundWords[currentWordIndex].example}`)}
                      className="bg-white hover:bg-blue-100"
                    >
                      <Volume2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Play All Information */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const word = currentRoundWords[currentWordIndex];
                  tts.speakWord(word.word, word.phonetic, word.definition);
                }}
                className="bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Play All Information
              </Button>
            </div>
          </div>
        )}

        <form onSubmit={handleWordSubmit} className="text-center">
          <div className="mb-6">
            <input
              ref={inputRef}
              type="text"
              value={userInputs[currentWordIndex] || ''}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Type the word here..."
              className="w-full max-w-md text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg px-6 py-4 focus:border-purple-500 focus:outline-none"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          
          <Button 
            type="submit" 
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
            disabled={!userInputs[currentWordIndex]?.trim()}
          >
            {currentWordIndex < currentRoundWords.length - 1 ? 'Next Word' : (currentRound < TOTAL_ROUNDS - 1 ? 'Next Round' : 'Finish All Rounds')}
          </Button>
        </form>

        {/* Progress so far */}
        {answers.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Progress:</h4>
            <div className="flex flex-wrap gap-2">
              {answers.map((answer, index) => (
                <div key={index} className="flex items-center gap-2">
                  {answer.isCorrect ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600" />
                  )}
                  <span className="text-sm">{answer.userSpelling}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    );
  }

  return null;
};

export default MemoryRound;
