import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';
import { useMode } from '../context/ModeContext';
import {
  Trophy,
  Star,
  Zap,
  Target,
  Award,
  Crown,
  Swords,
  Shield,
  Diamond,
  CircleDollarSign,
  Flame,
  Brain,
  Clock,
  Users,
  BookOpen,
  Code,
  Calculator,
  Atom,
  Globe,
  Lightbulb,
  CheckCircle,
  Play,
  RotateCcw,
  TrendingUp,
  Medal,
  Gamepad2
} from 'lucide-react';

const GamifiedPage = () => {
  const { getCurrentTheme } = useMode();
  const theme = getCurrentTheme();
  
  const [playerStats, setPlayerStats] = useState({
    level: 15,
    xp: 2340,
    xpToNext: 660,
    coins: 1250,
    gems: 45,
    streak: 12,
    achievements: 23,
    rank: 'Gold Scholar'
  });

  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const subjects = [
    { id: 'math', name: 'Mathematics', icon: Calculator, color: 'from-blue-500 to-blue-700', unlocked: true },
    { id: 'physics', name: 'Physics', icon: Atom, color: 'from-green-500 to-green-700', unlocked: true },
    { id: 'chemistry', name: 'Chemistry', icon: Globe, color: 'from-purple-500 to-purple-700', unlocked: true },
    { id: 'cs', name: 'Computer Science', icon: Code, color: 'from-orange-500 to-orange-700', unlocked: true },
    { id: 'english', name: 'English', icon: BookOpen, color: 'from-pink-500 to-pink-700', unlocked: playerStats.level >= 10 },
    { id: 'biology', name: 'Biology', icon: Lightbulb, color: 'from-teal-500 to-teal-700', unlocked: playerStats.level >= 20 }
  ];

  const gameTypes = [
    {
      id: 'quiz',
      name: 'Quick Quiz',
      description: 'Answer questions to earn XP and coins',
      icon: Brain,
      rewards: '10-50 XP, 5-25 Coins',
      difficulty: 'Easy to Hard',
      time: '2-5 minutes'
    },
    {
      id: 'challenge',
      name: 'Challenge Mode',
      description: 'Timed challenges with bonus multipliers',
      icon: Zap,
      rewards: '50-200 XP, 25-100 Coins',
      difficulty: 'Medium to Expert',
      time: '5-15 minutes'
    },
    {
      id: 'brainstorm',
      name: 'Brainstorm Arena',
      description: 'Creative problem-solving activities',
      icon: Lightbulb,
      rewards: '30-100 XP, Gems',
      difficulty: 'Variable',
      time: '10-30 minutes'
    },
    {
      id: 'battle',
      name: 'Knowledge Battle',
      description: 'Compete against other players',
      icon: Swords,
      rewards: '100-500 XP, Rank Points',
      difficulty: 'Competitive',
      time: '15-20 minutes'
    }
  ];

  const achievements = [
    { id: 1, name: 'First Steps', description: 'Complete your first quiz', icon: Star, unlocked: true, rarity: 'common' },
    { id: 2, name: 'Speed Demon', description: 'Answer 10 questions in under 30 seconds', icon: Zap, unlocked: true, rarity: 'uncommon' },
    { id: 3, name: 'Perfectionist', description: 'Get 100% on a hard quiz', icon: Target, unlocked: true, rarity: 'rare' },
    { id: 4, name: 'Knowledge Seeker', description: 'Complete 50 quizzes', icon: BookOpen, unlocked: false, rarity: 'epic' },
    { id: 5, name: 'Grand Master', description: 'Reach level 50', icon: Crown, unlocked: false, rarity: 'legendary' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', level: 28, xp: 5680, avatar: '👨‍💻' },
    { rank: 2, name: 'Sarah Kim', level: 26, xp: 5420, avatar: '👩‍🔬' },
    { rank: 3, name: 'Mike Johnson', level: 25, xp: 5200, avatar: '👨‍🎓' },
    { rank: 4, name: 'You', level: playerStats.level, xp: playerStats.xp, avatar: '😊' },
    { rank: 5, name: 'Emma Davis', level: 23, xp: 4800, avatar: '👩‍💻' }
  ];

  const quizQuestions = {
    math: [
      {
        question: "What is the derivative of x²?",
        options: ["2x", "x", "2", "x²"],
        correct: 0,
        difficulty: "medium",
        explanation: "The derivative of x² is 2x using the power rule."
      },
      {
        question: "What is the value of π (pi) approximately?",
        options: ["3.14159", "2.71828", "1.41421", "1.61803"],
        correct: 0,
        difficulty: "easy",
        explanation: "π (pi) is approximately 3.14159..."
      }
    ],
    physics: [
      {
        question: "What is the speed of light in vacuum?",
        options: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁹ m/s"],
        correct: 0,
        difficulty: "medium",
        explanation: "The speed of light in vacuum is approximately 3×10⁸ meters per second."
      }
    ],
    cs: [
      {
        question: "Which data structure uses LIFO principle?",
        options: ["Stack", "Queue", "Array", "Tree"],
        correct: 0,
        difficulty: "easy",
        explanation: "Stack follows Last In, First Out (LIFO) principle."
      }
    ]
  };

  const startQuiz = (subject) => {
    const questions = quizQuestions[subject] || [];
    if (questions.length > 0) {
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
      setCurrentQuiz({...randomQuestion, subject});
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const submitAnswer = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
      if (selectedAnswer === currentQuiz.correct) {
        const xpGain = currentQuiz.difficulty === 'easy' ? 10 : currentQuiz.difficulty === 'medium' ? 20 : 30;
        const coinGain = Math.floor(xpGain / 2);
        
        setPlayerStats(prev => ({
          ...prev,
          xp: prev.xp + xpGain,
          coins: prev.coins + coinGain
        }));
        setScore(prev => prev + 1);
      }
    }
  };

  const nextQuestion = () => {
    const questions = quizQuestions[currentQuiz.subject] || [];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuiz({...randomQuestion, subject: currentQuiz.subject});
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className={`min-h-screen ${theme.background} ${theme.darkBackground} pt-16 py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Player Stats */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className={`text-3xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary} flex items-center`}>
                🎮 Gamified Learning
                <span className="ml-3 text-lg text-yellow-500">Level {playerStats.level}</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Learn through engaging games and challenges
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="flex items-center text-yellow-500">
                  <CircleDollarSign className="w-5 h-5 mr-1" />
                  <span className="font-bold">{playerStats.coins}</span>
                </div>
                <div className="text-xs text-gray-500">Coins</div>
              </div>
              <div className="text-center">
                <div className="flex items-center text-purple-500">
                  <Diamond className="w-5 h-5 mr-1" />
                  <span className="font-bold">{playerStats.gems}</span>
                </div>
                <div className="text-xs text-gray-500">Gems</div>
              </div>
              <div className="text-center">
                <div className="flex items-center text-orange-500">
                  <Flame className="w-5 h-5 mr-1" />
                  <span className="font-bold">{playerStats.streak}</span>
                </div>
                <div className="text-xs text-gray-500">Streak</div>
              </div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder} p-4`}>
            <div className="flex items-center justify-between mb-2">
              <span className={`font-medium ${theme.textPrimary} ${theme.darkTextPrimary}`}>
                Level {playerStats.level} - {playerStats.rank}
              </span>
              <span className="text-sm text-gray-500">
                {playerStats.xp} / {playerStats.xp + playerStats.xpToNext} XP
              </span>
            </div>
            <Progress 
              value={(playerStats.xp / (playerStats.xp + playerStats.xpToNext)) * 100} 
              className="h-3"
            />
          </Card>
        </div>

        <Tabs defaultValue="play" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="play">Play Games</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>

          {/* Play Games Tab */}
          <TabsContent value="play" className="space-y-8">
            {/* Game Types */}
            <div>
              <h2 className={`text-2xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary} mb-6`}>
                Choose Your Adventure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {gameTypes.map((game) => (
                  <Card key={game.id} className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder} hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group`}>
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${theme.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                        <game.icon className="w-8 h-8" />
                      </div>
                      <CardTitle className={`${theme.textPrimary} ${theme.darkTextPrimary}`}>
                        {game.name}
                      </CardTitle>
                      <CardDescription>{game.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Rewards:</span>
                        <span className={`${theme.textPrimary} ${theme.darkTextPrimary} font-medium`}>{game.rewards}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Difficulty:</span>
                        <span className={`${theme.textPrimary} ${theme.darkTextPrimary} font-medium`}>{game.difficulty}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Time:</span>
                        <span className={`${theme.textPrimary} ${theme.darkTextPrimary} font-medium`}>{game.time}</span>
                      </div>
                      <Button className={`w-full mt-4 bg-gradient-to-r ${theme.gradient} hover:opacity-90`}>
                        <Play className="w-4 h-4 mr-2" />
                        Start Game
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Subject Selection */}
            <div>
              <h2 className={`text-2xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary} mb-6`}>
                Choose Your Subject
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {subjects.map((subject) => (
                  <Button
                    key={subject.id}
                    onClick={() => startQuiz(subject.id)}
                    disabled={!subject.unlocked}
                    className={`flex flex-col items-center p-6 h-auto space-y-3 ${
                      subject.unlocked
                        ? `bg-gradient-to-r ${subject.color} text-white hover:opacity-90`
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <subject.icon className="w-8 h-8" />
                    <span className="text-sm font-medium">{subject.name}</span>
                    {!subject.unlocked && (
                      <span className="text-xs opacity-75">Level {playerStats.level >= 20 ? 20 : 10} Required</span>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            {/* Active Quiz */}
            {currentQuiz && (
              <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder} p-6`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary}`}>
                    {subjects.find(s => s.id === currentQuiz.subject)?.name} Quiz
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      currentQuiz.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                      currentQuiz.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {currentQuiz.difficulty}
                    </span>
                    <span className="text-sm text-gray-500">Score: {score}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className={`text-lg ${theme.textPrimary} ${theme.darkTextPrimary}`}>
                    {currentQuiz.question}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuiz.options.map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => setSelectedAnswer(index)}
                        disabled={showResult}
                        variant={selectedAnswer === index ? "default" : "outline"}
                        className={`p-4 h-auto text-left justify-start ${
                          showResult && index === currentQuiz.correct
                            ? 'bg-green-500 text-white border-green-500'
                            : showResult && selectedAnswer === index && index !== currentQuiz.correct
                            ? 'bg-red-500 text-white border-red-500'
                            : selectedAnswer === index
                            ? `bg-gradient-to-r ${theme.gradient} text-white`
                            : ''
                        }`}
                      >
                        <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </Button>
                    ))}
                  </div>

                  {showResult && (
                    <div className={`p-4 rounded-lg ${
                      selectedAnswer === currentQuiz.correct
                        ? 'bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800'
                        : 'bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800'
                    }`}>
                      <div className="flex items-center mb-2">
                        {selectedAnswer === currentQuiz.correct ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        ) : (
                          <RotateCcw className="w-5 h-5 text-red-600 mr-2" />
                        )}
                        <span className={`font-medium ${
                          selectedAnswer === currentQuiz.correct ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
                        }`}>
                          {selectedAnswer === currentQuiz.correct ? 'Correct!' : 'Incorrect!'}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{currentQuiz.explanation}</p>
                    </div>
                  )}

                  <div className="flex space-x-4">
                    {!showResult ? (
                      <Button
                        onClick={submitAnswer}
                        disabled={selectedAnswer === null}
                        className={`bg-gradient-to-r ${theme.gradient} hover:opacity-90`}
                      >
                        Submit Answer
                      </Button>
                    ) : (
                      <>
                        <Button onClick={nextQuestion} className={`bg-gradient-to-r ${theme.gradient} hover:opacity-90`}>
                          Next Question
                        </Button>
                        <Button variant="outline" onClick={() => setCurrentQuiz(null)}>
                          End Quiz
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            )}
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <div>
              <h2 className={`text-2xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary} mb-6`}>
                Achievements ({achievements.filter(a => a.unlocked).length}/{achievements.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <Card key={achievement.id} className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder} ${
                    achievement.unlocked ? 'shadow-lg' : 'opacity-50'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${
                          achievement.rarity === 'legendary' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                          achievement.rarity === 'epic' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                          achievement.rarity === 'rare' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          achievement.rarity === 'uncommon' ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                          'bg-gradient-to-r from-gray-500 to-gray-600'
                        } text-white`}>
                          <achievement.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold ${theme.textPrimary} ${theme.darkTextPrimary}`}>
                            {achievement.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement.description}
                          </p>
                          <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                            achievement.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
                            achievement.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
                            achievement.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                            achievement.rarity === 'uncommon' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {achievement.rarity}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard">
            <div>
              <h2 className={`text-2xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary} mb-6`}>
                Global Leaderboard
              </h2>
              <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
                <CardContent className="p-0">
                  {leaderboard.map((player, index) => (
                    <div key={index} className={`flex items-center justify-between p-6 border-b ${theme.border} ${theme.darkBorder} last:border-b-0 ${
                      player.name === 'You' ? `bg-gradient-to-r ${theme.gradient} bg-opacity-10` : ''
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          player.rank === 1 ? 'bg-yellow-500 text-white' :
                          player.rank === 2 ? 'bg-gray-400 text-white' :
                          player.rank === 3 ? 'bg-orange-600 text-white' :
                          'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        }`}>
                          {player.rank <= 3 ? (
                            player.rank === 1 ? <Crown className="w-4 h-4" /> :
                            player.rank === 2 ? <Medal className="w-4 h-4" /> :
                            <Award className="w-4 h-4" />
                          ) : player.rank}
                        </div>
                        <span className="text-2xl">{player.avatar}</span>
                        <div>
                          <div className={`font-bold ${theme.textPrimary} ${theme.darkTextPrimary}`}>
                            {player.name}
                          </div>
                          <div className="text-sm text-gray-500">Level {player.level}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${theme.textPrimary} ${theme.darkTextPrimary}`}>
                          {player.xp.toLocaleString()} XP
                        </div>
                        <div className="text-sm text-gray-500">#{player.rank}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Statistics Tab */}
          <TabsContent value="stats">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
                <CardContent className="p-6 text-center">
                  <Trophy className={`w-12 h-12 mx-auto mb-4 ${theme.textPrimary} ${theme.darkTextPrimary}`} />
                  <div className={`text-3xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary}`}>156</div>
                  <div className="text-gray-500">Games Played</div>
                </CardContent>
              </Card>
              <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
                <CardContent className="p-6 text-center">
                  <Target className={`w-12 h-12 mx-auto mb-4 ${theme.textPrimary} ${theme.darkTextPrimary}`} />
                  <div className={`text-3xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary}`}>87%</div>
                  <div className="text-gray-500">Accuracy Rate</div>
                </CardContent>
              </Card>
              <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
                <CardContent className="p-6 text-center">
                  <Clock className={`w-12 h-12 mx-auto mb-4 ${theme.textPrimary} ${theme.darkTextPrimary}`} />
                  <div className={`text-3xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary}`}>45h</div>
                  <div className="text-gray-500">Time Played</div>
                </CardContent>
              </Card>
              <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
                <CardContent className="p-6 text-center">
                  <TrendingUp className={`w-12 h-12 mx-auto mb-4 ${theme.textPrimary} ${theme.darkTextPrimary}`} />
                  <div className={`text-3xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary}`}>+23%</div>
                  <div className="text-gray-500">This Week</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GamifiedPage;