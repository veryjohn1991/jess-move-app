const typeDefs = `
  type User {
    _id: ID
    userName: String
    password: String
  }

  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userName: String!): User
  }

  type Mutation {
    addUser(userName: String!,  password: String!): Auth
    login(userName: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
