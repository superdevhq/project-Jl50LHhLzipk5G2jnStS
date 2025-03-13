
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A comprehensive web application for managing customer relationships and tracking sales performance.",
      image: "/placeholder.svg",
      tags: ["Web Design", "React", "Node.js"],
      link: "/portfolio/project-1"
    },
    {
      id: 2,
      title: "Project Two",
      description: "An e-commerce platform with advanced filtering, search, and payment processing capabilities.",
      image: "/placeholder.svg",
      tags: ["E-commerce", "UI/UX", "Payment Integration"],
      link: "/portfolio/project-2"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A mobile application for tracking fitness goals and creating personalized workout plans.",
      image: "/placeholder.svg",
      tags: ["Mobile App", "React Native", "Health & Fitness"],
      link: "/portfolio/project-3"
    },
    {
      id: 4,
      title: "Project Four",
      description: "A dashboard for visualizing complex data sets with interactive charts and filters.",
      image: "/placeholder.svg",
      tags: ["Data Visualization", "Dashboard", "Analytics"],
      link: "/portfolio/project-4"
    },
    {
      id: 5,
      title: "Project Five",
      description: "A content management system for a large media company with custom publishing workflows.",
      image: "/placeholder.svg",
      tags: ["CMS", "Content Strategy", "Enterprise"],
      link: "/portfolio/project-5"
    },
    {
      id: 6,
      title: "Project Six",
      description: "A social networking platform focused on connecting professionals in creative industries.",
      image: "/placeholder.svg",
      tags: ["Social Network", "Community", "Networking"],
      link: "/portfolio/project-6"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/portfolio" className="hover:text-primary transition-colors font-medium">Work</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </nav>

      {/* Portfolio Header */}
      <section className="container mx-auto py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of my best work across various industries and technologies.
          Each project represents a unique challenge and solution.
        </p>
      </section>

      {/* Portfolio Filters */}
      <section className="container mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          <Button variant="outline" className="rounded-full">All</Button>
          <Button variant="ghost" className="rounded-full">Web Design</Button>
          <Button variant="ghost" className="rounded-full">Mobile</Button>
          <Button variant="ghost" className="rounded-full">UI/UX</Button>
          <Button variant="ghost" className="rounded-full">Branding</Button>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-background border rounded-lg overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Button asChild>
                  <Link to={project.link}>View Project</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            I'm always open to discussing new projects and creative ideas. Let's create something amazing together.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Start a Conversation</Link>
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

export default Portfolio;
