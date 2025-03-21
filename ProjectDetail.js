import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Simulated project data
  const project = {
    id,
    name: "Website Redesign",
    description: "A complete redesign of the company website with modern UI/UX.",
    status: "In Progress",
    startDate: "2024-03-01",
    endDate: "2024-06-30",
    progress: 65,
    team: [
      { name: "Mananquil", role: "Project Manager", avatar: "M" },
      { name: "Manguerra", role: "UI Designer", avatar: "M" },
      { name: "Marquez", role: "Frontend Developer", avatar: "M" },
      { name: "Ocasla", role: "Backend Developer", avatar: "O" },
      { name: "Ocharan", role: "QA Tester", avatar: "O" }
    ],
    tasks: [
      { id: 1, name: "Design mockups", completed: true, assignee: "Manguerra", dueDate: "2024-03-15" },
      { id: 2, name: "Frontend development", completed: true, assignee: "Marquez", dueDate: "2024-04-30" },
      { id: 3, name: "Backend integration", completed: false, assignee: "Ocasla", dueDate: "2024-05-31" },
      { id: 4, name: "User testing", completed: false, assignee: "Ocharan", dueDate: "2024-06-15" },
      { id: 5, name: "Deployment", completed: false, assignee: "Mananquil", dueDate: "2024-06-30" }
    ],
    updates: [
      { date: "2024-03-15", content: "Design mockups completed", author: "Manguerra" },
      { date: "2024-04-30", content: "Frontend implementation completed", author: "Marquez" },
      { date: "2024-05-10", content: "Backend integration started", author: "Ocasla" }
    ]
  };

  // Get status color and icon
  const getStatusInfo = (status) => {
    switch (status) {
      case "In Progress":
        return { color: "#ff9800", icon: "bi-play-circle-fill" };
      case "Pending":
        return { color: "#f44336", icon: "bi-hourglass-split" };
      case "Completed":
        return { color: "#4caf50", icon: "bi-check-circle-fill" };
      default:
        return { color: "#9e9e9e", icon: "bi-question-circle-fill" };
    }
  };

  const statusInfo = getStatusInfo(project.status);

  // Task management
  const [showCompleted, setShowCompleted] = useState(true);
  const filteredTasks = showCompleted 
    ? project.tasks 
    : project.tasks.filter(task => !task.completed);

  // Calculate days remaining
  const calculateDaysRemaining = () => {
    const today = new Date();
    const endDate = new Date(project.endDate);
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = calculateDaysRemaining();

  return (
    <div className="container-fluid py-4">
      <div className="row mb-4 align-items-center">
        {/* Breadcrumb and back button */}
        <div className="col-12 mb-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#" onClick={() => navigate("/")}>Projects</a></li>
              <li className="breadcrumb-item active" aria-current="page">{project.name}</li>
            </ol>
          </nav>
        </div>

        {/* Project header */}
        <div className="col-md-8">
          <div className="d-flex align-items-center">
            <h1 className="fw-bold mb-0">{project.name}</h1>
            <span 
              className="ms-3 px-3 py-1 rounded-pill d-flex align-items-center"
              style={{ backgroundColor: `${statusInfo.color}20`, color: statusInfo.color }}
            >
              <i className={`bi ${statusInfo.icon} me-1`}></i>
              {project.status}
            </span>
          </div>
          <p className="text-muted mt-2 mb-0">{project.description}</p>
        </div>
        
        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <div className="btn-group" role="group">
            <button className="btn btn-primary">
              <i className="bi bi-pencil me-1"></i> Edit
            </button>
            <button className="btn btn-outline-primary">
              <i className="bi bi-share me-1"></i> Share
            </button>
            <button className="btn btn-outline-danger">
              <i className="bi bi-trash me-1"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Project stats cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3 col-sm-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#e3f2fd" }}>
                <i className="bi bi-calendar-check fs-4 text-primary"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1">Timeline</h6>
                <p className="fw-bold mb-0">
                  {daysRemaining > 0 ? `${daysRemaining} days left` : "Overdue"}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#e8f5e9" }}>
                <i className="bi bi-graph-up fs-4 text-success"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1">Progress</h6>
                <p className="fw-bold mb-0">{project.progress}% Complete</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#fff3e0" }}>
                <i className="bi bi-list-check fs-4 text-warning"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1">Tasks</h6>
                <p className="fw-bold mb-0">
                  {project.tasks.filter(t => t.completed).length}/{project.tasks.length} Done
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#e8eaf6" }}>
                <i className="bi bi-people fs-4 text-indigo"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1">Team</h6>
                <p className="fw-bold mb-0">{project.team.length} Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-2">
            <div>
              <h5 className="fw-bold mb-0">Project Progress</h5>
              <p className="text-muted small mb-0">
                {project.startDate} to {project.endDate}
              </p>
            </div>
            <span className="fw-bold">{project.progress}%</span>
          </div>
          <div className="progress" style={{ height: "8px" }}>
            <div 
              className="progress-bar" 
              role="progressbar"
              style={{ width: `${project.progress}%` }}
              aria-valuenow={project.progress} 
              aria-valuemin="0" 
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <i className="bi bi-grid me-1"></i> Overview
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "tasks" ? "active" : ""}`}
            onClick={() => setActiveTab("tasks")}
          >
            <i className="bi bi-check2-square me-1"></i> Tasks
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "team" ? "active" : ""}`}
            onClick={() => setActiveTab("team")}
          >
            <i className="bi bi-people me-1"></i> Team
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "updates" ? "active" : ""}`}
            onClick={() => setActiveTab("updates")}
          >
            <i className="bi bi-clock-history me-1"></i> Updates
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-white border-bottom-0 d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Recent Tasks</h5>
                  <button 
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => setActiveTab("tasks")}
                  >
                    View All
                  </button>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Task</th>
                          <th scope="col">Assignee</th>
                          <th scope="col">Due Date</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.tasks.slice(0, 3).map((task) => (
                          <tr key={task.id}>
                            <td>
                              <div className="form-check">
                                <input 
                                  className="form-check-input" 
                                  type="checkbox" 
                                  checked={task.completed} 
                                  readOnly
                                />
                                <label 
                                  className={`form-check-label ${task.completed ? 'text-decoration-line-through' : ''}`}
                                >
                                  {task.name}
                                </label>
                              </div>
                            </td>
                            <td>{task.assignee}</td>
                            <td>{task.dueDate}</td>
                            <td>
                              <span 
                                className={`badge ${task.completed ? 'bg-success' : 'bg-warning text-dark'}`}
                              >
                                {task.completed ? 'Completed' : 'In Progress'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-white border-bottom-0">
                  <h5 className="mb-0">Team Members</h5>
                </div>
                <div className="card-body">
                  {project.team.map((member, index) => (
                    <div key={index} className="d-flex align-items-center mb-3">
                      <div 
                        className="rounded-circle text-white d-flex justify-content-center align-items-center me-3"
                        style={{ 
                          width: "40px", 
                          height: "40px", 
                          backgroundColor: `hsl(${index * 60}, 70%, 60%)`,
                          fontSize: "16px",
                          fontWeight: "bold"
                        }}
                      >
                        {member.avatar}
                      </div>
                      <div>
                        <h6 className="mb-0">{member.name}</h6>
                        <small className="text-muted">{member.role}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === "tasks" && (
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Project Tasks</h5>
              <div>
                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="showCompletedTasks" 
                    checked={showCompleted}
                    onChange={() => setShowCompleted(!showCompleted)}
                  />
                  <label className="form-check-label" htmlFor="showCompletedTasks">
                    Show completed
                  </label>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" style={{ width: "40%" }}>Task</th>
                      <th scope="col">Assignee</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTasks.map((task) => (
                      <tr key={task.id}>
                        <td>
                          <div className="form-check">
                            <input 
                              className="form-check-input" 
                              type="checkbox" 
                              checked={task.completed} 
                              readOnly
                            />
                            <label 
                              className={`form-check-label ${task.completed ? 'text-decoration-line-through' : ''}`}
                            >
                              {task.name}
                            </label>
                          </div>
                        </td>
                        <td>{task.assignee}</td>
                        <td>{task.dueDate}</td>
                        <td>
                          <span 
                            className={`badge ${task.completed ? 'bg-success' : 'bg-warning text-dark'}`}
                          >
                            {task.completed ? 'Completed' : 'In Progress'}
                          </span>
                        </td>
                        <td>
                          <div className="btn-group btn-group-sm">
                            <button className="btn btn-outline-secondary">
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button className="btn btn-outline-danger">
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="btn btn-success mt-3">
                <i className="bi bi-plus-circle me-1"></i> Add New Task
              </button>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Team Members</h5>
              <button className="btn btn-primary btn-sm">
                <i className="bi bi-person-plus me-1"></i> Add Member
              </button>
            </div>
            <div className="card-body">
              <div className="row g-4">
                {project.team.map((member, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="card h-100">
                      <div className="card-body text-center">
                        <div 
                          className="mx-auto rounded-circle text-white d-flex justify-content-center align-items-center mb-3"
                          style={{ 
                            width: "80px", 
                            height: "80px", 
                            backgroundColor: `hsl(${index * 60}, 70%, 60%)`,
                            fontSize: "32px",
                            fontWeight: "bold" 
                          }}
                        >
                          {member.avatar}
                        </div>
                        <h5 className="mb-1">{member.name}</h5>
                        <p className="text-muted mb-3">{member.role}</p>
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-sm btn-outline-primary me-2">
                            <i className="bi bi-envelope"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-secondary">
                            <i className="bi bi-info-circle"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Updates Tab */}
        {activeTab === "updates" && (
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Project Updates</h5>
              <button className="btn btn-primary btn-sm">
                <i className="bi bi-plus-circle me-1"></i> Add Update
              </button>
            </div>
            <div className="card-body">
              <div className="timeline">
                {project.updates.map((update, index) => (
                  <div key={index} className="position-relative pb-4">
                    <div className="d-flex">
                      <div className="position-relative">
                        <div 
                          className="rounded-circle bg-primary"
                          style={{ width: "12px", height: "12px", marginTop: "6px" }}
                        ></div>
                        {index !== project.updates.length - 1 && (
                          <div 
                            className="position-absolute bg-light"
                            style={{ width: "2px", height: "calc(100% - 12px)", left: "5px", top: "18px" }}
                          ></div>
                        )}
                      </div>
                      <div className="card ms-3 w-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between mb-2">
                            <h6 className="mb-0 fw-bold">{update.author}</h6>
                            <span className="text-muted small">{update.date}</span>
                          </div>
                          <p className="mb-0">{update.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
