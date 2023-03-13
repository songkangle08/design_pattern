import React, { useState } from "react";
import { Tabs } from "antd";

import FactorySimple from "./FactorySimple.jsx";
import FactoryMethod from "./FactoryMethod.jsx";

const CreateMode = () => {
  const [items] = useState([
    {
      label: `简单工厂模式`,
      key: 1,
      children: <FactorySimple />,
    },
    {
      label: `工厂方法模式`,
      key: 2,
      children: <FactoryMethod />,
    },
  ]);

  return (
    <div>
      <h2>创建型</h2>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="middle"
        style={{ marginBottom: 32 }}
        items={items}
      />
    </div>
  );
};

export default CreateMode;
