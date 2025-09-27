import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Zap, Dice6, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { spellingChallenges, getRandomWords } from '@/data/spellingData';
import { SpellingChallenge, SpellingProgress } from '@/types/spelling';
import SpeedRound from '@/components/spelling/SpeedRound';
import MemoryRound from '@/components/spelling/MemoryRound';
import SurpriseRound from '@/components/spelling/SurpriseRound';

const SpellingLab: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<SpellingChallenge | null>(null);
  const [isChallengeActive, setIsChallengeActive] = useState(false);
  const [userProgress, setUserProgress] = useState<SpellingProgress>({
    totalSessions: 0,
    totalWords: 0,
    correctWords: 0,
    accuracy: 0,
    averageTime: 0,
    challengesCompleted: [],
    achievements: [],
    hardestWords: [],
    favoriteCategories: [],
    streak: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalTimeSpent: 0,
    lastActive: new Date()
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem('spellingProgress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  const saveProgress = (progress: SpellingProgress) => {
    setUserProgress(progress);
    localStorage.setItem('spellingProgress', JSON.stringify(progress));
  };

  const startChallenge = (challenge: SpellingChallenge) => {
    setSelectedChallenge(challenge);
    setIsChallengeActive(true);
  };

  const completeChallenge = (_score: number, accuracy: number, timeSpent: number) => {
    if (!selectedChallenge) return;
    
    const newProgress = {
      ...userProgress,
      totalSessions: userProgress.totalSessions + 1,
      totalWords: userProgress.totalWords + (selectedChallenge.wordCount || 0),
      correctWords: userProgress.correctWords + Math.round((selectedChallenge.wordCount || 0) * (accuracy / 100)),
      accuracy: userProgress.totalWords > 0 ? 
        ((userProgress.correctWords + Math.round((selectedChallenge.wordCount || 0) * (accuracy / 100))) / 
         (userProgress.totalWords + (selectedChallenge.wordCount || 0))) * 100 : accuracy,
      averageTime: userProgress.totalSessions > 0 ? 
        (userProgress.averageTime * userProgress.totalSessions + timeSpent) / (userProgress.totalSessions + 1) : timeSpent,
      challengesCompleted: [...userProgress.challengesCompleted, selectedChallenge.id],
      totalTimeSpent: userProgress.totalTimeSpent + timeSpent
    };
    
    saveProgress(newProgress);
    setIsChallengeActive(false);
    setSelectedChallenge(null);
  };

  const resetChallenge = () => {
    setIsChallengeActive(false);
    setSelectedChallenge(null);
  };

  const getChallengeIcon = (type: string) => {
    switch (type) {
      case 'speed': return <Zap className="w-8 h-8" />;
      case 'memory': return <Brain className="w-8 h-8" />;
      case 'surprise': return <Dice6 className="w-8 h-8" />;
      default: return <BookOpen className="w-8 h-8" />;
    }
  };

  const getChallengeGradient = (type: string) => {
    switch (type) {
      case 'speed': return 'from-yellow-500 to-orange-500';
      case 'memory': return 'from-purple-500 to-pink-500';
      case 'surprise': return 'from-green-500 to-blue-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Page Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Spelling Lab</h1>
                  <p className="text-sm text-gray-600">Master spelling with fun challenges!</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-sm">
                <Trophy className="w-3 h-3 mr-1" />
                {userProgress.challengesCompleted.length} Completed
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Star className="w-3 h-3 mr-1" />
                {Math.round(userProgress.accuracy)}% Accuracy
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isChallengeActive ? (
          // Challenge Selection View
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Welcome to Spelling Lab! 🐝
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Choose your challenge and master spelling with interactive games, 
                  voice output, and phonetic pronunciation guides.
                </p>
              </motion.div>
            </div>

            {/* Challenge Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {spellingChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                        onClick={() => startChallenge(challenge)}>
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${getChallengeGradient(challenge.type)} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {getChallengeIcon(challenge.type)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {challenge.description}
                      </p>
                      <div className="flex justify-center gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {challenge.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {challenge.duration}s
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {challenge.wordCount} words
                        </Badge>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Start Challenge
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* How It Works */}
            <Card className="mt-6 p-6 bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎧</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Listen</h4>
                  <p className="text-sm text-gray-600">Words are spoken aloud with phonetic pronunciation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Spell</h4>
                  <p className="text-sm text-gray-600">Type the word you heard correctly</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Learn</h4>
                  <p className="text-sm text-gray-600">Track your progress and improve your skills</p>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          // Active Challenge View
          <div className="max-w-4xl mx-auto">
            {selectedChallenge?.type === 'speed' && (
              <SpeedRound
                words={getRandomWords(20, 'easy')}
                onComplete={completeChallenge}
                onReset={resetChallenge}
              />
            )}
            {selectedChallenge?.type === 'memory' && (
              <MemoryRound
                words={getRandomWords(60, 'medium')}
                onComplete={completeChallenge}
                onReset={resetChallenge}
              />
            )}
            {selectedChallenge?.type === 'surprise' && (
              <SurpriseRound
                onComplete={completeChallenge}
                onReset={resetChallenge}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpellingLab;