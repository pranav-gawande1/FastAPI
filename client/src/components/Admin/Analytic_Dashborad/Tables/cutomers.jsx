'use client';

import Loader from "../../../Loader/Loader";

const CustomerTable = ({ customers, title }) => {
    if (!customers) return (
        <Loader />
    )
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
                            <th className="table-cell font-semibold text-right">Total Spent</th>
                            <th className="table-cell font-semibold text-right">Orders</th>
                            <th className="table-cell font-semibold">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="table-row">
                                <td className="table-cell">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-semibold">
                                            {customer.name
                                                .split(' ')
                                                .map((n) => n[0])
                                                .join('')}
                                        </div>
                                        <span className="font-medium text-foreground">{customer.name}</span>
                                    </div>
                                </td>
                                <td className="table-cell text-right">
                                    <span className="font-semibold text-foreground">
                                        ${customer.spent}
                                    </span>
                                </td>
                                <td className="table-cell text-right">
                                    <span className="text-muted-foreground">{customer.orders}</span>
                                </td>
                                <td className="table-cell text-muted-foreground text-sm">
                                    {customer.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default CustomerTable;