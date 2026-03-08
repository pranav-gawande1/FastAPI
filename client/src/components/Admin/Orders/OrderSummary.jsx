const OrderSummary = () => {
    return (
        <div className="flex items-center gap-4 justify-between mb-4">
            <div className="p-8 bg-gray-100 rounded-lg">
                <h1 className="text-gray-900 font-semibold">Pending Orders: </h1>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
                <h1 className="text-gray-900 font-semibold">Total Orders: </h1>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
                <h1 className="text-gray-900 font-semibold">Completed ORders: </h1>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
                <h1 className="text-gray-900 font-semibold">Cancelled Orders: </h1>
            </div>
        </div>
    )
}

export default OrderSummary;