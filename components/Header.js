import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Header = () => {
  const { theme, setTheme } = useTheme("dark");
  console.log(theme);
  return (
    <header className="flex items-center justify-between md:px-6 py-2 h-16  max-w-5xl mx-auto mt-8 bg-transparent">
      <span></span>
      <span></span>
      <motion.img
        src={theme !== null && theme === "dark" ? "/images/off.svg" : "/images/on.svg"}
        alt="ball-1"
        className="md:scale-100  px-6 py-2 scale-75 "
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </header>
  );
};

export default Header;
