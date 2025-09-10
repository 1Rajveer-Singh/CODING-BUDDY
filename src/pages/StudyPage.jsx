import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { useMode } from '../context/ModeContext';
import {
  BookOpen,
  FileText,
  GraduationCap,
  Download,
  Upload,
  Search,
  Filter,
  Star,
  Heart,
  Share,
  Bookmark,
  Calendar,
  Clock,
  Users,
  Eye,
  MoreVertical,
  FolderOpen,
  File,
  Award,
  Target,
  TrendingUp,
  Book,
  PenTool,
  Layers,
  Archive
} from 'lucide-react';

const LibraryPage = () => {
  const { getCurrentTheme, currentMode, MODES } = useMode();
  const theme = getCurrentTheme();
  
  const [selectedTab, setSelectedTab] = useState('notes');
  const [searchTerm, setSearchTerm] = useState('');

  const studyNotes = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      subject: 'Web Development',
      type: 'Study Notes',
      pages: 45,
      lastModified: '2 days ago',
      author: 'Dr. Sarah Johnson',
      rating: 4.8,
      downloads: 1240,
      tags: ['JavaScript', 'Programming', 'Web Dev'],
      thumbnail: '�',
      size: '2.3 MB',
      format: 'PDF'
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      subject: 'Computer Science',
      type: 'Study Notes',
      pages: 78,
      lastModified: '1 week ago',
      author: 'Prof. Michael Chen',
      rating: 4.9,
      downloads: 2156,
      tags: ['DSA', 'Algorithms', 'Computer Science'],
      thumbnail: '📊',
      size: '4.1 MB',
      format: 'PDF'
    },
    {
      id: 3,
      title: 'React Component Patterns',
      subject: 'Frontend Development',
      type: 'Study Notes',
      pages: 32,
      lastModified: '3 days ago',
      author: 'Emily Davis',
      rating: 4.7,
      downloads: 987,
      tags: ['React', 'Components', 'Patterns'],
      thumbnail: '⚛️',
      size: '1.8 MB',
      format: 'PDF'
    }
  ];

  const examPapers = [
    {
      id: 1,
      title: 'Computer Networks Final Exam 2024',
      subject: 'Computer Networks',
      year: '2024',
      semester: 'Fall',
      duration: '3 hours',
      marks: 100,
      difficulty: 'Advanced',
      university: 'Tech University',
      downloads: 543,
      format: 'PDF',
      size: '1.2 MB'
    },
    {
      id: 2,
      title: 'Database Management Systems Midterm',
      subject: 'Database Systems',
      year: '2024',
      semester: 'Spring',
      duration: '2 hours',
      marks: 75,
      difficulty: 'Intermediate',
      university: 'Engineering College',
      downloads: 789,
      format: 'PDF',
      size: '0.9 MB'
    },
    {
      id: 3,
      title: 'Machine Learning Comprehensive Exam',
      subject: 'Artificial Intelligence',
      year: '2023',
      semester: 'Fall',
      duration: '4 hours',
      marks: 150,
      difficulty: 'Expert',
      university: 'AI Institute',
      downloads: 1234,
      format: 'PDF',
      size: '2.1 MB'
    }
  ];

  const books = [
    {
      id: 1,
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin',
      category: 'Programming',
      pages: 464,
      rating: 4.9,
      published: '2008',
      language: 'English',
      available: true,
      format: 'PDF',
      size: '15.2 MB'
    },
    {
      id: 2,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      category: 'Computer Science',
      pages: 1312,
      rating: 4.8,
      published: '2009',
      language: 'English',
      available: true,
      format: 'PDF',
      size: '28.7 MB'
    },
    {
      id: 3,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      author: 'Gang of Four',
      category: 'Software Engineering',
      pages: 395,
      rating: 4.7,
      published: '1994',
      language: 'English',
      available: false,
      format: 'PDF',
      size: '12.8 MB'
    }
  ];

  const studyPlans = [
    {
      id: 1,
      title: 'Full Stack Development Path',
      duration: '6 months',
      courses: 24,
      progress: 45,
      difficulty: 'Intermediate',
      description: 'Complete journey from frontend to backend development',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript'],
      nextMilestone: 'Complete Redux fundamentals'
    },
    {
      id: 2,
      title: 'Data Science Specialization',
      duration: '8 months',
      courses: 18,
      progress: 60,
      difficulty: 'Advanced',
      description: 'Master data analysis, machine learning, and visualization',
      skills: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Matplotlib'],
      nextMilestone: 'Complete neural networks module'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      duration: '4 months',
      courses: 16,
      progress: 20,
      difficulty: 'Beginner',
      description: 'Build iOS and Android apps with React Native',
      skills: ['React Native', 'JavaScript', 'Firebase', 'Redux', 'Mobile UI/UX'],
      nextMilestone: 'Setup development environment'
    }
  ];

  const achievements = [
    { id: 1, title: 'First Course Complete', icon: '🎯', unlocked: true, date: '2 days ago' },
    { id: 2, title: 'Week Streak', icon: '🔥', unlocked: true, date: '1 week ago' },
    { id: 3, title: 'Quiz Master', icon: '🧠', unlocked: true, date: '3 days ago' },
    { id: 4, title: 'Early Bird', icon: '🌅', unlocked: false, requirement: 'Study before 8 AM for 5 days' },
    { id: 5, title: 'Night Owl', icon: '🦉', unlocked: false, requirement: 'Study after 10 PM for 7 days' }
  ];

  const todaySchedule = [
    { time: '09:00', subject: 'React Hooks', duration: '45 min', type: 'Video', completed: true },
    { time: '10:30', subject: 'JavaScript ES6', duration: '30 min', type: 'Reading', completed: true },
    { time: '14:00', subject: 'Algorithm Practice', duration: '1 hour', type: 'Coding', completed: false },
    { time: '16:00', subject: 'Data Structures Quiz', duration: '20 min', type: 'Quiz', completed: false },
    { time: '19:00', subject: 'ML Project Review', duration: '45 min', type: 'Project', completed: false }
  ];

  const StudyMaterialCard = ({ material }) => (
    <Card className={`bg-white border border-gray-200 hover:shadow-lg transition-all duration-300`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{material.thumbnail}</div>
            <div>
              <h3 className={`font-bold text-gray-900`}>
                {material.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                by {material.instructor}
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                <span>{material.type}</span>
                <span>{material.duration}</span>
                <span className={`px-2 py-1 rounded ${
                  material.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  material.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {material.difficulty}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{material.rating}</span>
            </div>
            <Button variant="ghost" size="sm">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {material.description}
        </p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{material.progress}%</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${theme.gradient}`}
              style={{ width: `${material.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {material.topics.map((topic, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded">
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Button className={`bg-gradient-to-r ${theme.gradient} hover:opacity-90 flex-1`}>
            <Play className="w-4 h-4 mr-2" />
            {material.progress > 0 ? 'Continue' : 'Start'}
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Share className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className={`min-h-screen ${theme.background} pt-16 py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${theme.gradient} flex items-center justify-center shadow-lg`}>
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-4xl font-bold ${theme.textPrimary}`}>
                Digital Library
              </h1>
              <p className={`text-lg ${theme.textSecondary}`}>
                Access study notes, exam papers, and academic resources
              </p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search notes, papers, books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-white border-gray-200"
              />
            </div>
            <Button variant="outline" className="h-12 px-6">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button className={`h-12 px-6 bg-gradient-to-r ${theme.gradient} hover:opacity-90`}>
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className={`${theme.cardBg} border ${theme.border} shadow-sm`}>
            <CardContent className="p-6 text-center">
              <div className={`text-3xl font-bold ${theme.accent1} mb-2`}>152</div>
              <div className={`text-sm ${theme.textSecondary}`}>Study Notes</div>
            </CardContent>
          </Card>
          <Card className={`${theme.cardBg} border ${theme.border} shadow-sm`}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">89</div>
              <div className={`text-sm ${theme.textSecondary}`}>Exam Papers</div>
            </CardContent>
          </Card>
          <Card className={`${theme.cardBg} border ${theme.border} shadow-sm`}>
            <CardContent className="p-6 text-center">
              <div className={`text-3xl font-bold ${theme.accent2} mb-2`}>267</div>
              <div className={`text-sm ${theme.textSecondary}`}>Reference Books</div>
            </CardContent>
          </Card>
          <Card className={`${theme.cardBg} border ${theme.border} shadow-sm`}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1.2k</div>
              <div className={`text-sm ${theme.textSecondary}`}>Downloads This Month</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100">
                <TabsTrigger value="notes" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Study</span>
                  <span>Notes</span>
                </TabsTrigger>
                <TabsTrigger value="papers" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Exam</span>
                  <span>Papers</span>
                </TabsTrigger>
                <TabsTrigger value="books" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  <Book className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Reference</span>
                  <span>Books</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="notes" className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {studyNotes.map((note) => (
                    <Card key={note.id} className={`bg-white border border-gray-200 hover:shadow-lg transition-all duration-300`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-3xl">{note.thumbnail}</div>
                            <div>
                              <h3 className={`font-bold text-gray-900`}>
                                {note.title}
                              </h3>
                              <p className={`text-sm text-gray-600`}>
                                by {note.author}
                              </p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                                <span>{note.type}</span>
                                <span>{note.pages} pages</span>
                                <span>{note.format}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium">{note.rating}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {note.tags.map((tag, index) => (
                            <span key={index} className={`text-xs px-2 py-1 rounded-full bg-blue-50 ${theme.accent1}`}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Download className="w-4 h-4" />
                              <span>{note.downloads}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{note.lastModified}</span>
                            </div>
                          </div>
                          <span className="text-gray-500">{note.size}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button className={`bg-gradient-to-r ${theme.gradient} hover:opacity-90 flex-1`}>
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="papers" className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {examPapers.map((paper) => (
                    <Card key={paper.id} className={`bg-white border border-gray-200 hover:shadow-lg transition-all duration-300`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className={`font-bold text-gray-900 mb-2`}>
                              {paper.title}
                            </h3>
                            <p className={`text-sm text-gray-600 mb-2`}>
                              {paper.university}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>{paper.year}</span>
                              <span>{paper.semester}</span>
                              <span>{paper.duration}</span>
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            paper.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                            paper.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            paper.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {paper.difficulty}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className={`text-gray-600`}>Subject:</span>
                            <span className={`font-medium text-gray-900`}>{paper.subject}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className={`text-gray-600`}>Max Marks:</span>
                            <span className={`font-medium text-gray-900`}>{paper.marks}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className={`text-gray-600`}>Downloads:</span>
                            <span className={`font-medium text-gray-900`}>{paper.downloads}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className={`text-gray-600`}>Size:</span>
                            <span className="text-gray-500">{paper.size}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button className={`bg-gradient-to-r ${theme.gradient} hover:opacity-90 flex-1`}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Paper
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="books" className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {books.map((book) => (
                    <Card key={book.id} className={`bg-white border border-gray-200 hover:shadow-lg transition-all duration-300`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className={`font-bold text-gray-900 mb-2 leading-tight`}>
                              {book.title}
                            </h3>
                            <p className={`text-sm text-gray-600 mb-1`}>
                              by {book.author}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>{book.published}</span>
                              <span>{book.pages} pages</span>
                              <span>{book.language}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 ml-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{book.rating}</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className={`text-gray-600`}>Category:</span>
                            <span className={`font-medium text-gray-900`}>{book.category}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className={`text-gray-600`}>Format:</span>
                            <span className={`font-medium text-gray-900`}>{book.format}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className={`text-gray-600`}>Size:</span>
                            <span className="text-gray-500">{book.size}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className={`text-gray-600`}>Status:</span>
                            <span className={`font-medium ${book.available ? 'text-green-600' : 'text-red-600'}`}>
                              {book.available ? 'Available' : 'Coming Soon'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button 
                            className={`flex-1 ${book.available ? `bg-gradient-to-r ${theme.gradient} hover:opacity-90` : 'bg-gray-400 cursor-not-allowed'}`}
                            disabled={!book.available}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            {book.available ? 'Read Book' : 'Notify Me'}
                          </Button>
                          {book.available && (
                            <>
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Activity */}
            <Card className={`bg-white border border-gray-200 shadow-sm`}>
              <CardHeader>
                <CardTitle className={`text-gray-900 text-lg`}>
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center`}>
                    <Download className={`w-4 h-4 ${theme.accent1}`} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-gray-900`}>Downloaded JS Notes</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center`}>
                    <Eye className={`w-4 h-4 ${theme.accent1}`} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-gray-900`}>Viewed Exam Paper</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center`}>
                    <Bookmark className={`w-4 h-4 ${theme.accent1}`} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium text-gray-900`}>Bookmarked Clean Code</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Upload */}
            <Card className={`bg-white border border-gray-200 shadow-sm`}>
              <CardHeader>
                <CardTitle className={`text-gray-900 text-lg`}>
                  Quick Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className={`w-full bg-gradient-to-r ${theme.gradient} hover:opacity-90`}>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Notes
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    Upload Paper
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Book className="w-4 h-4 mr-2" />
                    Add Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
