// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
 //身份选择
  '/front/login/identity': async (ctx, next) => {
    await ctx.render('/front/login/identity')
  },
  //注册
  '/front/login/register': async (ctx, next) => {
    await ctx.render('/front/login/register')
  },
  //登陆
   '/front/login/login': async (ctx, next) => {
    await ctx.render('/front/login/login')
  },
  //忘记密码
   '/front/login/forget_psd': async (ctx, next) => {
    await ctx.render('/front/login/forget_psd')
  },
   //修改密码
   '/front/login/put_psd': async (ctx, next) => {
    await ctx.render('/front/login/put_psd')
  },
}



