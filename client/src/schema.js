export const typeDefs = `

type Channel {
  id: ID!         # ! denotes a required field
  name: String
}

# This type specifies the entry points into our API. In this case,
# there is only one - "channels" - which returns a list of channels.
type Query {
  channels: [Channel]     # a list of Channel
}

# The mutation root type, used to define all mutations
type Mutation {
  # A mutation to add a new channel to the list of channels
  # Accepts a String argument and returns a Channel object
  addChannel(name: String!): Channel
}

`;
