// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
  // 简历记录
  '/front/company/resume_record': async (ctx, next) => {
    await ctx.render('/front/company/resume_record')
  },
  // 简历列表
  '/front/company/resume_list': async (ctx, next) => {
    await ctx.render('/front/company/resume_list')
  },
  // 发布的岗位
  '/front/company/job_send': async (ctx, next) => {
    await ctx.render('/front/company/job_send')
  },
  // 发出的面试邀请
  '/front/company/invitation_send': async (ctx, next) => {
    await ctx.render('/front/company/invitation_send')
  },
   // 培训列表
  '/front/company/cultivate_list': async (ctx, next) => {
    await ctx.render('/front/company/cultivate_list')
  },
  // 课程详情
  '/front/company/ruian/detail': async (ctx, next) => {
    await ctx.render('/front/company/ruian_detail')
  },
  // 考试详情、企业培训详情
  '/front/company/class/detail': async (ctx, next) => {
    await ctx.render('/front/company/class_detail')
  },
  // 直播
  '/front/company/play': async (ctx, next) => {
    await ctx.render('/front/company/play')
  },
  // 联系我们
  '/front/company/link': async (ctx, next) => {
    await ctx.render('/front/company/link')
  },
  // 首页
  '/front/company/home': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/front/company/home')
  },
  // 招聘列表搜索
  '/front/company/recruit_list': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/front/company/recruit_list')
  },
    // 企业个人中心
  '/front/company/compan_home': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/front/company/compan_home')
  },
  // 搜索页
  '/front/company/search': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/front/company/search')
  },
  // 公司详情
  '/front/company/company_list': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/front/company/company_list')
  },
   //企业认证
   '/front/company/com_test': async (ctx, next) => {
    await ctx.render('/front/company/com_test')
  },
  //个人中心展示企业认证资料
   '/front/company/put_test': async (ctx, next) => {
    await ctx.render('/front/company/put_test')
  },
  //岗位发布
   '/front/company/station': async (ctx, next) => {
    await ctx.render('/front/company/station')
  },
  // 站内信
  '/front/company/mail': async (ctx, next) => {
    await ctx.render('/front/company/mail')
  },
  // 站内信详情
  '/front/company/mail/detail': async (ctx, next) => {
    await ctx.render('/front/company/mail_detail')
  },
}
