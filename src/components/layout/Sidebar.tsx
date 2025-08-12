import { 
  LayoutDashboard, 
  Users, 
  Clock, 
  BarChart3, 
  Calendar,
  Building2,
  Settings,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'employees', name: 'Employees', icon: Users },
  { id: 'attendance', name: 'Attendance', icon: Clock },
  { id: 'reports', name: 'Reports', icon: BarChart3 },
  { id: 'leaves', name: 'Leave Management', icon: Calendar },
  { id: 'departments', name: 'Departments', icon: Building2 },
  { id: 'settings', name: 'Settings', icon: Settings },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <div className="w-64 bg-gradient-primary text-primary-foreground shadow-strong">
      <div className="p-6 border-b border-primary-glow/20">
        <h1 className="text-xl font-bold">AttendanceHub</h1>
        <p className="text-sm text-primary-foreground/70 mt-1">Management System</p>
      </div>
      
      <nav className="mt-6 px-3">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start mb-1 text-primary-foreground hover:bg-primary-glow/20",
                activeTab === item.id && "bg-primary-glow/30"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="mr-3 h-4 w-4" />
              {item.name}
            </Button>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-primary-glow/20">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-primary-foreground hover:bg-primary-glow/20"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};