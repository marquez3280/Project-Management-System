import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleManageProjects = () => {
    navigate("/projects");
  };

  // Sample data for recent projects - in a real app this would come from props or an API
  const recentProjects = [
    { id: 1, name: "Website Redesign", progress: 75, daysLeft: 5 },
    { id: 2, name: "Mobile App Development", progress: 45, daysLeft: 14 },
    { id: 3, name: "Marketing Campaign", progress: 90, daysLeft: 2 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-14 pb-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              Dashboard
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Track your projects and tasks efficiently
            </p>
          </div>
          <button
            onClick={handleManageProjects}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded-md text-sm font-medium transition duration-200 flex items-center shadow-sm hover:shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Manage Projects
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard
            title="Active Projects"
            value="5"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            color="from-green-400 to-green-600"
            bgColor="bg-green-50"
            textColor="text-green-800"
          />
          <StatCard
            title="Pending Tasks"
            value="12"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            color="from-blue-400 to-blue-600"
            bgColor="bg-blue-50"
            textColor="text-blue-800"
          />
          <StatCard
            title="Overdue Projects"
            value="2"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            }
            color="from-red-400 to-red-600"
            bgColor="bg-red-50"
            textColor="text-red-800"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Recent Projects */}
          <div className="bg-white rounded-lg shadow-sm p-4 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Recent Projects</h2>
              <button
                onClick={handleManageProjects}
                className="text-blue-600 hover:text-blue-800 text-xs font-medium transition duration-200 flex items-center"
              >
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3">
              {recentProjects.map(project => (
                <div key={project.id} className="border border-gray-100 rounded-md p-3 hover:shadow-sm transition duration-200 bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-sm text-gray-800">{project.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      project.daysLeft <= 3 ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.daysLeft} days left
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${
                        project.progress >= 75 ? 'bg-green-500' : 
                        project.progress >= 50 ? 'bg-blue-500' : 
                        project.progress >= 25 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">Progress</span>
                    <span className="text-xs font-medium text-gray-700">{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <QuickActionButton
                title="Create Project"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                }
                onClick={() => navigate("/projects/new")}
                bgColor="bg-blue-600"
                hoverColor="bg-blue-700"
              />
              <QuickActionButton
                title="Add Task"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                }
                onClick={() => navigate("/tasks/new")}
                bgColor="bg-green-600"
                hoverColor="bg-green-700"
              />
              <QuickActionButton
                title="Team Members"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                }
                onClick={() => navigate("/team")}
                bgColor="bg-purple-600"
                hoverColor="bg-purple-700"
              />
              <QuickActionButton
                title="Reports"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
                onClick={() => navigate("/reports")}
                bgColor="bg-yellow-600"
                hoverColor="bg-yellow-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon, color, bgColor, textColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-sm transition-shadow duration-300">
      <div className={`h-0.5 bg-gradient-to-r ${color}`}></div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-xs">{title}</p>
            <h3 className={`text-xl font-bold mt-0.5 ${textColor}`}>{value}</h3>
          </div>
          <div className={`${bgColor} p-1.5 rounded-md`}>
            <div className={`text-gradient-to-r ${color}`}>
              {icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Quick Action Button Component
const QuickActionButton = ({ title, icon, onClick, bgColor, hoverColor }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full ${bgColor} hover:${hoverColor} text-white rounded-md py-1.5 px-3 flex items-center justify-between shadow-sm hover:shadow-sm transition duration-200`}
    >
      <span className="font-medium text-xs">{title}</span>
      <div className="bg-white bg-opacity-20 p-0.5 rounded-sm">
        {icon}
      </div>
    </button>
  );
};

export default Dashboard;
