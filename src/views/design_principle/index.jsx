import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const DesignPrinciple = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
};

export default DesignPrinciple;
