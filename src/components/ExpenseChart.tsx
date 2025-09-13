import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp } from "lucide-react";

const weeklyData = [
  { name: "Mon", amount: 65 },
  { name: "Tue", amount: 45 },
  { name: "Wed", amount: 85 },
  { name: "Thu", amount: 32 },
  { name: "Fri", amount: 95 },
  { name: "Sat", amount: 120 },
  { name: "Sun", amount: 78 },
];

const categoryData = [
  { name: "Food", value: 400, color: "#3B82F6" },
  { name: "Transport", value: 200, color: "#10B981" },
  { name: "Entertainment", value: 150, color: "#F59E0B" },
  { name: "Study", value: 100, color: "#EF4444" },
  { name: "Other", value: 80, color: "#8B5CF6" },
];

export const ExpenseChart = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Spending Analytics</CardTitle>
            <CardDescription>AI-powered expense insights</CardDescription>
          </div>
          <Badge variant="outline" className="bg-success/10 text-success">
            <TrendingUp className="w-3 h-3 mr-1" />
            -12% vs last week
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Weekly Spending Chart */}
        <div>
          <h4 className="text-sm font-medium mb-3">Weekly Spending Trend</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                axisLine={false}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, "Spent"]}
                labelFormatter={(label) => `Day: ${label}`}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar 
                dataKey="amount" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Breakdown */}
        <div>
          <h4 className="text-sm font-medium mb-3">Spending by Category</h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`$${value}`, "Spent"]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-2">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">${category.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-info/5 border border-info/20 rounded-lg p-4">
          <h5 className="font-medium text-info mb-2">💡 AI Insight</h5>
          <p className="text-sm text-muted-foreground">
            You're spending 23% more on food this week. Consider meal prepping to save ~$45/month.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};