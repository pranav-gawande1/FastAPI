import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getCustomerGrowthData } from '../../../../constant/analyticsData';

const GrowthChart = () => {
  const data = getCustomerGrowthData();

  return (
    <div className="p-6 rounded-xl shadow-sm border border-border border-gray-300 hover:shadow-md transition overflow-hidden">
      <div>
        <h3 className="text-lg font-semibold text-foreground">Customer Growth</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Total and new customers over time
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="month"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#6B7280"
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
            stroke="#2563EB"
            strokeWidth={2}
            dot={{ fill: '#2563EB', r: 4 }}
            activeDot={{ r: 6 }}
            name="Total Customers"
          />
          <Line
            type="monotone"
            dataKey="new"
            stroke="#F59E0B"
            strokeWidth={2}
            dot={{ fill: '#F59E0B', r: 4 }}
            activeDot={{ r: 6 }}
            name="New Customers"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GrowthChart;