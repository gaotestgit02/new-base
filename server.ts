import { Response, Request } from "express";

const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config");
const path = require("path");

const app = express();
const compiler = webpack(config);

const middleWare = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  // historyApiFallback: true,
});
app.use(middleWare);

app.use(
  require("webpack-hot-middleware")(compiler, {
    noInfo: true,
    // publicPath: config.output.publicPath,
  })
);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.listen(3002, () => {
  console.log("Example app listening on port 3002!\n");
});
