
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Organic Farm Owner",
    location: "Iowa, USA",
    quote: "ASCASPAI has revolutionized how I manage my 200-acre organic farm. The AI recommendations increased my yield by 30% while reducing water usage by 25%.",
    rating: 5,
    avatar: "👩‍🌾"
  },
  {
    name: "Miguel Rodriguez",
    role: "Agricultural Researcher",
    location: "California, USA",
    quote: "The soil analysis feature is incredibly accurate. It's like having a team of agronomists available 24/7. The data insights have been game-changing for our research.",
    rating: 5,
    avatar: "👨‍🔬"
  },
  {
    name: "David Chen",
    role: "Sustainable Farmer",
    location: "Oregon, USA",
    quote: "The weather prediction accuracy is outstanding. I've avoided crop losses multiple times thanks to the early warning system. Highly recommend to any serious farmer.",
    rating: 5,
    avatar: "👨‍🌾"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-700">
            ⭐ Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by 
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Farmers Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how ASCASPAI is helping farmers increase productivity, reduce costs, 
            and practice sustainable agriculture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <Quote className="h-8 w-8 text-green-500 mb-4 opacity-50" />
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-50 to-blue-50 px-8 py-4 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">M</div>
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">D</div>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">+</div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Join 10,000+ Happy Farmers</p>
              <p className="text-sm text-gray-600">Average rating: 4.9/5 ⭐</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
