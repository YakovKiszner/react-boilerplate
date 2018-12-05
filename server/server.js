require('./config/config');

const express = require('express');

const logger = require('./logger');

const app = module.exports = express();

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

require('./routes/routes');
require('./middlewares/middlewares');

app.listen(port, err => {
	if (err) {
		return logger.error(err.message);
	}

	logger.appStarted(port, host);
});