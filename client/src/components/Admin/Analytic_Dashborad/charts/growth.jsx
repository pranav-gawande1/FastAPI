'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getCustomerGrowthData } from '../../../../constant/analyticsData';

const GrowthChart = () => {
  const data = getCustomerGrowthData();

  return (
    <div className="chart-container">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-foreground">Customer Growth</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Total and new customers over time
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="month"
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
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
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line
            type="monotone"
            dataKey="total"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--primary))', r: 4 }}
            activeDot={{ r: 6 }}
            name="Total Customers"
          />
          <Line
            type="monotone"
            dataKey="new"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--accent))', r: 4 }}
            activeDot={{ r: 6 }}
            name="New Customers"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GrowthChart;