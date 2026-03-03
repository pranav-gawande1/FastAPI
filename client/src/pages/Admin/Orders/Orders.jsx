import Navbar from "../../../components/Navbar/Navbar";
import OrderTable from "../../../components/Admin/Orders/OrderTable";
import SideBar from "../../../components/Admin/SideBar/SideBar";
import SideBarToggle from "../../../components/Admin/SideBar/sideBarToggle";
import { useSelector } from "react-redux";

const Orders = () => {

    const { isOpen } = useSelector((state) => state.sideBarStatus);
    return (
        <>
            <Navbar />
            <div className="flex mt-16">
                <SideBarToggle />
                {isOpen && <SideBar />}
                <div className="flex-1">
                    <div className="p-8 max-w-full mx-auto">
                        <OrderTable 
                        // orders={OrderData} 
                        />
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Orders;