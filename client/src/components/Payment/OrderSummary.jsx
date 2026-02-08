import items from "../../constant/items.js";

const OrderSummary = () => {
    console.log("OrderData", items);
    if(!items) return(
        <p>....loading</p>
    )
    return(
        <div>
            <h3>Order Summary</h3>
            <div className="space-y-4">
                {items?.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                        <div className="flex items-center gap-4">
                            <p>{item.name}</p>
                            <p>Qty: {item.quantity}</p>
                        </div>
                        <p>
                            ${item.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderSummary;