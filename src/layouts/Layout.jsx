import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "antd";
import "antd/dist/reset.css";
import "./layout.less";

const Layout = () => {
  return (
    <div className="app">
      <header className="header">
        <Button>111</Button>
      </header>
      <section className="section">
        <div className="aside">
          <Link to="/about">About</Link>
          <Link to="/create">创造型</Link>
        </div>
        <div className="content">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default Layout;
