const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.update = async (id, type, front, back, known) => {
  await Card.findByIdAndUpdate(id, { type, front, back, known })
  logger.info(`Card updated`)
}
