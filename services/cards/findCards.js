const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.findCards = async () => {
  const cards = await Card.find({ deleted: false })
  logger.info(`Card found: ${cards}`)
  return cards
}
