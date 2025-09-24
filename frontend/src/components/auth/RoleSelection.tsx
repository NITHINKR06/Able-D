import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  BookOpen, 
  Brain, 
  Volume2, 
  Eye, 
  Ear, 
  MessageSquare, 
  Users, 
  Zap, 
  Shield, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Target,
  Lightbulb
} from 'lucide-react';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Learning Platform
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-yellow-300">Able-D</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's first integrated adaptive learning platform designed specifically for students with special needs. 
              Experience personalized education that adapts to your unique learning style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => navigate('/auth/student')}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={() => navigate('/auth/teacher')}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg backdrop-blur-sm bg-white/5"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                For Teachers
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* Student Types Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Supporting Every <span className="text-green-600">Learning Style</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform adapts to four distinct learning profiles, ensuring every student 
              gets the support they need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-50">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visually Impaired</h3>
              <p className="text-gray-600 text-sm mb-4">
                Audio-first interface with text-to-speech, voice navigation, and audio descriptions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-blue-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Text-to-Speech
                </div>
                <div className="flex items-center text-sm text-blue-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Voice Navigation
                </div>
                <div className="flex items-center text-sm text-blue-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Audio Descriptions
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-green-50">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Ear className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hearing Impaired</h3>
              <p className="text-gray-600 text-sm mb-4">
                Visual-focused interface with enhanced text formatting and visual indicators.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Visual Indicators
                </div>
                <div className="flex items-center text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Enhanced Text
                </div>
                <div className="flex items-center text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Structured Layout
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-purple-50">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Speech Impaired</h3>
              <p className="text-gray-600 text-sm mb-4">
                Text-based interactions with alternative communication methods and written assessments.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-purple-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Text Input
                </div>
                <div className="flex items-center text-sm text-purple-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Alternative Communication
                </div>
                <div className="flex items-center text-sm text-purple-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Written Assessments
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-orange-50">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dyslexia Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                Simplified content with step-by-step learning and visual aids for better comprehension.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-orange-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Simplified Content
                </div>
                <div className="flex items-center text-sm text-orange-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Step-by-Step Learning
                </div>
                <div className="flex items-center text-sm text-orange-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Visual Aids
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How <span className="text-purple-600">Able-D</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes learning accessible through a simple, powerful process that 
              automatically adapts content for every student.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Teachers Upload Content</h3>
              <p className="text-gray-600">
                Teachers upload documents, audio files, or text content. Our system supports 
                PDFs, Word documents, PowerPoint presentations, and audio recordings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Processes & Adapts</h3>
              <p className="text-gray-600">
                Our AI extracts text, generates audio, creates dyslexia-friendly versions, 
                and adapts content for different learning styles automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Students Learn</h3>
              <p className="text-gray-600">
                Students access personalized content through adaptive interfaces designed 
                specifically for their learning needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span className="text-yellow-300">Features</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need for inclusive, effective learning in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Volume2 className="w-8 h-8 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Text-to-Speech</h3>
              <p className="text-white/80">
                High-quality voice synthesis with customizable speed, voice, and language options.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Brain className="w-8 h-8 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">AI Q&A</h3>
              <p className="text-white/80">
                Intelligent question-answering system that provides context-aware responses.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Target className="w-8 h-8 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Adaptive Content</h3>
              <p className="text-white/80">
                Content automatically adapts based on student type and learning preferences.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Multi-User Support</h3>
              <p className="text-white/80">
                Support for multiple schools, classes, and subjects with role-based access.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Globe className="w-8 h-8 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Multi-Language</h3>
              <p className="text-white/80">
                Support for multiple languages with automatic translation and localization.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Shield className="w-8 h-8 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Secure & Private</h3>
              <p className="text-white/80">
                Enterprise-grade security with JWT authentication and data encryption.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform <span className="text-blue-600">Learning</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students and teachers who are already experiencing 
            the future of inclusive education with Able-D.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">I'm a Student</h3>
              <p className="text-gray-600 mb-6">
                Access personalized learning content adapted to your unique needs and learning style.
              </p>
              <Button 
                onClick={() => navigate('/auth/student')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                Start Learning Today
              </Button>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">I'm a Teacher</h3>
              <p className="text-gray-600 mb-6">
                Upload and manage educational content that automatically adapts for all your students.
              </p>
              <Button 
                onClick={() => navigate('/auth/teacher')}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                Get Started Teaching
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}

    </div>
  );
};

export default RoleSelection;