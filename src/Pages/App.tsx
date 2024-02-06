import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Wrapper } from "./Wrapper";
import { PageLayout } from "./PageLayout/PageLayout";
// const a = "hello";

function NotFound() {
  return <div>Not found</div>;
}

const Home = () => <h3>This is wha it is</h3>;

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route element={<PageLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
