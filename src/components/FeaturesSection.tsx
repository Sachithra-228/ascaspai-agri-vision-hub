
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wheat, CloudRain, TestTube, Leaf, BarChart3, Smartphone } from "lucide-react";

const features = [
  {
    icon: Wheat,
    title: "Crop Prediction",
    description: "AI-powered crop recommendations based on soil conditions, weather patterns, and historical data.",
    badge: "Smart AI",
    color: "from-green-500 to-green-600"
  },
  {
    icon: CloudRain,
    title: "Weather Alerts",
    description: "Real-time weather monitoring with predictive alerts for optimal farming decisions.",
    badge: "Real-time",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: TestTube,
    title: "Soil Analysis",
    description: "Comprehensive soil health assessment with nutrient level tracking and recommendations.",
    badge: "Deep Analysis",
    color: "from-brown-500 to-amber-600"
  },
  {
    icon: Leaf,
    title: "Fertilizer Suggestions",
    description: "Personalized fertilizer recommendations to maximize yield while minimizing environmental impact.",
    badge: "Eco-friendly",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: BarChart3,
    title: "Yield Analytics",
    description: "Advanced analytics and reporting to track farm performance and optimize operations.",
    badge: "Analytics",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Access your farm data anywhere with our mobile-friendly platform and notifications.",
    badge: "Mobile Ready",
    color: "from-indigo-500 to-indigo-600"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700">
            🚀 Powerful Features
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for 
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Smart Farming</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools helps you make data-driven decisions, 
            increase yields, and practice sustainable agriculture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl shadow-lg`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
