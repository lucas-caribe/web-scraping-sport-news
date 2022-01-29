const puppeteer = require('puppeteer');

const { GE_URL } = require('../constants');

const getNewsFromGE = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(GE_URL);

  try {
    const news = await page.$$eval('.feed-post-body', (posts) => {
      return posts.map((post) => {
        const title = post.querySelector('.feed-post-body-title').innerText;
        const date = post.querySelector('.feed-post-datetime').innerText;

        return {
          title,
          date,
        };
      });
    });

    await browser.close();

    return news;
  } catch (err) {
    console.log(err);
    await browser.close();
    throw err;
  }
};

module.exports = getNewsFromGE;
