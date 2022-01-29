const puppeteer = require('puppeteer');
const dateToTimestamp = require('./dateToTimestamp');

const { UOL_URL } = require('../constants');

const getNewsFromUol = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(UOL_URL);

  try {
    const news = await page.$$eval('.thumbnails-wrapper', (posts) => {
      return posts.map((post) => {
        const title = post.querySelector('.thumb-title').innerText;
        const date = post.querySelector('.thumb-date').innerText;

        return {
          title,
          date,
        };
      });
    });

    return news.map(({ title, date }) => ({
      title,
      date: dateToTimestamp(date),
    }));
  } catch (err) {
    await browser.close();
    console.log(err);
    throw err;
  }
};

module.exports = getNewsFromUol;
