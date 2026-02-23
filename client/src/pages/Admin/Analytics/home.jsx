import CategoryChart from "../../../components/Admin/Analytic_Dashborad/charts/category";
import CustomerChart from "../../../components/Admin/Analytic_Dashborad/charts/customers";
import GrowthChart from "../../../components/Admin/Analytic_Dashborad/charts/growth";
import OrdersChart from "../../../components/Admin/Analytic_Dashborad/charts/orders";
import RevenueChart from "../../../components/Admin/Analytic_Dashborad/charts/revenue";

const AnalyticsHome = () => {
    return (
        <>
            <CategoryChart />
            <CustomerChart />
            <GrowthChart />
            <OrdersChart />
            <RevenueChart />
        </>
    )
}
export default AnalyticsHome;