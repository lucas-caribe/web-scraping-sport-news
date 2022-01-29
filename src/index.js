require('dotenv').config();

const { PORT } = process.env;

const express = require('express');

const NewsController = require('./controllers/News')

const app = express();

app.get('/sport-news', NewsController.findAll)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
