import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    direction: 'up' | 'down';
  };
  variant?: 'default' | 'success' | 'warning' | 'destructive';
}

export const StatsCard = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  variant = 'default'
}: StatsCardProps) => {
  return (
    <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline space-x-2 mt-2">
              <h3 className="text-2xl font-bold text-foreground">{value}</h3>
              {trend && (
                <span className={cn(
                  "text-xs font-medium",
                  trend.direction === 'up' ? "text-success" : "text-destructive"
                )}>
                  {trend.direction === 'up' ? '↗' : '↘'} {trend.value}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          <div className={cn(
            "p-3 rounded-lg",
            variant === 'default' && "bg-primary/10 text-primary",
            variant === 'success' && "bg-success/10 text-success",
            variant === 'warning' && "bg-warning/10 text-warning",
            variant === 'destructive' && "bg-destructive/10 text-destructive"
          )}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};