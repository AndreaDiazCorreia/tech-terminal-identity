
import { useState, useEffect } from "react";
import { Copy, Check, Github, Twitter, ExternalLink, Key } from "lucide-react";
import CommandPrompt from "../components/CommandPrompt";

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [visibleInfo, setVisibleInfo] = useState<string[]>([]);

  const contactInfo = {
    email: "developer@example.com",
    pgpKey: "3A2D 5BC4 F785 9F1E A662 3456 7C54 8D51 F9E2 1A3B",
    github: "https://github.com/username",
    twitter: "https://twitter.com/username",
    nostr: "npub1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
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
      command: "pgp",
      description: "Show PGP public key",
      action: () => setVisibleInfo(prev => [...prev, "pgpKey"]),
    },
    {
      command: "github",
      description: "Show GitHub profile",
      action: () => setVisibleInfo(prev => [...prev, "github"]),
    },
    {
      command: "twitter",
      description: "Show Twitter profile",
      action: () => setVisibleInfo(prev => [...prev, "twitter"]),
    },
    {
      command: "nostr",
      description: "Show Nostr public key",
      action: () => setVisibleInfo(prev => [...prev, "nostr"]),
    },
    {
      command: "all",
      description: "Show all contact information",
      action: () => setVisibleInfo(["email", "pgpKey", "github", "twitter", "nostr"]),
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
              "Try 'email', 'pgp', 'github', 'twitter', 'nostr', or 'all'.",
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

            {visibleInfo.includes("pgpKey") && (
              <div className="tech-card flex justify-between items-center">
                <div>
                  <div className="text-xs text-terminal-comment mb-1">PGP Key</div>
                  <div className="font-mono text-xs sm:text-sm break-all">{contactInfo.pgpKey}</div>
                </div>
                <button
                  onClick={() => handleCopy("pgpKey", contactInfo.pgpKey)}
                  className="p-2 text-terminal-comment hover:text-terminal-foreground transition-colors"
                  aria-label="Copy PGP key"
                >
                  {copied === "pgpKey" ? (
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
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="tech-card">
            <h3 className="text-lg font-mono font-medium mb-4">Connect</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-terminal-foreground hover:text-tech-nostrPurple transition-colors"
              >
                <Github className="h-5 w-5 mr-3" />
                <span>GitHub</span>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-terminal-foreground hover:text-tech-nostrPurple transition-colors"
              >
                <Twitter className="h-5 w-5 mr-3" />
                <span>Twitter</span>
              </a>
              <a
                href="https://nostr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-terminal-foreground hover:text-tech-nostrPurple transition-colors"
              >
                <Key className="h-5 w-5 mr-3" />
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
              Currently remote, based in UTC-5
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
