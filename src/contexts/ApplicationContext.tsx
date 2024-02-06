import React from "react";

export interface DialogParams {
  title: string;
  size?: "xl" | "lg" | "md" | "sm";
}
export interface IApplicationContext {
  showDialog: <T>(
    component: JSX.Element,
    params: DialogParams
  ) => Promise<T | boolean>;
}

export const ApplicationContext = React.createContext<IApplicationContext>({
  showDialog: () => Promise.resolve(true),
});
