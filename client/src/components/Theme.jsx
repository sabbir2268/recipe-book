import {motion} from "framer-motion"
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const Theme = () =>{
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return(
<motion.button
  whileTap={{ scale: 0.9 }}
  onClick={toggleTheme}
  className="fixed top-6 right-6 z-50 p-2 rounded-full bg-[var(--primary)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--primary)] transition-colors"
>
  {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
</motion.button>
  )
}