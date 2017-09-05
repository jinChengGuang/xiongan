// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
// ---------------------------------------------------------------------------- GET
exports.get = {
  // -------------------------------------------------------------------------- enter
  '/manager/shop/product/list': async (ctx, next) => {
    ctx.state.name = 'liuzihao, zhangfule'
    ctx.state.html = '<div><a href="http://www.baidu.com">百度</a></div>'
    await ctx.render('/manager/shop/product/list')
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
