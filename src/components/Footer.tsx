
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Github, Mail, Globe, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ASCASPAI</h3>
                <p className="text-xs text-gray-400">Smart Agriculture</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transforming agriculture with AI-powered insights for sustainable and profitable farming.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-green-400">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-green-400">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-green-400">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li>
                <div className="flex items-center space-x-2 mt-4">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <select className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@ascaspai.com</span>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-gray-400 text-sm">
                © 2024 ASCASPAI. All rights reserved.
              </p>
              <div className="flex justify-end space-x-4 mt-2">
                <Badge variant="secondary" className="text-xs">
                  <Github className="h-3 w-3 mr-1" />
                  Open Source
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  🌱 Carbon Neutral
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
