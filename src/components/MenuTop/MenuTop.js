import React from "react";
import "./MenuTop.scss";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";

import { Link } from "react-router-dom";
// ant design
import { Menu } from "antd";

export default function MenuTop() {
  const items = [
    { label: <Link to="/">Home</Link>, key: 1 },
    { label: <Link to="/new-movies">Ultimos</Link>, key: 2 },
    { label: <Link to="/popular">Populares</Link>, key: 3 },
    { label: <Link to="/search">Search</Link>, key: 4 },
  ];
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo></Logo>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
        items={items}
      >
        {/* <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/new-movies">Ultimos</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/popular">Populares</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/search">Search</Link>
        </Menu.Item> */}
      </Menu>
    </div>
  );
}
