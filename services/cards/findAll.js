const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.findAll = async () => {
  const cards = await Card.find()
  logger.info(`Card found: ${cards}`)
  return cards
}
