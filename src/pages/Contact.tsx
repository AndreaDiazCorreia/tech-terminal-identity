
import { useState, useEffect } from "react";
import { Copy, Check, Github, Twitter, ExternalLink, Key } from "lucide-react";
import CommandPrompt from "../components/CommandPrompt";

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [visibleInfo, setVisibleInfo] = useState<string[]>([]);

  const contactInfo = {
    email: "andrea.diaz.correia@gmail.com",
    signal: "https://signal.me/#eu/ETp8twiwB4up_LNof2aYidA1I1r1VkgLvuT0zMhlKkcoh5O0p4BBjI1UN09s5dvq",
    github: "https://github.com/andreadiazcorreia",
    twitter: "https://x.com/andreadcorreia",
    nostr: "npub1zvyeff7d26lxmhzyh4jlmdjwvvkg5pmd9uxrwa82q45agmr0a0as6rvfj0",
    linkedin: "https://www.linkedin.com/in/andrea-diaz-correia/",
  };

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const availableCommands = [
    {
      command: "email",
      description: "Show email address",
      action: () => setVisibleInfo(prev => [...prev, "email"]),
    },
    {
      command: "signal",
      description: "Show url to chat with me on Signal",
      action: () => setVisibleInfo(prev => [...prev, "signal"]),
    },
    {
      command: "github",
      description: "Show GitHub profile",
      action: () => setVisibleInfo(prev => [...prev, "github"]),
    },
    {
      command: "twitter",
      description: "Show Twitter/X profile",
      action: () => setVisibleInfo(prev => [...prev, "twitter"]),
    },
    {
      command: "nostr",
      description: "Show Nostr public key",
      action: () => setVisibleInfo(prev => [...prev, "nostr"]),
    },
    {
      command: "linkedin",
      description: "Show linkedin profile",
      action: () => setVisibleInfo(prev => [...prev, "linkedin"]),
    },
    {
      command: "all",
      description: "Show all contact information",
      action: () => setVisibleInfo(["email", "signal", "github", "twitter", "nostr", "linkedin"]),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-tech-nostrPurple/10 text-tech-nostrPurple text-xs font-mono mb-4">
          Contact
        </div>
        <h1 className="text-3xl md:text-4xl font-mono font-bold">
          Get in Touch
        </h1>
        <p className="text-terminal-comment mt-2 max-w-2xl">
          Feel free to reach out about collaborations, open source projects, or just to say hello.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <CommandPrompt
            availableCommands={availableCommands}
            initialOutput={[
              "Welcome to the contact terminal.",
              "Type a command to reveal contact information.",
              "Try 'email', 'signal', 'github', 'twitter', 'nostr', 'linkedin' or 'all'.",
              "Type 'help' to see all available commands.",
              ""
            ]}
          />

          <div className="mt-8 space-y-4">
            {visibleInfo.includes("email") && (
              <div className="tech-card flex justify-between items-center">
                <div>
                  <div className="text-xs text-terminal-comment mb-1">Email</div>
                  <div className="font-mono">{contactInfo.email}</div>
                </div>
                <button
                  onClick={() => handleCopy("email", contactInfo.email)}
                  className="p-2 text-terminal-comment hover:text-terminal-foreground transition-colors"
                  aria-label="Copy email"
                >
                  {copied === "email" ? (
                    <Check className="h-4 w-4 text-terminal-green" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            )}

            {visibleInfo.includes("signal") && (
              <div className="tech-card flex justify-between items-center">
                <div>
                  <div className="text-xs text-terminal-comment mb-1">Signal</div>
                  <div className="font-mono text-xs sm:text-sm break-all">{contactInfo.signal}</div>
                </div>
                <button
                  onClick={() => handleCopy("signal", contactInfo.signal)}
                  className="p-2 text-terminal-comment hover:text-terminal-foreground transition-colors"
                  aria-label="Copy signal url"
                >
                  {copied === "signal" ? (
                    <Check className="h-4 w-4 text-terminal-green" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            )}

            {visibleInfo.includes("github") && (
              <div className="tech-card flex justify-between items-center">
                <div>
                  <div className="text-xs text-terminal-comment mb-1">GitHub</div>
                  <div className="font-mono">{contactInfo.github}</div>
                </div>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-terminal-comment hover:text-terminal-foreground transition-colors after:hidden"
                  aria-label="Visit GitHub profile"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}

            {visibleInfo.includes("twitter") && (
              <div className="tech-card flex justify-between items-center">
                <div>
                  <div className="text-xs text-terminal-comment mb-1">Twitter</div>
                  <div className="font-mono">{contactInfo.twitter}</div>
                </div>
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-terminal-comment hover:text-terminal-foreground transition-colors after:hidden"
                  aria-label="Visit Twitter profile"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}

            {visibleInfo.includes("nostr") && (
              <div className="tech-card flex justify-between items-center">
                <div>
                  <div className="text-xs text-terminal-comment mb-1">Nostr</div>
                  <div className="font-mono text-xs sm:text-sm break-all">{contactInfo.nostr}</div>
                </div>
                <button
                  onClick={() => handleCopy("nostr", contactInfo.nostr)}
                  className="p-2 text-terminal-comment hover:text-terminal-foreground transition-colors"
                  aria-label="Copy Nostr key"
                >
                  {copied === "nostr" ? (
                    <Check className="h-4 w-4 text-terminal-green" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            )}

            {visibleInfo.includes("linkedin") && (
              <div className="tech-card flex justify-between items-center">
                <div>
                  <div className="text-xs text-terminal-comment mb-1">LinkedIn</div>
                  <div className="font-mono">{contactInfo.linkedin}</div>
                </div>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-terminal-comment hover:text-terminal-foreground transition-colors after:hidden"
                  aria-label="Visit linkedin profile"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="tech-card">
            <h3 className="text-lg font-mono font-medium mb-4">Connect</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/andreadiazcorreia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-terminal-foreground hover:text-tech-nostrPurple transition-colors"
              >
                <Github className="h-5 w-5 mr-3" />
                <span>GitHub</span>
              </a>
              <a
                href="https://twitter.com/andreadcorreia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-terminal-foreground hover:text-tech-nostrPurple transition-colors"
              >
                <Twitter className="h-5 w-5 mr-3" />
                <span>Twitter</span>
              </a>
              <a
        href="https://njump.me/nprofile1qqspxzv55lx4d0ndm3zt6e0ake8xxty2qakj7rphwn4q26w5d3h7h7cs0txfd"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-terminal-foreground hover:text-tech-nostrPurple transition-colors"
      >
        <img 
          src="/assets/image 5.svg" 
          alt="Nostr" 
          className="h-6 w-6 mr-3" 
        />
        <span>Nostr</span>
      </a>
            </div>
          </div>

          <div className="tech-card">
            <h3 className="text-lg font-mono font-medium mb-4">Availability</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-terminal-green mr-2"></div>
                <span>Open to Collaboration</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-terminal-green mr-2"></div>
                <span>Available for Consulting</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-tech-nostrPurple mr-2"></div>
                <span>Considering New Projects</span>
              </div>
            </div>
          </div>

          <div className="tech-card">
            <h3 className="text-lg font-mono font-medium mb-4">Location</h3>
            <div className="text-terminal-comment">
              Currently remote, based in UTC-3
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center font-mono text-terminal-comment text-sm">
        <div className="mb-2">{"<EOF>"}</div>
      </div>
    </div>
  );
};

export default Contact;
