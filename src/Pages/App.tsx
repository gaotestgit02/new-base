import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Wrapper } from "./Wrapper";
import { PageLayout } from "./PageLayout/PageLayout";
import { Notes } from "./Notes/Notes";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function NotFound() {
  return <div>Not found</div>;
}

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route element={<PageLayout />}>
              <Route index element={<Notes />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};
