const router = require('koa-router')();

router.get('/', async function(ctx, next) {
  ctx.body = ctx.render('index', {
    name: "ahmet"
  })
});

module.exports = router;
