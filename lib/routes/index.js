const router = require('koa-router')();
const div = require('../views/index.jsx')
const render = require('preact-render-to-string');

router.get('/', async function(ctx, next) {
  const html = render(div({
    name: "javascript"
  }));

  ctx.body = `<!DOCTYPE html><html><head></head><body>${html}<script src="/main.js"></script></body></html>`;
});

module.exports = router;
