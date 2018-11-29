const router = require('koa-router')()
const http = require('http')
const fetch = require('node-fetch')
const xlsx = require('node-xlsx')
const path = require('path')
const Monk = require('monk')
const db = new Monk('localhost/region') //链接到库

router.get('/', async (ctx, next) => {
  var http = require('http')

  // const data = {
  //   name: 'asdas'
  // }
  // ctx.body = JSON.stringify(data)
  
  // 可以用的请求方式
  // await fetch(
  //   'http://61.147.166.205:8082/v2/weatherforecast/MTGZNJC3MZM3OTYXNTQZMZA5NZE1NTKZ/101190101'
  // )
  //   .then(res => res.text())
  //   .then(data => {
  //     console.log(data,'111')
  //     ctx.body = data
  //   })
  //   .catch(err => console.error(err))

  // let url = 'http://www.nmc.cn/f/rest/real/58457?_=' + (new Date()).getTime()
  // await fetch(
  //   url
  // )
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     ctx.body = data
  //   })
  //   .catch(err => console.error(err))

  //   const req = http.get(
  //     'http://service.envicloud.cn:8082/v2/weatherforecast/MTGZNJC3MZM3OTYXNTQZMZA5NZE1NTKZ/101190101',
  //     res => {
  //       console.log('STATUS: ' + res.statusCode)
  //       console.log('HEADERS: ' + JSON.stringify(res.headers))
  //       res.setEncoding('utf8')
  //       res.on('data', async (chunk)=> {
  //         console.log('BODY: ' + chunk)
  //         ctx.body = chunk

  //         //JSON.parse(chunk)
  //       })
  //       req.on('error', function(e) {
  //         console.log(e.message)
  //       })
  //     }
  //   )
})

router.post('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.post('/api/area',async (ctx,next)=>{
  const params = JSON.parse(ctx.request.body.apiparams).params
  const area = db.get('area') //表
  let result = await area.find({NAMEEN:params.NAMEEN},{AREAID:true,NAMECN:true,_id:false})
  ctx.body = JSON.stringify(result)
})

router.post('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
