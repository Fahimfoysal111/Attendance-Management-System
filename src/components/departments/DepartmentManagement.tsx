import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Plus, UserCheck } from 'lucide-react';
import { mockDepartments, mockEmployees } from '@/data/mockData';

export const DepartmentManagement = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Departments</h1>
          <p className="text-muted-foreground mt-2">Manage organizational departments</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <Plus className="mr-2 h-4 w-4" />
          Add Department
        </Button>
      </div>

      {/* Department Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Departments</p>
                <p className="text-2xl font-bold">{mockDepartments.length}</p>
              </div>
              <Building2 className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Employees</p>
                <p className="text-2xl font-bold">{mockDepartments.reduce((sum, dept) => sum + dept.employeeCount, 0)}</p>
              </div>
              <Users className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Department Size</p>
                <p className="text-2xl font-bold">
                  {Math.round(mockDepartments.reduce((sum, dept) => sum + dept.employeeCount, 0) / mockDepartments.length)}
                </p>
              </div>
              <UserCheck className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockDepartments.map((department) => {
          const manager = mockEmployees.find(e => e.id === department.managerId);
          return (
            <Card key={department.id} className="shadow-soft hover:shadow-medium transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{department.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{department.description}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    {department.employeeCount} employees
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Manager Info */}
                <div className="p-3 bg-gradient-subtle border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {manager?.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium">{manager?.name}</p>
                      <p className="text-sm text-muted-foreground">Department Manager</p>
                    </div>
                  </div>
                </div>

                {/* Department Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-success/5 border border-success/20 rounded-lg">
                    <div className="text-lg font-bold text-success">{department.employeeCount}</div>
                    <div className="text-xs text-muted-foreground">Total Staff</div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="text-lg font-bold text-primary">
                      {Math.floor(Math.random() * 20) + 80}%
                    </div>
                    <div className="text-xs text-muted-foreground">Attendance Rate</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Employees
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Edit Department
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};