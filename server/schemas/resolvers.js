const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const {getMedianIncome} = require('../config/Api/index');

// used the code from previous modules to get this code.
const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
    },
    medianIncome: async (parent,{stateName})=>{
      try {
       const stateIncome = await getMedianIncome('2022');
       //const stateNameArray = stateIncome.map(state=>{
       // return {
       //   stateName:state[0],
       //   stateIncome: state[1]
       // }
       //});
       const filterState =stateIncome.filter(dataitem=>{
        return (stateName.toLowerCase() === dataitem[0].toLowerCase());
       })
       if (filterState.length === 0) {
        return null;
        
       } else {
        return {
          stateName : filterState[0][0],
          stateIncome: filterState[0][1]
        }
        
       }

        
      } catch (error) {
        throw new Error(error)
        
      }
    }
  },
  Mutation: {
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },
    signin: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    
  },
};

module.exports = resolvers;