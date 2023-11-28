import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
function Timer_Cycle() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {" "}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: 200 }} // Start from the left
          animate={{ opacity: 1, x: 50, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, x: 300 }} // Exit to the right
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }} // Slow down upon hover
          className="App"
          style={{ fontSize: 100 }}
          key={seconds}>
          {seconds}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Timer_Cycle;
