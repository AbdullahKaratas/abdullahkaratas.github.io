import { useState } from "react";
import { ContentManager } from "@/components/ContentManager";
import { QuestionCard } from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Brain, Target, Trophy, RefreshCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface LearningSessionProps {
  certification: string;
  onBack: () => void;
}

interface Question {
  id: number;
  type: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: string;
  topic: string;
}

interface Answer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export default function LearningSession({ certification, onBack }: LearningSessionProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [mode, setMode] = useState<"content" | "practice">("content");

  const handleContentProcessed = (newQuestions: Question[]) => {
    setQuestions(newQuestions);
    setMode("practice");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSessionComplete(false);
  };

  const handleAnswer = (questionId: number, selectedAnswer: number, isCorrect: boolean) => {
    const newAnswer = { questionId, selectedAnswer, isCorrect };
    setAnswers(prev => [...prev, newAnswer]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setSessionComplete(true);
      
      const correctAnswers = answers.filter(a => a.isCorrect).length;
      const percentage = (correctAnswers / questions.length) * 100;
      
      toast({
        title: "Session Complete!",
        description: `You scored ${correctAnswers}/${questions.length} (${Math.round(percentage)}%)`,
      });
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSessionComplete(false);
  };

  const handleNewContent = () => {
    setMode("content");
    setQuestions([]);
    setAnswers([]);
    setSessionComplete(false);
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-warning";
    return "text-destructive";
  };

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const totalAnswered = answers.length;
  const progressPercentage = totalAnswered > 0 ? (totalAnswered / questions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={onBack} className="p-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-gradient-terminal text-background font-mono border border-primary">
                  {certification}
                </Badge>
                <h1 className="text-2xl font-bold font-mono text-terminal">Learning Session</h1>
              </div>
              <p className="text-muted-foreground font-mono">
                {mode === "content" 
                  ? "Add your study material to generate practice questions"
                  : `Question ${currentQuestionIndex + 1} of ${questions.length}`
                }
              </p>
            </div>
          </div>
          
          {mode === "practice" && !sessionComplete && (
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={handleNewContent}>
                <Brain className="h-4 w-4 mr-2" />
                New Content
              </Button>
            </div>
          )}
        </div>

        {/* Content Manager */}
        {mode === "content" && (
          <ContentManager
            certification={certification}
            onContentProcessed={handleContentProcessed}
          />
        )}

        {/* Practice Mode */}
        {mode === "practice" && !sessionComplete && currentQuestion && (
          <div className="space-y-6">
            {/* Progress Bar */}
            <Card className="bg-card border-terminal/50 hover:border-terminal transition-all duration-300">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-mono">
                    <span>Session Progress</span>
                    <span className="text-terminal">{totalAnswered}/{questions.length} answered</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2 bg-muted border border-primary/30" />
                  {totalAnswered > 0 && (
                    <div className="flex justify-between text-sm font-mono">
                      <span className={getScoreColor((correctAnswers / totalAnswered) * 100)}>
                        Correct: {correctAnswers}/{totalAnswered}
                      </span>
                      <span className="text-muted-foreground">
                        {Math.round((correctAnswers / totalAnswered) * 100)}% accuracy
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Question */}
            <QuestionCard
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
              onNext={handleNext}
            />
          </div>
        )}

        {/* Session Complete */}
        {sessionComplete && (
          <div className="max-w-2xl mx-auto space-y-6">
            <Card className="text-center bg-card border-terminal hover:shadow-terminal transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 bg-gradient-terminal border border-primary rounded-lg w-fit mb-4">
                  <Trophy className="h-12 w-12 text-background" />
                </div>
                <CardTitle className="text-3xl font-mono text-terminal">Session Complete!</CardTitle>
                <CardDescription className="text-lg font-mono">
                  Great job on completing your {certification} practice session
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted border border-primary/30">
                    <div className="text-2xl font-bold font-mono text-terminal">{correctAnswers}/{questions.length}</div>
                    <div className="text-sm text-muted-foreground font-mono">Questions Correct</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted border border-primary/30">
                    <div className={`text-2xl font-bold font-mono ${getScoreColor((correctAnswers / questions.length) * 100)}`}>
                      {Math.round((correctAnswers / questions.length) * 100)}%
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">Accuracy</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted border border-primary/30">
                    <div className="text-2xl font-bold font-mono text-terminal">{questions.length}</div>
                    <div className="text-sm text-muted-foreground font-mono">Total Questions</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="terminal" onClick={handleRestart}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Retry Session
                  </Button>
                  <Button variant="outline" onClick={handleNewContent}>
                    <Brain className="h-4 w-4 mr-2" />
                    New Content
                  </Button>
                  <Button variant="secondary" onClick={onBack}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}