const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.findCardPrevById = async (id) => {
  const card = await Card.findOne({ _id: { $lt: id } }).sort({ _id: -1 })
  logger.info(`Card found: ${card}`)
  return card
}
