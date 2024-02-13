import React from "react";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import "@atlaskit/css-reset";

import { App } from "./Pages/App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<App />, document.getElementById("root"));

/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-explicit-any */
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./Pages/App", () => {
    const { App: NewApp } = require("./Pages/App");

    render(<NewApp />, document.getElementById("root"));
  });
}
