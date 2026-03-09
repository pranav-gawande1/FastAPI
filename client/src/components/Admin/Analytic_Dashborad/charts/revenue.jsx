import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getRevenueData } from '../../../../constant/analyticsData';

const RevenueChart = () => {
  const [timeFrame, setTimeFrame] = useState('daily');

  const data = getRevenueData();

  const timeFrameButtons = [
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
  ];

  return (
    <div className="p-6 rounded-xl shadow-sm border border-border border-gray-300 hover:shadow-md transition overflow-hidden">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Revenue Analytics</h3>
          <p className="text-sm text-gray-900 mt-1">
            Compare revenue with previous period
          </p>
        </div>
        <div className="flex items-center gap-2">
          {timeFrameButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setTimeFrame(btn.value)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-smooth ${timeFrame === btn.value
                ? 'bg-primary text-gray-900'
                : 'bg-muted text-gray-400 hover:bg-muted/70'
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="date"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `₹${value / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
            formatter={(value, name) => {
              if (name === 'Current Revenue') {
                return [`₹${value.toLocaleString()}`, 'Revenue'];
              }
              if (name === 'Orders') {
                return [value, 'Orders'];
              }
              return value;
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563EB"
            strokeWidth={2}
            dot={{ fill: '#2563EB', r: 4 }}
            activeDot={{ r: 6 }}
            name="Current Revenue"
          />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#16A34A"
            strokeWidth={2}
            dot={{ fill: '#16A34A', r: 4 }}
            activeDot={{ r: 6 }}
            name="Orders"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default RevenueChart;