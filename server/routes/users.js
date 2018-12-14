const router = require('koa-router')()
const Monk = require('monk')
const db = new Monk('localhost/user') //链接到库

router.prefix('/users')

router.get('/', function(ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/login', async (ctx, next) => {
  const params = JSON.parse(ctx.request.body.apiparams).params
  const area = db.get('userTable') //表
  let result = await area.find({
    accuntNum: String(params.accuntNum),
    password: params.password
  })
  ctx.body = JSON.stringify(setRequest(result))
})
const setRequest = result => {
  if (result[0]) {
    return {
      state: 200,
      data: {
        userid: result[0].userid
      }
    }
  } else {
    return {
      state: 200,
      data: {
        userid: ''
      }
    }
  }
}
module.exports = router
