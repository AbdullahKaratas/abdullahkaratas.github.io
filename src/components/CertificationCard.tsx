import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Target, Trophy } from "lucide-react";

interface CertificationCardProps {
  title: string;
  code: string;
  description: string;
  progress: number;
  totalQuestions: number;
  completedQuestions: number;
  estimatedTime: string;
  onStart: () => void;
  onContinue: () => void;
}

export function CertificationCard({
  title,
  code,
  description,
  progress,
  totalQuestions,
  completedQuestions,
  estimatedTime,
  onStart,
  onContinue,
}: CertificationCardProps) {
  const isStarted = progress > 0;

  return (
    <Card className="group hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-2 hover:border-primary/30">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-gradient-azure text-white font-semibold">
              {code}
            </Badge>
            <CardTitle className="text-xl font-bold gradient-text">{title}</CardTitle>
          </div>
          <div className="p-2 rounded-lg bg-gradient-azure">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{completedQuestions}/{totalQuestions} questions</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{estimatedTime}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Target className="h-4 w-4" />
            <span>{totalQuestions} questions</span>
          </div>
        </div>
        
        <div className="pt-2">
          {isStarted ? (
            <div className="space-y-2">
              <Button 
                onClick={onContinue}
                variant="azure"
                className="w-full"
              >
                Continue Learning
              </Button>
              {progress >= 80 && (
                <div className="flex items-center gap-2 text-success text-sm font-medium">
                  <Trophy className="h-4 w-4" />
                  Almost ready for exam!
                </div>
              )}
            </div>
          ) : (
            <Button 
              onClick={onStart}
              variant="hero"
              className="w-full"
            >
              Start Learning
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}