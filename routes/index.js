const express = require('express')
const router = express.Router()

const { catchErrors } = require('../helpers/errorHandlers')
const userEndpoint = require('../apis/userEndpoint')
const cardEndpoint = require('../apis/cardEndpoint')
const { getAuthorize } = require('../middlewares/authMiddleware')

// Unprotected routes
router.get('/', (req, res) => res.json({ msg: process.env.APP_NAME }))
router.post('/api/authenticate', catchErrors(userEndpoint.postAuthenticate))
router.post('/api/sign-up', catchErrors(userEndpoint.postSignUp))
router.get('/api/confirm-sign-up', catchErrors(userEndpoint.getConfirmSignUp))
router.post('/api/forgot-password', catchErrors(userEndpoint.postForgotPassword))
router.get('/api/confirm-reset-password', catchErrors(userEndpoint.getConfirmResetPassword))

router.post('/api/cards', catchErrors(cardEndpoint.createCard))
router.put('/api/cards/:id', catchErrors(cardEndpoint.updateCard))
router.delete('/api/cards/:id', catchErrors(cardEndpoint.deleteCard))
router.get('/api/cards', catchErrors(cardEndpoint.getCards))
router.get('/api/cards/random', catchErrors(cardEndpoint.getCardRandom))
router.get('/api/cards/:id', catchErrors(cardEndpoint.getCardById))

// Middlewares
router.use(getAuthorize)

// Protected routes
router.get('/api/users', catchErrors(userEndpoint.getUsers))
router.get('/api/get-user-current', catchErrors(userEndpoint.getUserCurrent))
router.get('/api/test-axios', catchErrors(userEndpoint.getTestAxios))

module.exports = router
