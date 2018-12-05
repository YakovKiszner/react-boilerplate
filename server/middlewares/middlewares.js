const app = require('../server');
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
	require('./prodMiddlewares');
} else {
	require('./devMiddlewares');
}

app.get('*.js', (req, res, next) => {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	next();
});