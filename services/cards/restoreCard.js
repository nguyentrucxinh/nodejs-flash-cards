const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.restoreCard = async (id) => {
  const card = await Card.findById(id)
  await card.restore()
  logger.info(`Card restored: ${id}`)
}
