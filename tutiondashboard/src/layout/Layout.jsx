import React, { useState } from "react";
import { Navbar } from "../utils/LazyLoadComponent";
import { Outlet } from "react-router-dom";
import CustomSidebar from "../components/Sidebar/SideNavbar";
const Layout = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* <div className="main_container">
        <CustomSidebar visible={visible} onHide={() => setVisible(false)} />
        <Outlet />
      </div> */}
      <div className="navbar">
        <Navbar visible={visible} onShow={() => setVisible(true)} />
      </div>
      <div className="sidebar_components">
        <CustomSidebar visible={visible} onHide={() => setVisible(false)} />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
