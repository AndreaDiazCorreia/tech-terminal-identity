
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Terminal from "../components/Terminal";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const Index = () => {
  const [commandsCompleted, setCommandsCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const terminalLines = [
    "cd ~/dev-portfolio",
    "ls -la",
    "cat welcome.md",
    "Hello! I'm a passionate open source developer focused on Bitcoin, Nostr, Lightning Network and sometimes AI.",
    "Building decentralized solutions for a more open and censorship-resistant internet.",
    "npm start"
  ];

  if (!mounted) return null;

  return (
    <div className="space-y-16 animate-fade-in mt-8">
      <section className="text-center max-w-4xl mx-auto">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-nostrPurple/10 text-tech-nostrPurple text-xs font-mono mb-4">
            Andrea Diaz Correia / Open Source Software Developer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight">
            Making Internet <span className="text-tech-nostrPurple">Cypherpunk</span> again
          </h1>
          <p className="text-terminal-comment text-lg max-w-2xl mx-auto">
            Focused on Bitcoin, Nostr, Lightning Network and AI technologies for fun
          </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          <Terminal
            lines={terminalLines}
            typingSpeed={30}
            onComplete={() => setCommandsCompleted(true)}
          />
        </div>

        <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-opacity duration-500 ${
          commandsCompleted ? "opacity-100" : "opacity-0"
        }`}>
          <Link
            to="/projects"
            className="px-6 py-3 rounded-md bg-tech-nostrPurple text-white font-mono flex items-center hover:bg-tech-nostrPurple/90 transition-colors after:hidden"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href="https://github.com/AndreaDiazCorreia"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md border border-tech-nostrPurple/30 text-terminal-foreground font-mono flex items-center hover:bg-tech-nostrPurple/10 transition-colors after:hidden"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub Profile
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="tech-card">
          <div className="h-12 w-12 rounded-md bg-tech-bitcoinOrange/10 flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-tech-bitcoinOrange" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.4s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.415-.614.322.015.02-.96-.24-.96-.24l-.656 1.5 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.54 2.154 1.32.33.54-2.18c2.24.427 3.93.255 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.405-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.52 2.75 2.084v.006z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="text-lg font-mono font-medium mb-2">Bitcoin Development</h3>
          <p className="text-terminal-comment text-sm">
            Contributing to Bitcoin Core and building applications that leverage the security and decentralization of the Bitcoin network.
          </p>
        </div>

        <div className="tech-card">
  <div className="h-12 w-12 rounded-md bg-tech-nostrPurple/10 flex items-center justify-center mb-4">
    <img 
      src="/assets/image 2.svg" 
      alt="Nostr Protocol" 
      className="h-12 w-12 text-tech-nostrPurple"
    />
  </div>
  <h3 className="text-lg font-mono font-medium mb-2">Nostr Protocol</h3>
  <p className="text-terminal-comment text-sm">
    Building on the Notes and Other Stuff Transmitted by Relays protocol to create censorship-resistant social applications.
  </p>
</div>

        <div className="tech-card">
          <div className="h-12 w-12 rounded-md bg-yellow-500/10 flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 9h8L11 24v-9H4l9-15v9z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="text-lg font-mono font-medium mb-2">Lightning Network</h3>
          <p className="text-terminal-comment text-sm">
            Developing Layer 2 solutions that enable instant, low-cost Bitcoin transactions and new types of applications.
          </p>
        </div>

        <div className="tech-card">
          <div className="h-12 w-12 rounded-md bg-emerald-500/10 flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zM3 14h7v7H3v-7z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="text-lg font-mono font-medium mb-2">Software Development</h3>
          <p className="text-terminal-comment text-sm">
            Building robust backend systems and leveraging AI technologies to create privacy-focused, efficient applications and tools.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto text-center">
        <Link
          to="/blog"
          className="group inline-block after:hidden"
        >
          <div className="tech-card">
            <h2 className="text-2xl font-mono font-medium mb-4">Latest Articles</h2>
            <p className="text-terminal-comment mb-6">
              Technical deep-dives on Bitcoin, Lightning Network,Nostr, and Software development.
            </p>
            <div className="flex items-center justify-center text-tech-nostrPurple">
              <span>View the Blog</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Index;
