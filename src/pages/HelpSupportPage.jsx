import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Book, 
  Video, 
  FileText, 
  Search,
  ChevronRight,
  Star,
  Clock,
  Users,
  Zap,
  Shield,
  Heart,
  Lightbulb,
  Send,
  Download,
  PlayCircle,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Headphones,
  Globe,
  Rocket
} from 'lucide-react';

const HelpSupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-500 to-blue-600',
      description: 'New to our platform? Start here!'
    },
    {
      id: 'account',
      title: 'Account & Profile',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      description: 'Manage your account settings'
    },
    {
      id: 'features',
      title: 'Platform Features',
      icon: Zap,
      color: 'from-green-500 to-green-600',
      description: 'Learn about our amazing features'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      description: 'Technical issues and troubleshooting'
    },
    {
      id: 'billing',
      title: 'Billing & Plans',
      icon: Heart,
      color: 'from-pink-500 to-pink-600',
      description: 'Questions about pricing and payments'
    },
    {
      id: 'tips',
      title: 'Tips & Tricks',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      description: 'Pro tips to maximize your experience'
    }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I create my first resume?',
      answer: 'Navigate to the Resume Builder from the main menu, fill in your information step by step, and download your ATS-optimized resume in PDF or DOCX format.'
    },
    {
      category: 'getting-started',
      question: 'What is the difference between Study Mode and Professional Mode?',
      answer: 'Study Mode focuses on learning resources, coding practice, and academic content. Professional Mode emphasizes career development, internships, and professional networking.'
    },
    {
      category: 'account',
      question: 'How do I update my profile information?',
      answer: 'Click on your profile picture in the top-right corner, select "Profile Settings", and update your information there.'
    },
    {
      category: 'features',
      question: 'What makes our Resume Builder ATS-friendly?',
      answer: 'Our Resume Builder uses clean formatting, standard fonts, proper heading structures, and keyword optimization to ensure your resume passes through Applicant Tracking Systems.'
    },
    {
      category: 'technical',
      question: 'Why is my resume not downloading?',
      answer: 'Ensure you have filled in all required fields and try refreshing the page. If the issue persists, check your browser\'s popup blocker settings.'
    },
    {
      category: 'billing',
      question: 'Is the platform free to use?',
      answer: 'Yes! Our core features including resume building, job search, and basic learning resources are completely free.'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: MessageSquare,
      availability: '24/7 Available',
      color: 'from-blue-500 to-blue-600',
      action: () => console.log('Open chat')
    },
    {
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      icon: Mail,
      availability: 'Response within 24h',
      color: 'from-green-500 to-green-600',
      action: () => console.log('Open email')
    },
    {
      title: 'Phone Support',
      description: 'Call us directly for urgent matters',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM',
      color: 'from-purple-500 to-purple-600',
      action: () => console.log('Show phone')
    },
    {
      title: 'Video Call',
      description: 'Schedule a one-on-one video session',
      icon: Video,
      availability: 'By Appointment',
      color: 'from-pink-500 to-pink-600',
      action: () => console.log('Schedule video')
    }
  ];

  const quickActions = [
    {
      title: 'Download User Guide',
      description: 'Complete guide to using our platform',
      icon: Download,
      color: 'bg-blue-100 text-blue-600 hover:bg-blue-200'
    },
    {
      title: 'Watch Tutorials',
      description: 'Video tutorials for all features',
      icon: PlayCircle,
      color: 'bg-green-100 text-green-600 hover:bg-green-200'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Globe,
      color: 'bg-purple-100 text-purple-600 hover:bg-purple-200'
    },
    {
      title: 'Feature Requests',
      description: 'Suggest new features',
      icon: Lightbulb,
      color: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission
    alert('Thank you for contacting us! We\'ll get back to you soon.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                help you today?
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're here to support your journey. Find answers, get help, or connect with our amazing support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for help articles, tutorials, or FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-xl border-0 bg-white/90 backdrop-blur-sm shadow-lg focus:ring-2 focus:ring-yellow-300"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300/20 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Tabs defaultValue="help" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/80 backdrop-blur-sm shadow-lg">
            <TabsTrigger value="help" className="flex items-center gap-2 text-base py-3">
              <HelpCircle className="w-5 h-5" />
              Help Center
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2 text-base py-3">
              <MessageSquare className="w-5 h-5" />
              Contact Us
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="flex items-center gap-2 text-base py-3">
              <Video className="w-5 h-5" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2 text-base py-3">
              <FileText className="w-5 h-5" />
              Resources
            </TabsTrigger>
          </TabsList>

          {/* Help Center Tab */}
          <TabsContent value="help" className="space-y-12">
            {/* Help Categories */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {helpCategories.map((category) => (
                  <Card 
                    key={category.id} 
                    className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                          <div className="flex items-center text-blue-600 text-sm font-medium">
                            Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <Card key={index} className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action, index) => (
                  <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                      <p className="text-gray-600 text-sm">{action.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Contact Us Tab */}
          <TabsContent value="contact" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the best way to reach us. We're here to help and would love to hear from you!
              </p>
            </div>

            {/* Support Channels */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {supportChannels.map((channel, index) => (
                <Card 
                  key={index} 
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
                  onClick={channel.action}
                >
                  <div className={`h-2 bg-gradient-to-r ${channel.color}`}></div>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
                    <div className="flex items-center justify-center text-green-600 text-sm font-medium">
                      <Clock className="w-4 h-4 mr-1" />
                      {channel.availability}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="max-w-4xl mx-auto shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center flex items-center justify-center">
                  <Send className="w-6 h-6 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">Your Name</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        className="mt-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                        className="mt-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                    <Input
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                      className="mt-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <textarea
                      id="message"
                      rows="6"
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tutorials Tab */}
          <TabsContent value="tutorials" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Tutorials</h2>
              <p className="text-xl text-gray-600">Learn how to make the most of our platform</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Getting Started Guide', duration: '5:30', thumbnail: 'bg-blue-500' },
                { title: 'Building Your First Resume', duration: '8:15', thumbnail: 'bg-green-500' },
                { title: 'Job Search Tips', duration: '6:45', thumbnail: 'bg-purple-500' },
                { title: 'Interview Preparation', duration: '12:20', thumbnail: 'bg-red-500' },
                { title: 'Networking Strategies', duration: '9:10', thumbnail: 'bg-yellow-500' },
                { title: 'Career Development', duration: '11:30', thumbnail: 'bg-pink-500' }
              ].map((tutorial, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`h-48 ${tutorial.thumbnail} relative overflow-hidden rounded-t-lg`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {tutorial.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tutorial.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
              <p className="text-xl text-gray-600">Guides, templates, and tools to accelerate your success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Resume Templates', icon: FileText, color: 'from-blue-500 to-blue-600', downloads: '2.5k' },
                { title: 'Cover Letter Guide', icon: Book, color: 'from-green-500 to-green-600', downloads: '1.8k' },
                { title: 'Interview Checklist', icon: CheckCircle, color: 'from-purple-500 to-purple-600', downloads: '3.2k' },
                { title: 'Salary Negotiation Tips', icon: Star, color: 'from-yellow-500 to-orange-500', downloads: '1.1k' },
                { title: 'LinkedIn Optimization', icon: Users, color: 'from-indigo-500 to-indigo-600', downloads: '2.9k' },
                { title: 'Career Planning Workbook', icon: Lightbulb, color: 'from-pink-500 to-pink-600', downloads: '1.5k' }
              ].map((resource, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{resource.downloads} downloads</span>
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Our support team is always ready to assist you on your journey to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-medium">
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Live Chat
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-medium">
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Community Forum
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportPage;
