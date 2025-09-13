import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Receipt, 
  Coffee, 
  Car, 
  ShoppingBag, 
  BookOpen, 
  MoreHorizontal,
  Search
} from "lucide-react";

const transactions = [
  {
    id: 1,
    description: "Starbucks Coffee",
    category: "Food & Dining",
    amount: -5.75,
    date: "Today, 2:30 PM",
    icon: Coffee,
    color: "text-orange-500",
    predicted: true
  },
  {
    id: 2,
    description: "Uber Ride",
    category: "Transportation",
    amount: -12.50,
    date: "Today, 10:15 AM",
    icon: Car,
    color: "text-blue-500",
    predicted: false
  },
  {
    id: 3,
    description: "Amazon Purchase",
    category: "Shopping",
    amount: -24.99,
    date: "Yesterday, 8:45 PM",
    icon: ShoppingBag,
    color: "text-purple-500",
    predicted: false
  },
  {
    id: 4,
    description: "Part-time Job",
    category: "Income",
    amount: 150.00,
    date: "Yesterday, 5:00 PM",
    icon: Receipt,
    color: "text-green-500",
    predicted: false
  },
  {
    id: 5,
    description: "Course Materials",
    category: "Education",
    amount: -45.00,
    date: "2 days ago",
    icon: BookOpen,
    color: "text-indigo-500",
    predicted: false
  },
  {
    id: 6,
    description: "Grocery Store",
    category: "Food & Dining",
    amount: -67.23,
    date: "3 days ago",
    icon: Coffee,
    color: "text-orange-500",
    predicted: false
  }
];

export const RecentTransactions = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="w-5 h-5 text-primary" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Latest financial activity</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Search className="w-4 h-4 mr-2" />
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
            >
              {/* Icon */}
              <div className={`p-2 rounded-lg bg-muted/50 ${transaction.color}`}>
                <transaction.icon className="w-4 h-4" />
              </div>
              
              {/* Transaction Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium truncate">{transaction.description}</p>
                  {transaction.predicted && (
                    <Badge variant="outline" className="text-xs bg-info/10 text-info border-info/20">
                      AI Categorized
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{transaction.category}</span>
                  <span>•</span>
                  <span>{transaction.date}</span>
                </div>
              </div>
              
              {/* Amount */}
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.amount > 0 
                    ? 'text-success' 
                    : 'text-foreground'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
              
              {/* Actions */}
              <Button variant="ghost" size="sm" className="shrink-0">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
        
        {/* AI Transaction Analysis */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
          <h5 className="font-medium text-primary mb-2">🤖 Smart Insights</h5>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>• Detected recurring Starbucks visits - consider a monthly plan to save 15%</p>
            <p>• Transportation spending increased 23% this week</p>
            <p>• 3 transactions automatically categorized using AI</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};