"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, Users, Trophy } from "lucide-react";

const experiences = [
  {
    title: "Co-Founder",
    organization: "Unitie",
    description: "Building a Gen-Z ecosystem that connects students, events, and communities.",
    icon: Building2,
    color: "text-blue-500",
  },
  {
    title: "CTF Player",
    organization: "nCreeps",
    description: "Competing in Capture The Flag competitions, solving security challenges.",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "Support Team Lead & Technical Team Member",
    organization: "MIT Cybersecurity & Blockchain Club",
    description: "Exploring cutting-edge security practices and blockchain technology.",
    icon: Shield,
    color: "text-green-500",
  },
  {
    title: "PR Member",
    organization: "YuvArth",
    description: "Managing public relations and community engagement initiatives.",
    icon: Users,
    color: "text-pink-500",
  },
];

const skills = [
  "Web Exploitation",
  "Penetration Testing",
  "OSINT",
  "Blockchain Security",
  "Machine Learning",
  "Python",
  "JavaScript/TypeScript",
  "CTF Competitions",
  "IoT Security",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src="/profile.png"
                      alt="Rishabh Raj Singh"
                      className="w-64 h-64 rounded-2xl object-cover shadow-2xl border-4 border-primary/20"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h1 className="text-5xl font-bold mb-6">About Me</h1>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                      I'm a 2nd-year Computer Science Engineering student based in Pune, India, 
                      navigating the fascinating intersection of cybersecurity, innovation, and philosophy.
                    </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  My journey started with curiosity — breaking apart systems to understand how they work, 
                  then building them back better. Along the way, I co-founded <strong>Unitie</strong>, 
                  a student ecosystem that connects communities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I read philosophy in my spare time — because debugging code and understanding humans 
                  both require patience. Whether it's tracing crypto transactions, automating security 
                  testing, or building IoT systems, I approach every challenge with the mindset of a hacker: 
                  question everything, break assumptions, and create something meaningful.
                </p>
                <p className="text-lg text-primary font-medium italic">
                  "The best way to predict the future is to build it — preferably with fewer bugs than the present."
                </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Experience & Involvement</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-muted ${exp.color}`}>
                          <exp.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="mb-1">{exp.title}</CardTitle>
                          <p className="text-sm text-primary font-medium mb-2">
                            {exp.organization}
                          </p>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Skills & Interests</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Philosophy */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Philosophy</h2>
              <Card className="bg-muted/50 border-primary/20">
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6 space-y-4">
                    <p>
                      I like speed — not the messy kind, but the kind that comes from clarity. When I know exactly what I'm doing, I move fast, build fast, and learn faster.
                    </p>
                    <p>
                      I don't overthink trends or chase perfection. I'd rather ship, learn, and improve in real time. The world moves too quickly for hesitation.
                    </p>
                    <p>
                      I build things that feel sharp — ideas with purpose, products with rhythm. If it doesn't challenge how things usually work, I probably won't touch it.
                    </p>
                    <p>
                      For me, progress isn't about being busy — it's about momentum. Keep moving, keep learning, keep breaking your own limits. That's how I work.
                    </p>
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