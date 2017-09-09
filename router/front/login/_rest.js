// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
  '/rest/manager/shop/product/list': async (ctx, next) => {
    ctx.body = await $.http.get('http://192.168.0.98:3300/')
  },
}
exports.post = {
'/rest/login': async (ctx, next) => {
  console.log(ctx.post)
    ctx.body = ctx.post
  }
}
