const chalk = require('chalk');
const logSymbols = require('log-symbols');
const ip = require('ip');

const divider = chalk.gray('\n---------------------------------------------');
const error = chalk.bold.red;
const warning = chalk.bold.yellow;
const success = chalk.bold.green;
const info = chalk.bold.blue;

const logger = {
	error: err => {
		console.error(logSymbols.error, error(err));
	},

	warn: warn => {
		console.warn(logSymbols.warning, warning(warn));
	},

	info: msg => {
		console.log(logSymbols.info, info(msg));
	},

	success: msg => {
		console.log(logSymbols.success, success(msg));
	},

	appStarted: (port, host) => {

		logger.success('Server started');

		console.log(`${divider}
		
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}
${divider}
${chalk.blue(`Mouse over a link and Press ${chalk.italic('CTRL-C')} + Click to follow link`)}
		`);
	},
};

module.exports = logger;