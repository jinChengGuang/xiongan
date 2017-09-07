// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
  '/front/cultivate/list': async (ctx, next) => {
    await ctx.render('/front/cultivate/list')
  },
  '/front/cultivate/ruian/detail': async (ctx, next) => {
    await ctx.render('/front/cultivate/ruian_detail')
  },
  '/front/cultivate/class/detail': async (ctx, next) => {
    await ctx.render('/front/cultivate/class_detail')
  },
  '/front/cultivate/play': async (ctx, next) => {
    await ctx.render('/front/cultivate/play')
  },
  '/front/cultivate/link': async (ctx, next) => {
    await ctx.render('/front/cultivate/link')
  },
  '/front/cultivate/mail': async (ctx, next) => {
    await ctx.render('/front/cultivate/mail')
  },
  '/front/cultivate/mail/detail': async (ctx, next) => {
    await ctx.render('/front/cultivate/mail_detail')
  },
}
