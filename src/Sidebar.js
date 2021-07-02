import React from "react";
import TryBoards from "./Tryboards";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {BrowserRouter as Router,Switch,Link,Route } from "react-router-dom";

import "react-pro-sidebar/dist/css/styles.css";
import { FaUserAlt, FaBuromobelexperte, FaTag, FaBolt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="container">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>
            <FaBuromobelexperte />
            Today
          </MenuItem>
          <SubMenu title="Projects">
            <MenuItem>
              <Link to="/main">
                {" "}
                <FaUserAlt /> Welcome
              </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/try"><FaUserAlt /> Try Boards</Link>
                </MenuItem>
            <MenuItem>
              <FaUserAlt color="skyblue" /> Trail A{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu title="Labels">
            <MenuItem>
              <FaTag color="skyblue" />
              asd{" "}
            </MenuItem>
            <MenuItem>
              <FaTag />
              Label_public?{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu title="Shared">
            <MenuItem>
              <FaTag />
              Postman{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu title="Filters">
            <MenuItem>
              <FaBolt />
              Assigned to me{" "}
            </MenuItem>
            <MenuItem>
              <FaBolt />
              Priority{" "}
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      ;
    </div>
  );
};
export default Sidebar;
