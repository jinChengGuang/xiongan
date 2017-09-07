// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
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
  // 求职个人中心
  '/front/jobseeker/user-home': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/front/jobseeker/user-home')
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
  // 求职列表搜索
  '/front/jobseeker/jobseeker_list': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/front/jobseeker/jobseeker_list')
  },
  // 职位详情
  '/front/jobseeker/jobseeker_detail': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/front/jobseeker/jobseeker_detail')
  },
  // 我的投递
  '/front/jobseeker/mailing': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/front/jobseeker/mailing')
  },
    // 岗位收藏
  '/front/jobseeker/collect': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/front/jobseeker/collect')
  },
  '/manager/shop/product/add': async (ctx, next) => {
    let config = {
      row: {
        col: {
          component: 'chart-0',
          sql: '',

        },
        col: {
          component: 'chart-1',
        },
        col: {
          component: 'chart-2',
        },
        col: {
          component: 'chart-3',
        }
      },
      row: {
        col: {

        },
        col: {

        }
      },
      row: {
        col: {
          component: 'list',
          data: {

          },
          filter: {

          },
          header: {
            
          },
          paging: {

          }
        }
      },
      row: {
        col: {
          component: 'add',
          form: {
            
          },
          data: {

          },

        }
      }
    }
    ctx.state.html = '$.admin.gen(config)'
    ctx.state.name = 'yuantao'
    await ctx.render('/blank')
  }
}
