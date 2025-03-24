
import CodeBlock from "../components/CodeBlock";

const About = () => {
  const developerProfile = `{
  "name": "Andrea Diaz Correia",
  "focus": ["Bitcoin", "Lightning Network", "Nostr", "AI", "Backend", "Software Development"],
  "languages": ["Java", "TypeScript", "Go", "C/C++", "Python", "Rust"],
  "experience": {
    "years": 4,
    "contributions": +300,
    "repositories": +25
  },
  "interests": [
    "Decentralized Systems",
    "Cryptography",
    "Privacy Technology",
    "P2P Networks",
    "Blockchain",
    "Bitcoin",
    "Lightning Network",
    "Nostr",
    "Backend",
    "Software Development",
    "AI"
  ]
}`;

const skillsData = [
  { 
    category: "Languages", 
    skills: ["Java", "TypeScript", "Go", "C/C++", "Python", "Rust"]
  },
  { 
    category: "Blockchain & Decentralized", 
    skills: ["Bitcoin Core", "Lightning Network", "Nostr", "Cryptography", "P2P Networks"]
  },
  { 
    category: "Backend & Development", 
    skills: ["RESTful APIs", "Microservices", "Docker", "CI/CD", "Database Design", "WebSockets"]
  },
  { 
    category: "Tools & Infrastructure", 
    skills: ["Git", "Linux/Unix", "Cloud Services", "WebAssembly", "Docker", "AWS"]
  },
  { 
    category: "AI", 
    skills: ["AI Integration", "LLMs"]
  }
];

  const commandOutput = `
$ cat philosophy.md

# Development Philosophy

I believe in building software that respects user freedom, privacy, and autonomy. 
My focus is on creating tools that empower individuals in a world of increasing 
digital centralization.

## Principles:

1. Build for self-sovereignty - users should control their own data
2. Design for privacy from the ground up - not as an afterthought
3. Create open protocols that enable permissionless innovation
4. Prioritize security and robustness over feature bloat
5. Contribute to documentation as much as code

The future of the internet should be open, decentralized, and resistant to 
censorship and control. Through Bitcoin, Lightning, and Nostr, we're building 
the infrastructure for that future.
`;

  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-fade-in">
      <section>
        <div className="mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-nostrPurple/10 text-tech-nostrPurple text-xs font-mono mb-4">
            About Me
          </div>
          <h1 className="text-3xl md:text-4xl font-mono font-bold">
            Building on <span className="text-tech-bitcoinOrange">Bitcoin</span>, <span className="text-tech-nostrPurple">Nostr</span>, <span className="text-yellow-500">Lightning</span>, and other things for fun.
          </h1>
        </div>
        
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button bg-red-500"></div>
            <div className="terminal-button bg-yellow-500"></div>
            <div className="terminal-button bg-green-500"></div>
            <span className="text-xs text-terminal-comment ml-2 font-mono">~/about/developer.json</span>
          </div>
          <div className="terminal-content">
            <CodeBlock 
              code={developerProfile} 
              language="json" 
            />
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-mono font-bold mb-6 flex items-center">
          <span className="text-terminal-green mr-2">$</span> Skills &amp; Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div key={category.category} className="tech-card p-6 rounded-lg border border-tech-nostrPurple/20 bg-tech-darkCharcoal/50">
              <h3 className="text-lg font-mono mb-4 text-tech-nostrPurple">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="font-mono text-sm flex items-center">
                    <span className="text-terminal-green mr-2">❯</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-mono font-bold mb-6 flex items-center">
          <span className="text-terminal-green mr-2">$</span> Philosophy
        </h2>
        
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button bg-red-500"></div>
            <div className="terminal-button bg-yellow-500"></div>
            <div className="terminal-button bg-green-500"></div>
            <span className="text-xs text-terminal-comment ml-2 font-mono">~/about/philosophy.md</span>
          </div>
          <div className="terminal-content whitespace-pre-wrap font-mono text-sm">
            {commandOutput}
          </div>
        </div>
      </section>
      
      <section>
  <h2 className="text-2xl font-mono font-bold mb-6 flex items-center">
    <span className="text-terminal-green mr-2">$</span> Timeline
  </h2>
  
  <div className="space-y-6">
    <div className="relative pl-8 border-l border-tech-nostrPurple/30">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-tech-nostrPurple"></div>
      <div className="tech-card">
        <div className="text-xs text-terminal-comment mb-1 font-mono">2024 - Present</div>
        <h3 className="text-lg font-mono font-medium mb-1">Open Source Software Developer</h3>
        <p className="text-sm text-terminal-comment">Contributing to open source projects and developing software solutions with a focus on blockchain technologies, Bitcoin, and decentralized systems.</p>
      </div>
    </div>

    <div className="relative pl-8 border-l border-tech-nostrPurple/30">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-tech-nostrPurple/90"></div>
      <div className="tech-card">
        <div className="text-xs text-terminal-comment mb-1 font-mono">2023 - Present</div>
        <h3 className="text-lg font-mono font-medium mb-1">Backend Developer at The Lab Tech</h3>
        <p className="text-sm text-terminal-comment">Implementing robust backend systems using Java and Node.js, ensuring seamless integration with frontend components. Enhancing system performance, scalability, and leading migration of legacy systems.</p>
      </div>
    </div>
    
    <div className="relative pl-8 border-l border-tech-nostrPurple/30">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-tech-nostrPurple/80"></div>
      <div className="tech-card">
        <div className="text-xs text-terminal-comment mb-1 font-mono">2023 - 2025</div>
        <h3 className="text-lg font-mono font-medium mb-1">DevRel at LaCrypta</h3>
        <p className="text-sm text-terminal-comment">Designing and delivering technical workshops on blockchain and Bitcoin development. Creating technical documentation and building developer community relationships through events, hackathons, and mentoring programs.</p>
      </div>
    </div>
    
    <div className="relative pl-8 border-l border-tech-nostrPurple/30">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-tech-nostrPurple/70"></div>
      <div className="tech-card">
        <div className="text-xs text-terminal-comment mb-1 font-mono">2023 - 2024</div>
        <h3 className="text-lg font-mono font-medium mb-1">Tech Lead / Backend Developer at Dchess</h3>
        <p className="text-sm text-terminal-comment">Led and coordinated technical teams in project delivery, maintained platform operations, and participated in architecture design. Implemented new tools to increase team efficiency and facilitated communication between teams.</p>
      </div>
    </div>
    
    <div className="relative pl-8 border-l border-tech-nostrPurple/60">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-tech-nostrPurple/60"></div>
      <div className="tech-card">
        <div className="text-xs text-terminal-comment mb-1 font-mono">2023</div>
        <h3 className="text-lg font-mono font-medium mb-1">Full-Stack Developer Intern at Tinkin</h3>
        <p className="text-sm text-terminal-comment">Designed and implemented web applications using NestJS, NextJS, and TypeScript with a focus on Test-Driven Development (TDD). Demonstrated proficiency in Git and Agile methodology.</p>
      </div>
    </div>
    
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-tech-nostrPurple/40"></div>
      <div className="tech-card">
        <div className="text-xs text-terminal-comment mb-1 font-mono">2022 - 2023</div>
        <h3 className="text-lg font-mono font-medium mb-1">Full-Stack Developer at Accenture</h3>
        <p className="text-sm text-terminal-comment">Developed web and mobile applications using HTML, CSS, JavaScript, React, Node.js and MongoDB. Applied strong knowledge of Java and Python while managing projects with JIRA and Trello.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;
