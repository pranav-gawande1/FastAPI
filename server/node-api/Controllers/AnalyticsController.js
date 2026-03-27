const OrderModel = require("../models/Order");
const PizzaModel = require("../models/Pizza");
const UserModel = require("../models/User");


const getOrdersSummry = async (req, res) => {
    try {
        const noofPendingOrders = await OrderModel.countDocuments({ order_status: "pending" });
        const noofcompletedOrders = await OrderModel.countDocuments({ order_status: "completed" });
        const noofCancelledOrders = await OrderModel.countDocuments({ order_status: { $in: ["cancelled_by_user", "cancelled_by_admin"] } });
        const noofTotalOrders = await OrderModel.countDocuments({});
        // if (
        //     noofPendingOrders === undefined ||
        //     noofcompletedOrders === undefined ||
        //     noofCancelledOrders === undefined ||
        //     noofTotalOrders === undefined
        // ) {
        //     return res.status(404).json({ message: "Something went wrong", success: false });
        // }
        res.status(200).json({
            success: true,
            message: "Orders summarized successfully.",
            orderData: [
                {
                    status: "pending",
                    value: noofPendingOrders
                },
                {
                    status: "completed",
                    value: noofcompletedOrders
                },
                {
                    status: "cancelled",
                    value: noofCancelledOrders
                },
                {
                    status: "total",
                    value: noofTotalOrders
                }
            ]
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


const getSalesCategoryWise = async (req, res) => {
    try {
        const totalnoofpizzas = await PizzaModel.countDocuments({});
        const pizzawisesale = await OrderModel.aggregate(
            [{ $unwind: "$items" },
            {
                $group: {
                    _id: "$items.pizza",
                    totalSold: { $sum: "$items.quantity" }
                }
            },
            {
                $lookup: {
                    from: "pizzas",
                    localField: "_id",
                    foreignField: "_id",
                    as: "pizza"
                }
            },
            { $unwind: "$pizza" },
            {
                $project: {
                    _id: 0,
                    totalSold: 1,
                    name: "$pizza.name",

                }
            },
            { $sort: { totalSold: -1 } }])

        return res.status(200).json({
            success: true,
            totalPizzas: totalnoofpizzas,
            pizzawiseSale: pizzawisesale
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
}

const getrevenueAnalytics = async (req, res) => {
    try {
        const revenueData = await OrderModel.aggregate([
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                        day: { $dayOfMonth: "$createdAt" },
                    },
                    revenue: { $sum: "$total_price" },
                    orders: { $sum: 1 },
                    customers: { $addToSet: "$user" }
                }
            },
            {
                $project: {
                    _id: 0,
                    date: {
                        $concat: [
                            { $toString: "$_id.day" },
                            "-",
                            {
                                $arrayElemAt: [
                                    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                    { $subtract: ["$_id.month", 1] }
                                ]
                            }
                        ]
                    },
                    revenue: 1,
                    orders: 1,
                    customers: { $size: "$customers" }
                }
            },
            {
                $sort: { date: 1 }
            }
        ]);

        return res.status(200).json({
            success: true,
            data: revenueData
        })

    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
}

const getcustomergrowthanalytics = async (req, res) => {
    try {
        const monthlyCustomers = await UserModel.aggregate([
            {
                $group: {
                    _id: { month: { $month: "$createdAt" } },
                    new: { $sum: 1 }
                }
            },
            {
                $sort: { "_id.month": 1 }
            }
        ]);

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let runningTotal = 0;

        const formattedData = monthlyCustomers.map(item => {
            runningTotal += item.new;

            return{
                month: months[item._id.month - 1],
                total: runningTotal,
                new: item.new
            };
        });

        return res.status(200).json({
            success: true,
            customerData: formattedData
        })

    } catch (err) {
        res.status(500).json({ message: err.message });
        console.error(err);
    }
}

module.exports = { getOrdersSummry, getDashboardSummary, getSalesCategoryWise, getrevenueAnalytics, getcustomergrowthanalytics }