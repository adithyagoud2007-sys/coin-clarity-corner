import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit3, AlertTriangle, CheckCircle } from "lucide-react";

const budgets = [
  {
    category: "Food & Dining",
    spent: 320,
    budget: 400,
    color: "bg-primary",
    status: "good"
  },
  {
    category: "Transportation",
    spent: 175,
    budget: 200,
    color: "bg-accent",
    status: "good"
  },
  {
    category: "Entertainment",
    spent: 185,
    budget: 150,
    color: "bg-warning",
    status: "over"
  },
  {
    category: "Study Materials",
    spent: 65,
    budget: 100,
    color: "bg-success",
    status: "good"
  },
  {
    category: "Personal Care",
    spent: 45,
    budget: 80,
    color: "bg-info",
    status: "good"
  }
];

export const BudgetOverview = () => {
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);
  const totalBudget = budgets.reduce((sum, budget) => sum + budget.budget, 0);
  const overallPercentage = (totalSpent / totalBudget) * 100;

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Budget Overview</CardTitle>
            <CardDescription>Track your spending limits</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Edit3 className="w-4 h-4 mr-2" />
            Edit Budgets
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">Overall Budget</h4>
            <Badge variant={overallPercentage > 90 ? "destructive" : "secondary"}>
              ${totalSpent} / ${totalBudget}
            </Badge>
          </div>
          <Progress 
            value={overallPercentage} 
            className="h-2"
          />
          <p className="text-xs text-muted-foreground">
            {overallPercentage.toFixed(1)}% of monthly budget used
          </p>
        </div>

        {/* Category Budgets */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium">By Category</h4>
          {budgets.map((budget, index) => {
            const percentage = (budget.spent / budget.budget) * 100;
            const isOverBudget = percentage > 100;
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{budget.category}</span>
                    {isOverBudget ? (
                      <AlertTriangle className="w-4 h-4 text-warning" />
                    ) : percentage > 80 ? (
                      <AlertTriangle className="w-4 h-4 text-warning" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-success" />
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ${budget.spent} / ${budget.budget}
                  </span>
                </div>
                <Progress 
                  value={Math.min(percentage, 100)} 
                  className="h-2"
                />
                {isOverBudget && (
                  <p className="text-xs text-warning">
                    Over budget by ${budget.spent - budget.budget}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Predictions */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <h5 className="font-medium text-primary mb-2">📈 Budget Forecast</h5>
          <div className="space-y-1 text-sm">
            <p className="text-muted-foreground">
              • On track to spend <span className="font-medium">${Math.round(totalSpent * 1.15)}</span> this month
            </p>
            <p className="text-muted-foreground">
              • You can save <span className="font-medium text-success">$85</span> by reducing entertainment spending
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};