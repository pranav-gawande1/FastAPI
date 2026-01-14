import { MapPinCheck  } from "lucide-react"
import { useSelector } from "react-redux";

const AddressInfo = () => {
    const { address, city, state, pincode } = useSelector((state) => state.profile);
    // if (!user) return <p>Loading...</p>;
    return (
        <>
            <div className="bg-white p-6 shadow-md w-full max-w-md mx-auto">
                <h1 className="text-center text-xl font-bold mb-6">Address Info</h1>
                <div className="px-1 py-1 space-y-8">
                    {/* address */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <MapPinCheck className="w-4 h-4 text-[#ff4d4d]" />
                            <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">Address</label>
                        </div>
                        <p className="font-medium">{address}</p>
                    </div>
                    {/* city */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <MapPinCheck className="w-4 h-4 text-[#ff4d4d]" />
                            <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">City</label>
                        </div>
                        <p className="font-medium">{city}</p>

                    </div>
                    {/* state */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <MapPinCheck className="w-4 h-4 text-[#ff4d4d]" />
                            <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">State</label>
                        </div>
                        <p className="font-semibold text-sm">{state}</p>
                    </div>
                    {/* pincode */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <MapPinCheck className="w-4 h-4 text-[#ff4d4d]" />
                            <label className="text-xs font-bold uppercase tracking widest text-[#ff4d4d]">Pincode</label>
                        </div>
                        <p className="flex items-center gap-2 ">
                            {pincode}
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};
export default AddressInfo;