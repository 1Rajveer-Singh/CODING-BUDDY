import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useMode } from '../context/ModeContext';
import { useAuth } from '../context/AuthContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  AreaChart,
  Area
} from 'recharts';
import {
  Trophy,
  BookOpen,
  Code,
  TrendingUp,
  Target,
  Clock,
  Award,
  Brain,
  Zap,
  Lightbulb,
  Users,
  Star,
  Calendar,
  CheckCircle,
  PlayCircle,
  BarChart3
} from 'lucide-react';

const DashboardPage = () => {
  const { getCurrentTheme, currentMode, userType, MODES, USER_TYPES } = useMode();
  const { user } = useAuth();
  const theme = getCurrentTheme();

  // Mock data for charts
  const [dashboardData, setDashboardData] = useState({
    weeklyProgress: [
      { day: 'Mon', hours: 4, tasks: 5 },
      { day: 'Tue', hours: 6, tasks: 8 },
      { day: 'Wed', hours: 5, tasks: 6 },
      { day: 'Thu', hours: 8, tasks: 10 },
      { day: 'Fri', hours: 7, tasks: 9 },
      { day: 'Sat', hours: 3, tasks: 4 },
      { day: 'Sun', hours: 2, tasks: 3 }
    ],
    subjectProgress: [
      { name: 'Mathematics', progress: 85, color: '#3B82F6' },
      { name: 'Physics', progress: 72, color: '#10B981' },
      { name: 'Chemistry', progress: 68, color: '#F59E0B' },
      { name: 'Computer Science', progress: 92, color: '#8B5CF6' },
      { name: 'English', progress: 78, color: '#EF4444' }
    ],
    skillDistribution: [
      { name: 'Programming', value: 35, color: theme.primary === 'blue' ? '#3B82F6' : '#8B5CF6' },
      { name: 'Problem Solving', value: 25, color: theme.primary === 'blue' ? '#10B981' : '#EC4899' },
      { name: 'Theory', value: 20, color: theme.primary === 'blue' ? '#F59E0B' : '#F97316' },
      { name: 'Projects', value: 20, color: theme.primary === 'blue' ? '#EF4444' : '#06B6D4' }
    ],
    monthlyGoals: [
      { month: 'Jan', completed: 85, total: 100 },
      { month: 'Feb', completed: 92, total: 100 },
      { month: 'Mar', completed: 78, total: 100 },
      { month: 'Apr', completed: 96, total: 100 }
    ]
  });

  const stats = [
    {
      title: 'Study Hours',
      value: '156',
      subtitle: 'This month',
      icon: Clock,
      trend: '+12%',
      color: theme.primary === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
    },
    {
      title: 'Completed Tasks',
      value: '42',
      subtitle: 'This week',
      icon: CheckCircle,
      trend: '+8%',
      color: theme.primary === 'blue' ? 'bg-green-500' : 'bg-pink-500'
    },
    {
      title: 'Current Streak',
      value: '15',
      subtitle: 'Days',
      icon: Trophy,
      trend: '+3 days',
      color: theme.primary === 'blue' ? 'bg-yellow-500' : 'bg-orange-500'
    },
    {
      title: 'Skill Level',
      value: '86%',
      subtitle: 'Overall progress',
      icon: TrendingUp,
      trend: '+5%',
      color: theme.primary === 'blue' ? 'bg-indigo-500' : 'bg-cyan-500'
    }
  ];

  const recentActivities = [
    { id: 1, activity: 'Completed Python Assignment', time: '2 hours ago', icon: Code, type: 'success' },
    { id: 2, activity: 'Joined AI Study Group', time: '4 hours ago', icon: Users, type: 'info' },
    { id: 3, activity: 'Submitted Research Paper', time: '1 day ago', icon: BookOpen, type: 'success' },
    { id: 4, activity: 'Started Machine Learning Course', time: '2 days ago', icon: Brain, type: 'info' },
    { id: 5, activity: 'Won Coding Challenge', time: '3 days ago', icon: Trophy, type: 'success' }
  ];

  const upcomingTasks = [
    { id: 1, task: 'Submit Database Project', due: 'Tomorrow', priority: 'high', subject: 'CS' },
    { id: 2, task: 'Math Quiz Preparation', due: 'In 2 days', priority: 'medium', subject: 'Math' },
    { id: 3, task: 'Physics Lab Report', due: 'In 3 days', priority: 'low', subject: 'Physics' },
    { id: 4, task: 'English Essay Draft', due: 'In 5 days', priority: 'medium', subject: 'English' }
  ];

  return (
    <div className={`min-h-screen ${theme.background} ${theme.darkBackground} pt-16 py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-3xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary}`}>
                Welcome back, {user?.name || 'Student'}! 👋
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Here's your {currentMode === MODES.STUDY ? 'academic' : 'professional'} progress overview
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button className={`bg-gradient-to-r ${theme.gradient} hover:opacity-90`}>
                <BarChart3 className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <p className={`text-2xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary} mt-1`}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.subtitle}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color} text-white`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-green-600 dark:text-green-400 text-sm font-medium">{stat.trend}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">vs last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Weekly Progress Chart */}
          <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
            <CardHeader>
              <CardTitle className={`${theme.textPrimary} ${theme.darkTextPrimary} flex items-center`}>
                <TrendingUp className="w-5 h-5 mr-2" />
                Weekly Progress
              </CardTitle>
              <CardDescription>Your study hours and completed tasks this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dashboardData.weeklyProgress}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="hours" fill={theme.primary === 'blue' ? '#3B82F6' : '#8B5CF6'} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="tasks" fill={theme.primary === 'blue' ? '#10B981' : '#EC4899'} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Subject Progress */}
          <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
            <CardHeader>
              <CardTitle className={`${theme.textPrimary} ${theme.darkTextPrimary} flex items-center`}>
                <BookOpen className="w-5 h-5 mr-2" />
                Subject Progress
              </CardTitle>
              <CardDescription>Your performance across different subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData.subjectProgress.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${theme.textPrimary} ${theme.darkTextPrimary}`}>
                      {subject.name}
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${subject.progress}%`,
                            backgroundColor: subject.color
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 w-12">
                        {subject.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skill Distribution */}
          <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
            <CardHeader>
              <CardTitle className={`${theme.textPrimary} ${theme.darkTextPrimary} flex items-center`}>
                <Brain className="w-5 h-5 mr-2" />
                Skill Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={dashboardData.skillDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dashboardData.skillDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {dashboardData.skillDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                      <span className={`${theme.textPrimary} ${theme.darkTextPrimary}`}>{item.name}</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
            <CardHeader>
              <CardTitle className={`${theme.textPrimary} ${theme.darkTextPrimary} flex items-center`}>
                <Clock className="w-5 h-5 mr-2" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className={`p-2 rounded-full ${activity.type === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'}`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${theme.textPrimary} ${theme.darkTextPrimary} truncate`}>
                        {activity.activity}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
            <CardHeader>
              <CardTitle className={`${theme.textPrimary} ${theme.darkTextPrimary} flex items-center`}>
                <Calendar className="w-5 h-5 mr-2" />
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${theme.textPrimary} ${theme.darkTextPrimary}`}>
                        {task.task}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{task.due}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        task.priority === 'high' ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400' :
                        task.priority === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400' :
                        'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                      }`}>
                        {task.priority}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 ${theme.textPrimary} ${theme.darkTextPrimary}`}>
                        {task.subject}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className={`w-full mt-4 bg-gradient-to-r ${theme.gradient} hover:opacity-90`}>
                View All Tasks
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;