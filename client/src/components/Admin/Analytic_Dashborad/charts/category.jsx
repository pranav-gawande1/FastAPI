import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { getCategoryData } from '../../../../constant/analyticsData';

const COLORS = [
    '#3B82F6', // blue
    '#10B981', // green
    '#F59E0B', // yellow
    '#EF4444', // red
    '#8B5CF6', // purple
];

const CategoryChart = () => {
    const data = getCategoryData();

    return (
        <div className="p-6 rounded-xl shadow-sm border border-border border-gray-300 hover:shadow-md transition overflow-hidden">
            <div>
                <h3 className="text-lg font-semibold text-foreground">Sales by Category</h3>
                <p className="text-sm text-muted-foreground mt-1">
                    Revenue distribution across product categories
                </p>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name} (${value}%)`}
                        outerRadius={100}
                        innerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#3B82F6',
                            border: '1px solid #3B82F6',
                            borderRadius: '8px',
                        }}
                        labelStyle={{ color: 'hsl(var(--foreground))' }}
                        formatter={(value) => `${value}%`}
                    />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CategoryChart;