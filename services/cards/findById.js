const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.findById = async (id) => {
  const card = await Card.findById(id)
  logger.info(`Card found: ${card}`)
  return card
}
