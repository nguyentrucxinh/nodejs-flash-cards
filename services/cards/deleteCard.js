const mongoose = require('mongoose')

const Card = mongoose.model('Card')
const logger = require('../../helpers/loggerHelpers')

exports.deleteCard = async (id) => {
  const card = await Card.findById(id)
  await card.delete()
  // await card.delete(mongoose.Types.ObjectId())
  logger.info(`Card deleted: ${id}`)
}
