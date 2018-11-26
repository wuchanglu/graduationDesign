import axios from 'axios'
let http = axios.create({
  // baseURL: 'http://weixt.spacetech.com.cn:8090/weixt/api',
  baseURL: '/weixt/api',
  withCredentials: true,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    'X-Requested-With': 'XMLHttpRequest'
  },
  transformRequest: [
    function(data) {
      console.log(data)
      let newData = ''
      for (let k in data) {
        if (data.hasOwnProperty(k) === true) {
          newData +=
            encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
        }
      }
      return newData
    }
  ]
})
function apiAxios(method, url, params, response) {
  const param = {}
  param['apiparams'] = JSON.stringify({
    params: params,
    readonly: params.readonly
  })
  return http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? param : null
  })
    .then(res => {
      if (res.status === 200) {
        return Promise.resolve(res.data)
      }
    })
    .catch(err => {
      // response(err)
      console.log(333333)
      return Promise.reject(err)
    })
}
export default {
  get: function(url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function(url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function(url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function(url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}
