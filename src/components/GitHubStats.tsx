import { useGitHubStats } from '@/hooks/useGitHubStats';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Github, AlertCircle } from 'lucide-react';

interface GitHubStatsProps {
  username: string;
}

const GitHubStats = ({ username }: GitHubStatsProps) => {
  const { 
    contributions, 
    pullRequests, 
    commits, 
    stars, 
    languages, 
    currentStreak, 
    longestStreak, 
    loading, 
    error 
  } = useGitHubStats(username);

  if (loading) {
    return (
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-mono font-medium mb-6">GitHub Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="tech-card animate-pulse">
              <div className="h-10 w-24 bg-tech-nostrPurple/20 rounded mb-2 mx-auto"></div>
              <div className="h-4 w-32 bg-terminal-comment/20 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-mono font-medium mb-6">GitHub Stats</h2>
        <div className="tech-card p-8 flex flex-col items-center">
          <AlertCircle className="text-tech-nostrPurple h-12 w-12 mb-4" />
          <p className="text-terminal-comment mb-2">Could not load GitHub stats</p>
          <div className="p-4 bg-tech-richBlack rounded-md max-w-lg overflow-auto">
            <code className="text-xs font-mono text-terminal-comment">{error}</code>
          </div>
          <div className="mt-6 p-4 bg-tech-darkCharcoal/50 rounded-md text-sm">
            <p className="text-terminal-comment mb-2">To fix this issue:</p>
            <ol className="list-decimal pl-5 text-left space-y-2">
              <li>Make sure you've set up a GitHub personal access token with the correct permissions</li>
              <li>Add your token to the .env.local file as VITE_GITHUB_TOKEN</li>
              <li>Ensure your token has not expired</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 text-center">
      <h2 className="text-2xl font-mono font-medium mb-6 flex items-center justify-center">
        <Github className="mr-2 h-5 w-5 text-tech-nostrPurple" />
        GitHub Stats
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="tech-card">
          <div className="text-4xl font-mono font-bold text-tech-nostrPurple mb-2">{contributions}</div>
          <div className="text-terminal-comment text-sm">Contributions</div>
        </div>
        <div className="tech-card">
          <div className="text-4xl font-mono font-bold text-tech-nostrPurple mb-2">{pullRequests}</div>
          <div className="text-terminal-comment text-sm">Pull Requests</div>
        </div>
        <div className="tech-card">
          <div className="text-4xl font-mono font-bold text-tech-nostrPurple mb-2">{commits}</div>
          <div className="text-terminal-comment text-sm">Commits (Last Year)</div>
        </div>
        <div className="tech-card">
          <div className="text-4xl font-mono font-bold text-tech-nostrPurple mb-2">{stars}</div>
          <div className="text-terminal-comment text-sm">Stars Earned</div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="tech-card">
          <h3 className="text-lg font-mono font-medium mb-3">Most Used Languages</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {languages.map((lang) => (
              <span 
                key={lang.name}
                className="text-xs px-2 py-1 rounded font-mono" 
                style={{
                  backgroundColor: `${lang.color}20`,
                  color: lang.color
                }}
              >
                {lang.name} {lang.percentage}%
              </span>
            ))}
          </div>
        </div>
        <div className="tech-card">
          <h3 className="text-lg font-mono font-medium mb-3">Activity Streaks</h3>
          <div className="flex justify-around">
            <div>
              <div className="text-3xl font-mono font-bold text-tech-nostrPurple">{currentStreak}</div>
              <div className="text-terminal-comment text-xs">Current Streak</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-tech-nostrPurple">{longestStreak}</div>
              <div className="text-terminal-comment text-xs">Longest Streak</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;