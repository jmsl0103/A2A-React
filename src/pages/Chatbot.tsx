import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Zap, Brain, MessageSquare } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface Agent {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  capabilities: string[];
  useCase: string;
  confidence: number;
}

const hardcodedSuggestions: Agent[] = [
  {
    id: 'creative',
    name: 'Creative Assistant',
    description: 'Specialized in content creation, writing, and creative tasks',
    icon: <Brain className="w-6 h-6" />,
    capabilities: ['Content Writing', 'Creative Ideas', 'Storytelling', 'Marketing Copy'],
    useCase: 'creative writing marketing content',
    confidence: 4
  },
  {
    id: 'technical',
    name: 'Technical Expert',
    description: 'Perfect for coding, technical documentation, and problem-solving',
    icon: <Zap className="w-6 h-6" />,
    capabilities: ['Code Review', 'Technical Writing', 'Debugging', 'Architecture'],
    useCase: 'code programming development technical',
    confidence: 3
  }
];

export default function ChatBot() {
  const navigate = useNavigate();
  const location = useLocation();
  const { taskDescription } = location.state || {};

  const [messages, setMessages] = useState<Message[]>(() => {
    if (taskDescription && taskDescription.trim()) {
      return [
        {
          id: Date.now().toString(),
          text: taskDescription,
          isUser: true,
          timestamp: new Date()
        }
      ];
    }
    return [
      {
        id: '1',
        text: "Hello! I'm here to help you find the perfect AI agent for your needs. What kind of task or project are you working on?",
        isUser: false,
        timestamp: new Date()
      },
      {
        id: '2',
        text: "Based on your requirements, I've analyzed your needs and found the most suitable agents for you. Here are my recommendations:",
        isUser: false,
        timestamp: new Date()
      }
    ];
  });

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<Agent[]>(
    taskDescription && taskDescription.trim() ? hardcodedSuggestions : []
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = async (): Promise<string> => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);
    return "Further Details needed";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    const responseText = await simulateTyping();
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setSuggestions(hardcodedSuggestions);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLaunchAgent = (agent: Agent) => {
    navigate(`/chat/agent/${agent.id}`, { state: { taskDescription : '' } });
};

  return (

    <div className="min-h-auto bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span>{taskDescription ? taskDescription : 'empty'}</span>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Smart Agent Recommender</h1>
          <p className="text-gray-600">Find the perfect AI agent for your specific needs</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Agent Matcher Bot</h3>
                <p className="text-sm text-blue-100">Online • Ready to help</p>
              </div>
            </div>
          </div>

          <div className="min-h-[300px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-start space-x-2 max-w-2xl">
                  {!message.isUser && (
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  {message.isUser && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {suggestions.length > 0 && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-4xl w-full">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl w-full">
                    <h3 className="font-semibold text-gray-800 mb-4">Here are the best agents for your needs:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {suggestions.map((agent) => (
                        <div
                          key={agent.id}
                          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <div style={{ color: '#0067b8' }}>{agent.icon}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm" style={{ color: '#212529' }}>
                                {agent.name}
                              </h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="w-12 h-1 bg-gray-200 rounded-full">
                                  <div
                                    className="h-1 rounded-full"
                                    style={{
                                      width: `${Math.min(agent.confidence * 25, 100)}%`,
                                      backgroundColor: '#0067b8'
                                    }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-500">
                                  {Math.min(agent.confidence * 25, 100)}% match
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm mb-3">{agent.description}</p>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {agent.capabilities.slice(0, 2).map((capability) => (
                              <span
                                key={capability}
                                className="px-2 py-1 text-xs rounded-full"
                                style={{ backgroundColor: '#0067b8', color: 'white' }}
                              >
                                {capability}
                              </span>
                            ))}
                            {agent.capabilities.length > 2 && (
                              <span className="text-xs text-gray-500 px-2 py-1">
                                +{agent.capabilities.length - 2} more
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => handleLaunchAgent(agent)}
                            className="w-full py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:transform hover:scale-105"
                            style={{
                              backgroundColor: '#0067b8',
                              color: 'white'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#0056a0';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#0067b8';
                            }}
                          >
                            🚀 Launch {agent.name}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-100">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your task or project..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
