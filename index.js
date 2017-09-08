// ---------------------------------------------------------------------------- Package
const path = require('path')
const Koa = require('koa')
const router = require('koa-router')()
const common = require('hw-common-node')
const serve = require('koa-static')
const render = require('koa-ejs')
const widget = require('./widget/widget')
// ---------------------------------------------------------------------------- Global
require('hc-basis-node')(require('./conf'))
// ---------------------------------------------------------------------------- App与第三方中间件
global.app = new Koa()
// ---------------------------------------------------------------------------- Common
app.use(common())
// ----------------------------------------------------------------------------widget
app.use(widget())
// ---------------------------------------------------------------------------- Static Serve
app.use(serve('.'))
// ---------------------------------------------------------------------------- Render
render(app, {
  root: path.join(__dirname, 'router'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false
})
// ---------------------------------------------------------------------------- Router
$.router.getRoutes(router)
app.use(router.routes())
app.use(router.allowedMethods())
// ---------------------------------------------------------------------------- Listen
app.listen($.conf.port)
console.log('开始监听：' + $.conf.port)
