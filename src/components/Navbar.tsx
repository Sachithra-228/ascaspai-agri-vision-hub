import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/b792bce7-c236-4705-9fd5-282dd9d291cd.png" 
            alt="ASCASPAI Logo" 
            className="h-12 w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
          <a href="#dashboard" className="text-gray-600 hover:text-green-600 transition-colors">Dashboard</a>
          <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">Reviews</a>
          <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Sign In
          </Button>
        </div>
        
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};
