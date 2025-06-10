'use client';

import { useState } from 'react';
import { Search, Sparkles, TrendingUp, Clock, Star } from 'lucide-react';
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
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI For Me
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the perfect AI tools for any task. Browse our curated collection of the latest and most popular AI applications.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for AI tools by name, description, or task..."
              className="pl-10 pr-4 py-3 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/60 backdrop-blur rounded-lg border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">{aiTools.length}</span>
            </div>
            <p className="text-gray-600">AI Tools</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur rounded-lg border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">{aiTools.filter(tool => tool.isPopular).length}</span>
            </div>
            <p className="text-gray-600">Popular Tools</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur rounded-lg border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">{aiTools.filter(tool => tool.isNew).length}</span>
            </div>
            <p className="text-gray-600">New Tools</p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Card key={tool.id} className="hover:shadow-lg transition-shadow duration-200 bg-white/80 backdrop-blur border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                      {tool.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {tool.category}
                      </Badge>
                      {tool.isPopular && (
                        <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      {tool.isNew && (
                        <Badge variant="default" className="text-xs bg-blue-100 text-blue-800">
                          <Clock className="h-3 w-3 mr-1" />
                          New
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{tool.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {tool.description}
                </CardDescription>
                <Separator className="mb-4" />
                <div className="flex flex-wrap gap-1">
                  {tool.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No tools found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <span className="text-lg font-semibold text-gray-900">AI For Me</span>
          </div>
          <p className="text-gray-600 text-sm">
            Discover and explore the world of AI tools. Made with ❤️ for the AI community.
          </p>
        </div>
      </footer>
    </main>
  );
}
