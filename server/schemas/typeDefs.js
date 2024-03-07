const typeDefs = `
  type User {
    _id: ID
    username: String
    password: String
  }

  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!,  password: String!): Auth
    signin(username: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
