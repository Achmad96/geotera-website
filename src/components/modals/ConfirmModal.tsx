import { motion } from "framer-motion";
import { memo } from "react";

type ConfirmModalType = {
    title: string;
    message: string;
    visible: { isVisible: boolean; dispatch: Function };
    callback: Function;
};

const ConfirmModal = memo(({ title, message, visible, callback }: ConfirmModalType) => {
    const { isVisible, dispatch } = visible;
    const handleConfirm = () => {
        if (callback) callback();
        dispatch({ type: "SET_VISIBILITY", payload: false });
    };

    if (isVisible) {
        return (
            <div className="absolute w-full h-dvh top-0 left-0 z-50 flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute flex flex-col p-10 gap-7 bg-white shadow-2xl w-[40%] max-lg:w-[60%] max-sm:w-[80%] rounded-xl z-50"
                >
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p>{message}</p>
                    </div>
                    <div className="flex justify-center gap-10">
                        <button className="text-white shadow-2xl bg-green-600 rounded-full p-3 px-10 hover:bg-green-700  max-sm:px-5" onClick={handleConfirm}>
                            Yes
                        </button>
                        <button
                            className="bg-slate-50 rounded-full p-3 px-7 shadow-2xl hover:bg-slate-100 max-sm:px-2"
                            onClick={() => {
                                dispatch({ type: "SET_VISIBILITY", payload: false });
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }
});

export default ConfirmModal;