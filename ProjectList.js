import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  // Enhanced project data with more details
  const projects = [
    { 
      id: 1, 
      name: "Website Redesign", 
      status: "In Progress", 
      progress: 65,
      description: "A complete redesign of the company website with modern UI/UX.",
      team: ["Mananquil", "Manguerra", "Marquez"],
      deadline: "Jun 30, 2024"
    },
    { 
      id: 2, 
      name: "Mobile App Development", 
      status: "Pending", 
      progress: 25,
      description: "Developing a cross-platform mobile application for customers.",
      team: ["Ocasla", "Ocharan"],
      deadline: "Aug 15, 2024"
    },
    { 
      id: 3, 
      name: "Marketing Campaign", 
      status: "Completed", 
      progress: 100,
      description: "Q1 digital marketing campaign for product launch.",
      team: ["Mananquil", "Ocharan"],
      deadline: "Mar 31, 2024"
    },
    { 
      id: 4, 
      name: "Database Migration", 
      status: "In Progress", 
      progress: 50,
      description: "Migrating from legacy database to cloud-based solution.",
      team: ["Marquez", "Ocasla"],
      deadline: "Jul 20, 2024"
    },
  ];

  // Filter and search state
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Get status info (color and icon)
  const getStatusInfo = (status) => {
    switch (status) {
      case "In Progress":
        return { color: "#ff9800", bgColor: "#fff8e1", icon: "bi-play-circle-fill" };
      case "Pending":
        return { color: "#f44336", bgColor: "#ffebee", icon: "bi-hourglass-split" };
      case "Completed":
        return { color: "#4caf50", bgColor: "#e8f5e9", icon: "bi-check-circle-fill" };
      default:
        return { color: "#9e9e9e", bgColor: "#f5f5f5", icon: "bi-question-circle-fill" };
    }
  };

  // Filter projects based on status and search query
  const filteredProjects = projects.filter(project => {
    const matchesStatus = statusFilter === "All" || project.status === statusFilter;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Projects Dashboard</h1>
        <button className="btn btn-primary">
          <i className="bi bi-plus-lg me-2"></i>
          New Project
        </button>
      </div>

      {/* Filters and search */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3 align-items-center">
            <div className="col-md-5">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-search"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control border-start-0" 
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="col-md-5">
              <div className="btn-group" role="group">
                <button 
                  type="button" 
                  className={`btn ${statusFilter === "All" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setStatusFilter("All")}
                >
                  All
                </button>
                <button 
                  type="button" 
                  className={`btn ${statusFilter === "In Progress" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setStatusFilter("In Progress")}
                >
                  In Progress
                </button>
                <button 
                  type="button" 
                  className={`btn ${statusFilter === "Pending" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setStatusFilter("Pending")}
                >
                  Pending
                </button>
                <button 
                  type="button" 
                  className={`btn ${statusFilter === "Completed" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setStatusFilter("Completed")}
                >
                  Completed
                </button>
              </div>
            </div>
            
            <div className="col-md-2 text-end">
              <div className="btn-group" role="group">
                <button 
                  type="button" 
                  className={`btn ${viewMode === "grid" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setViewMode("grid")}
                >
                  <i className="bi bi-grid-3x3-gap"></i>
                </button>
                <button 
                  type="button" 
                  className={`btn ${viewMode === "list" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setViewMode("list")}
                >
                  <i className="bi bi-list-ul"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats summary */}
      <div className="row g-3 mb-4">
        <div className="col-md-3 col-sm-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#e3f2fd" }}>
                <i className="bi bi-collection fs-4 text-primary"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1">Total Projects</h6>
                <p className="fw-bold mb-0 fs-4">{projects.length}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#fff8e1" }}>
                <i className="bi bi-play-circle fs-4 text-warning"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1">In Progress</h6>
                <p className="fw-bold mb-0 fs-4">
                  {projects.filter(p => p.status === "In Progress").length}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#ffebee" }}>
                <i className="bi bi-hourglass-split fs-4 text-danger"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1">Pending</h6>
                <p className="fw-bold mb-0 fs-4">
                  {projects.filter(p => p.status === "Pending").length}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle p-3 me-3" style={{ backgroundColor: "#e8f5e9" }}>
                <i className="bi bi-check-circle fs-4 text-success"></i>
              </div>
              <div>
                <h6 className="text-muted mb-1">Completed</h6>
                <p className="fw-bold mb-0 fs-4">
                  {projects.filter(p => p.status === "Completed").length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid View */}
      {viewMode === "grid" && (
        <div className="row g-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => {
              const statusInfo = getStatusInfo(project.status);
              
              return (
                <div key={project.id} className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm transition-hover">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span 
                          className="badge rounded-pill px-3 py-2 d-flex align-items-center"
                          style={{ backgroundColor: statusInfo.bgColor, color: statusInfo.color }}
                        >
                          <i className={`bi ${statusInfo.icon} me-1`}></i>
                          {project.status}
                        </span>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-light" type="button" id={`dropdown-${project.id}`} data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots-vertical"></i>
                          </button>
                          <ul className="dropdown-menu" aria-labelledby={`dropdown-${project.id}`}>
                            <li><button className="dropdown-item">Edit</button></li>
                            <li><button className="dropdown-item">Share</button></li>
                            <li><button className="dropdown-item text-danger">Delete</button></li>
                          </ul>
                        </div>
                      </div>
                      
                      <h4 className="card-title fw-bold mb-2">{project.name}</h4>
                      <p className="card-text text-muted mb-3">{project.description}</p>
                      
                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <small className="text-muted">Progress</small>
                          <small className="fw-bold">{project.progress}%</small>
                        </div>
                        <div className="progress" style={{ height: "6px" }}>
                          <div 
                            className="progress-bar" 
                            role="progressbar" 
                            style={{ width: `${project.progress}%`, backgroundColor: statusInfo.color }} 
                            aria-valuenow={project.progress} 
                            aria-valuemin="0" 
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          {project.team.slice(0, 3).map((member, index) => (
                            <div 
                              key={index}
                              className="rounded-circle text-white d-flex justify-content-center align-items-center border border-white"
                              style={{ 
                                width: "32px", 
                                height: "32px", 
                                backgroundColor: `hsl(${index * 120}, 70%, 60%)`,
                                fontSize: "12px",
                                fontWeight: "bold",
                                marginLeft: index > 0 ? "-10px" : "0"
                              }}
                            >
                              {member.charAt(0)}
                            </div>
                          ))}
                          {project.team.length > 3 && (
                            <div 
                              className="rounded-circle bg-light d-flex justify-content-center align-items-center border border-white"
                              style={{ 
                                width: "32px", 
                                height: "32px", 
                                fontSize: "12px",
                                marginLeft: "-10px"
                              }}
                            >
                              +{project.team.length - 3}
                            </div>
                          )}
                        </div>
                        
                        <div className="text-end">
                          <small className="d-block text-muted">Deadline</small>
                          <small className="fw-bold">{project.deadline}</small>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer bg-white border-top-0 text-center">
                      <Link to={`/projects/${project.id}`} className="btn btn-outline-primary w-100">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center py-5">
              <i className="bi bi-search fs-1 text-muted"></i>
              <h4 className="mt-3">No projects found</h4>
              <p className="text-muted">Try adjusting your search or filter criteria</p>
              <button 
                className="btn btn-outline-primary mt-2"
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Projects List View */}
      {viewMode === "list" && (
        <div className="card border-0 shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Status</th>
                  <th scope="col">Progress</th>
                  <th scope="col">Team</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => {
                    const statusInfo = getStatusInfo(project.status);
                    
                    return (
                      <tr key={project.id}>
                        <td>
                          <div>
                            <h6 className="mb-1">{project.name}</h6>
                            <small className="text-muted">{project.description.substring(0, 50)}...</small>
                          </div>
                        </td>
                        <td>
                          <span 
                            className="badge rounded-pill px-3 py-2 d-flex align-items-center"
                            style={{ 
                              backgroundColor: statusInfo.bgColor, 
                              color: statusInfo.color,
                              width: "fit-content"
                            }}
                          >
                            <i className={`bi ${statusInfo.icon} me-1`}></i>
                            {project.status}
                          </span>
                        </td>
                        <td style={{ width: "15%" }}>
                          <div className="d-flex align-items-center">
                            <div className="progress flex-grow-1 me-2" style={{ height: "6px" }}>
                              <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{ width: `${project.progress}%`, backgroundColor: statusInfo.color }} 
                                aria-valuenow={project.progress} 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span className="text-muted small">{project.progress}%</span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            {project.team.slice(0, 3).map((member, index) => (
                              <div 
                                key={index}
                                className="rounded-circle text-white d-flex justify-content-center align-items-center border border-white"
                                style={{ 
                                  width: "32px", 
                                  height: "32px", 
                                  backgroundColor: `hsl(${index * 120}, 70%, 60%)`,
                                  fontSize: "12px",
                                  fontWeight: "bold",
                                  marginLeft: index > 0 ? "-10px" : "0"
                                }}
                              >
                                {member.charAt(0)}
                              </div>
                            ))}
                            {project.team.length > 3 && (
                              <div 
                                className="rounded-circle bg-light d-flex justify-content-center align-items-center border border-white"
                                style={{ 
                                  width: "32px", 
                                  height: "32px", 
                                  fontSize: "12px",
                                  marginLeft: "-10px"
                                }}
                              >
                                +{project.team.length - 3}
                              </div>
                            )}
                          </div>
                        </td>
                        <td>{project.deadline}</td>
                        <td>
                          <div className="btn-group btn-group-sm">
                            <Link to={`/projects/${project.id}`} className="btn btn-outline-primary">
                              <i className="bi bi-eye"></i>
                            </Link>
                            <button className="btn btn-outline-secondary">
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button className="btn btn-outline-danger">
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      <i className="bi bi-search fs-1 text-muted"></i>
                      <h5 className="mt-3">No projects found</h5>
                      <p className="text-muted">Try adjusting your search or filter criteria</p>
                      <button 
                        className="btn btn-outline-primary mt-2"
                        onClick={() => {
                          setSearchQuery("");
                          setStatusFilter("All");
                        }}
                      >
                        Clear filters
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
