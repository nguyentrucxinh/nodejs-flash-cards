const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.findCardRandom = async () => {
  const count = await Card.count()

  const random = Math.floor(Math.random() * count)

  const card = await Card.findOne().limit(1).skip(random)
  logger.info(`Card found: ${card}`)
  return card
}
