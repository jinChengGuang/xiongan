// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
  //身份选择
  '/identity': async (ctx, next) => {
    await ctx.render('/front/xiongan/login/identity')
  },
  //注册
  '/register': async (ctx, next) => {
    await ctx.render('/front/xiongan/login/register')
  },
  //登陆
   '/login': async (ctx, next) => {
    await ctx.render('/front/xiongan/login/login')
  },
  //忘记密码
   '/forget/password': async (ctx, next) => {
    await ctx.render('/front/xiongan/login/forget_psd')
  },
   //修改密码
   '/put/password': async (ctx, next) => {
    await ctx.render('/front/xiongan/login/put_psd')
  },
    //企业认证
   '/company/test': async (ctx, next) => {
    await ctx.render('/front/xiongan/company/com_test')
  },
  //个人中心展示企业认证资料
   '/company/put': async (ctx, next) => {
    await ctx.render('/front/xiongan/company/put_test')
  },
  //岗位发布
   '/station': async (ctx, next) => {
    await ctx.render('/front/xiongan/company/station')
  },
  //我的简历
   '/resume': async (ctx, next) => {
    await ctx.render('/front/xiongan/jobseeker/resume')
  },
  //创建新简历
   '/resume/new': async (ctx, next) => {
    await ctx.render('/front/xiongan/jobseeker/new_resume')
  },
   //创建求职意向
   '/job/new': async (ctx, next) => {
    await ctx.render('/front/xiongan/jobseeker/job')
  },
  //个人评价
   '/assess': async (ctx, next) => {
    await ctx.render('/front/xiongan/jobseeker/assess')
  },
  //个人评价提交成功
   '/assess/ok': async (ctx, next) => {
    await ctx.render('/front/xiongan/jobseeker/assess_ok')
  },
  //教育经历
   '/teach': async (ctx, next) => {
    await ctx.render('/front/xiongan/jobseeker/teach')
  },
  //工作经历
   '/work': async (ctx, next) => {
    await ctx.render('/front/xiongan/jobseeker/work')
  },
  //选择期望职位
   '/job/content': async (ctx, next) => {
    await ctx.render('/front/xiongan/jobseeker/job_content')
  },
}
