import { MapPinCheck } from "lucide-react"
import { useSelector } from "react-redux";

const AddressInfo = ({ className = "", titlestyle = "", subdivdivstyle = "", textcolor = "", structure = "", datacolor=""}) => {
    const { address, city, state, pincode } = useSelector((state) => state.profile);
    // if (!user) return <p>Loading...</p>;
    return (
        <>
            <div className={`${className}`}>
                <div className={`${subdivdivstyle}`}>
                    <h1 className={`${titlestyle}`}>Address Info</h1>
                    <div className="px-1 py-1 space-y-8">
                        {/* address */}
                        <div className={`${structure}`}>
                            <div className="flex items-center gap-2">
                                <MapPinCheck className={`w-4 h-4 ${textcolor}`} />
                                <label className={`text-xs font-bold uppercase tracking widest ${textcolor}`}>Address</label>
                            </div>
                            <p className={`font-medium ${datacolor}`}>{address}</p>
                        </div>
                        {/* city */}
                        <div className={`${structure}`}>
                            <div className="flex items-center gap-2">
                                <MapPinCheck className={`w-4 h-4 ${textcolor}`} />
                                <label className={`text-xs font-bold uppercase tracking widest ${textcolor}`}>City</label>
                            </div>
                            <p className={`font-medium ${datacolor}`}>{city}</p>

                        </div>
                        {/* state */}
                        <div className={`${structure}`}>
                            <div className="flex items-center gap-2">
                                <MapPinCheck className={`w-4 h-4 ${textcolor}`} />
                                <label className={`text-xs font-bold uppercase tracking widest ${textcolor}`}>State</label>
                            </div>
                            <p className={`font-semibold text-sm ${datacolor}`}>{state}</p>
                        </div>
                        {/* pincode */}
                        <div className={`${structure}`}>
                            <div className="flex items-center gap-2">
                                <MapPinCheck className={`w-4 h-4 ${textcolor}`} />
                                <label className={`text-xs font-bold uppercase tracking widest ${textcolor}`}>Pincode</label>
                            </div>
                            <p className={`font-medium ${datacolor}`}>
                                {pincode}
                            </p>
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
};
export default AddressInfo;