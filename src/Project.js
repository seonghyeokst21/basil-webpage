import React, { useEffect, useState } from 'react';
import './Project.css';

function ProjectsSection() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('data/project.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return (
      <div className="project-contain">
        <section id="projects2" className="projects2">
            <h2>Projects</h2>
            <div className="project-items">
                {projects.map((project, index) => (
                    <div className="project-item" key={index}>
                        <h3>{project.title}</h3>
                        <p><strong>Description:</strong> {project.content}</p>
                        <p><strong>Progress:</strong> {project['current progress']}</p>
                    </div>
                ))}
            </div>
        </section>
      </div>
      
    );
}

export default ProjectsSection;
