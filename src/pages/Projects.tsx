import GitHubStats from "@/components/GitHubStats";
import ProjectCard from "../components/ProjectCard";
import HackathonProjects from "../components/HackathonProjects";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-tech-nostrPurple/10 text-tech-nostrPurple text-xs font-mono mb-4">
          Projects
        </div>
        <h1 className="text-3xl md:text-4xl font-mono font-bold">
          Open Source Contributions & Projects
        </h1>
        <p className="text-terminal-comment mt-2 max-w-2xl">
          A showcase of my work on Bitcoin, Nostr, and Lightning Network technologies. All projects are open-source and available on GitHub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            technologies={project.technologies}
            codeSnippet={project.codeSnippet}
          />
        ))}
      </div>

      {/* Hackathon Projects Section */}
      <HackathonProjects />

      <GitHubStats username="AndreaDiazCorreia" />
    </div>
  );
};

export default Projects;

