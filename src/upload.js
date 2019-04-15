import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";

export const UPLOAD_FILE = gql`
  {
    GetFlowerType {
      result
      error
      type {
        name
      }
    }
  }
`;

class uploadOneFile extends Component {
  render() {
    return (
      <Query query={UPLOAD_FILE}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          console.log(data);
          return <h1>dd</h1>;
        }}
      </Query>
    );
  }
}

export default uploadOneFile;
