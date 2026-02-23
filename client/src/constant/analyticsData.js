// Metrics Data
export const getMetricsData = () => [
  {
    label: 'Total Revenue',
    value: 45250,
    change: 12.5,
    changeType: 'up',
    icon: '💰',
  },
  {
    label: 'Total Orders',
    value: 1234,
    change: 8.3,
    changeType: 'up',
    icon: '📦',
  },
  {
    label: 'Total Customers',
    value: 8456,
    change: 5.2,
    changeType: 'up',
    icon: '👥',
  },
  {
    label: 'Conversion Rate',
    value: 3.24,
    change: 2.1,
    changeType: 'up',
    icon: '📈',
  },
  {
    label: 'Avg Order Value',
    value: 156.8,
    change: -1.8,
    changeType: 'down',
    icon: '💵',
  },
  {
    label: 'Refund Rate',
    value: 2.15,
    change: 0.5,
    changeType: 'down',
    icon: '↩️',
  },
];

// Revenue Time Series
export const getRevenueData = () => [
  { date: 'Jan 1', revenue: 4000, orders: 120, customers: 240 },
  { date: 'Jan 8', revenue: 5200, orders: 150, customers: 320 },
  { date: 'Jan 15', revenue: 4800, orders: 140, customers: 280 },
  { date: 'Jan 22', revenue: 6100, orders: 180, customers: 400 },
  { date: 'Jan 29', revenue: 7500, orders: 220, customers: 500 },
  { date: 'Feb 5', revenue: 8200, orders: 240, customers: 580 },
  { date: 'Feb 12', revenue: 9100, orders: 270, customers: 650 },
  { date: 'Feb 19', revenue: 10500, orders: 310, customers: 750 },
  { date: 'Feb 26', revenue: 11200, orders: 330, customers: 820 },
];

// Orders by status
export const getOrdersData = () => [
  { status: 'completed', value: 580 },
  { status: 'pending', value: 120 },
  { status: 'cancelled', value: 45 },
  { status: 'refunded', value: 35 },
];

// Customer segments
export const getCustomerSegments = () => [
  { name: 'New Customers', value: 35, color: '#3B82F6' },
  { name: 'Returning Customers', value: 65, color: '#10B981' },
];

// Top customers
export const getTopCustomers = () => [
  { id: '1', name: 'Sarah Johnson', spent: 12500, orders: 24, email: 'sarah.j@example.com' },
  { id: '2', name: 'Michael Chen', spent: 9800, orders: 18, email: 'mchen@example.com' },
  { id: '3', name: 'Emily Rodriguez', spent: 8450, orders: 15, email: 'emily.r@example.com' },
  { id: '4', name: 'David Kim', spent: 7620, orders: 14, email: 'david.kim@example.com' },
  { id: '5', name: 'Jessica Brown', spent: 6890, orders: 12, email: 'jbrown@example.com' },
];

// Product Performance
export const getProductsData = () => [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    sales: 450,
    revenue: 22500,
    stock: 120,
    views: 5420,
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    sales: 380,
    revenue: 5700,
    stock: 250,
    views: 4200,
    category: 'Apparel',
  },
  {
    id: '3',
    name: 'Stainless Steel Water Bottle',
    sales: 320,
    revenue: 4800,
    stock: 180,
    views: 3800,
    category: 'Accessories',
  },
  {
    id: '4',
    name: 'Bamboo Phone Stand',
    sales: 280,
    revenue: 2240,
    stock: 95,
    views: 3200,
    category: 'Accessories',
  },
  {
    id: '5',
    name: 'Yoga Mat Premium',
    sales: 210,
    revenue: 3150,
    stock: 60,
    views: 2100,
    category: 'Fitness',
  },
];

// Lowest performing products
export const getLowestProducts = () => [
  {
    id: '10',
    name: 'Vintage Clock',
    sales: 12,
    revenue: 480,
    stock: 45,
    views: 520,
    category: 'Home',
  },
  {
    id: '11',
    name: 'USB-C Hub',
    sales: 18,
    revenue: 540,
    stock: 80,
    views: 620,
    category: 'Electronics',
  },
  {
    id: '12',
    name: 'Desk Lamp LED',
    sales: 25,
    revenue: 875,
    stock: 30,
    views: 850,
    category: 'Home',
  },
];

// Most viewed products
export const getMostViewedProducts = () => [
  {
    id: '20',
    name: '4K Webcam Pro',
    sales: 95,
    revenue: 9500,
    stock: 40,
    views: 8950,
    category: 'Electronics',
  },
  {
    id: '21',
    name: 'Mechanical Gaming Keyboard',
    sales: 140,
    revenue: 6300,
    stock: 110,
    views: 7200,
    category: 'Electronics',
  },
  {
    id: '22',
    name: 'Wireless Mouse',
    sales: 110,
    revenue: 2200,
    stock: 200,
    views: 6800,
    category: 'Electronics',
  },
];

// Categories revenue
export const getCategoryData = () => [
  { name: 'Electronics', value: 35 },
  { name: 'Apparel', value: 25 },
  { name: 'Accessories', value: 20 },
  { name: 'Home & Garden', value: 12 },
  { name: 'Fitness', value: 8 },
];

// Traffic & Engagement metrics
export const getTrafficData = () => [
  { metric: 'Website Visits', value: '24.5K', change: 12.3, changeType: 'up' },
  { metric: 'Bounce Rate', value: '42.1%', change: -3.2, changeType: 'down' },
  { metric: 'Avg Session Duration', value: '2m 45s', change: 5.6, changeType: 'up' },
  { metric: 'Cart Abandonment', value: '68.2%', change: -8.1, changeType: 'down' },
];

// Recent Orders
export const getRecentOrders = () => [
  {
    id: '1',
    customer: 'Alice Thompson',
    orderId: '#ORD-2024-001',
    status: 'completed',
    amount: 259.99,
    date: '2024-02-23',
  },
  {
    id: '2',
    customer: 'Bob Martinez',
    orderId: '#ORD-2024-002',
    status: 'completed',
    amount: 125.50,
    date: '2024-02-23',
  },
  {
    id: '3',
    customer: 'Carol Singh',
    orderId: '#ORD-2024-003',
    status: 'pending',
    amount: 389.99,
    date: '2024-02-23',
  },
  {
    id: '4',
    customer: 'David Wilson',
    orderId: '#ORD-2024-004',
    status: 'completed',
    amount: 89.99,
    date: '2024-02-22',
  },
  {
    id: '5',
    customer: 'Emma Davis',
    orderId: '#ORD-2024-005',
    status: 'cancelled',
    amount: 199.99,
    date: '2024-02-22',
  },
  {
    id: '6',
    customer: 'Frank Johnson',
    orderId: '#ORD-2024-006',
    status: 'completed',
    amount: 455.00,
    date: '2024-02-22',
  },
  {
    id: '7',
    customer: 'Grace Lee',
    orderId: '#ORD-2024-007',
    status: 'pending',
    amount: 129.99,
    date: '2024-02-21',
  },
  {
    id: '8',
    customer: 'Henry Brown',
    orderId: '#ORD-2024-008',
    status: 'refunded',
    amount: 79.99,
    date: '2024-02-21',
  },
  {
    id: '9',
    customer: 'Iris Anderson',
    orderId: '#ORD-2024-009',
    status: 'completed',
    amount: 349.50,
    date: '2024-02-21',
  },
  {
    id: '10',
    customer: 'Jack Wilson',
    orderId: '#ORD-2024-010',
    status: 'completed',
    amount: 219.99,
    date: '2024-02-20',
  },
];

// Customer growth data
export const getCustomerGrowthData = () => [
  { month: 'Jan', total: 2400, new: 240 },
  { month: 'Feb', total: 3210, new: 221 },
  { month: 'Mar', total: 4290, new: 229 },
  { month: 'Apr', total: 5410, new: 320 },
  { month: 'May', total: 6820, new: 410 },
  { month: 'Jun', total: 8456, new: 432 },
];

// Low stock inventory alerts
export const getLowStockProducts = () => [
  {
    id: '30',
    name: 'Premium Headphones',
    sales: 450,
    revenue: 22500,
    stock: 5,
    views: 5420,
    category: 'Electronics',
  },
  {
    id: '31',
    name: 'Yoga Mat',
    sales: 210,
    revenue: 3150,
    stock: 8,
    views: 2100,
    category: 'Fitness',
  },
  {
    id: '32',
    name: 'Desk Lamp',
    sales: 95,
    revenue: 3325,
    stock: 3,
    views: 1250,
    category: 'Home',
  },
];

// Export options metadata
export const getExportOptions = () => ({
  dateRanges: [
    { label: 'Last 7 Days', value: '7d' },
    { label: 'Last 30 Days', value: '30d' },
    { label: 'Last 90 Days', value: '90d' },
    { label: 'This Year', value: 'year' },
    { label: 'Custom', value: 'custom' },
  ],
  categories: ['Electronics', 'Apparel', 'Accessories', 'Home & Garden', 'Fitness', 'All'],
  paymentMethods: ['Credit Card', 'PayPal', 'Apple Pay', 'Google Pay', 'All'],
  orderStatuses: ['Completed', 'Pending', 'Cancelled', 'Refunded', 'All'],
});

// Mock CSV export function
export const exportToCSV = (data, filename = 'export.csv') => {
  if (!data || data.length === 0) return;

  const headers = Object.keys(data[0]);
  const csv = [
    headers.join(','),
    ...data.map((row) =>
      headers
        .map((header) => {
          const value = row[header];
          return typeof value === 'string' && value.includes(',')
            ? `"${value}"`
            : value;
        })
        .join(',')
    ),
  ].join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  window.URL.revokeObjectURL(url);
};