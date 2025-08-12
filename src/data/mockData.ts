import { Employee, AttendanceRecord, LeaveRequest, Department } from '@/types/attendance';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@company.com',
    phone: '+1 (555) 123-4567',
    position: 'Senior Developer',
    department: 'Engineering',
    employeeId: 'EMP001',
    joinDate: '2023-01-15',
    status: 'active'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 234-5678',
    position: 'Product Manager',
    department: 'Product',
    employeeId: 'EMP002',
    joinDate: '2023-02-20',
    status: 'active'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.brown@company.com',
    phone: '+1 (555) 345-6789',
    position: 'UI/UX Designer',
    department: 'Design',
    employeeId: 'EMP003',
    joinDate: '2023-03-10',
    status: 'active'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    phone: '+1 (555) 456-7890',
    position: 'HR Manager',
    department: 'Human Resources',
    employeeId: 'EMP004',
    joinDate: '2023-01-05',
    status: 'active'
  },
  {
    id: '5',
    name: 'David Wilson',
    email: 'david.wilson@company.com',
    phone: '+1 (555) 567-8901',
    position: 'Marketing Specialist',
    department: 'Marketing',
    employeeId: 'EMP005',
    joinDate: '2023-04-12',
    status: 'active'
  }
];

export const mockDepartments: Department[] = [
  {
    id: '1',
    name: 'Engineering',
    description: 'Software development and technical operations',
    managerId: '1',
    employeeCount: 15
  },
  {
    id: '2',
    name: 'Product',
    description: 'Product strategy and management',
    managerId: '2',
    employeeCount: 8
  },
  {
    id: '3',
    name: 'Design',
    description: 'User experience and visual design',
    managerId: '3',
    employeeCount: 6
  },
  {
    id: '4',
    name: 'Human Resources',
    description: 'People operations and talent management',
    managerId: '4',
    employeeCount: 4
  },
  {
    id: '5',
    name: 'Marketing',
    description: 'Brand promotion and customer acquisition',
    managerId: '5',
    employeeCount: 10
  }
];

export const mockAttendanceRecords: AttendanceRecord[] = [
  {
    id: '1',
    employeeId: '1',
    date: '2024-01-12',
    clockIn: '09:00',
    clockOut: '17:30',
    totalHours: 8.5,
    status: 'present'
  },
  {
    id: '2',
    employeeId: '2',
    date: '2024-01-12',
    clockIn: '09:15',
    clockOut: '17:45',
    totalHours: 8.5,
    status: 'late'
  },
  {
    id: '3',
    employeeId: '3',
    date: '2024-01-12',
    clockIn: '09:00',
    clockOut: '13:00',
    totalHours: 4,
    status: 'half-day'
  },
  {
    id: '4',
    employeeId: '4',
    date: '2024-01-12',
    status: 'absent'
  },
  {
    id: '5',
    employeeId: '5',
    date: '2024-01-12',
    clockIn: '08:45',
    clockOut: '17:15',
    totalHours: 8.5,
    status: 'present'
  }
];

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeId: '1',
    type: 'vacation',
    startDate: '2024-01-20',
    endDate: '2024-01-22',
    days: 3,
    reason: 'Family vacation',
    status: 'approved',
    appliedDate: '2024-01-10',
    approvedBy: '4'
  },
  {
    id: '2',
    employeeId: '3',
    type: 'sick',
    startDate: '2024-01-12',
    endDate: '2024-01-12',
    days: 1,
    reason: 'Flu symptoms',
    status: 'approved',
    appliedDate: '2024-01-11',
    approvedBy: '4'
  },
  {
    id: '3',
    employeeId: '2',
    type: 'personal',
    startDate: '2024-01-15',
    endDate: '2024-01-15',
    days: 1,
    reason: 'Personal appointment',
    status: 'pending',
    appliedDate: '2024-01-12'
  }
];