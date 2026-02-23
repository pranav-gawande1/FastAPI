const statusColors = {
  completed: {
    bg: 'bg-green-100 dark:bg-green-900/20',
    text: 'text-green-700 dark:text-green-400',
  },
  pending: {
    bg: 'bg-yellow-100 dark:bg-yellow-900/20',
    text: 'text-yellow-700 dark:text-yellow-400',
  },
  cancelled: {
    bg: 'bg-red-100 dark:bg-red-900/20',
    text: 'text-red-700 dark:text-red-400',
  },
  refunded: {
    bg: 'bg-blue-100 dark:bg-blue-900/20',
    text: 'text-blue-700 dark:text-blue-400',
  },
};

const OrdersTable = ({ orders, title }) => {
  return (
    <div className="chart-container">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="table-base">
          <thead className="table-header">
            <tr>
              <th className="table-cell font-semibold">Customer</th>
              <th className="table-cell font-semibold">Order ID</th>
              <th className="table-cell font-semibold">Status</th>
              <th className="table-cell font-semibold text-right">Amount</th>
              <th className="table-cell font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const statusStyle =
                statusColors[order.status] ||
                statusColors.pending;
              return (
                <tr key={order.id} className="table-row">
                  <td className="table-cell font-medium text-foreground">
                    {order.customerName}
                  </td>
                  <td className="table-cell font-mono text-sm text-muted-foreground">
                    {order.id}
                  </td>
                  <td className="table-cell">
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </td>
                  <td className="table-cell text-right font-semibold text-foreground">
                    ${order.totalPrice.toFixed(2)}
                  </td>
                  <td className="table-cell text-muted-foreground text-sm">
                    {order.date}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrdersTable;