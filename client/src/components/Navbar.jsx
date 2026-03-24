import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChefHat, Menu, Sun, Moon, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading"
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";


const Navbar = () => {
  const {user, loading, logout} = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  const links = [
    { path: "/", title: "Home", authRequired: false },
    { path: "/allRecipes", title: "All Recipes", authRequired: false },
    { path: "/addRecipes", title: "Add Recipes", authRequired: true },
    { path: "/myRecipes", title: "My Recipes", authRequired: true },
  ];

  const btnBase = "px-3 py-1 rounded-md text-sm transition-colors hover:bg-[var(--primary)] hover:text-[var(--accent)]";

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log("Logged out successfully");
      navigate("/auth/login"); // redirect after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)]/70 border-b border-[var(--primary)]"
    >
      <div className="py-2 flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* LEFT */}
        <div className="flex gap-2 items-center">
          {/* Mobile menu */}
          <div className="dropdown dropdown-start md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="p-2 rounded-full bg-[var(--primary)] text-white"
            >
              <Menu size={22} />
            </div>

            <ul className="dropdown-content menu bg-[var(--accent)] rounded-box w-40 shadow-md mt-2 gap-1 p-2 text-[var(--foreground)]">
              {links
                .filter(link => !link.authRequired || user)
                .map(link => (
                  <NavLink
                    key={link.title}
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-2 py-1 rounded-md ${
                        isActive
                          ? "bg-[var(--primary)] text-[var(--accent)]"
                          : "hover:bg-[var(--primary)]/90 hover:text-[var(--accent)]"
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="hidden md:flex bg-[var(--primary)] p-2 rounded-3xl"
            >
              <ChefHat className="text-[var(--accent)]" size={24} />
            </motion.div>

            <h1 className="text-lg font-bold text-[var(--foreground)]">
              Recipe Book
            </h1>
          </NavLink>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex gap-2">
          {links
            .filter(link => !link.authRequired || user) // only show if no auth needed OR user is logged in
            .map(link => (
              <NavLink
                key={link.title}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md transition-colors text-[var(--foreground)] ${
                    isActive
                      ? "bg-[var(--primary)] text-[var(--accent)]"
                      : "hover:bg-[var(--primary)] hover:text-[var(--accent)]"
                  }`
                }
              >
                {link.title}
              </NavLink>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex gap-2 items-center">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="btn-circle p-2 bg-[var(--primary)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--primary)] transition-colors"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>

          {/* Auth */}
          {!user ? (
            <>
              {/* Desktop Auth */}
              <div className="gap-2 hidden md:flex">
                <Link
                  to={"/auth/login"}
                  className={`${btnBase} border border-[var(--foreground)]`}
                >
                  Login
                </Link>

                <Link to={"/auth/register"} className={`${btnBase} bg-[var(--primary)] text-black`}>
                  Register
                </Link>
              </div>

              {/* Mobile Auth */}
              <div className="dropdown dropdown-end md:hidden">
                <div
                  tabIndex={0}
                  role="button"
                  className="bg-[var(--primary)] p-2 rounded-3xl flex items-center"
                >
                  <UserPlus size={20} />
                </div>

                <ul className="dropdown-content menu bg-[var(--accent)] rounded-box w-32 p-2 shadow gap-2">
                  <Link
                    to={"/auth/login"}
                    className={`${btnBase} border border-[var(--foreground)]`}>
                    Login
                  </Link>

                  <Link to={"/auth/register"} className={`${btnBase} bg-[var(--primary)] text-black`}>
                    Register
                  </Link>
                </ul>
              </div>
            </>
          ) : (
            /* Avatar Dropdown */
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar cursor-pointer">
                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                    <img
                      src={user.photoURL || "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"}
                      alt={user.displayName || "User Avatar"}
                      className="w-full h-full object-cover"
                    />
                </div>
              </div>

              <ul className="dropdown-content menu bg-[var(--accent)] rounded-box z-50 mt-3 w-40 p-2 shadow gap-3">
                <li>
                  <Link
                    to={"/profile"}
                    className={`${btnBase} bg-[var(--primary)] text-black w-full`}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className={`${btnBase} bg-[var(--primary)] text-black w-full`}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
