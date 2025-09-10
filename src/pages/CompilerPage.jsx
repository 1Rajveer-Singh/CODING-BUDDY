import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useMode } from '../context/ModeContext';
import {
  Play,
  Square,
  Download,
  Upload,
  Share,
  Settings,
  Code,
  Terminal,
  FileText,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
  Copy,
  RotateCcw,
  Save,
  Folder,
  Search,
  GitBranch,
  Bug,
  Lightbulb
} from 'lucide-react';

const CompilerPage = () => {
  const { getCurrentTheme } = useMode();
  const theme = getCurrentTheme();
  
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState(0);

  const languages = [
    {
      id: 'python',
      name: 'Python',
      icon: '🐍',
      defaultCode: `# Welcome to Python Compiler
print("Hello, World!")

# Example: Calculate factorial
def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

# Test the function
num = 5
result = factorial(num)
print(f"Factorial of {num} is: {result}")

# List comprehension example
squares = [x**2 for x in range(1, 6)]
print(f"Squares: {squares}")`,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: '⚡',
      defaultCode: `// Welcome to JavaScript Compiler
console.log("Hello, World!");

// Example: Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Even numbers:", evens);

// Example: Async function
async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

fetchData().then(data => console.log(data));`,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'java',
      name: 'Java',
      icon: '☕',
      defaultCode: `// Welcome to Java Compiler
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Example: Array operations
        int[] numbers = {1, 2, 3, 4, 5};
        int sum = 0;
        
        for (int num : numbers) {
            sum += num;
        }
        
        System.out.println("Sum of array: " + sum);
        
        // Example: Object-oriented programming
        Calculator calc = new Calculator();
        System.out.println("5 + 3 = " + calc.add(5, 3));
        System.out.println("10 - 4 = " + calc.subtract(10, 4));
    }
}

class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public int subtract(int a, int b) {
        return a - b;
    }
}`,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'cpp',
      name: 'C++',
      icon: '⚙️',
      defaultCode: `// Welcome to C++ Compiler
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    
    // Example: Vector operations
    vector<int> numbers = {5, 2, 8, 1, 9};
    
    cout << "Original vector: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Sort the vector
    sort(numbers.begin(), numbers.end());
    
    cout << "Sorted vector: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Find maximum element
    auto max_it = max_element(numbers.begin(), numbers.end());
    cout << "Maximum element: " << *max_it << endl;
    
    return 0;
}`,
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'c',
      name: 'C',
      icon: '🔧',
      defaultCode: `// Welcome to C Compiler
#include <stdio.h>
#include <stdlib.h>

// Function to calculate factorial
int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    printf("Hello, World!\\n");
    
    // Example: Array operations
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    int sum = 0;
    
    printf("Array elements: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
        sum += numbers[i];
    }
    printf("\\n");
    
    printf("Sum of array: %d\\n", sum);
    
    // Example: Factorial calculation
    int num = 5;
    printf("Factorial of %d is: %d\\n", num, factorial(num));
    
    return 0;
}`,
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 'go',
      name: 'Go',
      icon: '🦫',
      defaultCode: `// Welcome to Go Compiler
package main

import (
    "fmt"
    "sort"
    "time"
)

func main() {
    fmt.Println("Hello, World!")
    
    // Example: Slice operations
    numbers := []int{64, 34, 25, 12, 22, 11, 90}
    fmt.Println("Original slice:", numbers)
    
    // Sort the slice
    sort.Ints(numbers)
    fmt.Println("Sorted slice:", numbers)
    
    // Example: Goroutine (concurrent programming)
    go func() {
        for i := 1; i <= 3; i++ {
            fmt.Printf("Goroutine: %d\\n", i)
            time.Sleep(100 * time.Millisecond)
        }
    }()
    
    // Example: Map operations
    student_grades := map[string]int{
        "Alice": 95,
        "Bob":   87,
        "Carol": 92,
    }
    
    for name, grade := range student_grades {
        fmt.Printf("%s: %d\\n", name, grade)
    }
    
    time.Sleep(500 * time.Millisecond) // Wait for goroutine
}`,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const currentLanguage = languages.find(lang => lang.id === selectedLanguage);

  useEffect(() => {
    if (currentLanguage) {
      setCode(currentLanguage.defaultCode);
    }
  }, [selectedLanguage, currentLanguage]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('');
    const startTime = Date.now();
    
    // Simulate code execution
    setTimeout(() => {
      const endTime = Date.now();
      setExecutionTime(endTime - startTime);
      
      // Mock output based on language
      let mockOutput = '';
      switch (selectedLanguage) {
        case 'python':
          mockOutput = `Hello, World!
Factorial of 5 is: 120
Squares: [1, 4, 9, 16, 25]`;
          break;
        case 'javascript':
          mockOutput = `Hello, World!
Original: [1, 2, 3, 4, 5]
Doubled: [2, 4, 6, 8, 10]
Even numbers: [2, 4]
Data fetched successfully!`;
          break;
        case 'java':
          mockOutput = `Hello, World!
Sum of array: 15
5 + 3 = 8
10 - 4 = 6`;
          break;
        case 'cpp':
          mockOutput = `Hello, World!
Original vector: 5 2 8 1 9 
Sorted vector: 1 2 5 8 9 
Maximum element: 9`;
          break;
        case 'c':
          mockOutput = `Hello, World!
Array elements: 1 2 3 4 5 
Sum of array: 15
Factorial of 5 is: 120`;
          break;
        case 'go':
          mockOutput = `Hello, World!
Original slice: [64 34 25 12 22 11 90]
Sorted slice: [11 12 22 25 34 64 90]
Alice: 95
Bob: 87
Carol: 92
Goroutine: 1
Goroutine: 2
Goroutine: 3`;
          break;
        default:
          mockOutput = 'Hello, World!';
      }
      
      setOutput(mockOutput);
      setIsRunning(false);
    }, 1500);
  };

  const stopExecution = () => {
    setIsRunning(false);
    setOutput('Execution stopped by user.');
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const shareCode = () => {
    const shareData = {
      title: `${currentLanguage?.name} Code`,
      text: code,
    };
    
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      copyCode();
      alert('Code copied to clipboard!');
    }
  };

  return (
    <div className={`min-h-screen ${theme.background} ${theme.darkBackground} pt-16 py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${theme.textPrimary} ${theme.darkTextPrimary} mb-4`}>
            💻 Code Compiler & IDE
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Practice coding with our multi-language compiler supporting C, C++, Java, Python, JavaScript, and Go
          </p>
        </div>

        {/* Language Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
          {languages.map((language) => (
            <Button
              key={language.id}
              variant={selectedLanguage === language.id ? "default" : "outline"}
              onClick={() => setSelectedLanguage(language.id)}
              className={`flex flex-col items-center p-2 sm:p-3 md:p-4 h-auto gap-1 sm:gap-2 ${
                selectedLanguage === language.id 
                  ? `bg-gradient-to-r ${language.color} text-white` 
                  : 'hover:shadow-md'
              }`}
            >
              <span className="text-lg sm:text-xl md:text-2xl">{language.icon}</span>
              <span className="text-xs sm:text-sm font-medium">{language.name}</span>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Code Editor */}
          <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className={`${theme.textPrimary} ${theme.darkTextPrimary} flex items-center`}>
                  <Code className="w-5 h-5 mr-2" />
                  Code Editor
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    {currentLanguage?.name}
                  </span>
                </CardTitle>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Button variant="ghost" size="sm" onClick={copyCode} className="h-8 w-8 sm:h-9 sm:w-9 p-0">
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={shareCode} className="h-8 w-8 sm:h-9 sm:w-9 p-0">
                    <Share className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 sm:h-9 sm:w-9 p-0">
                    <Save className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className={`w-full h-64 sm:h-80 md:h-96 p-3 sm:p-4 font-mono text-xs sm:text-sm border ${theme.border} ${theme.darkBorder} rounded-lg ${theme.cardBg} ${theme.darkCardBg} ${theme.textPrimary} ${theme.darkTextPrimary} focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none`}
                  placeholder={`Write your ${currentLanguage?.name} code here...`}
                  spellCheck={false}
                />
                
                {/* Editor Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      onClick={runCode}
                      disabled={isRunning}
                      className={`bg-gradient-to-r ${currentLanguage?.color} text-white hover:opacity-90 text-xs sm:text-sm`}
                      size="sm"
                    >
                      {isRunning ? (
                        <><Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin" /> Running...</>
                      ) : (
                        <><Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Run Code</>
                      )}
                    </Button>
                    
                    {isRunning && (
                      <Button variant="outline" onClick={stopExecution} size="sm" className="text-xs sm:text-sm">
                        <Square className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Stop
                      </Button>
                    )}
                    
                    <Button variant="outline" onClick={() => setCode(currentLanguage?.defaultCode || '')} size="sm" className="text-xs sm:text-sm">
                      <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Reset
                    </Button>
                  </div>
                  
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 order-first sm:order-last">
                    Lines: {code.split('\n').length} | Chars: {code.length}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Output Panel */}
          <div className="space-y-6">
            {/* Output */}
            <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
              <CardHeader>
                <CardTitle className={`${theme.textPrimary} ${theme.darkTextPrimary} flex items-center`}>
                  <Terminal className="w-5 h-5 mr-2" />
                  Output
                  {executionTime > 0 && (
                    <span className="ml-auto text-sm font-normal text-gray-500">
                      Executed in {executionTime}ms
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`h-48 sm:h-56 md:h-64 p-3 sm:p-4 bg-gray-900 text-green-400 font-mono text-xs sm:text-sm rounded-lg overflow-auto`}>
                  {isRunning ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-400 mr-2"></div>
                      Executing code...
                    </div>
                  ) : output ? (
                    <pre className="whitespace-pre-wrap">{output}</pre>
                  ) : (
                    <div className="text-gray-500">No output yet. Run your code to see results.</div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
              <CardHeader>
                <CardTitle className={`${theme.textPrimary} ${theme.darkTextPrimary} flex items-center`}>
                  <Zap className="w-5 h-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Button variant="outline" className="flex items-center justify-center h-10 sm:h-12 text-xs sm:text-sm">
                    <Upload className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Import File
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center h-10 sm:h-12 text-xs sm:text-sm">
                    <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Export Code
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center h-10 sm:h-12 text-xs sm:text-sm">
                    <Bug className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Debug
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center h-10 sm:h-12 text-xs sm:text-sm">
                    <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Get Hints
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Language Info */}
            <Card className={`${theme.cardBg} ${theme.darkCardBg} border ${theme.border} ${theme.darkBorder}`}>
              <CardHeader>
                <CardTitle className={`${theme.textPrimary} ${theme.darkTextPrimary} flex items-center`}>
                  <FileText className="w-5 h-5 mr-2" />
                  {currentLanguage?.name} Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {selectedLanguage === 'python' && (
                    <>
                      <p>• Use proper indentation (4 spaces recommended)</p>
                      <p>• Remember to use colons after function definitions</p>
                      <p>• Use print() for output, input() for user input</p>
                    </>
                  )}
                  {selectedLanguage === 'javascript' && (
                    <>
                      <p>• Use console.log() for output</p>
                      <p>• Don't forget semicolons at the end of statements</p>
                      <p>• Use const/let instead of var for variable declarations</p>
                    </>
                  )}
                  {selectedLanguage === 'java' && (
                    <>
                      <p>• Every application must have a main() method</p>
                      <p>• Use System.out.println() for output</p>
                      <p>• Remember to include proper import statements</p>
                    </>
                  )}
                  {(selectedLanguage === 'c' || selectedLanguage === 'cpp') && (
                    <>
                      <p>• Include necessary header files (#include)</p>
                      <p>• Use printf() for output in C, cout in C++</p>
                      <p>• Don't forget semicolons and proper memory management</p>
                    </>
                  )}
                  {selectedLanguage === 'go' && (
                    <>
                      <p>• Package main is required for executable programs</p>
                      <p>• Use fmt.Println() for output</p>
                      <p>• Go uses automatic semicolon insertion</p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompilerPage;