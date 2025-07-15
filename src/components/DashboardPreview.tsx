
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Droplets, Thermometer } from "lucide-react";

export const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700">
            📊 Live Dashboard
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real-Time Farm 
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your farm's performance with our intuitive dashboard that brings 
            all your agricultural data together in one place.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Crop Health</CardTitle>
                  <TrendingUp className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">94%</div>
                <p className="text-green-100">+12% from last week</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Soil Moisture</CardTitle>
                  <Droplets className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">67%</div>
                <p className="text-blue-100">Optimal range</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white border-0">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Temperature</CardTitle>
                  <Thermometer className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">24°C</div>
                <p className="text-orange-100">Perfect for growth</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-800">Irrigation Complete</p>
                    <p className="text-sm text-gray-600">Field A watered successfully</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="font-medium text-gray-800">Weather Alert</p>
                    <p className="text-sm text-gray-600">Light rain expected tomorrow</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">Fertilizer Applied</p>
                    <p className="text-sm text-gray-600">Organic nutrients added to Field B</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">AI Recommendations</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-800">🌱 Planting Suggestion</h4>
                  <p className="text-gray-600 mt-1">Consider planting winter wheat in Field C. Soil conditions are optimal.</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-800">💧 Water Management</h4>
                  <p className="text-gray-600 mt-1">Reduce irrigation by 15% this week due to expected rainfall.</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-800">📊 Yield Prediction</h4>
                  <p className="text-gray-600 mt-1">Current conditions suggest 20% higher yield than last season.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3">
              View Full Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
