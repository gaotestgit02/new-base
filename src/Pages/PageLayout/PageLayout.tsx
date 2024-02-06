import React from "react";
import { Outlet } from "react-router";

export const PageLayout = () => {
  console.log("we here");
  return (
    <div>
      This is hoome <Outlet />
    </div>
  );
};
