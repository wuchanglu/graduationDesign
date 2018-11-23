const Koa = require('koa')

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')()
// 引入post请求体处理插件
const bodyPareser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyPareser())
router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`
})
router.post('/signin', async (ctx, next) => {
  var name = ctx.request.body.name || '',
    password = ctx.request.body.password || ''
  console.log(`signin with name: ${name}, password: ${password}`)
  if (name === 'koa' && password === '12345') {
    const res = "{ data: {id: 'aaaa',name: '吴昌禄'} }"
    ctx.response.body = res
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`
  }
})
// 使用写好的路由处理函数
app.use(router.routes())

app.listen(3000)
console.log('app started at port 3000...')
