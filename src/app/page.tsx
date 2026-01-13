"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Shield, Rocket, BookOpen } from "lucide-react";

const featuredProjects = [
  {
    title: "Unitie",
    description: "A Gen-Z ecosystem connecting students, events, and communities.",
    tags: ["Platform", "Community"],
    link: "/projects",
  },
  {
    title: "VAPT Platform",
    description: "Automated Vulnerability Assessment using OWASP ZAP and MobSF.",
    tags: ["Security", "Automation"],
    link: "/projects",
  },
  {
    title: "Blockchain Deanonymisation",
    description: "Research tool combining OSINT and ML to trace crypto transactions.",
    tags: ["Research", "ML"],
    link: "/projects",
  },
];

const recentThoughts = [
  {
    title: "The Art of Building Calm Systems",
    excerpt: "On minimalism, clarity, and why your dashboard doesn't need 47 widgets.",
    date: "Coming Soon",
  },
  {
    title: "Why Founders Should Think Like Hackers",
    excerpt: "Breaking assumptions is the first step to building something new.",
    date: "Coming Soon",
  },
];

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
              {/* Profile Picture */}
              <div className="flex-shrink-0 order-2 lg:order-1">
                <div className="relative">
                  <img
                    src="/profile.png"
                    alt="Rishabh Raj Singh"
                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-primary/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 order-1 lg:order-2 text-center lg:text-left space-y-8">
                <div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                    Rishabh Raj Singh
                  </h1>
                <h2 className="text-2xl sm:text-3xl text-muted-foreground font-medium mb-6">
                  Cybersecurity Researcher & Builder (Student)
                </h2>
                <p className="text-xl text-primary font-medium mb-8 italic">
                  'Breaking systems, building better ones — and occasionally breaking my own code.'
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                I'm a 2nd-year CSE student who learns by doing — I build real-world systems, 
                automate security testing, and explore how technology can reflect human thought.
              </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link href="/projects">
                    <Button size="lg" className="gap-2">
                      Explore My Work <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="gap-2">
                      Learn More About Me
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <Link href={project.link} className="text-primary hover:underline text-sm font-medium">
                      View details →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Writing */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Recent Thoughts</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentThoughts.map((thought, index) => (
                <Card key={index} className="hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{thought.title}</CardTitle>
                      <span className="text-xs text-muted-foreground">{thought.date}</span>
                    </div>
                    <CardDescription>{thought.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/writing">
                <Button variant="outline" className="gap-2">
                  Read All Articles <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center hover:border-primary/50 transition-all">
                <CardHeader>
                  <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Cybersecurity</CardTitle>
                  <CardDescription>CTF player, VAPT tools, and security research</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/projects">
                    <Button variant="ghost" className="gap-2">
                      View Security Projects <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center hover:border-primary/50 transition-all">
                <CardHeader>
                  <Rocket className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Building</CardTitle>
                  <CardDescription>Co-founder of Unitie, connecting student communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/about">
                    <Button variant="ghost" className="gap-2">
                      My Journey <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center hover:border-primary/50 transition-all">
                <CardHeader>
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>Learning</CardTitle>
                  <CardDescription>Web exploitation, blockchain security, and ML</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/learn">
                    <Button variant="ghost" className="gap-2">
                      Learning Logs <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}