const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.updateCard = async (id, data) => {
  delete data._id
  await Card.findByIdAndUpdate(id, data)
  logger.info(`Card updated`)
}
