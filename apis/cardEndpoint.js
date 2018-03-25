const services = require('../services')
const { SuccessResponse } = require('../helpers/responseHelpers')

exports.createCard = async (req, res) => {
  const data = req.body

  const card = await services.cards.createCard(data)

  return res.json(
    new SuccessResponse.Builder()
      .withContent(card)
      .build()
  )
}

exports.updateCard = async (req, res) => {
  const id = req.params.id
  const data = req.body

  await services.cards.updateCard(id, data)

  return res.json(
    new SuccessResponse.Builder()
      .build()
  )
}

exports.removeCard = async (req, res) => {
  const id = req.params.id

  await services.cards.removeCard(id)

  return res.json(
    new SuccessResponse.Builder()
      .build()
  )
}

exports.deleteCard = async (req, res) => {
  const id = req.params.id

  await services.cards.deleteCard(id)

  return res.json(
    new SuccessResponse.Builder()
      .build()
  )
}

exports.restoreCard = async (req, res) => {
  const id = req.params.id

  await services.cards.restoreCard(id)

  return res.json(
    new SuccessResponse.Builder()
      .build()
  )
}

exports.getCards = async (req, res) => {
  const cards = await services.cards.findCards()

  return res.json(
    new SuccessResponse.Builder()
      .withContent(cards)
      .build()
  )
}

exports.getCardById = async (req, res) => {
  const id = req.params.id

  const card = await services.cards.findCardById(id)

  return res.json(
    new SuccessResponse.Builder()
      .withContent(card)
      .build()
  )
}

exports.getCardNextById = async (req, res) => {
  const id = req.params.id

  const card = await services.cards.findCardNextById(id)

  return res.json(
    new SuccessResponse.Builder()
      .withContent(card)
      .build()
  )
}

exports.getCardPrevById = async (req, res) => {
  const id = req.params.id

  const card = await services.cards.findCardPrevById(id)

  return res.json(
    new SuccessResponse.Builder()
      .withContent(card)
      .build()
  )
}

exports.getCardRandom = async (req, res) => {
  const card = await services.cards.findCardRandom()

  return res.json(
    new SuccessResponse.Builder()
      .withContent(card)
      .build()
  )
}
