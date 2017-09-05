// ---------------------------------------------------------------------------- Package
const _ = require('lodash')
const mysql = require('mysql')
// ---------------------------------------------------------------------------- Port
const port = 3000
// ---------------------------------------------------------------------------- Common
const common = {
  encrypt: {
    deskey: 'KWes6(ken9!d5478w2(*#12!'
  },
  exception: {
    mail: [],
    mobile: []
  },
  router: {
    dir: process.cwd() + '/router',
    ext: ['.js'],
    exclude: []
  },
  upload: {
    rule: {
      product:  {project: 'shop',  category: 'product',   max: 1024000, type: 'img'}
    }
  },
  aliyun: {
    accessKey: 'LTAISqgBxKWM0BqQ',
    accessSecret: 'ZNb0pBReD1Je5S8HwuhXe9y7KGogz4',
    oss: {
      region: 'oss-cn-shanghai',
      bucket: 'hoss-upload'
    }
  }
}
// ---------------------------------------------------------------------------- Special
const conf = {
  development: {
    accept:         "http://localhost",
    uppath:         "c:\\uptemp",
    session: {
      redis: {
        host:       "localhost",
        port:       6379
      },
      domain:       '192.168.0.5',
      path:         '/',
    },
    mysql: {
      main: {
        host:       "127.0.0.1",
        user:       "root",
        password:   "123456",
        database:   "test"
      },
      user: {
        host:       "127.0.0.1",
        user:       "root",
        password:   "123456",
        database:   "user"
      }
    },
    redis: {
      host:       "localhost",
      port:       6379
    },
    wechat: {
      appid:        "wx9852fd56ec8cbbc5",
      appsecret:    "021f04101dee3f77e856ab7563a9848e",
      scope:        "snsapi_userinfo",
      jsapi_domain: "http://shop.plat.hesq.com.cn/",
      mch_id:       "1232291902",
      key:          "f44773bf001fe9328beab30f1b9640ad",
      notify_url:   "http://hrest.ngrok.cc/wepay/notify",
      trade_type:   "JSAPI"
    }
  },
  // -------------------------------------------------------------------------- Pro
  production: {
    accept:         "http://localhost",
    uptemp:         "uptemp",
    session: {
      redis: {
        host:       "localhost",
        port:       6379
      },
      domain:       '192.168.0.5',
      path:         '/',
    },
    mysql: {
      main: {
        host:       "127.0.0.1",
        user:       "root",
        password:   "123456",
        database:   "test"
      },
      user: {
        host:       "127.0.0.1",
        user:       "root",
        password:   "123456",
        database:   "user"
      }
    },
    redis: {
      host:       "localhost",
      port:       6379
    },
    wechat: {
      appid:        "wx9852fd56ec8cbbc5",
      appsecret:    "021f04101dee3f77e856ab7563a9848e",
      scope:        "snsapi_userinfo",
      jsapi_domain: "http://shop.plat.hesq.com.cn/",
      mch_id:       "1232291902",
      key:          "f44773bf001fe9328beab30f1b9640ad",
      notify_url:   "http://hrest.ngrok.cc/wepay/notify",
      trade_type:   "JSAPI"
    }
  }
}
// ---------------------------------------------------------------------------- Env
let env = process.env.NODE_ENV === 'development' ? 'development' : 'production'
// ---------------------------------------------------------------------------- Exports
module.exports = _.merge({port}, common, conf[env])