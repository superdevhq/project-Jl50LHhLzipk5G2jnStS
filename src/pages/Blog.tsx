
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Essential UI Design Principles Every Designer Should Know",
      excerpt: "Learn the fundamental principles that guide effective user interface design and how to apply them in your next project.",
      date: "June 15, 2023",
      author: "Your Name",
      category: "Design",
      tags: ["UI Design", "Design Principles", "UX"],
      image: "/placeholder.svg",
      slug: "essential-ui-design-principles"
    },
    {
      id: 2,
      title: "How to Build a Responsive Website from Scratch",
      excerpt: "A step-by-step guide to creating a fully responsive website using modern HTML, CSS, and JavaScript techniques.",
      date: "May 28, 2023",
      author: "Your Name",
      category: "Development",
      tags: ["Web Development", "Responsive Design", "CSS"],
      image: "/placeholder.svg",
      slug: "build-responsive-website"
    },
    {
      id: 3,
      title: "The Future of Web Development: Trends to Watch in 2023",
      excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development.",
      date: "May 10, 2023",
      author: "Your Name",
      category: "Technology",
      tags: ["Web Development", "Trends", "Technology"],
      image: "/placeholder.svg",
      slug: "future-web-development-trends"
    },
    {
      id: 4,
      title: "Mastering Color Theory for Digital Design",
      excerpt: "Understand the principles of color theory and how to effectively use color in your digital design projects.",
      date: "April 22, 2023",
      author: "Your Name",
      category: "Design",
      tags: ["Color Theory", "Design", "Visual Design"],
      image: "/placeholder.svg",
      slug: "mastering-color-theory"
    },
    {
      id: 5,
      title: "A Guide to Effective Project Management for Creatives",
      excerpt: "Learn how to manage creative projects efficiently while maintaining quality and meeting deadlines.",
      date: "April 5, 2023",
      author: "Your Name",
      category: "Project Management",
      tags: ["Project Management", "Productivity", "Teamwork"],
      image: "/placeholder.svg",
      slug: "project-management-for-creatives"
    },
    {
      id: 6,
      title: "How to Create a Successful Portfolio Website",
      excerpt: "Tips and strategies for building a portfolio website that effectively showcases your work and attracts clients.",
      date: "March 18, 2023",
      author: "Your Name",
      category: "Career",
      tags: ["Portfolio", "Career Advice", "Web Design"],
      image: "/placeholder.svg",
      slug: "create-successful-portfolio"
    }
  ];

  const categories = [
    { name: "All", count: posts.length },
    { name: "Design", count: posts.filter(post => post.category === "Design").length },
    { name: "Development", count: posts.filter(post => post.category === "Development").length },
    { name: "Technology", count: posts.filter(post => post.category === "Technology").length },
    { name: "Project Management", count: posts.filter(post => post.category === "Project Management").length },
    { name: "Career", count: posts.filter(post => post.category === "Career").length }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/portfolio" className="hover:text-primary transition-colors">Work</Link>
          <Link to="/blog" className="hover:text-primary transition-colors font-medium">Blog</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="container mx-auto py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Thoughts, ideas, and insights on design, development, and the creative process.
        </p>
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Input 
              type="search" 
              placeholder="Search articles..." 
              className="pr-10"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="container mx-auto pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="block">
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                    </Link>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0" asChild>
                      <Link to={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                </Button>
                <Button variant="outline" className="w-10">1</Button>
                <Button variant="outline" className="w-10">2</Button>
                <Button variant="outline" className="w-10">3</Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Categories */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      to={category.name === "All" ? "/blog" : `/blog/category/${category.name.toLowerCase()}`}
                      className="flex justify-between items-center py-2 hover:text-primary transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">{category.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Recent Posts */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-muted rounded-md shrink-0 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="font-medium hover:text-primary transition-colors line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <div className="text-sm text-muted-foreground">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tags */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(posts.flatMap(post => post.tags))).map((tag, index) => (
                  <Link key={index} to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="border rounded-lg p-6 bg-muted/50">
              <h3 className="text-xl font-semibold mb-2">Subscribe to Newsletter</h3>
              <p className="text-muted-foreground mb-4">Get the latest posts delivered straight to your inbox.</p>
              <div className="space-y-2">
                <Input placeholder="Your email address" type="email" />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Portfolio</div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
