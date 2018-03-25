const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.findCardNextById = async (id) => {
  const card = await Card.findOne({ _id: { $gt: id }, deleted: false }).sort({ _id: 1 })
  logger.info(`Card found: ${card}`)
  return card
}
