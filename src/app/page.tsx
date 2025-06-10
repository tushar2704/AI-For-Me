'use client';

import { useState } from 'react';
import { Search, Sparkles, TrendingUp, Clock, Star, ArrowUp, Zap, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Sample AI tools data
const aiTools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Advanced AI chatbot for conversations, writing, and problem-solving',
    category: 'Chatbot',
    isPopular: true,
    isNew: false,
    rating: 4.8,
    tags: ['writing', 'conversation', 'coding']
  },
  {
    id: 2,
    name: 'Midjourney',
    description: 'AI-powered image generation from text descriptions',
    category: 'Image Generation',
    isPopular: true,
    isNew: false,
    rating: 4.7,
    tags: ['art', 'design', 'creativity']
  },
  {
    id: 3,
    name: 'Notion AI',
    description: 'AI assistant integrated into Notion for productivity and writing',
    category: 'Productivity',
    isPopular: false,
    isNew: true,
    rating: 4.5,
    tags: ['productivity', 'writing', 'organization']
  },
  {
    id: 4,
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster',
    category: 'Developer Tools',
    isPopular: true,
    isNew: false,
    rating: 4.6,
    tags: ['coding', 'development', 'programming']
  },
  {
    id: 5,
    name: 'Canva AI',
    description: 'AI-powered design tools for creating stunning visuals',
    category: 'Design',
    isPopular: false,
    isNew: true,
    rating: 4.4,
    tags: ['design', 'graphics', 'marketing']
  },
  {
    id: 6,
    name: 'Grammarly',
    description: 'AI writing assistant for grammar, spelling, and style',
    category: 'Writing',
    isPopular: true,
    isNew: false,
    rating: 4.3,
    tags: ['writing', 'grammar', 'editing']
  }
];

const categories = ['All', 'Chatbot', 'Image Generation', 'Productivity', 'Developer Tools', 'Design', 'Writing'];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.05%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%272%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                THERE'S AN <span className="text-blue-400">AI FOR THAT</span>
              </h1>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-8 text-lg">
              <span className="text-orange-400 font-semibold">{aiTools.length},284</span>
              <span className="text-gray-300">AI tools for</span>
              <span className="text-orange-400 font-semibold">18,362</span>
              <span className="text-gray-300">tasks and</span>
              <span className="text-orange-400 font-semibold">4,395</span>
              <span className="text-gray-300">jobs</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter your task..."
                className="w-full h-14 pl-6 pr-16 text-lg bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <kbd className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded border">⌘</kbd>
                <kbd className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded border">K</kbd>
                <Button size="sm" className="ml-2 bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3">✨ Powered by AI tools. Loved by 50M+ humans.</p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20">
              🎨 Generate Images
            </Button>
            <Button variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20">
              🤖 Free tools
            </Button>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-1 bg-gray-800/50 p-1 rounded-lg max-w-md mx-auto">
            <Button
              variant={selectedCategory === 'All' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory('All')}
              className={selectedCategory === 'All' ? 'bg-white text-black' : 'text-gray-300 hover:text-white'}
            >
              🔥 Latest
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white"
            >
              For You
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white flex items-center gap-1"
            >
              📈 Trending
            </Button>
          </div>
        </div>
      </section>

      {/* Just Released Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <ArrowUp className="h-6 w-6 text-white" />
            <h2 className="text-2xl font-bold">Just released</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTools.slice(0, 4).map((tool) => (
              <Card key={tool.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-200 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      {tool.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {tool.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          {tool.isNew && (
                            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                              ⭐ Handwriting
                            </Badge>
                          )}
                          {tool.isPopular && (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              📈 Productivity
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">
                        {tool.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Released 3h ago
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                             <ArrowUp className="h-3 w-3" />
                             <span>4.8</span>
                           </div>
                           <div className="flex items-center gap-1 text-xs text-gray-400">
                             <Users className="h-3 w-3" />
                             <span>100k</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </CardContent>
               </Card>
             ))}
           </div>
         </div>
       </section>
        
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No tools found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-semibold text-white">AI For Me</span>
          </div>
          <p className="text-gray-400 text-sm">
            Discover and explore the world of AI tools. Made with ❤️ for the AI community.
          </p>
        </div>
      </footer>
    </main>
  );
}
