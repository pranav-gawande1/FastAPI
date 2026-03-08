import { useSelector } from "react-redux";
import CategoryChart from "../../../components/Admin/Analytic_Dashborad/charts/category";
import CustomerChart from "../../../components/Admin/Analytic_Dashborad/charts/customers";
import GrowthChart from "../../../components/Admin/Analytic_Dashborad/charts/growth";
import OrdersChart from "../../../components/Admin/Analytic_Dashborad/charts/orders";
import RevenueChart from "../../../components/Admin/Analytic_Dashborad/charts/revenue";
import SideBar from "../../../components/Admin/SideBar/SideBar";
import SideBarToggle from "../../../components/Admin/SideBar/sideBarToggle";
import Navbar from "../../../components/Navbar/Navbar";
import DashBoardSummary from "../../../components/Admin/Analytic_Dashborad/DashBoardSummary";

const AnalyticsHome = () => {
    const { isOpen } = useSelector((state) => state.sideBarStatus);
    return (
        <>
            <Navbar />
            <div className="flex mt-16">
                <SideBarToggle />
                {isOpen && <SideBar />}
                <div className={`flex-1  ${isOpen ? "ml-50" : "ml-0"} w-full transition-all duration-300 p-`}>
                    <div className="p-8 max-w-full mx-auto">
                        <DashBoardSummary />
                        <CategoryChart />
                        <CustomerChart />
                        <GrowthChart />
                        <OrdersChart />
                        <RevenueChart />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AnalyticsHome;