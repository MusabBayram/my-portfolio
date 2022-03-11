import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Header = () => {
  const { theme, setTheme } = useTheme("dark");
  console.log(theme);
  return (
    <header className="flex items-center justify-between px-6 py-4 h-16  max-w-5xl mx-auto mt-12 bg-transparent">
      <span></span>
      <span></span>
      <motion.img
        src={theme !== null && theme === "light" ? "/images/on.svg" : "/images/off.svg"}
        alt="ball-1"
        className="md:scale-100  px-6 py-2 scale-75"
        whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </header>
  );
};

export default Header;
