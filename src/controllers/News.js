const { StatusCodes } = require('http-status-codes');

const NewsService = require('../services/News');

const findAll = async (_req, res) => {
  try {
    const news = await NewsService.findAll();
    return res.status(StatusCodes.OK).json({ news });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error });
  }
};

module.exports = {
  findAll,
};
