const router = require('koa-router')()

router.prefix('/broadcast')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a broadcast response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a broadcast/bar response'
})

module.exports = router
