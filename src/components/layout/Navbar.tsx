
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Work" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="container mx-auto py-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Portfolio</Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {routes.map((route) => (
          <Link 
            key={route.path}
            to={route.path} 
            className={`transition-colors ${
              isActive(route.path) 
                ? "font-medium text-primary" 
                : "hover:text-primary"
            }`}
          >
            {route.label}
          </Link>
        ))}
      </div>
      
      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] sm:w-[300px]">
          <div className="flex flex-col gap-6 mt-8">
            {routes.map((route) => (
              <Link 
                key={route.path}
                to={route.path} 
                className={`text-lg transition-colors ${
                  isActive(route.path) 
                    ? "font-medium text-primary" 
                    : "hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="absolute bottom-8 left-6">
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
