
import CodeBlock from "../components/CodeBlock";

const About = () => {
  const developerProfile = `{
  "name": "Open Source Developer",
  "focus": ["Bitcoin", "Lightning Network", "Nostr"],
  "languages": ["Rust", "TypeScript", "Go", "C++"],
  "experience": {
    "years": 7,
    "contributions": 500,
    "repositories": 32
  },
  "interests": [
    "Decentralized Systems",
    "Cryptography",
    "Privacy Technology",
    "P2P Networks"
  ]
}`;

  const skillsData = [
    { category: "Languages", skills: [
      { name: "Rust", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Go", level: 80 },
      { name: "C++", level: 75 },
      { name: "Python", level: 70 }
    ]},
    { category: "Technologies", skills: [
      { name: "Bitcoin Core", level: 85 },
      { name: "Lightning Network", level: 90 },
      { name: "Nostr", level: 95 },
      { name: "WebRTC", level: 75 },
      { name: "Docker", level: 80 }
    ]},
    { category: "Tools", skills: [
      { name: "Git", level: 95 },
      { name: "Linux/Unix", level: 90 },
      { name: "Cryptography", level: 85 },
      { name: "WebAssembly", level: 70 },
      { name: "CI/CD", level: 80 }
    ]}
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
            Building on <span className="text-tech-bitcoinOrange">Bitcoin</span>, <span className="text-tech-nostrPurple">Nostr</span>, and <span className="text-tech-lightningBlue">Lightning</span>
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
        
        <div className="space-y-10">
          {skillsData.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-mono mb-4 text-tech-nostrPurple">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-sm">{skill.name}</span>
                      <span className="text-terminal-comment text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-tech-darkCharcoal rounded-full h-2.5">
                      <div 
                        className="rounded-full h-2.5 transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: 
                            skill.name.toLowerCase().includes("bitcoin") ? "#F7931A" :
                            skill.name.toLowerCase().includes("lightning") ? "#120A8F" :
                            skill.name.toLowerCase().includes("nostr") ? "#9747FF" :
                            "#9747FF"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
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
              <div className="text-xs text-terminal-comment mb-1 font-mono">2023 - Present</div>
              <h3 className="text-lg font-mono font-medium mb-1">Senior Bitcoin Developer</h3>
              <p className="text-sm text-terminal-comment">Contributing to Bitcoin Core and developing Lightning Network applications. Leading open-source projects for privacy-enhancing technologies.</p>
            </div>
          </div>
          
          <div className="relative pl-8 border-l border-tech-nostrPurple/30">
            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-tech-nostrPurple/80"></div>
            <div className="tech-card">
              <div className="text-xs text-terminal-comment mb-1 font-mono">2021 - 2023</div>
              <h3 className="text-lg font-mono font-medium mb-1">Blockchain Engineer</h3>
              <p className="text-sm text-terminal-comment">Developed open-source tools for Bitcoin and Layer 2 solutions. Created libraries for easy integration with the Lightning Network.</p>
            </div>
          </div>
          
          <div className="relative pl-8 border-l border-tech-nostrPurple/30">
            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-tech-nostrPurple/60"></div>
            <div className="tech-card">
              <div className="text-xs text-terminal-comment mb-1 font-mono">2019 - 2021</div>
              <h3 className="text-lg font-mono font-medium mb-1">Software Developer</h3>
              <p className="text-sm text-terminal-comment">Worked on various open-source projects. First contributions to Bitcoin-related projects and early Lightning Network implementations.</p>
            </div>
          </div>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-tech-nostrPurple/40"></div>
            <div className="tech-card">
              <div className="text-xs text-terminal-comment mb-1 font-mono">2017 - 2019</div>
              <h3 className="text-lg font-mono font-medium mb-1">Junior Developer</h3>
              <p className="text-sm text-terminal-comment">Started programming journey with web development. Discovered Bitcoin and began exploring blockchain technology.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
