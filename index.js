// ---------------------------------------------------------------------------- Package
const path = require('path')
const Koa = require('koa')
const router = require('koa-router')()
const body = require('koa-better-body')
const common = require('hw-common-node')
const serve = require('koa-static')
const render = require('koa-ejs')
const widget = require('./widget/widget')
const preset = require('./preset')
// ---------------------------------------------------------------------------- Global
require('hc-basis-node')(require('./conf'))
// ---------------------------------------------------------------------------- App与第三方中间件
global.app = new Koa()
app.use(body())
app.use(preset())
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
