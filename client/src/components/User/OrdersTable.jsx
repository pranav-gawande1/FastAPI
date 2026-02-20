import OrderCard from "./OrderCard";

const OrdersTable = ({ orders }) => {

    return (
        <div className="w-full rounded-lg overflow-hidden">
            <div className="bg-gray-200 mb-2 p-2 rounded-xl">
                <h1 className="text-3xl font-bold">Your Orders</h1>
                <p className="text-muted-foreground mt-2">Track and manage your pizza orders.</p>
            </div>
            <div className="space-y-3">
                {orders.map((order) => (<OrderCard key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
};

export default OrdersTable;