import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloLink } from "apollo-link";
import { HashRouter as Router, Route } from "react-router-dom";

const { createUploadLink } = require("apollo-upload-client");

const cache = new InMemoryCache();

const http = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([http])
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
