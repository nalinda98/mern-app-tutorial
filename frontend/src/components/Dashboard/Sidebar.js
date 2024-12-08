import React, { useState, useEffect, useRef } from "react";
import { Layout, Menu, theme } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import AdminHome from "./AdminHome";
import Members from "./Members";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DateEnable } from "./DateEnable";
import { useSelector } from "react-redux";

const { Header, Content, Footer, Sider } = Layout;


const Sidebar = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1300px)" });
  const inputRef = useRef(null);
  const navigate = useNavigate(); // Hook to navigate programmatically
  const location = useLocation(); // Hook to get current URL
  const user = useSelector((state) => state.auth);

  const items = [
    {
      key: "0",
      icon: <i className="fa-solid fa-home"></i>,
      label: "Home",
      path: "/dashboard/home",  
    },
    {
      key: "1",
      icon: <FaRegCalendarAlt />,
      label: "Date Enable",
      path: "/dashboard/date-enable",  
    },
    user?.role === "super-admin" && {
      key: "81",
      icon: <FaUserCircle />,
      label: "Users",
      path: "/dashboard/users",  
    },
  ];
  
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuSelect = (value) => {
    const selectedItem = items.find((item) => item.key === value.key);
    if (selectedItem) {
      navigate(selectedItem.path); // Change the URL based on the selected item
    }
  };

  // Determine the active key based on the current location
  const getActiveKey = () => {
    const currentPath = location.pathname;
    const activeItem = items.find((item) => item.path === currentPath);
    return activeItem ? activeItem.key : "0"; // Default to "0" if no match
  };

  return (
    <Layout>
      
      <Sider
        collapsible
        collapsed={!isBigScreen}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          selectedKeys={[getActiveKey()]} // Set active menu based on current URL
          mode="inline"
          items={items}
          onSelect={handleMenuSelect} // Handle menu item selection
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "0 1px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {getActiveKey() === "0" ? (
              <AdminHome />
            ) : getActiveKey() === "81" ? (
              <Members />
            ) : getActiveKey() === "1" ? (
              <DateEnable />
            ) : (
              <div></div>
            )}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
