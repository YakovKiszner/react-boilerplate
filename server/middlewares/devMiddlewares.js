const app = require('../server');

const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../../webpack/webpack.dev.babel');
const compiler = webpack(webpackConfig);

const middleware = webpackDevMiddleware(compiler, {
	logLevel: 'warn',
	publicPath: webpackConfig.output.publicPath,
	silent: true,
	stats: 'errors-only',
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

const fs = middleware.fileSystem;

app.get('*', (req, res) => {
	fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
		if (err) {
			res.sendStatus(404);
		} else {
			res.send(file.toString());
		}
	});
});