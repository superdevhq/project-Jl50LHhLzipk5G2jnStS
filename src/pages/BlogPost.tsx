
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BlogPost = () => {
  const { slug } = useParams();
  
  // In a real application, you would fetch the post data based on the slug
  // This is just mock data for demonstration
  const post = {
    title: "10 Essential UI Design Principles Every Designer Should Know",
    date: "June 15, 2023",
    author: "Your Name",
    authorRole: "UI/UX Designer",
    authorImage: "/placeholder.svg",
    category: "Design",
    tags: ["UI Design", "Design Principles", "UX"],
    image: "/placeholder.svg",
    content: `
      <p class="mb-4">User interface (UI) design is a critical component of creating successful digital products. Whether you're designing a website, mobile app, or any other digital interface, following established design principles can help ensure your product is both aesthetically pleasing and functional.</p>
      
      <p class="mb-4">In this article, we'll explore 10 essential UI design principles that every designer should know and apply in their work.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Clarity is Key</h2>
      
      <p class="mb-4">The interface should be clear and intuitive. Users should be able to recognize what elements are interactive and understand how to accomplish their goals without confusion.</p>
      
      <p class="mb-4">To achieve clarity:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li>Use familiar patterns and conventions</li>
        <li>Make interactive elements obvious</li>
        <li>Provide clear feedback for actions</li>
        <li>Use simple, direct language</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Maintain Consistency</h2>
      
      <p class="mb-4">Consistency creates familiarity and reduces the learning curve. When elements behave in expected ways, users can apply what they've learned throughout the interface.</p>
      
      <p class="mb-4">Ensure consistency in:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li>Visual elements (colors, typography, iconography)</li>
        <li>Interaction patterns</li>
        <li>Language and terminology</li>
        <li>Layout and spacing</li>
      </ul>
      
      <figure class="my-8">
        <img src="/placeholder.svg" alt="Consistency in UI design" class="w-full rounded-lg" />
        <figcaption class="text-sm text-muted-foreground mt-2 text-center">Example of consistent design elements across different screens</figcaption>
      </figure>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Provide User Control</h2>
      
      <p class="mb-4">Users should feel in control of the interface. They should be able to undo actions, navigate freely, and exit unwanted states.</p>
      
      <p class="mb-4">To enhance user control:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li>Make actions reversible when possible</li>
        <li>Provide clear navigation options</li>
        <li>Allow users to cancel operations</li>
        <li>Support keyboard shortcuts for power users</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Use Visual Hierarchy</h2>
      
      <p class="mb-4">Visual hierarchy guides users through the interface by emphasizing important elements and organizing content in a meaningful way.</p>
      
      <p class="mb-4">Create effective visual hierarchy through:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li>Size (larger elements appear more important)</li>
        <li>Color and contrast</li>
        <li>Spacing and positioning</li>
        <li>Typography variations</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Minimize Cognitive Load</h2>
      
      <p class="mb-4">Don't make users think more than necessary. Reduce complexity and eliminate unnecessary elements that could distract or confuse users.</p>
      
      <p class="mb-4">To reduce cognitive load:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li>Break complex tasks into smaller steps</li>
        <li>Use progressive disclosure to reveal information as needed</li>
        <li>Eliminate unnecessary elements and decoration</li>
        <li>Group related items together</li>
      </ul>
      
      <blockquote class="border-l-4 border-primary pl-4 italic my-8">
        "Simplicity is not the absence of clutter; that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product." — Jonathan Ive
      </blockquote>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">6. Provide Feedback</h2>
      
      <p class="mb-4">Users should always know what's happening in the system. Provide clear feedback for actions, state changes, and processes.</p>
      
      <p class="mb-4">Effective feedback includes:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li>Visual cues for interactive elements (hover states, focus indicators)</li>
        <li>Confirmation messages for completed actions</li>
        <li>Progress indicators for longer processes</li>
        <li>Error messages that explain issues and suggest solutions</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">7. Design for Accessibility</h2>
      
      <p class="mb-4">Good UI design is accessible to all users, including those with disabilities. Designing for accessibility often improves the experience for everyone.</p>
      
      <p class="mb-4">Key accessibility considerations:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li>Sufficient color contrast</li>
        <li>Text that can be resized without breaking layouts</li>
        <li>Keyboard navigation support</li>
        <li>Alternative text for images</li>
        <li>Support for screen readers and other assistive technologies</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">8. Use Recognition Over Recall</h2>
      
      <p class="mb-4">It's easier for users to recognize options than to recall them from memory. Make options visible and provide context to help users make decisions.</p>
      
      <p class="mb-4">To favor recognition over recall:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li>Use dropdown menus instead of text fields when possible</li>
        <li>Show recently used items</li>
        <li>Provide visual cues and icons</li>
        <li>Use descriptive labels and hints</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">9. Design for Error Prevention</h2>
      
      <p class="mb-4">It's better to prevent errors than to provide good error messages. Design interfaces that make it difficult for users to make mistakes.</p>
      
      <p class="mb-4">Error prevention strategies:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li>Use constraints and defaults</li>
        <li>Provide clear instructions</li>
        <li>Ask for confirmation before destructive actions</li>
        <li>Validate input in real-time</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">10. Prioritize Efficiency for Frequent Users</h2>
      
      <p class="mb-4">While interfaces should be easy for beginners to learn, they should also support efficiency for experienced users who use the product frequently.</p>
      
      <p class="mb-4">To enhance efficiency:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li>Provide keyboard shortcuts</li>
        <li>Allow customization of workflows</li>
        <li>Support batch operations</li>
        <li>Remember user preferences and settings</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">These 10 principles provide a solid foundation for creating effective user interfaces. Remember that good UI design is both an art and a science—it requires creativity, empathy, and a deep understanding of human behavior.</p>
      
      <p class="mb-4">By applying these principles thoughtfully, you can create interfaces that are not only visually appealing but also intuitive, efficient, and enjoyable to use.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: "How to Build a Responsive Website from Scratch",
        excerpt: "A step-by-step guide to creating a fully responsive website using modern HTML, CSS, and JavaScript techniques.",
        date: "May 28, 2023",
        image: "/placeholder.svg",
        slug: "build-responsive-website"
      },
      {
        id: 4,
        title: "Mastering Color Theory for Digital Design",
        excerpt: "Understand the principles of color theory and how to effectively use color in your digital design projects.",
        date: "April 22, 2023",
        image: "/placeholder.svg",
        slug: "mastering-color-theory"
      }
    ]
  };

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

      {/* Blog Post Content */}
      <article className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <div className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span>{post.title}</span>
          </div>

          {/* Post Header */}
          <header className="mb-8">
            <Badge variant="outline" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={post.authorImage} alt={post.author} />
                <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm text-muted-foreground">{post.authorRole}</div>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="text-muted-foreground">{post.date}</div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Post Content */}
          <div 
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link key={index} to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <div className="flex gap-4 items-center">
              <Avatar className="h-16 w-16">
                <AvatarImage src={post.authorImage} alt={post.author} />
                <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold">About {post.author}</h3>
                <p className="text-sm text-muted-foreground">{post.authorRole}</p>
              </div>
            </div>
            <p className="mt-4">
              A passionate designer and developer with over 10 years of experience creating digital experiences. 
              Specializing in user interface design, user experience, and frontend development.
            </p>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  Twitter
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
                  <Link to={`/blog/${relatedPost.slug}`} className="block">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">{relatedPost.date}</div>
                    <Link to={`/blog/${relatedPost.slug}`} className="block">
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{relatedPost.title}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t flex justify-between">
            <Button variant="outline" asChild>
              <Link to="/blog/previous-post">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
                Previous Post
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/blog/next-post">
                Next Post
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
            </Button>
          </div>
        </div>
      </article>

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

export default BlogPost;
