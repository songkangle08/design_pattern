import React, { useState, useEffect } from "react";

export const usebreadcrumbItem = (params) => {
  const breadcrumbItem = params.map((item) => {
    return {
      href: "javascript:;",
      title: item,
    };
  });

  return breadcrumbItem;
};
