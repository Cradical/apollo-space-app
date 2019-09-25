const { gql } = require('apollo-server')

const typeDefs = gql``

module.exports = typeDefs

type Query {
  launches: [Launch]!
  launch(id: ID!): Launch
  me: User
}

type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
}

type Mission {
  name: String
  missionPatch(size: PatchSize): String
}

type Rocket {
  id: ID!
  name: String
  type: String
}

type User {
  id: ID!
  email: String!
  tripe: [Launch]!
}

enum PatchSize {
  SMALL
  LARGE
}

// Mutations

type Mutation {
  bookTrips(LaunchIds: [ID]!): TripUpdateResponse!

  cancelTrip(launchId: ID!): TripUpdateResponse!

  login(email: String): String
}

type TripUpdateResponse {
  success: Boolean!
  message: String
  launches: [Launch]
}