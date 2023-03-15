import React, { useEffect, useMemo } from "react";
import { Breadcrumb } from "antd";
import { useOutletContext } from "react-router-dom";

import { usebreadcrumbItem } from "../../utils/customHooks";

const PrincipleSingle = () => {
  const breadcrumbItem = usebreadcrumbItem(["设计模式", "单一职责原则"]);

  return (
    <>
      <Breadcrumb items={breadcrumbItem} />
      <div>单一设计原则</div>
    </>
  );
};

export default PrincipleSingle;
