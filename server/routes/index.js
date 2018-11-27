const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  const data = {
    name: 'asdas'
  }
  ctx.body = JSON.stringify(data)
})

router.post('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.post('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
