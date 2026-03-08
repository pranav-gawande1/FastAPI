const OrderModel = require("../models/Order");
const PizzaModel = require("../models/Pizza");
const UserModel = require("../models/User");


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

const getDashboardSummary = async (req, res) => {
    try {
        const noofTotalOrders = await OrderModel.countDocuments({});
        const noofTotalUsers = await UserModel.countDocuments({});
        const totalRevenue = await OrderModel.aggregate([
            { $match: { order_status: "completed" } },
            {
                $group: {
                    _id: null,
                    totalrevenue: { $sum: "$total_price" }
                }
            }
        ])
        const totalrevenueofpizzaparadise = totalRevenue[0]?.totalrevenue || 0;
        const totalPizzasold = await OrderModel.aggregate([
            { $match: { order_status: "completed" } },
            { $unwind: "$items" },
            {
                $group: {
                    _id: null,
                    total_pizza: { $sum: "$items.quantity" }
                }
            }

        ]);
        const nooftotalpizzasold = totalPizzasold[0]?.total_pizza || 0;
        if (!nooftotalpizzasold || !totalrevenueofpizzaparadise ||
            !noofTotalUsers || !noofTotalOrders) {
            return res.status(404).json({ message: "Something went wrong", success: false });
        }
        return res.status(200).json({
            success: true,
            message: "Dashboard analysis fetched successfully.",
            totalorders: noofTotalOrders,
            totalusers: noofTotalUsers,
            total_revenue: totalrevenueofpizzaparadise,
            total_pizzasold: nooftotalpizzasold
        })
    } catch {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
};

module.exports = { getOrdersSummry, getDashboardSummary }