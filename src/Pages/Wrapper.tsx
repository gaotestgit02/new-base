import React from "react";
import { Outlet } from "react-router";
import { ApplicationContext } from "contexts/ApplicationContext";
import { useModalManager } from "hooks/useModalManager";

export const Wrapper = () => {
  const { modals, showDialog } = useModalManager();

  return (
    <ApplicationContext.Provider value={{ showDialog }}>
      <Outlet />
      {modals.length !== 0 &&
        modals.map((modal) => (
          <React.Fragment key={modal.id}>{modal.component}</React.Fragment>
        ))}
    </ApplicationContext.Provider>
  );
};
