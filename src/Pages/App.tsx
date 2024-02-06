import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Wrapper } from "./Wrapper";
// const a = "hello";

function NotFound() {
  return <div>Not found</div>;
}

export const App = () => {
  return <Wrapper />;
};
