import React, { useState } from 'react';
import { Search, Filter, Grid, List, Plus, User, Heart, Star, GitFork, ExternalLink, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AgentsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('Most Popular');

  const agentsData = {
    "agents": [
    {
          "isVerified": true,
          "id": 69,
      "name": "FinancialAnalystAgent",
      "description": "Provides comprehensive financial analysis using technical indicators and fundamental metrics",
      "url": "http://localhost:10014/",
      "version": "1.0.0",
      "protocol_version": "0.2.5",
      "icon_url": null,
      "documentation_url": null,
      "preferred_transport": "JSONRPC",
      "default_input_modes": [
        "text",
        "text/plain"
      ],
      "default_output_modes": [
        "text",
        "text/plain"
      ],
      "streaming": true,
      "push_notifications": false,
      "state_transition_history": false,
      "is_public": false,
      "created_at": "2025-08-08T14:09:41.830381Z",
      "updated_at": "2025-08-08T14:09:41.830381Z",
      "providers": [
        {
          "organization": "Orion",
          "url": "https://www.orioninc.com/"
        }
      ],
      "interfaces": [
        {
          "url": "http://localhost:10014/.well-known/agent.json",
          "transport": "JSONRPC"
        }
      ],
      "skills": [
        {
          "skill_id": "financial_analysis",
          "name": "Financial Analysis",
          "description": "Analyzes stocks using technical indicators and fundamental metrics",
          "input_modes": null,
          "output_modes": null,
          "created_by": "system",
          "tags": [
            "finance",
            "stocks",
            "analysis",
            "technical",
            "fundamental"
          ],
          "examples": [
            "Analyze TSLA stock performance",
            "Should I buy AAPL?",
            "What's the technical analysis for MSFT?"
          ]
        },
        {
          "skill_id": "user_stocks",
          "name": "stocks",
          "description": "User-defined skill: stocks",
          "input_modes": null,
          "output_modes": null,
          "created_by": "user",
          "tags": [
            "finance",
            "stocks"
          ],
          "examples": []
        },
        {
          "skill_id": "user_metrics",
          "name": "metrics",
          "description": "User-defined skill: metrics",
          "input_modes": null,
          "output_modes": null,
          "created_by": "user",
          "tags": [
            "finance",
            "stocks"
          ],
          "examples": []
        }
      ],
      "security_schemes": [
        {
          "scheme_name": "Basic Auth",
          "type": "basic",
          "config": null
        }
      ]
    },
    {
      "isVerified": true,
      "id": 73,
      "name": "AutoGen10KAgent",
      "description": "Extracts insights from 10-K reports using AutoGen",
      "url": "http://localhost:10013/",
      "version": "1.0.0",
      "protocol_version": "0.2.5",
      "icon_url": null,
      "documentation_url": null,
      "preferred_transport": "JSONRPC",
      "default_input_modes": [
        "text",
        "text/plain"
      ],
      "default_output_modes": [
        "text",
        "text/plain"
      ],
      "streaming": true,
      "push_notifications": false,
      "state_transition_history": false,
      "is_public": false,
      "created_at": "2025-08-11T10:21:46.634637Z",
      "updated_at": "2025-08-11T10:21:46.634637Z",
      "providers": [
        {
          "organization": "Orion",
          "url": "https://www.orioninc.com/"
        }
      ],
      "interfaces": [
        {
          "url": "http://localhost:10013/.well-known/agent.json",
          "transport": "JSONRPC"
        }
      ],
      "skills": [
        {
          "skill_id": "analyze_10k",
          "name": "10K Risk Summary",
          "description": "Summarizes 10-K risk and management sections",
          "input_modes": null,
          "output_modes": null,
          "created_by": "system",
          "tags": [
            "10k",
            "finance",
            "risk",
            "report"
          ],
          "examples": [
            "Summarize risks in the latest 10K report",
            "Give highlights on management discussion"
          ]
        },
        {
          "skill_id": "user_10k",
          "name": "10K",
          "description": "User-defined skill: 10K",
          "input_modes": null,
          "output_modes": null,
          "created_by": "user",
          "tags": [
            "Audit",
            "Tax"
          ],
          "examples": []
        },
        {
          "skill_id": "user_risk",
          "name": "Risk",
          "description": "User-defined skill: Risk",
          "input_modes": null,
          "output_modes": null,
          "created_by": "user",
          "tags": [
            "Audit",
            "Tax"
          ],
          "examples": []
        }
      ],
      "security_schemes": [
        {
          "scheme_name": "Basic Auth",
          "type": "basic",
          "config": null
        }
      ]
    },
    {
      "isVerified": false,
      "id": 74,
      "name": "TravelAgent",
      "description": "Provides comprehensive travel planning, itinerary creation, and travel recommendations using Semantic Kernel",
      "url": "http://localhost:10015/",
      "version": "1.0.0",
      "protocol_version": "0.2.5",
      "icon_url": null,
      "documentation_url": null,
      "preferred_transport": "JSONRPC",
      "default_input_modes": [
        "text",
        "text/plain"
      ],
      "default_output_modes": [
        "text",
        "text/plain"
      ],
      "streaming": true,
      "push_notifications": false,
      "state_transition_history": false,
      "is_public": true,
      "created_at": "2025-08-11T10:27:11.886073Z",
      "updated_at": "2025-08-11T10:27:11.886073Z",
      "providers": [
        {
          "organization": "Orion",
          "url": "https://www.orioninc.com/"
        }
      ],
      "interfaces": [
        {
          "url": "http://localhost:10015/.well-known/agent.json",
          "transport": "JSONRPC"
        }
      ],
      "skills": [
        {
          "skill_id": "travel_planning",
          "name": "Travel Planning",
          "description": "Plans travel itineraries and provides travel recommendations",
          "input_modes": null,
          "output_modes": null,
          "created_by": "system",
          "tags": [
            "travel",
            "planning",
            "itinerary",
            "booking",
            "recommendations"
          ],
          "examples": [
            "Plan a trip to Paris for next week",
            "Book a flight from New York to London",
            "Find hotels in Tokyo for my vacation",
            "Create an itinerary for a 5-day trip to Rome",
            "Recommend travel destinations for summer"
          ]
        },
        {
          "skill_id": "flight_booking",
          "name": "Flight Booking",
          "description": "Searches and books flights based on user requirements",
          "input_modes": null,
          "output_modes": null,
          "created_by": "system",
          "tags": [
            "travel",
            "flights",
            "booking",
            "airlines"
          ],
          "examples": [
            "Book a flight from New York to London on March 15th",
            "Find flights to Paris for next month",
            "Book a round-trip flight to Tokyo"
          ]
        },
        {
          "skill_id": "hotel_booking",
          "name": "Hotel Booking",
          "description": "Finds and books hotel accommodations",
          "input_modes": null,
          "output_modes": null,
          "created_by": "system",
          "tags": [
            "travel",
            "hotels",
            "booking",
            "accommodation"
          ],
          "examples": [
            "Find hotels in Paris for next week",
            "Book a hotel in Tokyo for 3 nights",
            "Find luxury hotels in London"
          ]
        },
        {
          "skill_id": "itinerary_planning",
          "name": "Itinerary Planning",
          "description": "Creates detailed day-by-day travel itineraries",
          "input_modes": null,
          "output_modes": null,
          "created_by": "system",
          "tags": [
            "travel",
            "itinerary",
            "planning",
            "activities"
          ],
          "examples": [
            "Create a 5-day itinerary for Rome",
            "Plan a weekend trip to Paris",
            "Design a 10-day tour of Japan"
          ]
        },
        {
          "skill_id": "travel_recommendations",
          "name": "Travel Recommendations",
          "description": "Provides destination and activity recommendations",
          "input_modes": null,
          "output_modes": null,
          "created_by": "system",
          "tags": [
            "travel",
            "recommendations",
            "destinations",
            "activities"
          ],
          "examples": [
            "Recommend destinations for summer vacation",
            "Suggest activities in Paris",
            "What are the best places to visit in Japan?"
          ]
        },
        {
          "skill_id": "user_travel",
          "name": "Travel",
          "description": "User-defined skill: Travel",
          "input_modes": null,
          "output_modes": null,
          "created_by": "user",
          "tags": [
            "Tourism"
          ],
          "examples": []
        }
      ],
      "security_schemes": [
        {
          "scheme_name": "Basic Auth",
          "type": "basic",
          "config": null
        }
      ]
    }
  ],
    "total_count": 3,
    "page": 1,
    "page_size": 10
  };

  const categories = ['Accessibility','Audio Processing', 'Business Intelligence','Communication','Content Generation','Creative','Customer Service','Data & Analytics','Development','Environment','Finance','Image Processing','Language','Marketing','Other','Productivity','Research','Social Media'];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-white-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      checked={selectedCategories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCategories([...selectedCategories, category]);
                        } else {
                          setSelectedCategories(selectedCategories.filter(c => c !== category));
                        }
                      }}
                    />
                    <span className="text-white-700 text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Agent Cards */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white-900">{agentsData.total_count} agents found</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentsData.agents.map((agent) => (
                <div key={agent.id} onClick={() => navigate(`/agent/${agent.id}`, { state: { agent } })}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex direction-column items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-white-900 text-sm">{agent.name}</h3>
                      {agent.isVerified && (
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                      )}
                    </div>
                  <div className="text-xs text-gray-600 mb-2">{agent.providers[0].organization}</div>
                  </div>

                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{agent.description}</p>

                  {agent.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[...new Set(agent.skills.flatMap((skill) => skill.name))].map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))} 
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-white-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>33</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>3</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="h-3 w-3" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;