
import { useState } from "react";
import { Search, Tag, Clock } from "lucide-react";
import BlogPost from "../components/BlogPost";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = selectedTag === null || 
      post.tags.some(tag => tag === selectedTag);
    
    return matchesSearch && matchesTag;
  });

  const featuredPosts = filteredPosts.slice(0, 3);
  const regularPosts = filteredPosts.slice(3);

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-tech-nostrPurple/10 text-tech-nostrPurple text-xs font-mono mb-4">
          Blog
        </div>
        <h1 className="text-3xl md:text-4xl font-mono font-bold">
          Technical Articles
        </h1>
        <p className="text-terminal-comment mt-2 max-w-2xl">
          Deep dives into Bitcoin, Lightning Network, and Nostr protocol development.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-terminal-comment" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-tech-darkCharcoal border border-tech-nostrPurple/20 rounded-md focus:outline-none focus:border-tech-nostrPurple/40 transition-colors font-mono text-sm"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-terminal-comment text-sm flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            Filter:
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`text-xs px-2 py-1 rounded font-mono ${
              selectedTag === null
                ? "bg-tech-nostrPurple/20 text-tech-nostrPurple"
                : "bg-tech-darkCharcoal text-terminal-comment hover:bg-tech-darkCharcoal/80"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`text-xs px-2 py-1 rounded font-mono ${
                selectedTag === tag
                  ? "bg-tech-nostrPurple/20 text-tech-nostrPurple"
                  : "bg-tech-darkCharcoal text-terminal-comment hover:bg-tech-darkCharcoal/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="tech-card text-center py-12">
          <div className="text-xl font-mono mb-2">No articles found</div>
          <p className="text-terminal-comment">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      ) : (
        <>
          {featuredPosts.length > 0 && (
            <>
              <div className="flex items-center mb-4">
                <div className="text-lg font-mono">Featured Articles</div>
                <div className="ml-4 flex-1 border-b border-tech-nostrPurple/10"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {featuredPosts.map((post) => (
                  <BlogPost key={post.slug} post={post} featured={true} />
                ))}
              </div>
            </>
          )}

          {regularPosts.length > 0 && (
            <>
              <div className="flex items-center mb-4">
                <div className="text-lg font-mono">All Articles</div>
                <div className="ml-4 flex-1 border-b border-tech-nostrPurple/10"></div>
              </div>
              
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button bg-red-500"></div>
                  <div className="terminal-button bg-yellow-500"></div>
                  <div className="terminal-button bg-green-500"></div>
                  <span className="text-xs text-terminal-comment ml-2 font-mono">~/blog $ ls -la</span>
                </div>
                <div className="terminal-content">
                  <div className="flex border-b border-tech-nostrPurple/10 pb-2 mb-2">
                    <div className="font-mono text-xs text-terminal-comment w-28">Date</div>
                    <div className="flex-1 font-mono text-xs text-terminal-comment">Title</div>
                    <div className="font-mono text-xs text-terminal-comment">Tags</div>
                  </div>
                  {regularPosts.map((post) => (
                    <BlogPost key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Blog;
