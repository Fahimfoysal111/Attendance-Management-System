import { StatsCard } from './StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, UserX, Clock, Calendar } from 'lucide-react';
import { mockEmployees, mockAttendanceRecords } from '@/data/mockData';

export const Dashboard = () => {
  const totalEmployees = mockEmployees.length;
  const presentToday = mockAttendanceRecords.filter(r => r.status === 'present' || r.status === 'late').length;
  const absentToday = mockAttendanceRecords.filter(r => r.status === 'absent').length;
  const lateToday = mockAttendanceRecords.filter(r => r.status === 'late').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to your attendance management system</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Employees"
          value={totalEmployees}
          subtitle="Active staff members"
          icon={<Users className="h-6 w-6" />}
          variant="default"
        />
        <StatsCard
          title="Present Today"
          value={presentToday}
          subtitle={`${Math.round((presentToday / totalEmployees) * 100)}% attendance rate`}
          icon={<UserCheck className="h-6 w-6" />}
          variant="success"
          trend={{ value: "5%", direction: "up" }}
        />
        <StatsCard
          title="Absent Today"
          value={absentToday}
          subtitle="Employees not present"
          icon={<UserX className="h-6 w-6" />}
          variant="destructive"
        />
        <StatsCard
          title="Late Arrivals"
          value={lateToday}
          subtitle="Arrived after 9:00 AM"
          icon={<Clock className="h-6 w-6" />}
          variant="warning"
        />
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Today's Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAttendanceRecords.map((record) => {
                const employee = mockEmployees.find(e => e.id === record.employeeId);
                return (
                  <div key={record.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{employee?.name}</p>
                      <p className="text-sm text-muted-foreground">{employee?.position}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        record.status === 'present' 
                          ? 'bg-success/10 text-success'
                          : record.status === 'late'
                          ? 'bg-warning/10 text-warning'
                          : record.status === 'absent'
                          ? 'bg-destructive/10 text-destructive'
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {record.status}
                      </span>
                      {record.clockIn && (
                        <p className="text-xs text-muted-foreground mt-1">
                          In: {record.clockIn}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-primary text-primary-foreground rounded-lg cursor-pointer hover:opacity-90 transition-opacity">
                <UserCheck className="h-6 w-6 mb-2" />
                <p className="font-medium">Mark Attendance</p>
                <p className="text-xs opacity-75">Clock in/out employees</p>
              </div>
              <div className="p-4 bg-gradient-subtle border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                <Users className="h-6 w-6 mb-2 text-primary" />
                <p className="font-medium">Add Employee</p>
                <p className="text-xs text-muted-foreground">Register new staff</p>
              </div>
              <div className="p-4 bg-gradient-subtle border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                <Calendar className="h-6 w-6 mb-2 text-primary" />
                <p className="font-medium">Leave Requests</p>
                <p className="text-xs text-muted-foreground">Review pending requests</p>
              </div>
              <div className="p-4 bg-gradient-subtle border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                <Clock className="h-6 w-6 mb-2 text-primary" />
                <p className="font-medium">Generate Report</p>
                <p className="text-xs text-muted-foreground">Export attendance data</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};