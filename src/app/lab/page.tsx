"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Beaker, Github, ExternalLink, Zap } from "lucide-react";
import Link from "next/link";

const experiments = [
  {
    title: "Real-time Threat Intelligence Dashboard",
    description: "Live monitoring of global cybersecurity threats using public APIs",
    status: "In Progress",
    tags: ["Cybersecurity", "Real-time", "Data Viz"],
    progress: 60,
    tech: ["React", "WebSocket", "D3.js"],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: "AI-Powered Code Vulnerability Scanner",
    description: "Using LLMs to detect security issues in codebases",
    status: "Prototype",
    tags: ["AI", "Security", "DevSecOps"],
    progress: 40,
    tech: ["Python", "OpenAI", "AST Analysis"],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: "Decentralized Bug Bounty Platform",
    description: "Smart contract-based platform for security researchers",
    status: "Concept",
    tags: ["Blockchain", "Security", "Web3"],
    progress: 20,
    tech: ["Solidity", "Ethereum", "IPFS"],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: "CTF Challenge Generator",
    description: "Automated tool for creating customizable CTF challenges",
    status: "Planning",
    tags: ["Education", "Automation", "CTF"],
    progress: 15,
    tech: ["Python", "Docker", "Flask"],
    demoUrl: null,
    githubUrl: null,
  },
];

const tools = [
  {
    name: "AutoRecon Script",
    description: "Automated reconnaissance tool for pentesting workflows",
    type: "Security Tool",
    language: "Bash/Python",
  },
  {
    name: "Blockchain Tracer",
    description: "Track and visualize cryptocurrency transaction flows",
    type: "Analysis Tool",
    language: "Python",
  },
  {
    name: "Port Scanner Pro",
    description: "Advanced network port scanner with service detection",
    type: "Network Tool",
    language: "Go",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "Prototype":
      return "bg-purple-500/10 text-purple-500 border-purple-500/20";
    case "Concept":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    case "Planning":
      return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    default:
      return "bg-green-500/10 text-green-500 border-green-500/20";
  }
};

export default function LabPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Beaker className="h-10 w-10 text-primary" />
                <h1 className="text-5xl font-bold">The Lab</h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Welcome to my digital workshop — a collection of experiments, prototypes, 
                and half-baked ideas. Some will become projects. Some will teach me lessons. 
                All are part of the learning process.
              </p>
            </div>

            {/* Experiments Section */}
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-8">
                <Zap className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Active Experiments</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {experiments.map((experiment, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{experiment.title}</CardTitle>
                        <Badge className={getStatusColor(experiment.status)}>
                          {experiment.status}
                        </Badge>
                      </div>
                      <CardDescription>{experiment.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Progress Bar */}
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{experiment.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary rounded-full h-2 transition-all duration-300"
                              style={{ width: `${experiment.progress}%` }}
                            />
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {experiment.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Tech Stack:</p>
                          <div className="flex flex-wrap gap-2">
                            {experiment.tech.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2">
                          {experiment.demoUrl && (
                            <Button size="sm" variant="outline" className="gap-2">
                              <ExternalLink className="h-4 w-4" />
                              Demo
                            </Button>
                          )}
                          {experiment.githubUrl && (
                            <Button size="sm" variant="outline" className="gap-2">
                              <Github className="h-4 w-4" />
                              Code
                            </Button>
                          )}
                          {!experiment.demoUrl && !experiment.githubUrl && (
                            <span className="text-sm text-muted-foreground italic">
                              Coming soon...
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Open-Source Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Type:</span>
                          <Badge variant="secondary">{tool.type}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Language:</span>
                          <span className="font-medium">{tool.language}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Philosophy/Note */}
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-4">The Experimental Mindset</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Not everything here will be polished. Not everything will work. 
                    That's the point.
                  </p>
                  <p>
                    The Lab is where I test ideas, break things intentionally, and learn 
                    from failure. Some experiments will graduate to full projects. Others 
                    will teach me what not to do next time.
                  </p>
                  <p className="text-primary font-medium italic">
                    "The only failed experiment is the one you never tried."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}