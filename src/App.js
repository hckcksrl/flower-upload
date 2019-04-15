import React, { Component } from "react";
import "./App.css";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";

const load = gql`
  query GetFlowers($typeid: Int!) {
    GetFlowers(typeid: $typeid) {
      result
      error
      flowers {
        id
        name
        image
        content
        type {
          name
        }
        images {
          id
          image
          content
        }
      }
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Query query={load} variables={{ typeid: 3 }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return data.GetFlowers.flowers.map((flowers, key) => {
            if (flowers.id === 10) {
              return <img src={`${flowers.image}`} key={key} />;
            }
          });
        }}
      </Query>
    );
  }
}

// export const UPLOAD_FILE = gql`
//   {
//     GetFlowerType {
//       result
//       error
//       type {
//         name
//       }
//     }
//   }
// `;

// class App extends Component {
//   render() {
//     return (
//       <Query query={UPLOAD_FILE}>
//         {({ loading, error, data }) => {
//           if (loading) return "Loading...";
//           if (error) return `Error! ${error.message}`;
//           console.log(data);
//           return <h1>dd</h1>;
//         }}
//       </Query>
//     );
//   }
// }

export default App;
