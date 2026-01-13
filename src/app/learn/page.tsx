"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Target, Zap } from "lucide-react";

const currentlyLearning = [
  {
    topic: "Web Exploitation",
    description: "SQL injection, XSS, CSRF, and advanced web vulnerabilities",
    progress: 65,
    resources: ["PortSwigger Web Security Academy", "PentesterLab", "HackTheBox"],
  },
  {
    topic: "Blockchain Security",
    description: "Smart contract auditing, DeFi vulnerabilities, and consensus attacks",
    progress: 45,
    resources: ["Ethernaut", "Damn Vulnerable DeFi", "Security Research Papers"],
  },
  {
    topic: "ML for Cybersecurity",
    description: "Anomaly detection, threat intelligence, and adversarial ML",
    progress: 55,
    resources: ["Stanford CS229", "Kaggle Competitions", "Research Papers"],
  },
];

const weeklyLogs = [
  {
    week: "Week of Jan 15, 2025",
    highlights: [
      "Solved 5 CTF challenges on HackTheBox focusing on privilege escalation",
      "Learned about time-based blind SQL injection techniques",
      "Built a proof-of-concept for detecting XSS vulnerabilities using regex patterns",
      "Read 'The Art of Exploitation' chapters on buffer overflows",
    ],
    keyTakeaway: "Patience is crucial in security research — sometimes the answer is in the HTTP headers you ignored.",
  },
  {
    week: "Week of Jan 8, 2025",
    highlights: [
      "Completed Solidity smart contract security module",
      "Analyzed reentrancy attack patterns in DeFi protocols",
      "Participated in nCreeps team CTF competition (placed top 20)",
      "Started building automated OSINT tool for blockchain analysis",
    ],
    keyTakeaway: "Understanding the 'why' behind a vulnerability is more valuable than just knowing it exists.",
  },
  {
    week: "Week of Jan 1, 2025",
    highlights: [
      "Set learning goals for Q1 2025",
      "Configured new VAPT testing environment with Kali Linux",
      "Explored machine learning models for malware classification",
      "Documented Unitie security architecture decisions",
    ],
    keyTakeaway: "Good documentation is security's best friend — future you will thank present you.",
  },
];

export default function LearnPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-10 w-10 text-primary" />
                <h1 className="text-5xl font-bold">Learning Journey</h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A public log of what I'm learning, building, and breaking. 
                Consider this my digital learning journal — raw, honest, and always evolving.
              </p>
            </div>

            {/* Currently Learning */}
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-8">
                <Zap className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Currently Learning</h2>
              </div>
              
              <div className="space-y-8">
                {currentlyLearning.map((item, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{item.topic}</CardTitle>
                        <Badge variant="outline">{item.progress}%</Badge>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Progress value={item.progress} className="mb-4" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Resources:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.resources.map((resource, idx) => (
                            <Badge key={idx} variant="secondary">
                              {resource}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Weekly Learning Logs */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Weekly Learning Logs</h2>
              </div>
              
              <div className="space-y-8">
                {weeklyLogs.map((log, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl">{log.week}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-muted-foreground mb-3">Highlights:</p>
                        <ul className="space-y-2">
                          {log.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">▹</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="text-sm font-medium mb-1">Key Takeaway:</p>
                        <p className="text-sm italic">{log.keyTakeaway}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="mt-16">
              <Card className="bg-muted/30 border-primary/20">
                <CardContent className="pt-8 pb-8">
                  <blockquote className="text-lg italic text-muted-foreground">
                    "Learning isn't linear. Some weeks you'll solve complex challenges in hours. 
                    Other weeks, you'll stare at a single vulnerability for days. Both are progress. 
                    The goal isn't perfection — it's showing up every day with curiosity intact."
                  </blockquote>
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