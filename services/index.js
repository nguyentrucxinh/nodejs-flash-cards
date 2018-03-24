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
const { createCard } = require('./cards/createCard')
const { updateCard } = require('./cards/updateCard')
const { deleteCard } = require('./cards/deleteCard')
const { findCards } = require('./cards/findCards')
const { findCardById } = require('./cards/findCardById')
const { findCardRandom } = require('./cards/findCardRandom')

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
    createCard,
    updateCard,
    deleteCard,
    findCards,
    findCardById,
    findCardRandom
  }
}

module.exports = services
