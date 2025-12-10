import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS_DATA } from '../../data/content';
import { SectionHeader, Card, Tag } from '../../components/ui';
import { GitHubIcon, ExternalLinkIcon, FolderIcon } from '../../components/icons';
import './Projects.css';

const ProjectCard = ({ project, index, isVisible }) => {
  return (
    <Card
      variant="bordered"
      hover={true}
      padding="large"
      className={`project-card ${isVisible ? 'project-card--visible' : ''}`}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="project-card__header">
        <FolderIcon size={40} className="project-card__icon" />
        <div className="project-card__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="View on GitHub"
            >
              <GitHubIcon size={20} />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="View live site"
            >
              <ExternalLinkIcon size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      <div className="project-card__tech">
        {project.technologies.map((tech) => (
          <Tag key={tech} variant="muted" size="small">
            {tech}
          </Tag>
        ))}
      </div>
    </Card>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayedProjects = showAll ? PROJECTS_DATA : PROJECTS_DATA.slice(0, 4);

  return (
    <section id="projects" className={`projects ${isVisible ? 'projects--visible' : ''}`} ref={sectionRef}>
      <div className="projects__container">
        <SectionHeader
          number={4}
          title="Projects"
          subtitle="Things I've built"
          align="center"
        />

        <div className="projects__grid">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {PROJECTS_DATA.length > 4 && (
          <div className="projects__more">
            <button
              className="projects__show-more"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

