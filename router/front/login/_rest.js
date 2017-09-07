// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
  '/rest/manager/shop/product/list': async (ctx, next) => {
    ctx.body = '123'
    ctx.state.name = 'yuantao'
    await ctx.render('/blank')
  }
}
