"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Video, Bot } from "lucide-react";
import Link from "next/link";

export const HomeView = () => {
  return (
    <div className="flex flex-col gap-8 p-6 md:p-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to <span className="text-primary">Meet.AI</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Smart meetings, AI agents, and seamless collaboration —
          all in one place. Get started by exploring your dashboard.
        </p>
        <div className="flex gap-4 mt-4">
          <Link href="/meetings">
            <Button size="lg">Start a Meeting</Button>
          </Link>
          <Link href="/agents">
            <Button size="lg" variant="outline">
              Explore Agents
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            <CardTitle>AI Meetings</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Host smarter video calls with real-time AI transcription,
            summaries, and highlights.
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <CardTitle>Agents</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Automate tasks with AI-powered agents built into your workflow.
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            <CardTitle>Collaboration</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Share insights, meeting notes, and agent results seamlessly
            with your team.
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="bg-muted rounded-2xl p-8 flex flex-col items-center gap-4 text-center">
        <Sparkles className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-semibold">Boost your productivity</h2>
        <p className="text-muted-foreground max-w-xl">
          Meet.AI helps you focus on what matters most by combining meetings,
          notes, and AI assistance into one streamlined platform.
        </p>
        <Link href="/upgrade">
          <Button size="lg" className="mt-2">
            Upgrade to Premium
          </Button>
        </Link>
      </section>
    </div>
  );
};
