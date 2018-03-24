const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.deleteCard = async (id) => {
  await Card.findByIdAndRemove(id)
  logger.info(`Card deleted: ${id}`)
}
