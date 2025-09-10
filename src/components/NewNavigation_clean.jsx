import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import {
  Home,
  User,
  BookOpen,
  Code,
  Trophy,
  Search,
  Briefcase,
  BarChart3,
  Brain,
  Wrench,
  Gamepad2,
  Lightbulb,
  MessageSquare,
  Building,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  LogOut,
  Zap,
  UserCog,
  Bell,
  HelpCircle,
  Bookmark,
  Award,
  Target,
  GraduationCap,
  Users,
  Settings,
  Folder,
  TrendingUp,
  Calendar,
  Send,
  Edit3,
} from 'lucide-react';
import { useMode, MODES } from '../context/ModeContext';

const NewNavigation = () => {
  const { user, logout } = useAuth();
  const { currentMode, switchMode } = useMode();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3); // Mock notification count
  
  const profileDropdownRef = useRef(null);

  const isStudyMode = currentMode === MODES.STUDY;

  const handleModeToggle = () => {
    const newMode = isStudyMode ? MODES.PROFESSIONAL : MODES.STUDY;
    switchMode(newMode);
  };

  // Study Mode Navigation Items - Enhanced
  const studyModeNavigation = [
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: BarChart3, 
      description: 'Analyze student progress using Probability, Permutation, and Combination based logic with charts and trend analysis'
    },
    { 
      name: 'Library', 
      path: '/library', 
      icon: BookOpen, 
      description: 'Store study notes, exam papers, and resources'
    },
    { 
      name: 'Innovation', 
      path: '/innovation', 
      icon: Lightbulb, 
      description: 'Idea submission and collaborative improvement hub'
    },
    { 
      name: 'Compiler', 
      path: '/compiler', 
      icon: Code, 
      description: 'Online IDE for C, C++, Java, Python, Go'
    },
    { 
      name: 'Gamified', 
      path: '/gamified', 
      icon: Gamepad2, 
      description: 'Interactive quizzes, puzzles, and brainstorming activities'
    },
  ];

  // Professional Mode Navigation Items - Enhanced
  const professionalModeNavigation = [
    { 
      name: 'Feed', 
      path: '/feed', 
      icon: MessageSquare, 
      description: 'Knowledge sharing, discussions, and updates'
    },
    { 
      name: 'Internships', 
      path: '/internships', 
      icon: Building, 
      description: 'Career opportunities and tracking'
    },
    { 
      name: 'Hackathons', 
      path: '/hackathons', 
      icon: Trophy, 
      description: 'Event discovery and team collaboration'
    },
    { 
      name: 'Resume Builder', 
      path: '/resume-builder', 
      icon: Folder, 
      description: 'Create ATS-optimized resumes'
    },
  ];

  // Get current navigation items based on mode
  const navigationItems = isStudyMode ? studyModeNavigation : professionalModeNavigation;

  // Profile menu items - Enhanced
  const profileMenuItems = [
    { name: 'Profile Settings', icon: UserCog, action: () => navigate('/profile') },
    { name: 'Preferences', icon: Settings, action: () => console.log('Preferences') },
    { name: 'Help & Support', icon: HelpCircle, action: () => navigate('/help-support') },
    { name: 'Sign Out', icon: LogOut, action: logout },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check if current path is active
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  // Don't show navbar on auth page
  if (location.pathname === '/auth') {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 animate-gradient"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Section - Logo & Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {isStudyMode ? 'Engineering Hub - Study' : 'Engineering Hub - Professional'}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = isActivePath(item.path);
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    title={item.description || item.name}
                    className={`nav-item-hover px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-white/50 hover:shadow-md'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Section - Mode Toggle, Notifications & Profile */}
          <div className="flex items-center space-x-4">
            
            {/* Mode Toggle Button - Circular Icon Only */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleModeToggle}
                className={`rounded-full w-12 h-12 transition-all duration-500 transform hover:scale-110 !hover:bg-transparent cursor-pointer ${
                  isStudyMode 
                    ? 'bg-blue-100 hover:!bg-blue-200 text-blue-600 shadow-blue-200/50' 
                    : 'bg-purple-100 hover:!bg-purple-200 text-purple-600 shadow-purple-200/50'
                } shadow-lg hover:shadow-xl`}
                title={isStudyMode ? "Switch to Professional Mode" : "Switch to Study Mode"}
              >
                <div className={`transition-all duration-300 ${isStudyMode ? 'animate-pulse' : ''}`}>
                  {isStudyMode ? (
                    <span className="text-2xl">📚</span>
                  ) : (
                    <span className="text-2xl">💼</span>
                  )}
                </div>
              </Button>
            </div>

            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full w-10 h-10 bg-white/20 hover:!bg-white/40 transition-all duration-300 !hover:text-gray-700 cursor-pointer"
                title="Notifications"
              >
                <Bell className="w-5 h-5 text-gray-700" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce">
                    {notificationCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Authentication Section */}
            {user ? (
              /* Profile Section - When Logged In */
              <div className="relative" ref={profileDropdownRef}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 hover:!bg-white/40 transition-all duration-300 !hover:text-gray-700 cursor-pointer"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-700">
                    {user.name || 'User'}
                  </span>
                  {isProfileDropdownOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </Button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">
                        {user.name || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email || 'user@example.com'}
                      </p>
                    </div>

                    {/* Menu Items */}
                    {profileMenuItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            item.action();
                            setIsProfileDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm hover:!bg-blue-50 flex items-center space-x-3 transition-colors duration-200 cursor-pointer ${
                            item.name === 'Sign Out' ? 'text-red-600' : 'text-gray-700'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{item.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              /* Sign In Button - When Not Logged In */
              <Link to="/auth">
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Sign In
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-lg"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-white/20 shadow-xl">
            {/* Mobile Mode Toggle */}
            <div className="px-4 py-3 border-b border-gray-200/50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Current Mode:
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleModeToggle}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    isStudyMode 
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white' 
                      : 'bg-gradient-to-r from-purple-500 to-purple-700 text-white'
                  }`}
                >
                  {isStudyMode ? '📚 Study Mode' : '💼 Pro Mode'}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = isActivePath(item.path);
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'text-gray-700 hover:bg-blue-50/50'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <div>
                      <span className="block">{item.name}</span>
                      <span className="text-xs opacity-75">{item.description}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Profile/Auth Section */}
            <div className="px-4 py-3 border-t border-gray-200/50">
              {user ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 px-4 py-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name || 'User'}</p>
                      <p className="text-xs text-gray-500">{user.email || 'user@example.com'}</p>
                    </div>
                  </div>
                  {profileMenuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          item.action();
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                          item.name === 'Sign Out' ? 'text-red-600' : 'text-gray-700'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewNavigation;
