
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Users, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              🌱 AI-Powered Agriculture Platform
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Farming </span>
              with AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Smart, Sustainable, and Data-Driven Agriculture for Everyone. 
              Get intelligent crop recommendations, weather insights, and soil analysis 
              powered by advanced AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Explore Features
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-blue-500" />
                <span>10K+ Farmers</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>30% Yield Increase</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Today's Insights</h3>
                    <Badge className="bg-green-100 text-green-700">Live</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-xl">
                      <p className="text-2xl font-bold text-green-600">85%</p>
                      <p className="text-sm text-gray-600">Soil Health</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <p className="text-2xl font-bold text-blue-600">23°C</p>
                      <p className="text-sm text-gray-600">Temperature</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <p className="font-medium text-gray-800">🌾 Recommended: Plant wheat this week</p>
                    <p className="text-sm text-gray-600">Optimal conditions detected</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce">
              🌱
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-pulse">
              🚜
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
