import { useEffect, useState } from "react";
import CustomerTable from "../../../components/Admin/Analytic_Dashborad/Tables/cutomers";
import useFetch from "../../../shared/hooks/useFetch";
import Loader from "../../../components/Loader/Loader";
import ErrorState from "../../../components/Loader/NotFound";
import OrdersTable from "../../../components/Admin/Analytic_Dashborad/Tables/orders";
import OrderData from "../../../constant/OrderData";
import ProductTable from "../../../components/Admin/Analytic_Dashborad/Tables/products";
import pizza from "../../../constant/mockData";

const Main = () => {
    const [users, setUsers] = useState([]);
    const { data, loading, error } = useFetch(`/users/users`)

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
            <CustomerTable customers={users} title={"USERS"} />
            <OrdersTable orders={OrderData} title={"ORDERS"}/>
            <ProductTable products={pizza} title={"PIZZAS"}/>
        </>
    )
}
export default Main;