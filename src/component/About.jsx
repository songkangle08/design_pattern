import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      About父组件
      <br />
      <br />
      <span>Count：{count}</span>
      <br />
      <br />
      <br />
      <Link to="/about/1?id=23456">子路由 以及 改变路由传参</Link>
      <Outlet context={[count, setCount]}></Outlet>
    </div>
  );
};

export default About;
