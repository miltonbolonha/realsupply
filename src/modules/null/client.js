import ApolloClient, { gql } from "apollo-boost"
import ApolloBoost from "apollo-boost"

// import { gql, useMutation } from "@apollo/client"

export const client = new ApolloClient({
  uri: `http://localhost:8000/graphql`,
})

export const clientBoost = new ApolloBoost({
  uri: `http://localhost:8000/graphql`,
})

export const getUsers = gql`
  query {
    users {
      id
      name
    }
  }
`

clientBoost
  .query({
    query: getUsers,
  })
  .then(response => {
    console.log(response.data)
  })
