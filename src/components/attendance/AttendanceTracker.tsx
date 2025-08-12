import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Clock, Search, Calendar, Download } from 'lucide-react';
import { mockEmployees, mockAttendanceRecords } from '@/data/mockData';

export const AttendanceTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const filteredRecords = mockAttendanceRecords.filter(record => {
    const employee = mockEmployees.find(e => e.id === record.employeeId);
    return employee?.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
           record.date === selectedDate;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-success/10 text-success';
      case 'late': return 'bg-warning/10 text-warning';
      case 'absent': return 'bg-destructive/10 text-destructive';
      case 'half-day': return 'bg-primary/10 text-primary';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance Tracking</h1>
          <p className="text-muted-foreground mt-2">Monitor daily attendance records</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-gradient-primary text-primary-foreground">
            <Clock className="mr-2 h-4 w-4" />
            Mark Attendance
          </Button>
        </div>
      </div>

      {/* Controls */}
      <Card className="shadow-soft">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-auto"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Records */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>
            Attendance Records - {new Date(selectedDate).toLocaleDateString()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredRecords.map((record) => {
              const employee = mockEmployees.find(e => e.id === record.employeeId);
              return (
                <div key={record.id} className="flex items-center justify-between p-4 bg-gradient-subtle border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {employee?.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium">{employee?.name}</p>
                      <p className="text-sm text-muted-foreground">{employee?.position}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Clock In</p>
                      <p className="font-medium">{record.clockIn || '-'}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Clock Out</p>
                      <p className="font-medium">{record.clockOut || '-'}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Total Hours</p>
                      <p className="font-medium">{record.totalHours || '-'}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Status</p>
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredRecords.length === 0 && (
            <div className="text-center py-12">
              <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No records found</h3>
              <p className="text-muted-foreground">No attendance records for the selected date.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-success">{filteredRecords.filter(r => r.status === 'present').length}</div>
            <div className="text-sm text-muted-foreground">Present</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-warning">{filteredRecords.filter(r => r.status === 'late').length}</div>
            <div className="text-sm text-muted-foreground">Late</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-destructive">{filteredRecords.filter(r => r.status === 'absent').length}</div>
            <div className="text-sm text-muted-foreground">Absent</div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{filteredRecords.filter(r => r.status === 'half-day').length}</div>
            <div className="text-sm text-muted-foreground">Half Day</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};