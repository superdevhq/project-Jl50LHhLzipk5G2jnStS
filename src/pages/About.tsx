
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const skills = [
    { name: "Web Design", level: 90 },
    { name: "Frontend Development", level: 85 },
    { name: "Backend Development", level: 75 },
    { name: "UI/UX Design", level: 80 },
    { name: "Project Management", level: 70 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors font-medium">About</Link>
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

      {/* About Hero */}
      <section className="container mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square max-w-md mx-auto bg-muted rounded-lg overflow-hidden">
            {/* Replace with your image */}
            <div className="w-full h-full bg-muted-foreground/10 flex items-center justify-center text-muted-foreground">
              Your Photo
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Your Name</h2>
            <p className="text-muted-foreground mb-6">
              Professional Title / Role
            </p>
            <p className="mb-6">
              Hello! I'm a passionate professional with over X years of experience in my field. I specialize in creating beautiful, functional digital experiences that solve real problems.
            </p>
            <p className="mb-6">
              My journey began when I discovered my passion for design and technology. Since then, I've worked with various clients and companies to bring their visions to life.
            </p>
            <p className="mb-6">
              When I'm not working, you can find me exploring new technologies, reading, or enjoying the outdoors.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download>Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {[
            {
              title: "Senior Designer",
              company: "Company Name",
              period: "2020 - Present",
              description: "Led design initiatives for major clients, resulting in a 40% increase in user engagement. Managed a team of junior designers and collaborated with development teams to ensure seamless implementation."
            },
            {
              title: "Designer",
              company: "Another Company",
              period: "2017 - 2020",
              description: "Created user interfaces for web and mobile applications. Conducted user research and testing to improve product usability. Collaborated with cross-functional teams to deliver high-quality products."
            },
            {
              title: "Junior Designer",
              company: "First Company",
              period: "2015 - 2017",
              description: "Assisted senior designers with various projects. Created visual assets for marketing campaigns. Participated in brainstorming sessions and contributed creative ideas."
            }
          ].map((job, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-1"></div>
              <h3 className="text-xl font-bold">{job.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">{job.company}</span>
                <span className="text-sm bg-muted px-3 py-1 rounded-full">{job.period}</span>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                degree: "Master's Degree",
                field: "Design & Technology",
                school: "University Name",
                year: "2013 - 2015"
              },
              {
                degree: "Bachelor's Degree",
                field: "Computer Science",
                school: "University Name",
                year: "2009 - 2013"
              }
            ].map((edu, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                <div className="text-sm text-muted-foreground mb-1">{edu.year}</div>
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <div className="text-muted-foreground mb-2">{edu.field}</div>
                <div>{edu.school}</div>
              </div>
            ))}
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

export default About;
