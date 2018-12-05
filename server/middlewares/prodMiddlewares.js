const app = require('../server');

const path = require('path');
const express = require('express');
const compression = require('compression');

const outputPath = path.resolve(process.cwd(), 'build');

app.use(compression());
app.use('/', express.static(outputPath));

app.get('*', (req, res) =>
	res.sendFile(path.resolve(outputPath, 'index.html')),
);