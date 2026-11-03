import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ isVisible, children }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }} // Initial state (invisible, slightly above)
                    animate={{ opacity: 1, y: 0 }}    // Final state (fully visible, at normal position)
                    exit={{ opacity: 0, y: -10 }}     // State when the popup is removed (invisible, slightly above)
                    transition={{ duration: 0.2 }}    // Smooth transition duration
                    className="w-[14rem] absolute top-full right-0 mt-2 bg-container shadow-lg border border-stroke rounded-lg p-4 z-10"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Popup;
