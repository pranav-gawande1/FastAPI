import { useEffect, useState } from "react";
import CustomerTable from "../../../components/Admin/Analytic_Dashborad/Tables/cutomers";
import useFetch from "../../../shared/hooks/useFetch";
import Loader from "../../../components/Loader/Loader";
import ErrorState from "../../../components/Loader/NotFound";
import OrdersTable from "../../../components/Admin/Analytic_Dashborad/Tables/orders";
import OrderData from "../../../constant/OrderData";
import ProductTable from "../../../components/Admin/Analytic_Dashborad/Tables/products";
import pizza from "../../../constant/mockData";
import Navbar from "../../../components/Navbar/Navbar";
import SideBarToggle from "../../../components/Admin/SideBar/sideBarToggle";
import SideBar from "../../../components/Admin/SideBar/SideBar";
import { useSelector } from "react-redux";

const Main = () => {
    const [users, setUsers] = useState([]);
    const { data, loading, error } = useFetch(`/users/users`);
    const { isOpen } = useSelector((state) => state.sideBarStatus);

    useEffect(() => {
        if (data?.users) {
            setUsers(data.users);
        } else if (loading) {
            return (
                <Loader />
            )
        } else if (error) {
            return (
                <ErrorState />
            )
        }
    }, [data]);
    return (
        <>
            <Navbar />
            <div className="flex mt-16">
                <SideBarToggle />
                {isOpen && <SideBar />}
                <div className={`flex-1  ${isOpen ? "ml-50" : "ml-0"} w-full transition-all duration-300`}>
                    <CustomerTable customers={users} title={"USERS"} />
                    <OrdersTable orders={OrderData} title={"ORDERS"} />
                    <ProductTable products={pizza} title={"PIZZAS"} />
                </div>
            </div>
        </>
    )
}
export default Main;