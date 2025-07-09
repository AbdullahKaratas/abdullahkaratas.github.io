import { useState } from "react";
import { CertificationCard } from "@/components/CertificationCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Target, Trophy, TrendingUp, Calendar, Settings } from "lucide-react";

interface DashboardProps {
  onSelectCertification: (cert: string) => void;
}

const certifications = [
  {
    code: "AZ-104",
    title: "Microsoft Azure Administrator",
    description: "Manage cloud services that span storage, networking, and compute cloud capabilities. Implement, monitor, and maintain solutions including major services.",
    progress: 45,
    totalQuestions: 247,
    completedQuestions: 111,
    estimatedTime: "40-60 hours",
  },
  {
    code: "AZ-305",
    title: "Designing Microsoft Azure Infrastructure Solutions",
    description: "Design Azure solutions that run on Azure and include compute, network, storage, monitoring, and security aspects.",
    progress: 20,
    totalQuestions: 189,
    completedQuestions: 38,
    estimatedTime: "50-70 hours",
  },
  {
    code: "AZ-400",
    title: "Designing and Implementing DevOps Solutions",
    description: "Combine people, processes, and technologies to continuously deliver valuable products and services that meet end user needs.",
    progress: 0,
    totalQuestions: 203,
    completedQuestions: 0,
    estimatedTime: "45-65 hours",
  },
];

export default function Dashboard({ onSelectCertification }: DashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const totalProgress = certifications.reduce((acc, cert) => acc + cert.progress, 0) / certifications.length;
  const totalCompleted = certifications.reduce((acc, cert) => acc + cert.completedQuestions, 0);
  const totalQuestions = certifications.reduce((acc, cert) => acc + cert.totalQuestions, 0);

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 p-4 bg-card border border-terminal rounded-lg shadow-card">
            <div className="p-3 rounded-lg bg-gradient-terminal border border-primary">
              <BookOpen className="h-8 w-8 text-background" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-terminal font-mono">Azure Certification Hub</h1>
              <p className="text-muted-foreground font-mono">Master AZ-104, AZ-305 & AZ-400 with AI-powered learning</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-card border-terminal/50 hover:border-terminal transition-all duration-300 hover:shadow-terminal">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-terminal border border-primary">
                  <Target className="h-6 w-6 text-background" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-mono text-terminal">{Math.round(totalProgress)}%</p>
                  <p className="text-sm text-muted-foreground font-mono">Overall Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-terminal/50 hover:border-terminal transition-all duration-300 hover:shadow-terminal">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-success border border-success">
                  <Trophy className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-mono text-terminal">{totalCompleted}</p>
                  <p className="text-sm text-muted-foreground font-mono">Questions Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-terminal/50 hover:border-terminal transition-all duration-300 hover:shadow-terminal">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-warning border border-warning">
                  <TrendingUp className="h-6 w-6 text-warning-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-mono text-terminal">{totalQuestions}</p>
                  <p className="text-sm text-muted-foreground font-mono">Total Questions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-terminal/50 hover:border-terminal transition-all duration-300 hover:shadow-terminal">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent border border-accent">
                  <Calendar className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-mono text-terminal">7</p>
                  <p className="text-sm text-muted-foreground font-mono">Day Streak</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Overview */}
        <Card className="bg-card border-terminal/50 hover:border-terminal transition-all duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 font-mono text-terminal">
                  <TrendingUp className="h-5 w-5" />
                  Learning Progress
                </CardTitle>
                <CardDescription className="font-mono">
                  Track your journey across all Azure certifications
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-gradient-terminal text-background font-mono border border-primary">
                {Math.round(totalProgress)}% Complete
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-mono">
                <span>Overall Progress</span>
                <span className="text-terminal">{totalCompleted} / {totalQuestions} questions</span>
              </div>
              <Progress value={totalProgress} className="h-3 bg-muted border border-primary/30" />
            </div>
          </CardContent>
        </Card>

        {/* Certification Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-mono text-terminal">Your Certifications</h2>
            <Button variant="outline" size="sm" className="font-mono">
              <span className="terminal-prompt">Manage</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <CertificationCard
                key={cert.code}
                title={cert.title}
                code={cert.code}
                description={cert.description}
                progress={cert.progress}
                totalQuestions={cert.totalQuestions}
                completedQuestions={cert.completedQuestions}
                estimatedTime={cert.estimatedTime}
                onStart={() => onSelectCertification(cert.code)}
                onContinue={() => onSelectCertification(cert.code)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}