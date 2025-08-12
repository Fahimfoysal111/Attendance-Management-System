import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Download, Calendar, TrendingUp, Users, Clock } from 'lucide-react';

export const Reports = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-2">Comprehensive attendance insights and data analysis</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button className="bg-gradient-primary text-primary-foreground">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-soft hover:shadow-medium transition-all duration-200 cursor-pointer">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Attendance Summary</CardTitle>
                <p className="text-sm text-muted-foreground">Overall attendance statistics</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">This Month</span>
                <span className="font-semibold">87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Last Month</span>
                <span className="font-semibold">82%</span>
              </div>
              <div className="flex justify-between items-center text-success">
                <span className="text-sm">Trend</span>
                <span className="font-semibold">↗ +5%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-all duration-200 cursor-pointer">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-success" />
              </div>
              <div>
                <CardTitle className="text-lg">Employee Performance</CardTitle>
                <p className="text-sm text-muted-foreground">Individual attendance records</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Top Performer</span>
                <span className="font-semibold">98%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Average</span>
                <span className="font-semibold">87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Below Average</span>
                <span className="font-semibold">3 employees</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft hover:shadow-medium transition-all duration-200 cursor-pointer">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <CardTitle className="text-lg">Time Analysis</CardTitle>
                <p className="text-sm text-muted-foreground">Working hours and patterns</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Avg. Daily Hours</span>
                <span className="font-semibold">8.2h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Overtime Hours</span>
                <span className="font-semibold">45h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Late Arrivals</span>
                <span className="font-semibold">12%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Reports */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Attendance Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center border">
            <div className="text-center">
              <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">Chart Visualization</p>
              <p className="text-muted-foreground">Interactive charts would be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Monthly Attendance Report</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gradient-subtle border rounded-lg">
              <div>
                <p className="font-medium">January 2024</p>
                <p className="text-sm text-muted-foreground">Complete month report</p>
              </div>
              <Button size="sm" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-gradient-subtle border rounded-lg">
              <div>
                <p className="font-medium">December 2023</p>
                <p className="text-sm text-muted-foreground">Complete month report</p>
              </div>
              <Button size="sm" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Department Reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gradient-subtle border rounded-lg">
              <div>
                <p className="font-medium">Engineering Department</p>
                <p className="text-sm text-muted-foreground">15 employees - 89% attendance</p>
              </div>
              <Button size="sm" variant="outline">
                View
              </Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-gradient-subtle border rounded-lg">
              <div>
                <p className="font-medium">Marketing Department</p>
                <p className="text-sm text-muted-foreground">10 employees - 92% attendance</p>
              </div>
              <Button size="sm" variant="outline">
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};