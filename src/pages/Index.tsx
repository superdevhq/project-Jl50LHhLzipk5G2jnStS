
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/portfolio" className="hover:text-primary transition-colors">Work</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Hello, I'm <span className="text-primary">Your Name</span></h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10">
          I'm a professional specializing in design, development, and creating digital experiences that people love.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link to="/portfolio">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-muted py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-background rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
                <div className="aspect-video bg-muted-foreground/10"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-muted-foreground mb-4">A brief description of this amazing project and what technologies were used.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/portfolio/project-${item}`}>View Project</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest from the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-video bg-muted"></div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">June {item}, 2023</div>
                <h3 className="text-xl font-semibold mb-2">Blog Post Title {item}</h3>
                <p className="text-muted-foreground mb-4">A short excerpt from this amazing blog post that will make people want to read more...</p>
                <Button variant="link" className="p-0" asChild>
                  <Link to={`/blog/post-${item}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            I'm currently available for freelance work. If you have a project that needs some creative direction, I'd love to hear about it.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
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

export default Index;
