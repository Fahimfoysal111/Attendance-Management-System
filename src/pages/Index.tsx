import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { EmployeeList } from '@/components/employees/EmployeeList';
import { AttendanceTracker } from '@/components/attendance/AttendanceTracker';
import { Reports } from '@/components/reports/Reports';
import { LeaveManagement } from '@/components/leaves/LeaveManagement';
import { DepartmentManagement } from '@/components/departments/DepartmentManagement';
import { Settings } from '@/components/settings/Settings';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'employees':
        return <EmployeeList />;
      case 'attendance':
        return <AttendanceTracker />;
      case 'reports':
        return <Reports />;
      case 'leaves':
        return <LeaveManagement />;
      case 'departments':
        return <DepartmentManagement />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
