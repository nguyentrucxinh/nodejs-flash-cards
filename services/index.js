// User
const { authenticate } = require('./users/authenticate')
const { confirmResetPassword } = require('./users/confirmResetPassword')
const { confirmSignUp } = require('./users/confirmSignUp')
const { findUserCurrent } = require('./users/findUserCurrent')
const { findUsers } = require('./users/findUsers')
const { forgotPassword } = require('./users/forgotPassword')
const { signUp } = require('./users/signUp')
const { testAxios } = require('./users/testAxios')
const { findUserByEmail } = require('./users/findUserByEmail')

// Card
const { create } = require('./cards/create')
const { update } = require('./cards/update')
const { deleteCard } = require('./cards/deleteCard')
const { findAll } = require('./cards/findAll')
const { findById } = require('./cards/findById')
const { findRandom } = require('./cards/findRandom')

const services = {
  users: {
    authenticate,
    confirmResetPassword,
    confirmSignUp,
    findUserCurrent,
    findUsers,
    forgotPassword,
    signUp,
    testAxios,
    findUserByEmail
  },
  cards: {
    create,
    update,
    deleteCard,
    findAll,
    findById,
    findRandom
  }
}

module.exports = services
