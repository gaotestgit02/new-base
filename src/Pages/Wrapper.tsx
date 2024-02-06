import React from "react";
import { Outlet } from "react-router";
import { ApplicationContext } from "contexts/ApplicationContext";

export const Wrapper = () => {
  return (
    <ApplicationContext.Provider>
      <div>hello</div>
    </ApplicationContext.Provider>
  );
};
