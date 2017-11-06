const express = require('express')
const http = require('http')
const apicache = require('apicache')

const app = express()
let cache = apicache.middleware

// 跨域设置
// app.all('*', function (req, res, next) {
//   if (req.path !== '/' && !req.path.includes('.')) {
//     res.header('Access-Control-Allow-Credentials', true)
//     // 这里获取 origin 请求头 而不是用 *
//     res.header('Access-Control-Allow-Origin', req.headers['origin'] || '*')
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//     res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//     res.header('Content-Type', 'application/json;charset=utf-8')
//   }
//   next()
// })

const onlyStatus200 = (req, res) => res.statusCode === 200

app.use(cache('2 minutes', onlyStatus200))

// app.use(express.static('public'))

// 搜索
app.use('/search', require('./router/search'))

// banner
app.use('/banner', require('./router/banner'))

// 推荐歌单
app.use('/personalized', require('./router/personalized'))

// 歌单详情
app.use('/plyalist/detail', require('./router/playlist_detail'))

module.exports = app