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
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 p-4 bg-card/80 backdrop-blur-sm rounded-2xl shadow-card">
            <div className="p-3 rounded-xl bg-gradient-azure">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold gradient-text">Azure Certification Hub</h1>
              <p className="text-muted-foreground">Master AZ-104, AZ-305 & AZ-400 with AI-powered learning</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-azure">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{Math.round(totalProgress)}%</p>
                  <p className="text-sm text-muted-foreground">Overall Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-success">
                  <Trophy className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalCompleted}</p>
                  <p className="text-sm text-muted-foreground">Questions Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-warning">
                  <TrendingUp className="h-6 w-6 text-warning-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalQuestions}</p>
                  <p className="text-sm text-muted-foreground">Total Questions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent">
                  <Calendar className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm text-muted-foreground">Day Streak</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Overview */}
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Learning Progress
                </CardTitle>
                <CardDescription>
                  Track your journey across all Azure certifications
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-gradient-azure text-white">
                {Math.round(totalProgress)}% Complete
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>{totalCompleted} / {totalQuestions} questions</span>
              </div>
              <Progress value={totalProgress} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Certification Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Certifications</h2>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Manage
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