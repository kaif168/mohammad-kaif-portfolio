import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { FadeIn } from './FadeIn';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16 md:mb-20"
            style={{ fontSize: 'clamp(3rem, 11.5vw, 150px)' }}
          >
            My Projects
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6 sm:gap-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-[32px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute top-5 right-5 p-2 rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors"
            >
              <X size={18} />
            </button>

            <span className="text-xs uppercase tracking-[0.2em] text-[#B600A8] font-semibold">
              Project {selectedProject.number} · {selectedProject.category}
            </span>
            <h3
              id="project-modal-title"
              className="mt-2 text-2xl sm:text-3xl font-bold uppercase text-[#D7E2EA]"
            >
              {selectedProject.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#BBCCD7] font-semibold mb-3">
                Key Features &amp; Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2.5 rounded-xl bg-[#141418] border border-[#D7E2EA]/10 px-3.5 py-2.5 text-xs sm:text-sm text-[#D7E2EA]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#BBCCD7] font-semibold mb-3">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#18181F] text-[#D7E2EA] border border-[#D7E2EA]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.githubUrl && (
              <div className="mt-7 pt-5 border-t border-[#D7E2EA]/10 flex justify-end">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] px-6 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors"
                >
                  Visit GitHub Profile
                  <ExternalLink size={15} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};