// 'use client';

// import Loader from "../../../Loader/Loader";

// const CustomerTable = ({ customers, title }) => {
//     if (!customers) return (
//         <Loader />
//     )
//     return (
//         <div className="chart-container">
//             {/* Header */}
//             <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-foreground">{title}</h3>
//             </div>

//             {/* Table */}
//             <div className="table-container">
//                 <table className="table-base">
//                     <thead className="table-header">
//                         <tr>
//                             <th className="table-cell font-semibold">Customer</th>
//                             <th className="table-cell font-semibold text-right">Total Spent</th>
//                             <th className="table-cell font-semibold text-right">Orders</th>
//                             <th className="table-cell font-semibold">Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {customers.map((customer) => (
//                             <tr key={customer.id} className="table-row">
//                                 <td className="table-cell">
//                                     <div className="flex items-center gap-3">
//                                         <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-semibold">
//                                             {customer.name
//                                                 .split(' ')
//                                                 .map((n) => n[0])
//                                                 .join('')}
//                                         </div>
//                                         <span className="font-medium text-foreground">{customer.name}</span>
//                                     </div>
//                                 </td>
//                                 <td className="table-cell text-right">
//                                     <span className="font-semibold text-foreground">
//                                         ${customer.spent}
//                                     </span>
//                                 </td>
//                                 <td className="table-cell text-right">
//                                     <span className="text-muted-foreground">{customer.orders}</span>
//                                 </td>
//                                 <td className="table-cell text-muted-foreground text-sm">
//                                     {customer.email}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };
// export default CustomerTable;

'use client';

import Loader from "../../../Loader/Loader";

const CustomerTable = ({ customers, title }) => {

    if (!customers) return <Loader />;

    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {title}
                </h3>
            </div>

            <div className="overflow-x-auto">

                <table className="w-full text-sm">

                    <thead className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 sticky top-0">
                        <tr>
                            <th className="px-4 py-3 text-left font-medium">Customer</th>
                            <th className="px-4 py-3 text-right font-medium">Total Spent</th>
                            <th className="px-4 py-3 text-right font-medium">Orders</th>
                            <th className="px-4 py-3 text-left font-medium">Email</th>
                        </tr>
                    </thead>

                    <tbody>

                        {customers.map((customer) => (

                            <tr
                                key={customer._id}
                                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                            >

                                <td className="px-4 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                                            {customer.name?.charAt(0)}
                                        </div>

                                        <span className="font-medium text-gray-800 dark:text-gray-200">
                                            {customer.name}
                                        </span>

                                    </div>

                                </td>

                                <td className="px-4 py-4 text-right font-semibold text-gray-800 dark:text-gray-200">
                                    ${customer.spent || 0}
                                </td>

                                <td className="px-4 py-4 text-right text-gray-500">
                                    {customer.orders || 0}
                                </td>

                                <td className="px-4 py-4 text-gray-500">
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