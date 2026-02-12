const PriceBreakDown = () => {
    return(
        <div className="rounded-lg border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
                Price BreakDown
            </h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                    <p className="text-sm text-gray-700">5000</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Delivery Charges</p>
                    <p className="text-sm text-gray-700">0</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Tax</p>
                    <p className="text-sm text-gray-700">30</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Discount</p>
                    <p className="text-sm text-gray-700">0</p>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-sm text-gray-700">5000</p>
                </div>
            </div>
        </div>
    );
};
export default PriceBreakDown;