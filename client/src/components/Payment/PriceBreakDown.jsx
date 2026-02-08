const PriceBreakDown = () => {
    return(
        <div className="space-y-4 flex-col justify-center">
            <h3>Price BreakDown</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <p>Subtotal</p>
                    <p>5000</p>
                </div>
                <div className="flex items-center gap-4">
                    <p>Delivery Charges</p>
                    <p>0</p>
                </div>
                <div className="flex items-center gap-4">
                    <p>Tax</p>
                    <p>30</p>
                </div>
                <div className="flex items-center gap-4">
                    <p>Discount</p>
                    <p>0</p>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4">
                    <p>Total</p>
                    <p>5000</p>
                </div>
            </div>
        </div>
    );
};
export default PriceBreakDown;