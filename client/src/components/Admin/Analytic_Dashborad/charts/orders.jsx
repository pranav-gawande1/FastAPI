import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { getOrdersData } from '../../../../constant/analyticsData';
import useFetch from '../../../../shared/hooks/useFetch';
import ErrorState from '../../../Loader/NotFound';
import Loader from '../../../Loader/Loader';

const statusColors = {
  completed: '#047857',
  pending: '#A16207',
  cancelled: '#B91C1C',
  total: '#1F2937',
};

const statusLabels = {
  completed: 'Completed',
  pending: 'Pending',
  cancelled: 'Cancelled',
  total: 'Total',
};

const OrdersChart = () => {
  // const data = getOrdersData();

  const { data, error, loading } = useFetch(`/summary/ordersummary/`);

  return (
    <>
      {error && <ErrorState />}
      {loading && <Loader />}
      <div className="p-6 rounded-xl shadow-sm border border-border border-gray-300 hover:shadow-md transition overflow-hidden">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Order Overview</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Orders by status distribution
          </p>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data?.orderData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >

            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="status"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => statusLabels[value] || value}
            />
            <YAxis
              style={{ fontSize: '12px' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffff',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              labelFormatter={(value) => statusLabels[value] || value}
            />
            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              name="Number of Orders"
            >
              {data?.orderData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={statusColors[entry.status]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default OrdersChart;