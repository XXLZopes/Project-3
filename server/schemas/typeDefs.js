const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
      _id: ID
      username: String
      email: String
      password: String
      playerStats: [PlayerStats]
  }

  type PlayerStats {
    statsId: ID
    makes: Int
    misses: Int
    points: String
    shotType: String
    x: Int
    y: Int
    courtLocation: Int
  }

  type Preferences {
    preferencesId: ID
    dominantHand: String
    position: String
    team: String
    favTeam: String
    courtColors: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input StatInput {
    statsId: ID
    makes: Int
    misses: Int
    points: Int
    shotType: String
    x: Int
    y: Int
    courtLocation: Int
  }

  type Query {
    me: User
    stats: [PlayerStats]
    preferences: [Preferences] 
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addStats(input: StatInput!): User
    removeRecord(statsId: ID!): User
  }
`;

module.exports = typeDefs;
