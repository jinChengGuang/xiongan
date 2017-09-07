// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
  '/front/jobseeker/my/cultivate': async (ctx, next) => {
    await ctx.render('/front/jobseeker/my_cultivate')
  },
  '/front/jobseeker/invitation/receive': async (ctx, next) => {
    await ctx.render('/front/jobseeker/invitation_receive')
  },
}
