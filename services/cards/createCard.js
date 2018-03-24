const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.createCard = async (data) => {
  const card = new Card(data)
  await card.save()
  logger.info(`Card created: ${card}`)

  return card
}
