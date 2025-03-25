import matter from 'gray-matter';

// Define the article metadata type
export interface ArticleMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  readingTime: string;
  content: string;
}

// This uses Vite's import.meta.glob to get all markdown files
// Using the updated syntax with query: '?raw' instead of as: 'raw'
const articleFiles = import.meta.glob('/src/data/articles/*.md', { 
  query: '?raw',  // Get the raw content as string (new syntax)
  import: 'default', // Import the default export
  eager: true // Load immediately rather than lazily
});

// Get all articles metadata
export function getAllArticles(): ArticleMeta[] {
  const articles: ArticleMeta[] = [];
  
  console.log("Available article files:", Object.keys(articleFiles));
  
  // Process each file
  for (const path in articleFiles) {
    try {
      const fileContent = articleFiles[path] as string;
      
      // Use gray-matter to parse the article metadata and content
      const { data, content } = matter(fileContent);
      
      console.log("Processed article:", path, "with data:", data);
      
      // Extract the slug from the filename if not provided
      // For example: '/src/data/articles/my-article.md' -> 'my-article'
      let slug = data.slug;
      if (!slug) {
        const filename = path.split('/').pop() || '';
        slug = filename.replace(/\.mdx?$/, '');
      }
      
      // Create the article metadata object
      articles.push({
        title: data.title || '',
        date: data.date || '',
        description: data.description || '',
        tags: data.tags || [],
        slug,
        readingTime: data.readingTime || '',
        content
      });
    } catch (error) {
      console.error(`Error processing article at ${path}:`, error);
    }
  }
  
  console.log("Total articles found:", articles.length);
  
  // Sort articles by date (newest first)
  return articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Get a specific article by slug
export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  const articles = getAllArticles();
  const article = articles.find(article => article.slug.toLowerCase() === slug.toLowerCase());
  
  if (!article) {
    console.log(`Article with slug '${slug}' not found. Available slugs:`, 
      articles.map(a => a.slug));
  }
  
  return article;
}