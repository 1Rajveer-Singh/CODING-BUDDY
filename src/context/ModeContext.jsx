import React, { createContext, useContext, useState, useEffect } from 'react';

// Mode Context for handling Study/Professional modes
const ModeContext = createContext();

export const MODES = {
  STUDY: 'study',
  PROFESSIONAL: 'professional'
};

export const USER_TYPES = {
  STUDENT: 'student',
  TEACHER: 'teacher'
};

// Color schemes for different modes
export const MODE_THEMES = {
  [MODES.STUDY]: {
    primary: 'blue',
    gradient: 'from-blue-600 to-indigo-700',
    accent: 'emerald',
    background: 'bg-white',
    cardBg: 'bg-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    border: 'border-gray-200',
    accent1: 'text-blue-600',
    accent2: 'text-indigo-600',
    lightAccent: 'bg-blue-50',
    darkLightAccent: 'bg-blue-100'
  },
  [MODES.PROFESSIONAL]: {
    primary: 'purple',
    gradient: 'from-purple-600 to-pink-700',
    accent: 'orange',
    background: 'bg-white',
    cardBg: 'bg-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    border: 'border-gray-200',
    accent1: 'text-purple-600',
    accent2: 'text-pink-600',
    lightAccent: 'bg-purple-50',
    darkLightAccent: 'bg-purple-100'
  }
};

export const ModeProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState(MODES.STUDY);
  const [userType, setUserType] = useState(USER_TYPES.STUDENT);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get current theme based on mode
  const getCurrentTheme = () => MODE_THEMES[currentMode];

  // Switch mode with smooth transition
  const switchMode = async (newMode) => {
    if (newMode === currentMode) return;
    
    setIsTransitioning(true);
    
    // Add transition delay for smooth animation
    setTimeout(() => {
      setCurrentMode(newMode);
      localStorage.setItem('preferredMode', newMode);
      setIsTransitioning(false);
    }, 300);
  };

  // Switch user type
  const switchUserType = (newUserType) => {
    setUserType(newUserType);
    localStorage.setItem('userType', newUserType);
  };

  // Load saved preferences
  useEffect(() => {
    const savedMode = localStorage.getItem('preferredMode');
    const savedUserType = localStorage.getItem('userType');
    
    if (savedMode && Object.values(MODES).includes(savedMode)) {
      setCurrentMode(savedMode);
    }
    
    if (savedUserType && Object.values(USER_TYPES).includes(savedUserType)) {
      setUserType(savedUserType);
    }
  }, []);

  // Navigation items based on mode and user type
  const getNavigationItems = () => {
    if (currentMode === MODES.STUDY) {
      return [
          { path: '/dashboard', label: 'Dashboard', icon: 'BarChart3', description: 'Analysis the Progress of Student of Enginnering.' },
          { path: '/library', label: 'Library', icon: 'Library', description: 'Store Study Notes , Exam papers , other Resources.' },
          { path: '/ideas', label: 'Innovation', icon: 'Lightbulb', description: 'My unique ideas for All branches with SRS and also add feedback form for this .' },
          { path: '/compiler', label: 'Compiler', icon: 'Code', description: 'Some Basic Language c , c++, java, python, Go.' },
          { path: '/gamified', label: 'Gamified', icon: 'Trophy', description: 'It contain Interactive Quize and many more bran strom activity .' }
        ];
    }
    
    if (currentMode === MODES.PROFESSIONAL) {
      return [
          { path: '/feed', label: 'Feed', icon: 'MessageSquare' },
          { path: '/internships', label: 'Internship', icon: 'Briefcase' },
          { path: '/hackathons', label: 'Hackathon', icon: 'Trophy' }
        ];
    }
    return [];
  };

  const value = {
    currentMode,
    userType,
    isTransitioning,
    switchMode,
    switchUserType,
    getCurrentTheme,
    getNavigationItems,
    MODES,
    USER_TYPES
  };

  return (
    <ModeContext.Provider value={value}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};

export default ModeContext;
