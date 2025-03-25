import React from "react";
import { Trophy, Calendar, Users, ExternalLink, Github } from "lucide-react";
import { hackathonProjects } from "@/data/hackathonProjects";

interface HackathonProject {
  title: string;
  event: string;
  date: string;
  description: string;
  achievement: string;
  teamSize: number;
  technologies: { name: string; color: string }[];
  demoUrl?: string;
  githubUrl?: string;
}

const HackathonProjects = () => {
  

  return (
    <section className="mt-20">
      <div className="flex items-center mb-8">
        <div className="text-2xl font-mono font-bold">Hackathon Projects</div>
        <div className="ml-4 flex-1 border-b border-tech-nostrPurple/10"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathonProjects.map((project, index) => (
          <div key={index} className="tech-card group relative overflow-hidden">
            <div className="absolute top-3 right-3 flex items-center bg-tech-nostrPurple/10 px-2 py-0.5 rounded-full">
              <Trophy className="h-3.5 w-3.5 text-tech-nostrPurple mr-1" />
              <span className="text-xs font-mono text-tech-nostrPurple">{project.achievement}</span>
            </div>
            
            <h3 className="text-lg font-mono font-medium mb-2 text-tech-nostrPurple pr-12">
              {project.title}
            </h3>
            
            <div className="flex items-center gap-3 text-xs text-terminal-comment mb-3">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-3 w-3 mr-1" />
                <span>Team of {project.teamSize}</span>
              </div>
            </div>
            
            <p className="text-terminal-comment text-sm mb-3 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="text-xs px-1.5 py-0.5 rounded font-mono"
                  style={{ 
                    backgroundColor: `${tech.color}20`,
                    color: tech.color
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between mt-auto pt-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs flex items-center text-terminal-comment hover:text-terminal-foreground transition-colors after:hidden"
              >
                <Github className="h-3.5 w-3.5 mr-1" />
                <span>GitHub</span>
              </a>
              
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center text-terminal-comment hover:text-terminal-foreground transition-colors after:hidden"
                >
                  <span>Demo</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HackathonProjects;

