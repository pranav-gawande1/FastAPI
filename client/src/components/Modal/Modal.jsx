import { useEffect } from "react";

const Modal = ({ title, onClose, isOpen, children }) => {
    useEffect(() => {
        if (!isOpen) return;

        const escHandler = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", escHandler);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", escHandler);
            document.body.style.overflow = "auto";
        };

    }, [isOpen, onclose]);

    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white w-full max-w-md shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center px-5 py-4 bg-[#ff4d4d]">
                        <h2 className="font-semibold text-white">{title}</h2>
                        <button onClick={onClose}>×</button>
                    </div>
                    <div className="p-5 ">{children}</div>
                </div>
            </div>
        </>
    );
};

export default Modal;