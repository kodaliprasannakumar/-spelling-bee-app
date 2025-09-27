import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dice6, Lightbulb, RotateCcw, Trophy, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { SpellingAnswer } from '@/types/spelling';
import { getRandomRiddle, getRandomTrivia, getRandomWords } from '@/data/spellingData';
import { SpellingRiddle, SpellingTrivia, SpellingWord } from '@/types/spelling';
import { tts } from '@/utils/textToSpeech';

interface SurpriseRoundProps {
  onComplete: (score: number, accuracy: number, timeSpent: number) => void;
  onReset: () => void;
}

type QuestionType = 'riddle' | 'trivia';

interface Question {
  id: string;
  type: QuestionType;
  content: SpellingRiddle | SpellingTrivia;
  answer: string;
  hints: string[];
}

const SurpriseRound: React.FC<SurpriseRoundProps> = ({ onComplete, onReset }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [answers, setAnswers] = useState<SpellingAnswer[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const accuracy = answers.length > 0 ? (correctAnswers / answers.length) * 100 : 0;
  const timeSpent = startTime ? Math.round((Date.now() - startTime.getTime()) / 1000) : 0;

  useEffect(() => {
    generateQuestions();
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Auto-speak the question after 500ms
    const timer = setTimeout(() => {
      if (currentQuestion && currentQuestion.content && currentQuestion.content.question) {
        tts.speakWordQuick(currentQuestion.content.question);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentQuestionIndex, currentQuestion]);

  const generateQuestions = () => {
    const newQuestions: Question[] = [];
    
    // Generate 5 riddles
    for (let i = 0; i < 5; i++) {
      const riddle = getRandomRiddle();
      newQuestions.push({
        id: `riddle-${i}`,
        type: 'riddle',
        content: riddle,
        answer: riddle.answer,
        hints: riddle.hints
      });
    }
    
    // Generate 5 trivia questions
    for (let i = 0; i < 5; i++) {
      const trivia = getRandomTrivia();
      newQuestions.push({
        id: `trivia-${i}`,
        type: 'trivia',
        content: trivia,
        answer: trivia.answer,
        hints: [trivia.explanation]
      });
    }
    
    // Shuffle the questions
    const shuffled = newQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10)); // Take 10 questions
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuestion || !userInput.trim()) return;

    const isCorrect = userInput.toLowerCase().trim() === currentQuestion.answer.toLowerCase();
    const newAnswer: SpellingAnswer = {
      wordId: currentQuestion.id,
      userSpelling: userInput.trim(),
      isCorrect,
      timeSpent: 0,
      attempts: 1,
      hintsUsed: hintsUsed
    };

    setAnswers(prev => [...prev, newAnswer]);
    setUserInput('');
    setShowHint(false);
    setHintsUsed(0);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
      setShowResults(true);
    }
  };

  const handleHint = () => {
    setShowHint(true);
    setHintsUsed(prev => prev + 1);
  };

  const handleComplete = () => {
    onComplete(correctAnswers, accuracy, timeSpent);
  };

  const resetRound = () => {
    generateQuestions();
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setUserInput('');
    setShowHint(false);
    setHintsUsed(0);
    setIsCompleted(false);
    setShowResults(false);
    setStartTime(new Date());
  };

  if (showResults) {
    return (
      <Card className="p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Dice6 className="w-10 h-10 text-pink-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Surprise Round Complete! 🎲
          </h2>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{correctAnswers}</div>
              <div className="text-sm text-gray-600">Questions Correct</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{Math.round(accuracy)}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">{timeSpent}s</div>
              <div className="text-sm text-gray-600">Time Taken</div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900">Your Performance:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {correctAnswers >= 8 && (
                <Badge className="bg-yellow-100 text-yellow-800">Riddle Master! 🧩</Badge>
              )}
              {correctAnswers >= 9 && (
                <Badge className="bg-orange-100 text-orange-800">Trivia Champion! 🏆</Badge>
              )}
              {correctAnswers === 10 && (
                <Badge className="bg-red-100 text-red-800">Surprise Expert! 🎯</Badge>
              )}
              {accuracy >= 90 && (
                <Badge className="bg-green-100 text-green-800">Perfect Speller! ✨</Badge>
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

  if (!currentQuestion) {
    return (
      <Card className="p-8 text-center">
        <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Dice6 className="w-10 h-10 text-pink-600" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Loading Surprise Round... 🎲
        </h2>
        
        <p className="text-gray-600">
          Preparing riddles and trivia questions for you!
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-lg font-semibold text-gray-900">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {currentQuestion.type === 'riddle' ? '🧩 Riddle' : '❓ Trivia'}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {currentQuestion.content.difficulty}
          </Badge>
        </div>
      </div>

      <Progress 
        value={((currentQuestionIndex + 1) / questions.length) * 100} 
        className="mb-8"
      />

      <div className="text-center mb-8">
        <motion.div
          key={currentQuestionIndex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-pink-50 border border-pink-200 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-pink-900 mb-4">
            {currentQuestion.type === 'riddle' ? '🧩 Riddle Time!' : '❓ Trivia Time!'}
          </h3>
          
          <div className="text-lg text-pink-800 mb-6">
            {currentQuestion.type === 'riddle' 
              ? (currentQuestion.content as SpellingRiddle).riddle
              : (currentQuestion.content as SpellingTrivia).question
            }
          </div>

          {currentQuestion.type === 'trivia' && (
            <div className="grid grid-cols-2 gap-2 mb-6">
              {(currentQuestion.content as SpellingTrivia).options.map((option, index) => (
                <div key={index} className="bg-white border border-pink-200 rounded-lg p-3 text-sm">
                  {String.fromCharCode(65 + index)}. {option}
                </div>
              ))}
            </div>
          )}

          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4"
            >
              <div className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-yellow-900 mb-1">Hint:</h4>
                  <p className="text-yellow-800 text-sm">
                    {currentQuestion.hints[hintsUsed - 1] || currentQuestion.hints[0]}
                  </p>
                </div>
              </div>
            </motion.div>
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
            placeholder="Type your answer here..."
            className="w-full max-w-md text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg px-6 py-4 focus:border-pink-500 focus:outline-none"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button 
            type="button"
            onClick={handleHint}
            variant="outline"
            className="text-pink-600 border-pink-300 hover:bg-pink-50"
            disabled={hintsUsed >= currentQuestion.hints.length}
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Hint ({hintsUsed}/{currentQuestion.hints.length})
          </Button>
          
          <Button 
            type="submit" 
            className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-3"
            disabled={!userInput.trim()}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Round'}
          </Button>
        </div>
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
};

export default SurpriseRound;
