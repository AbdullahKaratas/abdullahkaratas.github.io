import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, Brain, Clock, Target } from "lucide-react";

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

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (questionId: number, selectedAnswer: number, isCorrect: boolean) => void;
  onNext: () => void;
  showResult?: boolean;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
  showResult = false,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === question.correctAnswer;
    setHasAnswered(true);
    onAnswer(question.id, selectedAnswer, isCorrect);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-success text-success-foreground";
      case "intermediate":
        return "bg-warning text-warning-foreground";
      case "advanced":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getQuestionTypeIcon = (type: string) => {
    switch (type) {
      case "scenario":
        return <Brain className="h-4 w-4" />;
      case "multiple-choice":
        return <Target className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-card bg-card border-terminal/50 hover:border-terminal transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span>Question {questionNumber} of {totalQuestions}</span>
            <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
            <span>{question.topic}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className={`${getDifficultyColor(question.difficulty)} border-none font-mono`}
            >
              {question.difficulty}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1 font-mono border border-primary/30">
              {getQuestionTypeIcon(question.type)}
              {question.type}
            </Badge>
          </div>
        </div>
        
        <CardTitle className="text-xl leading-relaxed font-mono text-terminal">
          {question.question}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(value) => setSelectedAnswer(parseInt(value))}
          disabled={hasAnswered}
        >
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const isWrong = hasAnswered && isSelected && !isCorrect;
            const shouldHighlight = hasAnswered && isCorrect;

            return (
              <div
                key={index}
                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-300 font-mono ${
                  shouldHighlight
                    ? "border-success bg-success/10"
                    : isWrong
                    ? "border-destructive bg-destructive/10"
                    : isSelected
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer text-base leading-relaxed"
                >
                  {option}
                </Label>
                {hasAnswered && isCorrect && (
                  <CheckCircle className="h-5 w-5 text-success" />
                )}
                {hasAnswered && isWrong && (
                  <XCircle className="h-5 w-5 text-destructive" />
                )}
              </div>
            );
          })}
        </RadioGroup>

        {hasAnswered && (
          <div className="space-y-4 p-4 rounded-lg bg-muted/50 border-l-4 border-l-primary border border-primary/30">
            <div className="flex items-center gap-2">
              {selectedAnswer === question.correctAnswer ? (
                <>
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-semibold text-success font-mono">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 text-destructive" />
                  <span className="font-semibold text-destructive font-mono">Incorrect</span>
                </>
              )}
            </div>
            <p className="text-foreground leading-relaxed font-mono">
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center pt-4">
          <div className="text-sm text-muted-foreground font-mono">
            Progress: {questionNumber}/{totalQuestions}
          </div>
          <div className="flex gap-2">
            {!hasAnswered ? (
              <Button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                variant="terminal"
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={onNext} variant="terminal">
                {questionNumber === totalQuestions ? "Finish" : "Next Question"}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}