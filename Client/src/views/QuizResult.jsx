import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";

const QuizResult = ({ result }) => {
  // result prop should contain quiz info, user answers, and scores
  const {
    quizTitle,
    totalQuestions,
    correctAnswers,
    attemptedQuestions,
    score,
    timeTaken,
    questions,
  } = result;

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="container py-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{quizTitle}</CardTitle>
          <CardDescription>Here is how you performed in the quiz</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Total Questions</p>
            <p className="text-xl font-semibold">{totalQuestions}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Attempted</p>
            <p className="text-xl font-semibold">{attemptedQuestions}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Correct Answers</p>
            <p className="text-xl font-semibold">{correctAnswers}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Time Taken</p>
            <p className="text-xl font-semibold">{timeTaken} min</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground mb-1">Score</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">{percentage}%</span>
              <Progress value={percentage} className="w-full mx-4" />
              <span className="text-lg font-bold">{score} pts</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Question-wise review */}
      <Card>
        <CardHeader>
          <CardTitle>Answer Review</CardTitle>
          <CardDescription>Check your answers below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {questions.map((q, index) => (
            <div
              key={q.id}
              className="border p-4 rounded-lg space-y-2 bg-muted"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">
                  Q{index + 1}. {q.question}
                </h3>
                {q.isCorrect ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <XCircle className="text-red-500" />
                )}
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-semibold">Your Answer:</span>{" "}
                  <Badge variant={q.isCorrect ? "outline" : "destructive"}>
                    {q.userAnswer || "Not Answered"}
                  </Badge>
                </p>
                {!q.isCorrect && (
                  <p className="text-sm">
                    <span className="font-semibold">Correct Answer:</span>{" "}
                    <Badge variant="secondary">{q.correctAnswer}</Badge>
                  </p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizResult;
