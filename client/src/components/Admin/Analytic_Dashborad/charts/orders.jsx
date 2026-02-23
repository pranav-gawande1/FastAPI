'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getOrdersData } from '../../../../constant/analyticsData';

const statusColors = {
  completed: 'hsl(var(--chart-1))',
  pending: 'hsl(var(--chart-2))',
  cancelled: 'hsl(var(--chart-3))',
  refunded: 'hsl(var(--chart-4))',
};

const statusLabels = {
  completed: 'Completed',
  pending: 'Pending',
  cancelled: 'Cancelled',
  refunded: 'Refunded',
};

const OrdersChart = () => {
  const data = getOrdersData();

  return (
    <div className="chart-container">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-foreground">Order Overview</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Orders by status distribution
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="status"
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => statusLabels[value] || value}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
            labelFormatter={(value) => statusLabels[value] || value}
          />
          <Bar
            dataKey="value"
            fill="hsl(var(--primary))"
            radius={[8, 8, 0, 0]}
            name="Number of Orders"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default OrdersChart;