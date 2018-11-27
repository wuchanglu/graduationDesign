const router = require('koa-router')()
const http = require('http')
const fetch = require('node-fetch')

router.get('/', async (ctx, next) => {
  // const data = {
  //   name: 'asdas'
  // }
  // ctx.body = JSON.stringify(data)

  // var querystring = require('querystring')
  // var data = JSON.stringify({
  //   accesskey: 'MTGZNJC3MZM3OTYXNTQZMZA5NZE1NTKZ',
  //   citycodes: ['101190101']
  // })
  // var options = {
  //   method: 'POST',
  //   hostname: 'service.envicloud.cn',
  //   port: '8082',
  //   path: '/v2/weatherforecast'
  // }

  let result
  // var req = http.request(options, (res)=> {
  //   console.log('STATUS: ' + res.statusCode)
  //   console.log('HEADERS: ' + JSON.stringify(res.headers))
  //   res.setEncoding('utf8')
  //   res.on('data', function(chunk) {
  //     console.log('BODY: ' + chunk)
  //     result = chunk
  //     //JSON.parse(chunk)
  //   })
  // })
  // req.on('error', function(e) {
  //   console.log(e.message)
  // })
  // req.write(data)
  // await req.end()


  // await fetch(
  //   'http://service.envicloud.cn:8082/v2/weatherforecast/MTGZNJC3MZM3OTYXNTQZMZA5NZE1NTKZ/101190101'
  // )
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(err => console.error(err))

  await fetch(
    'http://www.hzqx.com/hztq/data/actualNewestData/58457.json'
  )
    .then(res => res.json())
    .then(data => {
      console.log(data)
      ctx.body = data
    })
    .catch(err => console.error(err))



  // const req = http.get(
  //   'http://service.envicloud.cn:8082/v2/weatherforecast/MTGZNJC3MZM3OTYXNTQZMZA5NZE1NTKZ/101190101',
  //   res => {
  //     console.log('STATUS: ' + res.statusCode)
  //     console.log('HEADERS: ' + JSON.stringify(res.headers))
  //     res.setEncoding('utf8')
  //     res.on('data', async (chunk)=> {
  //       console.log('BODY: ' + chunk)
  //       ctx.body = chunk

  //       //JSON.parse(chunk)
  //     })
  //     req.on('error', function(e) {
  //       console.log(e.message)
  //     })
  //   }
  // )
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
