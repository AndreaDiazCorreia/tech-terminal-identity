
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import MatrixRain from "./MatrixRain";

const Layout = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MatrixRain />
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {mounted && <Outlet />}
      </main>
      <footer className="border-t border-tech-nostrPurple/20 py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-terminal-comment text-sm font-mono">
              <span className="text-terminal-green">$</span> echo "© $(date +%Y) All rights reserved"
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                   className="text-terminal-foreground hover:text-tech-nostrPurple transition-colors">
                  GitHub
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                   className="text-terminal-foreground hover:text-tech-nostrPurple transition-colors">
                  Twitter
                </a>
                <a href="https://nostr.com/" target="_blank" rel="noopener noreferrer"
                   className="text-terminal-foreground hover:text-tech-nostrPurple transition-colors">
                  Nostr
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
