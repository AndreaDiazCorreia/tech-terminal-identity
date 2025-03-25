import { useState, useEffect } from 'react';


const languageColors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Python: '#3776AB',
  Go: '#00ADD8',
  Rust: '#FF4500',
  Java: '#007396',
  Ruby: '#CC342D',
  PHP: '#777BB4',
  C: '#A8B9CC',
  'C++': '#00599C',
  'C#': '#239120',
  Shell: '#89E051',
  Solidity: '#363636',
  Swift: '#FA7343',
  Kotlin: '#F18E33',
  Dart: '#0175C2',
  Makefile: '#427819',
};

interface GitHubStats {
  contributions: number;
  pullRequests: number;
  commits: number;
  stars: number;
  languages: { name: string; percentage: number; color: string }[];
  currentStreak: number;
  longestStreak: number;
  loading: boolean;
  error: string | null;
}


export const useGitHubStats = (username: string) => {
  const [stats, setStats] = useState<GitHubStats>({
    contributions: 0,
    pullRequests: 0,
    commits: 0,
    stars: 0,
    languages: [],
    currentStreak: 0,
    longestStreak: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {

        const token = import.meta.env.VITE_GITHUB_TOKEN;
        
        if (!token) {
          throw new Error('GitHub token is required for accurate statistics');
        }

        const query = `
          query ($username: String!) {
            user(login: $username) {
              name
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
              pullRequests {
                totalCount
              }
              repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false) {
                totalCount
                nodes {
                  name
                  stargazerCount
                  languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                    edges {
                      size
                      node {
                        name
                        color
                      }
                    }
                  }
                  defaultBranchRef {
                    target {
                      ... on Commit {
                        history(first: 1) {
                          totalCount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `;


        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query, variables: { username } }),
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        const userData = data.data.user;
        

        const totalContributions = userData.contributionsCollection.contributionCalendar.totalContributions;
        

        const pullRequestCount = userData.pullRequests.totalCount;
        

        const stars = userData.repositories.nodes.reduce(
          (acc: number, repo: { stargazerCount: number }) => acc + repo.stargazerCount, 
          0
        );

        const commits = userData.repositories.nodes.reduce(
          (acc: number, repo: { defaultBranchRef?: { target?: { history?: { totalCount: number } } } }) => {
            if (repo.defaultBranchRef && repo.defaultBranchRef.target) {
              return acc + (repo.defaultBranchRef.target.history?.totalCount || 0);
            }
            return acc;
          }, 
          0
        );
        

        const contributionWeeks = userData.contributionsCollection.contributionCalendar.weeks;
        const lastYearCommits = contributionWeeks
          .flatMap((week: { contributionDays: { contributionCount: number }[] }) => week.contributionDays)
          .reduce((acc: number, day: { contributionCount: number }) => acc + day.contributionCount, 0);
        

        const languageMap = new Map<string, number>();
        let totalSize = 0;
        
        userData.repositories.nodes.forEach((repo: { languages?: { edges?: { node: { name: string }, size: number }[] } }) => {
          if (repo.languages && repo.languages.edges) {
            repo.languages.edges.forEach((edge: { node: { name: string }, size: number }) => {
              const { name } = edge.node;
              const size = edge.size;
              
              const currentSize = languageMap.get(name) || 0;
              languageMap.set(name, currentSize + size);
              totalSize += size;
            });
          }
        });
        

        const languages = Array.from(languageMap.entries())
          .map(([name, size]) => ({
            name,
            percentage: Math.round((size / totalSize) * 10000) / 100,
            color: languageColors[name] || '#6e7681',
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 4); // Top 4 languages
        

        const contributionDays = contributionWeeks.flatMap((week: { contributionDays: { date: string; contributionCount: number }[] }) => 
          week.contributionDays.map((day: { date: string; contributionCount: number }) => ({
            date: new Date(day.date),
            count: day.contributionCount,
          }))
        ).sort((a, b) => a.date.getTime() - b.date.getTime());
        
        let currentStreak = 0;
        let longestStreak = 0;
        let currentStreakCount = 0;
        

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        for (let i = contributionDays.length - 1; i >= 0; i--) {
          const { date, count } = contributionDays[i];
          

          if (date > today) continue;
          
          if (count > 0) {
            currentStreakCount++;
            

            if (i === contributionDays.length - 1 || 
                (date.getTime() === today.getTime()) ||
                (date.getTime() === new Date(today.getTime() - 86400000).getTime())) {
              currentStreak = currentStreakCount;
            }
            

            longestStreak = Math.max(longestStreak, currentStreakCount);
          } else {
            currentStreakCount = 0;
          }
        }
        

        setStats({
          contributions: totalContributions,
          pullRequests: pullRequestCount,
          commits: lastYearCommits,
          stars,
          languages,
          currentStreak,
          longestStreak,
          loading: false,
          error: null
        });
        
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats(prevStats => ({
          ...prevStats,
          loading: false,
          error: error instanceof Error ? error.message : 'An unknown error occurred'
        }));
      }
    };

    fetchGitHubStats();
  }, [username]);

  return stats;
};