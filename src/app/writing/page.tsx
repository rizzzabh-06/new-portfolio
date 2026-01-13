"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock } from "lucide-react";

const articles = [
  {
    title: "The Art of Building Calm Systems",
    excerpt: "On minimalism, clarity, and why your dashboard doesn't need 47 widgets. Exploring how restraint in design leads to better user experiences and more maintainable code.",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["Design", "Philosophy", "UX"],
    status: "draft",
  },
  {
    title: "Why Founders Should Think Like Hackers",
    excerpt: "Breaking assumptions is the first step to building something new. How the hacker mindset of questioning everything and finding creative solutions applies to entrepreneurship.",
    date: "Coming Soon",
    readTime: "6 min read",
    tags: ["Startups", "Mindset", "Innovation"],
    status: "draft",
  },
  {
    title: "The Existential Dread of a Failed Build",
    excerpt: "A meditation on debugging, persistence, and the philosophical questions that arise when your code refuses to compile at 3 AM.",
    date: "Coming Soon",
    readTime: "5 min read",
    tags: ["Development", "Humor", "Philosophy"],
    status: "draft",
  },
  {
    title: "Security Through Obscurity (And Why It Fails)",
    excerpt: "An analysis of why hiding your implementation details is never a substitute for actual security. Lessons from CTF competitions and real-world breaches.",
    date: "Coming Soon",
    readTime: "10 min read",
    tags: ["Cybersecurity", "Best Practices"],
    status: "draft",
  },
  {
    title: "Building in Public: Lessons from Launching Unitie",
    excerpt: "What I learned from building a student platform in the open — the good, the bad, and the moments where I questioned everything.",
    date: "Coming Soon",
    readTime: "12 min read",
    tags: ["Startups", "Learning", "Reflection"],
    status: "draft",
  },
];

export default function WritingPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-10 w-10 text-primary" />
                <h1 className="text-5xl font-bold">Writing & Thoughts</h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Essays, reflections, and random thoughts at the intersection of technology, 
                security, and philosophy. Sometimes technical, sometimes philosophical, 
                always honest.
              </p>
            </div>

            {/* Articles List */}
            <div className="space-y-8">
              {articles.map((article, index) => (
                <Card 
                  key={index} 
                  className={`hover:border-primary/50 transition-all duration-300 ${
                    article.status === "draft" ? "opacity-75" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                      <CardTitle className="text-2xl">{article.title}</CardTitle>
                      {article.status === "draft" && (
                        <Badge variant="outline" className="w-fit">Draft</Badge>
                      )}
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16">
              <Card className="bg-muted/30 border-primary/20">
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-2xl font-bold mb-4">More content coming soon</h2>
                  <p className="text-muted-foreground max-w-2xl">
                    I'm currently working on several articles exploring security, startups, and 
                    the philosophy of building. In the meantime, you can follow my thoughts on{" "}
                    <a 
                      href="https://rizzabh.medium.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Medium
                    </a>{" "}
                    or{" "}
                    <a 
                      href="https://x.com/Rizzabh_X" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Twitter/X
                    </a>.
                  </p>
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