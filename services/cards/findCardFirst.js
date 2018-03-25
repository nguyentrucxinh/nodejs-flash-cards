const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.findCardFirst = async (id) => {
  const card = await Card.findOne({ deleted: false })
  logger.info(`Card found: ${card}`)
  return card
}
