import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  CreditCard, 
  PiggyBank,
  AlertTriangle,
  Plus
} from "lucide-react";
import { ExpenseChart } from "./ExpenseChart";
import { BudgetOverview } from "./BudgetOverview";
import { GoalTracker } from "./GoalTracker";
import { RecentTransactions } from "./RecentTransactions";
import heroImage from "@/assets/finance-hero.jpg";

export const Dashboard = () => {
  const stats = [
    {
      title: "Total Balance",
      value: "$2,847.50",
      change: "+12.5%",
      trend: "up" as const,
      icon: DollarSign,
    },
    {
      title: "Monthly Spending",
      value: "$1,234.67",
      change: "-8.2%",
      trend: "down" as const,
      icon: CreditCard,
    },
    {
      title: "Budget Remaining",
      value: "$845.33",
      change: "68%",
      trend: "up" as const,
      icon: PiggyBank,
    },
    {
      title: "Savings Goal",
      value: "$1,200.00",
      change: "24%",
      trend: "up" as const,
      icon: Target,
    },
  ];

  const alerts = [
    {
      type: "warning",
      message: "You've spent 85% of your food budget this month",
      action: "Review expenses"
    },
    {
      type: "info",
      message: "You're on track to save $200 more than planned this month",
      action: "Keep it up!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FinanceAI
              </h1>
              <p className="text-muted-foreground">Smart financial management for students</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Expense
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h2 className="text-4xl font-bold">
                Take Control of Your
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Student Finances
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                AI-powered expense tracking, smart budgeting, and predictive analytics 
                designed specifically for students. Make every dollar count.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={heroImage} 
                alt="Financial dashboard visualization" 
                className="rounded-lg shadow-elevated w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Alerts */}
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <Card key={index} className={`border-l-4 ${
              alert.type === 'warning' 
                ? 'border-l-warning bg-warning/5' 
                : 'border-l-info bg-info/5'
            }`}>
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`w-5 h-5 ${
                    alert.type === 'warning' ? 'text-warning' : 'text-info'
                  }`} />
                  <p className="font-medium">{alert.message}</p>
                </div>
                <Button variant="outline" size="sm">
                  {alert.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elevated transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 text-xs">
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 text-success" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-destructive" />
                  )}
                  <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ExpenseChart />
          <BudgetOverview />
        </div>

        {/* Goals and Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GoalTracker />
          <RecentTransactions />
        </div>
      </main>
    </div>
  );
};