"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Twitter, Mail, BookOpen, Trophy, Instagram } from "lucide-react";
import { useState } from "react";

import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { submitContactForm } from "@/app/actions/contact";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/rizzzabh-06",
        icon: Github,
        handle: "@rizzzabh-06",
        description: "Code, projects, and open-source contributions",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rizzzabh",
        icon: Linkedin,
        handle: "@rizzzabh",
        description: "Professional network and career updates",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/rizzabh.unitie/",
        icon: Instagram,
        handle: "@rizzabh.unitie",
        description: "Updates, behind-the-scenes, and daily insights",
    },
    {
        name: "Twitter/X",
        url: "https://x.com/Rizzabh_X",
        icon: Twitter,
        handle: "@Rizzabh_X",
        description: "Thoughts, updates, and tech discussions",
    },
    {
        name: "Medium",
        url: "https://rizzabh.medium.com",
        icon: BookOpen,
        handle: "@rizzabh",
        description: "Articles and in-depth technical writing",
    },
    {
        name: "CTFtime",
        url: "https://ctftime.org/user/224579",
        icon: Trophy,
        handle: "Profile #224579",
        description: "CTF competitions and achievements",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // VULNERABLE: Uses server action that processes untrusted data
            const result = await submitContactForm({
                ...formData,
                // VULNERABLE: Accept arbitrary metadata from URL params (for demo)
                metadata: typeof window !== "undefined"
                    ? Object.fromEntries(new URLSearchParams(window.location.search))
                    : undefined
            });

            if (result.success) {
                toast.success("Message sent!", {
                    description: result.message,
                });
                setFormData({ name: "", email: "", message: "" });
            }
        } catch (error) {
            toast.error("Error sending message");
        }

        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Navbar />
            <Toaster />

            <main className="min-h-screen pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        {/* Header with Profile Pic */}
                        <div className="mb-16 text-center">
                            <div className="flex flex-col items-center gap-6 mb-6">
                                {/* Profile Picture Holder */}
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/30 flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-muted flex items-center justify-center text-4xl font-bold text-primary">
                                        RR
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <Mail className="h-10 w-10 text-primary" />
                                        <h1 className="text-5xl font-bold">Get In Touch</h1>
                                    </div>
                                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                        Let's collaborate or talk about tech, startups, or ideas worth building.
                                        I'm always open to interesting conversations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Contact Form */}
                            <div>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Send a Message</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Name</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your name"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your.email@example.com"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="What would you like to talk about?"
                                                    rows={6}
                                                    required
                                                />
                                            </div>

                                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                                {isSubmitting ? "Sending..." : "Send Message"}
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>

                                {/* Direct Email Card */}
                                <Card className="mt-6 bg-primary/5 border-primary/20">
                                    <CardContent className="pt-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Mail className="h-5 w-5 text-primary" />
                                            <h3 className="font-semibold">Direct Email</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Prefer email? Send me a message directly:
                                        </p>
                                        <a
                                            href="mailto:contact@rishabhrajsingh.com"
                                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                                        >
                                            contact@rishabhrajsingh.com
                                        </a>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Social Links */}
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Connect on Social</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {socialLinks.map((social) => (
                                                <a
                                                    key={social.name}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                                                >
                                                    <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                                                        <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-1">
                                                            <h3 className="font-semibold group-hover:text-primary transition-colors">
                                                                {social.name}
                                                            </h3>
                                                            <span className="text-xs text-muted-foreground">
                                                                {social.handle}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground">
                                                            {social.description}
                                                        </p>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-muted/30 border-primary/20">
                                    <CardContent className="pt-6">
                                        <h3 className="font-semibold mb-2">Quick Response Time</h3>
                                        <p className="text-sm text-muted-foreground">
                                            I typically respond to messages within 24-48 hours. For urgent matters,
                                            feel free to reach out on Twitter/X or LinkedIn for a faster response.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}