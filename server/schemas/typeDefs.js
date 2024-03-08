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

  type StateIncomeType {
    stateName: String
    medianIncome: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    stateincome(stateName: String!): StateIncomeType
  }

  type Mutation {
    addUser(username: String!,  password: String!): Auth
    signin(username: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
