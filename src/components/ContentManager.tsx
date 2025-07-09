import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, Brain, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ContentManagerProps {
  certification: string;
  onContentProcessed: (questions: any[]) => void;
}

export function ContentManager({ certification, onContentProcessed }: ContentManagerProps) {
  const [content, setContent] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const generateQuestions = async () => {
    if (!content.trim()) {
      toast({
        title: "No content provided",
        description: "Please paste some study material first.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockQuestions = [
        {
          id: 1,
          type: "multiple-choice",
          question: "What is the primary purpose of Azure Resource Manager (ARM)?",
          options: [
            "To manage virtual machines only",
            "To provide a management layer that enables you to create, update, and delete resources",
            "To monitor application performance",
            "To backup data automatically"
          ],
          correctAnswer: 1,
          explanation: "Azure Resource Manager provides a management layer that enables you to create, update, and delete resources in your Azure account. It offers consistent management capabilities regardless of the tools you use.",
          difficulty: "intermediate",
          topic: "Azure Fundamentals"
        },
        {
          id: 2,
          type: "scenario",
          question: "Your company needs to deploy a web application that can scale automatically based on demand. The application should be highly available across multiple regions. Which Azure service combination would you recommend?",
          options: [
            "Azure App Service with Traffic Manager",
            "Azure Virtual Machines with Load Balancer",
            "Azure Container Instances",
            "Azure Functions only"
          ],
          correctAnswer: 0,
          explanation: "Azure App Service provides built-in auto-scaling and high availability, while Traffic Manager enables global load balancing across multiple regions.",
          difficulty: "advanced",
          topic: "Web Applications"
        }
      ];

      onContentProcessed(mockQuestions);
      
      toast({
        title: "Questions generated successfully!",
        description: `Generated ${mockQuestions.length} questions from your content.`,
      });
      
      setContent("");
    } catch (error) {
      toast({
        title: "Error generating questions",
        description: "Please try again with different content.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-azure">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle>Content & Question Generator</CardTitle>
              <CardDescription>
                Paste your study material to generate practice questions for {certification}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="paste" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="paste" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Paste Content
          </TabsTrigger>
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload File
          </TabsTrigger>
        </TabsList>

        <TabsContent value="paste" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Textarea
                  placeholder={`Paste your ${certification} study material here...\n\nExample:\n- Azure Resource Manager concepts\n- Virtual Machine management\n- Storage account configuration\n- etc.`}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[300px] resize-none"
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">{content.length} characters</Badge>
                    {content.length > 100 && (
                      <Badge variant="secondary" className="bg-success text-success-foreground">
                        Good length for processing
                      </Badge>
                    )}
                  </div>
                  
                  <Button
                    onClick={generateQuestions}
                    disabled={isProcessing || !content.trim()}
                    variant="azure"
                    className="min-w-[200px]"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Generate Questions
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                <div>
                  <p className="text-lg font-medium">Upload your study materials</p>
                  <p className="text-muted-foreground">
                    Support for PDF, DOCX, and TXT files (coming soon)
                  </p>
                </div>
                <Button variant="outline" disabled>
                  Select Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}