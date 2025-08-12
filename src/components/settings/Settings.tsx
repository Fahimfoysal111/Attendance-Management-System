import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Settings as SettingsIcon, Clock, Bell, Users, Shield, Database } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Configure your attendance management system</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <SettingsIcon className="mr-2 h-5 w-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Your Company Name" defaultValue="TechCorp Inc." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" placeholder="Select timezone" defaultValue="UTC-5 (Eastern Time)" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date-format">Date Format</Label>
              <Input id="date-format" placeholder="Date format" defaultValue="MM/DD/YYYY" />
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive email alerts for attendance</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto Clock-out</Label>
                  <p className="text-sm text-muted-foreground">Automatically clock out after 12 hours</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Working Hours */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Working Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-time">Start Time</Label>
                <Input id="start-time" type="time" defaultValue="09:00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-time">End Time</Label>
                <Input id="end-time" type="time" defaultValue="17:00" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lunch-break">Lunch Break Duration (minutes)</Label>
              <Input id="lunch-break" type="number" defaultValue="60" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="late-threshold">Late Arrival Threshold (minutes)</Label>
              <Input id="late-threshold" type="number" defaultValue="15" />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Working Days</Label>
              <div className="grid grid-cols-7 gap-2 mt-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-xs mb-1">{day}</div>
                    <Switch defaultChecked={index < 5} />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Daily Attendance Reports</Label>
                <p className="text-sm text-muted-foreground">Send daily summary at end of day</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Late Arrival Alerts</Label>
                <p className="text-sm text-muted-foreground">Notify when employees are late</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Leave Request Notifications</Label>
                <p className="text-sm text-muted-foreground">Alert for new leave requests</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Weekly Reports</Label>
                <p className="text-sm text-muted-foreground">Send weekly attendance summary</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security & Permissions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Security & Permissions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add extra security to admin accounts</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>IP Restriction</Label>
                <p className="text-sm text-muted-foreground">Limit access to specific IP addresses</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Audit Logs</Label>
                <p className="text-sm text-muted-foreground">Track all system activities</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Session Timeout (hours)</Label>
              <Input type="number" defaultValue="8" min="1" max="24" />
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="shadow-soft lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="mr-2 h-5 w-5" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-subtle border rounded-lg text-center">
                <Users className="mx-auto h-8 w-8 text-primary mb-2" />
                <p className="font-medium mb-1">Backup Data</p>
                <p className="text-sm text-muted-foreground mb-3">Create a backup of all attendance data</p>
                <Button size="sm" variant="outline" className="w-full">
                  Create Backup
                </Button>
              </div>

              <div className="p-4 bg-gradient-subtle border rounded-lg text-center">
                <Database className="mx-auto h-8 w-8 text-warning mb-2" />
                <p className="font-medium mb-1">Import Data</p>
                <p className="text-sm text-muted-foreground mb-3">Import employee data from CSV files</p>
                <Button size="sm" variant="outline" className="w-full">
                  Import CSV
                </Button>
              </div>

              <div className="p-4 bg-gradient-subtle border rounded-lg text-center">
                <Clock className="mx-auto h-8 w-8 text-success mb-2" />
                <p className="font-medium mb-1">Export Reports</p>
                <p className="text-sm text-muted-foreground mb-3">Export attendance reports to Excel</p>
                <Button size="sm" variant="outline" className="w-full">
                  Export Data
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Settings */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Reset to Defaults</Button>
        <Button className="bg-gradient-primary text-primary-foreground">
          Save Settings
        </Button>
      </div>
    </div>
  );
};