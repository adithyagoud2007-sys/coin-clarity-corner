import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Plus, Calendar, TrendingUp } from "lucide-react";

const goals = [
  {
    id: 1,
    title: "Emergency Fund",
    current: 1200,
    target: 2000,
    deadline: "Dec 2024",
    category: "Savings",
    color: "bg-success",
  },
  {
    id: 2,
    title: "New Laptop",
    current: 650,
    target: 1500,
    deadline: "Mar 2025",
    category: "Purchase",
    color: "bg-primary",
  },
  {
    id: 3,
    title: "Spring Break Trip",
    current: 280,
    target: 800,
    deadline: "Feb 2025",
    category: "Travel",
    color: "bg-accent",
  },
  {
    id: 4,
    title: "Textbooks Fund",
    current: 450,
    target: 500,
    deadline: "Jan 2025",
    category: "Education",
    color: "bg-info",
  }
];

export const GoalTracker = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Financial Goals
            </CardTitle>
            <CardDescription>Track your savings progress</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Goal
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal) => {
          const percentage = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          
          return (
            <div key={goal.id} className="space-y-3 p-4 rounded-lg bg-muted/20 border">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium">{goal.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary" className="text-xs">
                      {goal.category}
                    </Badge>
                    <Calendar className="w-3 h-3" />
                    {goal.deadline}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${goal.current.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">of ${goal.target.toLocaleString()}</p>
                </div>
              </div>
              
              <Progress value={percentage} className="h-2" />
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {percentage.toFixed(1)}% complete
                </span>
                <span className="font-medium text-primary">
                  ${remaining.toLocaleString()} to go
                </span>
              </div>
            </div>
          );
        })}
        
        {/* AI Recommendations */}
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mt-6">
          <h5 className="font-medium text-accent mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Goal Insights
          </h5>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• You're ahead of schedule on your Textbooks Fund! 🎉</p>
            <p>• Save $95/month to reach your Emergency Fund goal on time</p>
            <p>• Consider auto-transferring $30/week to your Laptop fund</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};