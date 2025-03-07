import React, { useEffect, useState } from 'react';
import './Project.css';

function ProjectsSection() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/all')
            .then(response => response.json())
            .then(data => {
                if (data.projects) {
                    setProjects(data.projects);
                }
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
      <div className="project-contain">
        <section id="projects2" className="projects2">
            <h2>Projects</h2>
            <div className="project-items">
                {projects.map((project) => (
                    <div className="project-item" key={project.id}>
                        <h3>{project.title}</h3>
                        <p><strong>Description:</strong> {project.content}</p>
                        <p><strong>Progress:</strong> {project.progress}</p>
                    </div>
                ))}
            </div>
        </section>
      </div>
    );
}

export default ProjectsSection;
