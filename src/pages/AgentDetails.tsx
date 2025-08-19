import React from 'react';
import { ArrowLeft, Star, GitFork, Github, FileText, CheckCircle, ChevronUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SDKDetails: React.FC = () => {

    const location = useLocation();
    const { agent } = location.state || {};
  return (
    <div className="min-h-auto bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back to Agents */}
        <button onClick={() => window.history.back()} className="flex items-center gap-2 mb-6 text-gray-600 hover:text-white-800 transition-colors">
          <ArrowLeft size={16} />
          <span className="text-sm font-medium">Back to Agents</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <span className="text-purple-700 font-semibold text-lg">A</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h1 className="text-xl font-semibold text-white-900">{agent.name}</h1>
                      <CheckCircle size={18} className="text-blue-500 fill-current" />
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{agent.providers[0].organization}</p>
                  </div>
                </div>  
                <div className="flex flex-col items-center">
                  <button className="p-1 hover:bg-gray-50 rounded transition-colors">
                    <ChevronUp size={20} className="text-white-400" />
                  </button>
                  <span className="text-sm font-medium text-white-700">36</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white-700 mb-6">{agent.description}</p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-500" />
                  <span className="font-medium">0</span>
                  <span>Stars</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork size={16} className="text-white-400" />
                  <span className="font-medium">0</span>
                  <span>Forks</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white-900 mb-3">Categories</h3>
                {[...new Set<string>(agent.skills.flatMap((skill: { tags: string[] }) => skill.tags))].map((tag: string, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm mr-4"
                        >
                          {tag}
                        </span>
                      ))}
              </div>

              {/* Skills & Capabilities */}
              <div className='mb-6'>
                <h3 className="text-sm font-semibold text-white-900 mb-3">Skills & Capabilities</h3>
                <div className="flex flex-wrap gap-2">
                  {[...new Set<string>(agent.skills.flatMap((skill: { name: string }) => skill.name))].map((skill: string, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm mr-4"
                        >
                          {skill}
                        </span>
                      ))}
                </div>
              </div>
              <div className='mb-6'>
                <h3 className="text-sm font-semibold text-white-900 mb-3">Mode of Input</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.default_input_modes.map((mode: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm mr-4">
                      {mode}
                    </span>
                  ))}
                </div>
                </div>
                <div>
                <h3 className="text-sm font-semibold text-white-900 mb-3">Mode of Output</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.default_output_modes.map((mode: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm mr-4">
                      {mode}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Access */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-white-900 mb-4">Quick Access</h3>
              <div className="space-y-3">
                <button className="flex items-center gap-3 w-full text-left p-2 rounded-md hover:bg-gray-50 transition-colors">
                  <Github size={16} className="text-gray-600" />
                  <span className="text-sm text-white-700">View on GitHub</span>
                </button>
                <button className="flex items-center gap-3 w-full text-left p-2 rounded-md hover:bg-gray-50 transition-colors">
                  <FileText size={16} className="text-gray-600" />
                  <span className="text-sm text-white-700">Documentation</span>
                </button>
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-white-900 mb-4">Technical Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Provider</span>
                  <span className="text-sm font-medium text-white-900">{agent.providers[0].organization}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Created</span>
                  <span className="text-sm font-medium text-white-900">{agent.created_at.split('T')[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDKDetails;