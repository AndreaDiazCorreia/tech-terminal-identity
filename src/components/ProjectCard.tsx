
import { useState } from "react";
import { Github, ExternalLink, CodeIcon } from "lucide-react";

interface Tech {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  technologies: Tech[];
  codeSnippet?: {
    code: string;
    language: string;
  };
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubUrl,
  demoUrl,
  technologies,
  codeSnippet,
}: ProjectCardProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="tech-card overflow-hidden group">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-mono font-medium mb-2 text-tech-nostrPurple">
          {title}
        </h3>
        <div className="flex space-x-2">
          {codeSnippet && (
            <button
              onClick={() => setShowCode(!showCode)}
              className="p-1.5 text-terminal-comment hover:text-terminal-foreground transition-colors"
              aria-label={showCode ? "Hide code" : "Show code"}
            >
              <CodeIcon className="h-4 w-4" />
            </button>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-terminal-comment hover:text-terminal-foreground transition-colors after:hidden"
              aria-label="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-terminal-comment hover:text-terminal-foreground transition-colors after:hidden"
              aria-label="View live demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="text-terminal-comment text-sm mt-2">{description}</p>

      {imageUrl && !showCode && (
        <div className="mt-4 rounded overflow-hidden border border-tech-nostrPurple/20">
          <img
            src={imageUrl}
            alt={title}
            className="w-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {codeSnippet && showCode && (
        <div className="mt-4 rounded overflow-hidden border border-tech-nostrPurple/20 bg-tech-richBlack p-4">
          <pre className="text-xs overflow-x-auto">
            <code>{codeSnippet.code}</code>
          </pre>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech) => (
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
    </div>
  );
};

export default ProjectCard;
