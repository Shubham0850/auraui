import React from 'react';
import { motion, useCycle } from 'framer-motion';

interface IosToggleProps {
  initialState?: "off" | "on";
  onToggle?: (state: "off" | "on") => void;
}

const IosToggle: React.FC<IosToggleProps> = ({ initialState = "off", onToggle }) => {
  const [current, cycle] = useCycle(initialState, initialState === "off" ? "on" : "off");

  const handleToggle = () => {
    cycle();
    if (onToggle) {
      onToggle(current === "off" ? "on" : "off");
    }
  };

  return (
    <div>
      <motion.div
        style={{
          width: 51,
          height: 31,
          borderRadius: 16,
          backgroundColor: "rgba(120,120,128,.16)",
          position: "relative",
          cursor: "pointer",
        }}
        animate={current}
        initial={false}
        onTapStart={handleToggle}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 16,
            backgroundColor: "#34C759",
          }}
          variants={{ off: { scale: 0 }, on: { scale: 1 } }}
          transition={{ ease: "easeInOut" }}
        />
        <motion.div
          style={{
            width: 27,
            height: 27,
            borderRadius: 16,
            backgroundColor: "white",
            boxShadow:
              "0 0 0 0.5px rgba(0,0,0,.04), 0 3px 8px 0 rgba(0,0,0,.15), 0 3px 1px 0 rgba(0,0,0,.06)",
            position: "absolute",
            top: 2,
            left: 2,
          }}
          variants={{ off: { x: 0 }, on: { x: 20 } }}
          transition={{ ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default IosToggle;
