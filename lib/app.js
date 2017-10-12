const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const router = require('koa-router')();
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const render = require('./middlewares/render');

// middlewares
app.use(render());
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public', { maxage: 9999999 }));

const index = require('./routes/index');

router.use('/', index.routes(), index.allowedMethods());

app.use(router.routes(), router.allowedMethods());

module.exports = app;
