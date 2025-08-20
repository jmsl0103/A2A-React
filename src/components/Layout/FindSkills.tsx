import React, { useState } from 'react';
import { Upload, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AgentWorkflow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'find-skills' | 'upload-agents'>('find-skills');
  const [taskDescription, setTaskDescription] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (activeTab === 'find-skills' && taskDescription.trim()) {
      navigate(`/chat/${Math.random().toString(36).substring(2, 10)}`, { state: { taskDescription } });
    }
  };

  return (
      <div className="w-full max-w-4xl">
        {/* Main Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('find-skills')}
              className={`flex-1 py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === 'find-skills'
                  ? 'bg-white text-purple-900 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Find Skills
            </button>
            <button
              onClick={() => setActiveTab('upload-agents')}
              className={`flex-1 py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === 'upload-agents'
                  ? 'bg-white text-purple-900 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Upload Agents
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'find-skills' ? (
            <FindSkillsTab
              taskDescription={taskDescription}
              setTaskDescription={setTaskDescription}
              onSubmit={handleSubmit}
            />
          ) : (
            <UploadAgentsTab onSubmit={() => navigate('/submit')} />
          )}
        </div>
      </div>
  );
};

interface FindSkillsTabProps {
  taskDescription: string;
  setTaskDescription: (value: string) => void;
  onSubmit: () => void;
}

const FindSkillsTab: React.FC<FindSkillsTabProps> = ({
  taskDescription,
  setTaskDescription,
  onSubmit,
}) => {
  const handleFileUpload = () => {
    // Handle file upload functionality
    console.log('File upload clicked');
  };

  return (
    <div className="space-y-6">
      {/* Input Container */}
      <div className="relative">
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Describe what task you want to complete or a workflow you have"
          className="w-full h-32 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/30 px-6 py-4 text-gray-700 placeholder-gray-500 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
          rows={3}
        />
        
        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-3">
          <button
            onClick={handleFileUpload}
            className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
          >
            <Upload size={20} />
          </button>
          <button
            onClick={onSubmit}
            disabled={!taskDescription.trim()}
            className="w-12 h-12 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

interface UploadAgentsTabProps {
  onSubmit: () => void;
}

const UploadAgentsTab: React.FC<UploadAgentsTabProps> = ({ onSubmit }) => {
  return (
    <div className="space-y-8">
      {/* Content Container */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
        <p className="text-white text-lg leading-relaxed mb-8">
          Build your agent workflow with AI-powered automation, with thousands of capabilities
          available instantly.
        </p>
        
        {/* Submit Button */}
        <button
          onClick={onSubmit}
          className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          Submit your agent workflow
        </button>
      </div>
    </div>
  );
};

export default AgentWorkflow;