const OrderModel = require("../models/Order");

const getOrdersSummry = async (req, res) => {
    try {
        const noofPendingOrders = await OrderModel.countDocuments({ order_status: "pending" });
        const noofcompletedOrders = await OrderModel.countDocuments({ order_status: "completed" });
        const noofCancelledOrders = await OrderModel.countDocuments({ order_status: { $in: ["cancelled_by_user", "cancelled_by_admin"] } });
        const noofTotalOrders = await OrderModel.countDocuments({});
        if (!noofPendingOrders || !noofcompletedOrders || !noofCancelledOrders || !noofTotalOrders) {
            return res.status(404).json({ message: "Something went wrong", success: false });
        }
        res.status(200).json({
            success: true, message: "Orders summarized successfully.", pendingOrders: noofPendingOrders,
            completedOrders: noofcompletedOrders,
            cancelledOrders: noofCancelledOrders,
            totalOrders: noofTotalOrders
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
}

module.exports = { getOrdersSummry }