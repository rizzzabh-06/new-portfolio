"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Play, Search, Youtube } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Web Exploitation", "Cryptography", "Reverse Engineering", "Forensics", "Binary Exploitation"];

const upcomingVideos = [
  {
    title: "SQL Injection: From Basics to Blind Injection",
    description: "Complete walkthrough of SQL injection techniques with real CTF challenges",
    category: "Web Exploitation",
    difficulty: "Intermediate",
    duration: "Coming Soon",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
  },
  {
    title: "Breaking RSA: Small Exponent Attack",
    description: "How to exploit weak RSA implementations in CTF competitions",
    category: "Cryptography",
    difficulty: "Advanced",
    duration: "Coming Soon",
    thumbnail: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop",
  },
  {
    title: "Buffer Overflow Exploitation 101",
    description: "Understanding memory corruption and crafting exploits",
    category: "Binary Exploitation",
    difficulty: "Intermediate",
    duration: "Coming Soon",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    title: "Web Security Testing with OWASP ZAP",
    description: "Automated vulnerability scanning and manual testing techniques",
    category: "Web Exploitation",
    difficulty: "Beginner",
    duration: "Coming Soon",
    thumbnail: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&h=400&fit=crop",
  },
  {
    title: "Forensics Challenge Walkthrough: Hidden Data",
    description: "Steganography, file carving, and memory analysis techniques",
    category: "Forensics",
    difficulty: "Intermediate",
    duration: "Coming Soon",
    thumbnail: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop",
  },
  {
    title: "Reverse Engineering ARM Binaries",
    description: "Tools and techniques for analyzing compiled ARM code",
    category: "Reverse Engineering",
    difficulty: "Advanced",
    duration: "Coming Soon",
    thumbnail: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&h=400&fit=crop",
  },
];

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = upcomingVideos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Play className="h-10 w-10 text-primary" />
                <h1 className="text-5xl font-bold">CTF Videos & Tutorials</h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
                Video walkthroughs of CTF challenges, security concepts, and hacking techniques. 
                Learn by watching me break things, fix them, and occasionally break them again.
              </p>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search videos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="mb-12">
              <Card className="bg-primary/10 border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Youtube className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Videos Coming Soon</h3>
                      <p className="text-muted-foreground">
                        I'm currently preparing high-quality CTF walkthroughs and security tutorials. 
                        The first batch of videos will be released soon. Follow me on{" "}
                        <a 
                          href="https://x.com/Rizzabh_X" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          Twitter/X
                        </a>{" "}
                        for updates!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Videos Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Upcoming Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video, index) => (
                  <Card key={index} className="overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                      <Badge className="absolute top-2 right-2">
                        {video.difficulty}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <Badge variant="secondary">{video.category}</Badge>
                        <span>{video.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTF Profile Link */}
            <div className="mt-16">
              <Card className="bg-muted/30 border-primary/20">
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-2xl font-bold mb-4">Follow My CTF Journey</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl">
                    Want to see my competitive progress? Check out my CTFtime profile to see 
                    competitions I've participated in and challenges I've solved with team nCreeps.
                  </p>
                  <a 
                    href="https://ctftime.org/user/224579" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    View CTFtime Profile →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}