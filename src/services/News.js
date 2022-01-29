const getNewsFromGE = require('../utils/getNewsFromGE');
const getNewsFromUol = require('../utils/getNewsFromUol');

const findAll = async () => {
  const uolNews = await getNewsFromUol();
  const geNews = await getNewsFromGE();

  return [...uolNews, ...geNews];
};

module.exports = {
  findAll,
};
