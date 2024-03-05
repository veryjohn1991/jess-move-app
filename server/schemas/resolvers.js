const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// used the code from previous modules to get this code.
const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    user: async (parent, { userName }) => {
      return User.findOne({ userName })
    },
    
  },

  Mutation: {
    addUser: async (parent, { userName, password }) => {
      const user = await User.create({ userName, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { userName, password }) => {
      const user = await User.findOne({ userName });

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