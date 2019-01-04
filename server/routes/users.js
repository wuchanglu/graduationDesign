const router = require('koa-router')();
const Monk = require('monk');
const db = new Monk('localhost/user'); //链接到库

router.prefix('/users');

router.get('/', function(ctx, next) {
  ctx.body = 'this is a users response!';
});

router.get('/bar', function(ctx, next) {
  ctx.body = 'this is a users/bar response';
});
router.post('/login', async (ctx, next) => {
  const params = getParams(ctx);
  const area = db.get('userTable'); //表
  let result = await area.find({
    accuntNum: String(params.accuntNum),
    password: params.password
  });
  ctx.body = JSON.stringify(setRequest(result));
});
router.post('/registe', async (ctx, next) => {
  const params = getParams(ctx);
  const table = db.get('userTable');
  let result = await table.find({ accuntNum: String(params.accuntNum) });
  if (result.length) {
    ctx.body = JSON.stringify({
      state: 500,
      data: '账号已存在'
    });
  } else {
    let registe = await table.insert({
      accuntNum: params.accuntNum,
      password: params.password,
      userid: params.userid,
      parentList: []
    });
    ctx.body = JSON.stringify(setRequest('成功！'));
  }
});
router.post('/find_users', async (ctx, next) => {
  const param = getParams(ctx);
  const table = db.get('userTable');
  let result = await table.find({ accuntNum: { $regex: param.accuntNum } });
  ctx.body = JSON.stringify(setRequest(result));
});
const setRequest = result => {
  if (result[0]) {
    return {
      state: 200,
      data: {
        userid: result[0].userid
      }
    };
  } else {
    return {
      state: 200,
      data: {
        userid: ''
      }
    };
  }
};
const getParams = ctx => {
  return JSON.parse(ctx.request.body.apiparams).params;
};
module.exports = router;
