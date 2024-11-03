import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Camera, Mic, MessageSquare, Brain, BookOpen, User, LogOut } from 'lucide-react';

const InterviewPlatform = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const topics = [
    { id: 1, title: 'Kubernetes Orchestration', icon: '🚀' },
    { id: 2, title: 'CI/CD Pipelines', icon: '⚡' },
    { id: 3, title: 'Cloud Infrastructure', icon: '☁️' },
    { id: 4, title: 'DevOps Practices', icon: '🔄' },
    { id: 5, title: 'Monitoring Solutions', icon: '📊' },
    { id: 6, title: 'Database Management', icon: '💾' }
  ];

  const LoginForm = () => (
    <div className="flex flex-col space-y-4 w-full max-w-md mx-auto p-6">
      <Input type="email" placeholder="Email" className="w-full" />
      <Input type="password" placeholder="Password" className="w-full" />
      <Button onClick={() => setIsAuthenticated(true)} className="w-full bg-blue-600 hover:bg-blue-700">
        Sign In
      </Button>
    </div>
  );

  const TopicSelector = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {topics.map((topic) => (
        <Card key={topic.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedTopic(topic)}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>{topic.icon}</span>
              <span>{topic.title}</span>
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );

  const InterviewSession = () => (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)] p-4 gap-4">
      <div className="flex-1 flex flex-col">
        <Card className="flex-1 mb-4">
          <CardHeader>
            <CardTitle>Video Conference</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-[400px] bg-gray-100">
            <div className="flex flex-col items-center space-y-4">
              <Camera size={48} className="text-gray-400" />
              <p className="text-gray-500">Video feed will appear here</p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Camera className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600">{currentQuestion || "AI will generate interview questions based on the selected topic"}</p>
              </div>
              <div className="flex space-x-2">
                <Input placeholder="Type your answer..." className="flex-1" />
                <Button>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full lg:w-64">
        <CardHeader>
          <CardTitle>Interview Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <Button variant="outline" className="justify-start">
              <Brain className="h-4 w-4 mr-2" />
              AI Suggestions
            </Button>
            <Button variant="outline" className="justify-start">
              <BookOpen className="h-4 w-4 mr-2" />
              Documentation
            </Button>
            <Button variant="outline" className="justify-start">
              <MessageSquare className="h-4 w-4 mr-2" />
              Chat Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const Header = () => (
    <div className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-bold">TechInterview.AI</h1>
      {isAuthenticated && (
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsAuthenticated(false)}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {!isAuthenticated ? (
        <LoginForm />
      ) : (
        <>
          {!selectedTopic ? (
            <TopicSelector />
          ) : (
            <InterviewSession />
          )}
        </>
      )}
    </div>
  );
};

export default InterviewPlatform;
