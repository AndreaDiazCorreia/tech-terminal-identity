import React from "react";
import { Trophy, Calendar, Users, ExternalLink, Github } from "lucide-react";

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
  const hackathonProjects: HackathonProject[] = [
    {
      title: "LightningPay",
      event: "Bitcoin Hackathon 2023",
      date: "October 2023",
      description: "A point-of-sale system that enables small merchants to accept Lightning Network payments with minimal setup. Features include QR code generation, real-time payment verification, and a simple reporting dashboard.",
      achievement: "1st Place",
      teamSize: 3,
      technologies: [
        { name: "Lightning", color: "#120A8F" },
        { name: "Node.js", color: "#339933" },
        { name: "React", color: "#61DAFB" }
      ],
      demoUrl: "https://lightning-pay-demo.vercel.app",
      githubUrl: "https://github.com/AndreaDiazCorreia/lightning-pay"
    },
    {
      title: "NostrRelay+",
      event: "Nostr Hackathon",
      date: "March 2023",
      description: "An enhanced Nostr relay implementation with advanced filtering capabilities, better spam protection, and improved performance for high-traffic scenarios. Includes admin tools for relay operators.",
      achievement: "2nd Place",
      teamSize: 2,
      technologies: [
        { name: "Nostr", color: "#9747FF" },
        { name: "Rust", color: "#FF4500" },
        { name: "WebSocket", color: "#4353FF" }
      ],
      githubUrl: "https://github.com/AndreaDiazCorreia/nostr-relay-plus"
    },
    {
      title: "Taproot Vault",
      event: "Bitcoin Builder's Workshop",
      date: "July 2023",
      description: "A collaborative custody solution that leverages Bitcoin's Taproot to create flexible spending conditions, including time-locks, multi-signature requirements, and emergency recovery paths.",
      achievement: "Best Technical Implementation",
      teamSize: 4,
      technologies: [
        { name: "Bitcoin", color: "#F7931A" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Go", color: "#00ADD8" }
      ],
      githubUrl: "https://github.com/AndreaDiazCorreia/taproot-vault"
    }
  ];

  return (
    <section className="mt-20">
      <div className="flex items-center mb-8">
        <div className="text-2xl font-mono font-bold">Hackathon Projects</div>
        <div className="ml-4 flex-1 border-b border-tech-nostrPurple/10"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hackathonProjects.map((project, index) => (
          <div key={index} className="tech-card group relative">
            <div className="absolute top-4 right-4 flex items-center bg-tech-nostrPurple/10 px-3 py-1 rounded-full">
              <Trophy className="h-4 w-4 text-tech-nostrPurple mr-1" />
              <span className="text-xs font-mono text-tech-nostrPurple">{project.achievement}</span>
            </div>
            
            <h3 className="text-xl font-mono font-medium mb-2 text-tech-nostrPurple">
              {project.title}
            </h3>
            
            <div className="flex items-center gap-4 text-xs text-terminal-comment mb-3">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-3 w-3 mr-1" />
                <span>Team of {project.teamSize}</span>
              </div>
            </div>
            
            <p className="text-terminal-comment text-sm mb-4 line-clamp-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="text-xs px-2 py-1 rounded font-mono"
                  style={{ 
                    backgroundColor: `${tech.color}20`,
                    color: tech.color
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center text-terminal-comment hover:text-terminal-foreground transition-colors after:hidden"
                >
                  <Github className="h-4 w-4 mr-1" />
                  <span>View on GitHub</span>
                </a>
              )}
              
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center text-terminal-comment hover:text-terminal-foreground transition-colors after:hidden"
                >
                  <span>Live Demo</span>
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