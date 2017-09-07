// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
  '/front/company/resume/record': async (ctx, next) => {
    await ctx.render('/front/company/resume_record')
  },
  '/front/company/resume/list': async (ctx, next) => {
    await ctx.render('/front/company/resume_list')
  },
  '/front/company/job/send': async (ctx, next) => {
    await ctx.render('/front/company/job_send')
  },
  '/front/company/invitation/send': async (ctx, next) => {
    await ctx.render('/front/company/invitation_send')
  }
}
