const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.createCard = async (type, front, back, known) => {
  const card = new Card({ type, front, back, known })
  await card.save()
  logger.info(`Card created: ${card}`)

  return card
}
