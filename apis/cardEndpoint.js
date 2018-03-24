const services = require('../services')
const { SuccessResponse } = require('../helpers/responseHelpers')

exports.create = async (req, res) => {
  const type = req.body.type
  const front = req.body.front
  const back = req.body.back
  const known = req.body.known

  const card = await services.cards.create(type, front, back, known)

  return res.json(
    new SuccessResponse.Builder()
      .withContent(card)
      .build()
  )
}

exports.update = async (req, res) => {
  const id = req.params.id
  const type = req.body.type
  const front = req.body.front
  const back = req.body.back
  const known = req.body.known

  await services.cards.update(id, type, front, back, known)

  return res.json(
    new SuccessResponse.Builder()
      .build()
  )
}

exports.delete = async (req, res) => {
  const id = req.params.id

  await services.cards.deleteCard(id)

  return res.json(
    new SuccessResponse.Builder()
      .build()
  )
}

exports.getAll = async (req, res) => {
  const cards = await services.cards.findAll()

  return res.json(
    new SuccessResponse.Builder()
      .withContent(cards)
      .build()
  )
}

exports.getById = async (req, res) => {
  const id = req.params.id

  const card = await services.cards.findById(id)

  return res.json(
    new SuccessResponse.Builder()
      .withContent(card)
      .build()
  )
}

exports.getRandom = async (req, res) => {
  const card = await services.cards.findRandom()

  return res.json(
    new SuccessResponse.Builder()
      .withContent(card)
      .build()
  )
}
