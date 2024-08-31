import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiHomeOutline } from "react-icons/ti";
import { SlNotebook } from "react-icons/sl";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuContact2 } from "react-icons/lu";
import { CgDarkMode } from "react-icons/cg";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleNavbar = () => setShow(!show);

  const { mode, setMode, isAuthenticated, user, setIsAuthenticated } = useContext(Context);
  const isDashboard = useLocation();
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("https://echoblog-oabl.onrender.com/api/v1/user/logout", {
        withCredentials: true,
      });
      setIsAuthenticated(false);
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideNavbar"
          : mode === "light"
          ? "header light-navbar"
          : "header dark-navbar"
      }
    >
      <nav>
        <div className="logo">
          <Link to="/">Echo <span>Blog</span></Link>
        </div>
        <div className={show ? "links show" : "links"}>
          <ul>
            <li>
              <Link to="/" onClick={handleNavbar}>
                <TiHomeOutline /> HOME
              </Link>
            </li>
            <li>
              <Link to="/blogs" onClick={handleNavbar}>
                <SlNotebook /> BLOGS
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={handleNavbar}>
                <HiMiniUserGroup /> ALL AUTHORS
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavbar}>
                <LuContact2 /> ABOUT
              </Link>
            </li>
          </ul>
          <div className="btns">
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={mode === "light" ? "mode-btn light-mode" : "mode-btn dark-mode"}
            >
              <CgDarkMode className="dark-mode-icon" />
            </button>
            {isAuthenticated && user.role === "Author" && (
              <Link to="/dashboard" onClick={handleNavbar} className="dashboard-btn">
                DASHBOARD
              </Link>
            )}
            {!isAuthenticated ? (
              <Link to="/login" onClick={handleNavbar} className="login-btn">
                LOGIN
              </Link>
            ) : (
              <button className="logout-btn" onClick={handleLogout}>
                LOGOUT
              </button>
            )}
          </div>
        </div>
        <RxHamburgerMenu className="hamburger" onClick={handleNavbar} />
      </nav>
    </section>
  );
};

export default Navbar;
