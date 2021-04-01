const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        stats: [PlayerStats]
    }

  type PlayerStats {
    statsId: ID
    makes: Int
    misses: Int
    points: String
    shotType: String
    location: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  input StatInput {
    statsId: ID
    makes: Int
    misses: Int
    points: String
    shotType: String
    location: Int
  }

  type Query {
    me: User
    stats: [PlayerStats] 
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addStats(makes: Int!, misses: Int!, points: Int!, shotType: String!, location: Int): User
    removeRecord(statId: ID!): User
  }
`;

module.exports = typeDefs;
