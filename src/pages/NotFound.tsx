
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="terminal-window max-w-2xl w-full animate-fade-in">
        <div className="terminal-header">
          <div className="terminal-button bg-red-500"></div>
          <div className="terminal-button bg-yellow-500"></div>
          <div className="terminal-button bg-green-500"></div>
          <span className="text-xs text-terminal-comment ml-2 font-mono">~/error</span>
        </div>
        <div className="terminal-content py-8">
          <div className="flex flex-col items-center justify-center">
            <AlertTriangle className="h-16 w-16 text-tech-nostrPurple mb-4" />
            <h1 className="text-4xl font-mono font-bold mb-2">Error 404</h1>
            <div className="font-mono text-terminal-comment mb-6">
              $ file_not_found "{location.pathname}"
            </div>
            <div className="code-block bg-tech-darkCharcoal text-sm mb-8 w-full max-w-md">
              <pre className="text-terminal-comment">
                {`// The requested resource could not be found
throw new Error("Path '${location.pathname}' does not exist");
                
// Suggested resolution:
return redirect("/");`}
              </pre>
            </div>
            <Link
              to="/"
              className="px-6 py-3 rounded-md bg-tech-nostrPurple text-white font-mono flex items-center hover:bg-tech-nostrPurple/90 transition-colors after:hidden"
            >
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
