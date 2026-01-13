"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Unitie",
    description: "A Gen-Z ecosystem connecting students, events, and communities. Built to simplify campus life and foster meaningful connections through a unified platform.",
    longDescription: "Unitie is more than just an app — it's a movement to bring student communities together. From event management to resource sharing, it's designed for the way Gen-Z learns, collaborates, and builds.",
    tags: ["Platform", "Community", "Full Stack", "React", "Node.js"],
    links: {
      website: "https://unitie.in",
      github: null,
    },
  },
  {
    title: "VAPT Platform",
    description: "An automated Vulnerability Assessment and Penetration Testing tool using OWASP ZAP and MobSF.",
    longDescription: "Built to streamline security testing workflows, this platform automates vulnerability scanning for web and mobile applications. Integrates industry-standard tools with custom analysis pipelines for comprehensive security assessments.",
    tags: ["Security", "Automation", "Python", "OWASP", "DevSecOps"],
    links: {
      website: null,
      github: "https://github.com/rizzzabh-06",
    },
  },
  {
    title: "Blockchain Deanonymisation Framework",
    description: "Research tool combining OSINT and ML to trace suspicious crypto transactions.",
    longDescription: "A sophisticated framework that leverages machine learning models and open-source intelligence techniques to analyze blockchain transactions, identify patterns, and trace potentially suspicious activity across cryptocurrency networks.",
    tags: ["Research", "ML", "Blockchain", "Python", "Data Science"],
    links: {
      website: null,
      github: "https://github.com/rizzzabh-06",
    },
  },
  {
    title: "Smart Waste Management System",
    description: "IoT + AI system that separates waste and optimizes pickup routes.",
    longDescription: "An end-to-end solution combining IoT sensors, computer vision for waste classification, and machine learning algorithms to optimize waste collection routes. Designed to reduce environmental impact and improve municipal efficiency.",
    tags: ["IoT", "AI", "Computer Vision", "Optimization", "Hardware"],
    links: {
      website: null,
      github: "https://github.com/rizzzabh-06",
    },
  },
  {
    title: "Divine AI",
    description: "A personal app that analyzes your voice to generate emotional and goal-based daily reports.",
    longDescription: "Divine AI uses natural language processing and sentiment analysis to understand your emotional state through voice input. It provides personalized insights, tracks your progress toward goals, and offers actionable recommendations for personal growth.",
    tags: ["AI", "NLP", "Mobile", "Personal Development", "ML"],
    links: {
      website: null,
      github: "https://github.com/rizzzabh-06",
    },
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold mb-6">Projects</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                A collection of things I've built — from security tools to full-stack platforms. 
                Each project represents a problem I wanted to solve, a skill I wanted to learn, 
                or an idea that wouldn't leave me alone.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-base mb-4">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        {project.links.website && (
                          <Link href={project.links.website} target="_blank">
                            <Button size="sm" variant="outline" className="gap-2">
                              <ExternalLink className="h-4 w-4" />
                              Visit
                            </Button>
                          </Link>
                        )}
                        {project.links.github && (
                          <Link href={project.links.github} target="_blank">
                            <Button size="sm" variant="outline" className="gap-2">
                              <Github className="h-4 w-4" />
                              Code
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="bg-muted/30 border-primary/20">
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-2xl font-bold mb-4">Want to collaborate?</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I'm always open to interesting projects, research opportunities, 
                    or just talking about ideas worth building.
                  </p>
                  <Link href="/contact">
                    <Button size="lg" className="gap-2">
                      Get In Touch
                    </Button>
                  </Link>
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