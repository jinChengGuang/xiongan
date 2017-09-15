// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
  // 我的报名培训
  '/front/jobseeker/my_cultivate': async (ctx, next) => {
    await ctx.render('/front/jobseeker/my_cultivate')
  },
  // 公司详情
  '/front/jobseeker/job_company_list': async (ctx, next) => {
    await ctx.render('/front/jobseeker/job_company_list')
  },
  // 编辑教育经历
  '/front/jobseeker/edit_education': async (ctx, next) => {
    await ctx.render('/front/jobseeker/edit_education')
  },
  // 编辑工作经历
  '/front/jobseeker/edit_experience': async (ctx, next) => {
    await ctx.render('/front/jobseeker/edit_experience')
  },
  // 面试邀请
  '/front/jobseeker/invitation_receive': async (ctx, next) => {
    await ctx.render('/front/jobseeker/invitation_receive')
  },
  // 培训列表
  '/front/jobseeker/cultivate_list': async (ctx, next) => {
    await ctx.render('/front/jobseeker/cultivate_list')
  },
  // 瑞安详情
  '/front/jobseeker/ruian_detail': async (ctx, next) => {
    await ctx.render('/front/jobseeker/ruian_detail')
  },
  // 首页
  '/front/jobseeker/home': async (ctx, next) => {
    await ctx.render('/front/jobseeker/home')
  },
  // 考试详情、企业培训详情
  '/front/jobseeker/class_detail': async (ctx, next) => {
    await ctx.render('/front/jobseeker/class_detail')
  },
  // 直播
  '/front/jobseeker/play': async (ctx, next) => {
    await ctx.render('/front/jobseeker/play')
  },
  // 联系我们
  '/front/jobseeker/link': async (ctx, next) => {
    await ctx.render('/front/jobseeker/link')
  },
  // 求职个人中心
  '/front/jobseeker/user_home': async (ctx, next) => {
    await ctx.render('/front/jobseeker/user_home')
  },
  // 求职列表搜索
  '/front/jobseeker/jobseeker_list': async (ctx, next) => {
    await ctx.render('/front/jobseeker/jobseeker_list')
  },
  // 求职搜索
  '/front/jobseeker/search': async (ctx, next) => {
    await ctx.render('/front/jobseeker/search')
  },
  // 职位详情
  '/front/jobseeker/jobseeker_detail': async (ctx, next) => {
    await ctx.render('/front/jobseeker/jobseeker_detail')
  },
  // 编辑个人基本信息
  '/front/jobseeker/edit_resume': async (ctx, next) => {
    await ctx.render('/front/jobseeker/edit_resume')
  },
  // 编辑个人求职意向
  '/front/jobseeker/edit_job': async (ctx, next) => {
    await ctx.render('/front/jobseeker/edit_job')
  },
  // 我的投递
  '/front/jobseeker/mailing': async (ctx, next) => {
    await ctx.render('/front/jobseeker/mailing')
  },
    // 岗位收藏
  '/front/jobseeker/collect': async (ctx, next) => {
    await ctx.render('/front/jobseeker/collect')
  },
  //我的简历
   '/front/jobseeker/resume': async (ctx, next) => {
    await ctx.render('/front/jobseeker/resume')
  },
  //创建新简历
   '/front/jobseeker/new_resume': async (ctx, next) => {
    await ctx.render('/front/jobseeker/new_resume')
  },
  //简历详情
   '/front/jobseeker/resume_detail': async (ctx, next) => {
    await ctx.render('/front/jobseeker/resume_detail')
  },
   //创建求职意向
   '/front/jobseeker/job': async (ctx, next) => {
    await ctx.render('/front/jobseeker/job')
  },
  //编辑个人评价
   '/front/jobseeker/edit_assess': async (ctx, next) => {
    await ctx.render('/front/jobseeker/edit_assess')
  },
  //个人评价
   '/front/jobseeker/assess': async (ctx, next) => {
    await ctx.render('/front/jobseeker/assess')
  },
  //个人评价提交成功
   '/front/jobseeker/assess_ok': async (ctx, next) => {
    await ctx.render('/front/jobseeker/assess_ok')
  },
  //教育经历
   '/front/jobseeker/teach': async (ctx, next) => {
    await ctx.render('/front/jobseeker/teach')
  },
  //工作经历
   '/front/jobseeker/work': async (ctx, next) => {
    await ctx.render('/front/jobseeker/work')
  },
  //选择期望职位
   '/front/jobseeker/job_content': async (ctx, next) => {
    await ctx.render('/front/jobseeker/job_content')
  },
}
