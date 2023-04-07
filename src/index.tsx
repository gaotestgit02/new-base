import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/App";

const root = createRoot(document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

root.render(<App />);

/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-explicit-any */
// declare let module: { hot: any };

// if (module.hot) {
//   module.hot.accept("./components/App", () => {
//     const NewApp = require("./components/App").default;

//     root.render(<NewApp />);
//   });
// }
