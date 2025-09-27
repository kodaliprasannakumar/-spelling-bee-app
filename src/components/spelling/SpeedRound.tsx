import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, XCircle, RotateCcw, Trophy, Zap, Volume2, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { SpellingWord, SpellingAnswer } from '@/types/spelling';
import { getRandomWords } from '@/data/spellingData';
import { tts } from '@/utils/textToSpeech';

interface SpeedRoundProps {
  words: SpellingWord[];
  onComplete: (score: number, accuracy: number, timeSpent: number) => void;
  onReset: () => void;
}

const SpeedRound: React.FC<SpeedRoundProps> = ({ words, onComplete, onReset }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [answers, setAnswers] = useState<SpellingAnswer[]>([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentWord = words[currentWordIndex];
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const accuracy = answers.length > 0 ? (correctAnswers / answers.length) * 100 : 0;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setIsActive(false);
            setIsCompleted(true);
            setShowResult(true);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
    
    // Auto-speak the word after 500ms when active
    if (isActive) {
      const timer = setTimeout(() => {
        if (currentWord) {
          tts.speakWordQuick(currentWord.word);
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, currentWordIndex, currentWord]);

  const startRound = () => {
    setIsActive(true);
    setTimeLeft(60);
    setCurrentWordIndex(0);
    setAnswers([]);
    setUserInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isActive || !currentWord) return;

    const isCorrect = userInput.toLowerCase().trim() === currentWord.word.toLowerCase();
    const newAnswer: SpellingAnswer = {
      wordId: currentWord.id,
      userSpelling: userInput.trim(),
      isCorrect,
      timeSpent: 0, // Speed round doesn't track individual word time
      attempts: 1,
      hintsUsed: 0
    };

    setAnswers(prev => [...prev, newAnswer]);
    setUserInput('');

    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      // All words completed, but time might still be left
      if (timeLeft > 0) {
        // Reset to first word for another round
        setCurrentWordIndex(0);
      }
    }
  };

  const handleComplete = () => {
    const timeSpent = 60 - timeLeft;
    onComplete(correctAnswers, accuracy, timeSpent);
  };

  const resetRound = () => {
    setIsActive(false);
    setIsCompleted(false);
    setShowResult(false);
    setTimeLeft(60);
    setCurrentWordIndex(0);
    setAnswers([]);
    setUserInput('');
  };

  if (showResult) {
    return (
      <Card className="p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-yellow-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Speed Round Complete! ⚡
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
              <div className="text-3xl font-bold text-purple-600">{60 - timeLeft}s</div>
              <div className="text-sm text-gray-600">Time Used</div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900">Your Performance:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {correctAnswers >= 15 && (
                <Badge className="bg-yellow-100 text-yellow-800">Speed Master! 🏆</Badge>
              )}
              {correctAnswers >= 20 && (
                <Badge className="bg-orange-100 text-orange-800">Lightning Fast! ⚡</Badge>
              )}
              {correctAnswers >= 25 && (
                <Badge className="bg-red-100 text-red-800">Speed Demon! 🔥</Badge>
              )}
              {accuracy >= 90 && (
                <Badge className="bg-green-100 text-green-800">Accuracy Master! 🎯</Badge>
              )}
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

  if (!isActive && !isCompleted) {
    return (
      <Card className="p-8 text-center">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Zap className="w-10 h-10 text-yellow-600" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Speed Round Ready! ⚡
        </h2>
        
        <p className="text-gray-600 mb-6">
          You have 60 seconds to spell as many words as possible. 
          Type fast and don't worry about mistakes - just keep going!
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-yellow-900 mb-2">Rules:</h3>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• 60 seconds on the clock</li>
            <li>• Spell as many words as you can</li>
            <li>• Press Enter to submit each word</li>
            <li>• Keep going even if you make mistakes!</li>
          </ul>
        </div>

        <Button onClick={startRound} className="bg-yellow-600 hover:bg-yellow-700 text-lg px-8 py-3">
          <Zap className="w-5 h-5 mr-2" />
          Start Speed Round!
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-red-600" />
            <span className="text-2xl font-bold text-red-600">{timeLeft}</span>
          </div>
          <div className="text-gray-600">
            Word {currentWordIndex + 1} of {words.length}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Correct: {correctAnswers}</div>
          <div className="text-sm text-gray-600">Accuracy: {Math.round(accuracy)}%</div>
        </div>
      </div>

      <Progress 
        value={((currentWordIndex + 1) / words.length) * 100} 
        className="mb-8"
      />

      <div className="text-center mb-8">
        <motion.div
          key={currentWordIndex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">⚡🗣️</span>
              <h3 className="text-3xl font-bold text-blue-900">
                Quick Listen & Spell
              </h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => tts.speakWordQuick(currentWord?.word || '')}
              className="bg-white hover:bg-blue-100"
            >
              <Volume2 className="w-4 h-4" />
            </Button>
          </div>
          
          {currentWord?.phonetic && (
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="text-lg text-blue-700">
                /{currentWord.phonetic}/
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => tts.speakWordQuick(`Phonetic: ${currentWord.phonetic}`)}
                className="bg-white hover:bg-blue-100"
              >
                <Play className="w-3 h-3" />
              </Button>
            </div>
          )}
          
          {currentWord?.definition && (
            <div className="flex items-center justify-center gap-2 mb-4">
              <p className="text-gray-600">
                {currentWord.definition}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => tts.speakWordQuick(`Definition: ${currentWord.definition}`)}
                className="bg-white hover:bg-blue-100"
              >
                <Play className="w-3 h-3" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>

      <form onSubmit={handleSubmit} className="text-center">
        <div className="mb-6">
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type the word here..."
            className="w-full max-w-md text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg px-6 py-4 focus:border-blue-500 focus:outline-none"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        
        <Button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          disabled={!userInput.trim()}
        >
          Submit Word
        </Button>
      </form>

      {/* Recent Results */}
      {answers.length > 0 && (
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Results:</h4>
          <div className="flex flex-wrap gap-2">
            {answers.slice(-5).map((answer, index) => (
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
};

export default SpeedRound;
