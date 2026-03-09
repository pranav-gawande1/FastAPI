// const ProductTable = ({ products, title, showStock = false }) => {
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
//                             <th className="table-cell font-semibold">Product Name</th>
//                             <th className="table-cell font-semibold text-right">Sales</th>
//                             <th className="table-cell font-semibold text-right">Revenue</th>
//                             <th className="table-cell font-semibold text-right">Views</th>
//                             {showStock && (
//                                 <th className="table-cell font-semibold text-right">Stock</th>
//                             )}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {products.map((product) => (
//                             <tr key={product.id} className="table-row">
//                                 <td className="table-cell">
//                                     <div>
//                                         <p className="font-medium text-foreground">{product.name}</p>
//                                         {/* <p className="text-xs text-muted-foreground">{product.category}</p> */}
//                                     </div>
//                                 </td>
//                                 {/* <td className="table-cell text-right">
//                                     <span className="font-semibold text-foreground">
//                                         {product.sales.toLocaleString()}
//                                     </span>
//                                 </td>
//                                 <td className="table-cell text-right">
//                                     <span className="font-semibold text-foreground">
//                                         ${product.revenue.toLocaleString()}
//                                     </span>
//                                 </td>
//                                 <td className="table-cell text-right">
//                                     <span className="text-muted-foreground">
//                                         {product.views.toLocaleString()}
//                                     </span>
//                                 </td> */}
//                                 {showStock && (
//                                     <td className="table-cell text-right">
//                                         <span
//                                             className={`font-semibold ${product.stock < 20
//                                                     ? 'text-red-600 dark:text-red-400'
//                                                     : 'text-green-600 dark:text-green-400'
//                                                 }`}
//                                         >
//                                             {product.stock}
//                                         </span>
//                                     </td>
//                                 )}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };
// export default ProductTable;

const ProductTable = ({ products, title, showStock = false }) => {

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Product</th>

              {showStock && (
                <th className="px-4 py-3 text-right font-medium">Stock</th>
              )}

            </tr>
          </thead>

          <tbody>

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >

                <td className="px-4 py-4 font-medium text-gray-800 dark:text-gray-200">
                  {product.name}
                </td>

                {showStock && (
                  <td className="px-4 py-4 text-right">

                    <span
                      className={`font-semibold ${
                        product.stock < 20
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {product.stock}
                    </span>

                  </td>
                )}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ProductTable;