// ---------------------------------------------------------------------------- GET
exports.get = {
  /**
   * 区域列表
   */
  '/area/list': async (ctx, next) => {
    ctx.result.ok.data = ['容城','雄县','安新','保定']
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 经验要求列表
   */
  '/experience/list': async (ctx, next) => {
    ctx.result.ok.data = ['无经验','1年以下','1-3年','3-5年','5-10年','10年以上']
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 薪资列表
   */
  '/pay/list': async (ctx, next) => {
    ctx.result.ok.data = ['2000以下','2000-3000','3000-5000','5000-10000','10000以上']
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 经验要求
   */
  '/experience/list': async (ctx, next) => {
    ctx.result.ok.data = ['不限','可接受无经验','1年以下','1-3年','3-5年','5-10年','10年以上']
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 福利待遇列表
   */
  '/benefit/list': async (ctx, next) => {
    ctx.result.ok.data = [{name:'五险一金',checked:false},{name:'五险一金',checked:false},{name:'年底双薪',checked:false},{name:'绩效奖金',checked:false},{name:'年终分红',checked:false},{name:'股票期权',checked:false},{name:'加班补助',checked:false},{name:'全勤奖',checked:false},{name:'包吃包住',checked:false},{name:'交通补助',checked:false},{name:'餐补',checked:false},{name:'房补',checked:false},{name:'通讯补贴',checked:false},{name:'采暖补贴',checked:false},{name:'带薪年假',checked:false},{name:'弹性工作',checked:false},{name:'补充医疗保险',checked:false},{name:'定期体检',checked:false},{name:'免费班车',checked:false},{name:'员工旅游',checked:false},{name:'高温补贴',checked:false},{name:'节日福利',checked:false}]
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 学历要求列表
   */
  '/education/list': async (ctx, next) => {
    ctx.result.ok.data = ['初中','中技','高中','中专','大专','本科','硕士','MBA','EMBA','博士','其他']
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 职位类型列表
   */
  '/jobtype/list': async (ctx, next) => {
    let data = await $.mysql.query($.conf.mysql.main, 'select * from job_type' , [null])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 企业性质列表
   */
  '/company/kind/list': async (ctx, next) => {
    ctx.result.ok.data = ['国企','外商独资','代表处','合资','民营','股份制企业','上市公司','国家机关','事业单位','银行','医院','学校/下级学院','律师事务所','社会团体','港澳台公司','其他']
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 公司规模列表
   */
  '/company/scope/list': async (ctx, next) => {
    ctx.result.ok.data = ['20人以下','20-99人','100-499人','500-999人','1000-9999人','10000人以上' ]
    $.flush(ctx, ctx.result.ok)
  },
/**
   * 经验要求列表
   */
  '/experience/list': async (ctx, next) => {
    ctx.result.ok.data = ['无经验','1年以下','1-3年','3-5年','5-10年','10年以上']
    $.flush(ctx, ctx.result.ok)
  },

/**
   * 职位列表
   */
  '/job/all/list': async (ctx, next) => {
    let{ name, area, pay, time,benefit } = ctx.get
    let where = ''
    let params = []
    let sql=''
    if(name){
      where = where + ' and (name = ? or cname = ? )'
      params.push(name,name)
    }
    if(area){
      where =  where + ' and area = ? '
      params.push(area)
    }
    if(pay){
      where =  where + ' and pay = ? '
      params.push(pay)
    }
    if(time){
        let a = $.time.betweenDay().start/1000-(time-1)*60*60*24
        where =  where + ' and issue_time > ? '
        params.push(a)
    }
    if(benefit){
      let a  = benefit.split("|")
       for(let v of a ){
        where = ' and benefit like "%'+ v + '%"'
      }
    }
    sql= 'select * from job where examine = 1 and status=1 ' + where +'order by issue_time' 
    let job = await $.mysql.query($.conf.mysql.main, sql, params)
    ctx.result.ok.data = job
    $.flush(ctx, ctx.result.ok)
  },
/**
   * 搜索为你推荐
   */
  '/search/recommend': async (ctx, next) => {
    let {name} = ctx.get
    let uid = ctx.user.id
    let data = []
    let where = ''
    if(name){
      await $.mysql.push($.conf.mysql.main, 'insert into history (uid,keyword) values (?,?)', [ uid,name ])
      for(let v of name ){
        where = where + ( name.indexOf(v) == 0? ' and (name like "%'+ v + '%" or cname like "%' + v + '%")' : ' or (name like "%'+ v + '%" or cname like "%' + v + '%")')
      }
      let sql= 'select * from job where examine = 1 and status=1 ' + where +' order by issue_time' 
      let job = await $.mysql.query($.conf.mysql.main, sql, [null])
      ctx.result.ok.data = job
      $.flush(ctx, ctx.result.ok)
      return
    }
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 首页直播
   */
  '/home/live': async (ctx, next) => {
    let live = await $.mysql.query($.conf.mysql.main, 'select * from live where ishome =1' , [null])
    ctx.result.ok.data = live
    $.flush(ctx, ctx.result.ok)
  },
  
  /**
   * 我的报名列表
   */
  '/cultivate/list': async (ctx, next) => {
    let uid = ctx.user.id
    let cid = ctx.company.id 
    if(cid){
      let list = await $.mysql.query($.conf.mysql.main, 'select * from apply_record where cid =?' , [cid])
      ctx.result.ok.data = list
      $.flush(ctx, ctx.result.ok)
    }else{
      let list = await $.mysql.query($.conf.mysql.main, 'select * from apply_record where uid =?' , [uid])
      ctx.result.ok.data = list
      $.flush(ctx, ctx.result.ok)
    }
  },
  /**
   * 直播列表
   */
  '/live/list': async (ctx, next) => {
    let live = await $.mysql.query($.conf.mysql.main, 'select * from live ' , [null])
    ctx.result.ok.data = live
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 培训列表
   */
  '/cultivate/lists': async (ctx, next) => {
    let cultivate = await $.mysql.query($.conf.mysql.main, 'select * from cultivate ' , [null])
    ctx.result.ok.data = cultivate
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 培训详情
   */
  '/cultivate/detail/:id': async (ctx, next) => {
    let id = ctx.params.id
    let cultivate = await 
    $.mysql.query($.conf.mysql.main, 'select * from cultivate where id =? ' , [id])
    ctx.result.ok.data = cultivate
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 首页轮播
   */
  '/home/swiper': async (ctx, next) => {
    let swiper = await $.mysql.query($.conf.mysql.main, 'select * from swiper order by sort' , [null])
    ctx.result.ok.data = swiper
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 搜索记录列表
   */
  '/search/history/list': async (ctx, next) => {
    let uid = ctx.user.id
    let history = await $.mysql.query($.conf.mysql.main, 'select * from history where uid =? order by id desc limit 0,15' , [uid])
    ctx.result.ok.data = history
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 职位详情
   */
  '/job/detail/:id': async (ctx, next) => {
    let id = ctx.params.id
    let job = await $.mysql.query($.conf.mysql.main, 'select * from job where id = ?', [id])
    ctx.result.ok.data = job
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 消息详情
   */
  '/msg/detail/:type': async (ctx, next) => {
    let cid = ctx.company.id
    let type = ctx.params.type
    if(type=='examine'){
      await $.mysql.push($.conf.mysql.main, 'update msg set isread=1 where type = 0 or type = 1 and cid =? ', [ cid ])
      let msg = await $.mysql.query($.conf.mysql.main, 'select * from msg where type in (0,1) and cid =?', [cid])
      ctx.result.ok.data = msg
      $.flush(ctx, ctx.result.ok)
    }else{
      await $.mysql.push($.conf.mysql.main, 'update msg set isread=1 where type = 2 and cid =? ', [type, cid ])
      let msg = await $.mysql.query($.conf.mysql.main, 'select * from msg where type = 2 and cid =?', [type,cid])
      ctx.result.ok.data = msg
      $.flush(ctx, ctx.result.ok)
    } 
  },
  /**
   * 热门搜索公司
   */
  '/company/search/hot': async (ctx, next) => {
    let company = await $.mysql.query($.conf.mysql.main, 'select * from  company where ishot = 1', [null])
    ctx.result.ok.data = company
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 热门搜索职位
   */
  '/job/search/hot': async (ctx, next) => {
    let job = await $.mysql.query($.conf.mysql.main, 'select * from job where ishot = 1', [null])
    ctx.result.ok.data = job
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 公司行业列表
   */
  '/company/industry/list': async (ctx, next) => {
    let industry = await $.mysql.query($.conf.mysql.main, 'select * from industry', [null])
    ctx.result.ok.data = industry
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 公司详情
   */
  '/company/detail/:id': async (ctx, next) => {
    let id = ctx.params.id
    let company = await $.mysql.query($.conf.mysql.main, 'select * from company where id = ? ', [id])
    let job = await $.mysql.query($.conf.mysql.main, 'select * from job where cid = ? and examine = 1 and status=1 order by issue_time desc', [id])
    let industry = await $.mysql.query($.conf.mysql.main, 'select * from industry where id=?',[company[0].iid])
    ctx.result.ok.data = [company[0],job,industry[0]]
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 公司简历记录
   */
  '/company/resume/record': async (ctx, next) => {
    let cid = ctx.company.id
    let record = []
    let job = await $.mysql.query($.conf.mysql.main, 'select * from job where cid = ? and examine = 1 ', [cid])
    for (let v of job){
      let count = await $.mysql.query($.conf.mysql.main, 'select * from resume_record where jid = ?  and status <2 ', [v.id])
      if(count.length){
        v.count= count.length
        record.push(v)
      }
    }
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 我发出的邀请
   */
  '/user/invite/record': async (ctx, next) => {
    let cid = ctx.company.id
    let record = await $.mysql.query($.conf.mysql.main, 'select * from  resume_record where cid = ? and status = 1 ', [cid])
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 职位简历记录
   */
  '/job/resume/record/:id': async (ctx, next) => {
    let id = ctx.params.id
    let record = await $.mysql.query($.conf.mysql.main, ' select A.*,B.name as uname,B.education,B.experience,B.mobile as usermobile,B.head as uhead,c.name as jname from resume_record A,resume B,job C where A.jid = ? and A.status <2 and B.id = A.rid and C.id = ? order by sort desc  ', [id,id])
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 本公司发布岗位列表
   */
  '/company/job/list': async (ctx, next) => {
    let cid = ctx.company.id
    let job = await $.mysql.query($.conf.mysql.main, 'select * from job where cid = ? and examine = 1 and status<2 order by issue_time desc', [cid])
    ctx.result.ok.data = job
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 消息红点
   */
  '/msg/red': async (ctx, next) => {
    let cid = ctx.company.id
    let red = await $.mysql.query($.conf.mysql.main, 'select * from msg where isread = 0 and cid=?', [cid])
    ctx.result.ok.data = red
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 职位类型列表
   */
  '/jobtype/list': async (ctx, next) => {
    let data = await $.mysql.query($.conf.mysql.main, 'select * from job_type', [null])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
/**
 * 企业认证详情
 */
'/company/test/detail': async (ctx, next) => {
  let id = ctx.company.id
  let data = await $.mysql.query($.conf.mysql.main, 'select A.*,B.name as bname from company A, industry B where A.iid=B.id and A.id = ?', [id])
  ctx.result.ok.data = data
  $.flush(ctx, ctx.result.ok)
},
  /**
   * 系统通知消息红点
   */
  '/examine/msg/red': async (ctx, next) => {
    let cid = ctx.company.id
    let red = await $.mysql.query($.conf.mysql.main, 'select * from msg where isread = 0 and type in (0,1) and cid=?', [cid])
    ctx.result.ok.data = red
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 用户投递消息红点
   */
  '/user/msg/red': async (ctx, next) => {
    let cid = ctx.company.id
    let red = await $.mysql.query($.conf.mysql.main, 'select * from msg where isread = 0 and type = 2 and cid=?', [cid])
    ctx.result.ok.data = red
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 我发出的邀请
   */
  '/user/invite/record': async (ctx, next) => {
    let cid = ctx.company.id
    let record = await $.mysql.query($.conf.mysql.main, 'select * from  resume_record where cid = ? and status = 1 ', [cid])
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
}
// ---------------------------------------------------------------------------- POST
exports.post = {
   /**
   * 报名培训
   */
  '/add/cultivate/record': async (ctx, next) => {
    let uid = ctx.user.id
    let cid = ctx.company.id
    
    let { culid, culname} = ctx.post
    let apply_time = $.time10()
    if(cid){
      let data=await $.mysql.push($.conf.mysql.main, 'insert into apply_record (culid,culname,cid,apply_time) values (?,?,?,?)', [culid,culname,cid,apply_time])
      ctx.result.ok.data = data
      $.flush(ctx, ctx.result.ok)
    }else{
      let data=await $.mysql.push($.conf.mysql.main, 'insert into apply_record (culid,culname,uid,apply_time) values (?,?,?,?)', [culid,culname,uid,apply_time])
      ctx.result.ok.data = data
      $.flush(ctx, ctx.result.ok)
    }
  },
  /**
   * 发布岗位
   */
  '/job/add': async (ctx, next) => {
    let cid = ctx.company.id
    let cname = ctx.company.name
    let { name,jtid, pay, area,benefit,education,experience,address,statement,requirements,status } = ctx.post
    let data = await $.mysql.push($.conf.mysql.main, 'insert into job (cid ,name,cname, jtid, pay, area,benefit,education,experience,address,statement,requirements,status)values(?,?,?,?,?,?,?,?,?,?,?,?,?)', [cid ,name,cname, jtid, pay, area,benefit,education,experience,address,statement,requirements,status])
    let content = '您于'+$.time.format('yyyy-mm-dd')+'发布的'+name+'岗位等待审核，审核结果会在1-2个工作日之内通知您，请注意查看'
    let time = $.time10()
    await $.mysql.push($.conf.mysql.main, 'insert into msg (cid ,content,time)values(?,?,?)', [id ,content.time])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  }
}
// ---------------------------------------------------------------------------- PUT
exports.put = {
  /**
   * 取消报名培训
   */
  '/cancel/cultivate/record': async (ctx, next) => {
    let uid = ctx.user.id
    let cid = ctx.company.id
    let { id } = ctx.put
    let cancle_time = $.time10()
    let data = await $.mysql.push($.conf.mysql.main, 'update apply_record set status=1, cancle_time=? where id =? ', [cancle_time,id])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 发布企业认证
   */
  '/company/add': async (ctx, next) => {
    let id = ctx.company.id
    let { name, kind, iid, age, scope, address, website, email, contact_name, contact_mobile ,summary, certificate, idcard_front, idcard_reverse, logo } = ctx.put
    let data = await $.mysql.push($.conf.mysql.main, 'update company set name=?, kind=?, iid=?, age=?, scope=?, address=?, website=?, email=?, contact_name=?, contact_mobile=? ,summary=?, certificate=?, idcard_front=?, idcard_reverse=?, logo=?,examine = 0  where id =? ', [name, kind, iid, age, scope, address, website, email, contact_name, contact_mobile ,summary, certificate, idcard_front, idcard_reverse, logo, id])
    let content = '您于'+$.time.format('yyyy-mm-dd')+'申请的'+name+'企业认证等待审核，审核结果会在1-2个工作日之内通知您，请注意查看'
    let time = $.time10()
    await $.mysql.push($.conf.mysql.main, 'insert into msg (cid ,content,time) values(?,?,?)', [id ,content.time])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 邀请岗位
   */
  '/invite/resume': async (ctx, next) => {
    let invitetime = $.time10()
    let { interviewtime, mobile, address, remark, id } = ctx.put
    let resume = await $.mysql.query($.conf.mysql.main, 'select * from resume_record where id=?', [id])
    let data=await $.mysql.push($.conf.mysql.main, 'update resume_record set status=1, invitetime=?, interviewtime=?,mobile =?,address=?,remark=?  where id =? ', [invitetime,interviewtime, mobile, address, remark, id])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 编辑发布岗位
   */
  '/edit/job': async (ctx, next) => {
    // 判断是否更改了可编辑内容
    let {jtid, pay, area,benefit,education,experience,status,id,name,address,statement,requirements} = ctx.put
    let job = await $.mysql.query($.conf.mysql.main, 'select * from job where id = ?', [id]) 
    if(name!==job[0].name||address!==job[0].address||statement!==job[0].statement||requirements!==job[0].requirements){
      await $.mysql.push($.conf.mysql.main, 'update job set name = ?, address=?, statement=?, requirements=?, examine =0 where id =? ', [name, address, statement, requirements,id])
      let content = '您于'+$.time.format('yyyy-mm-dd')+'发布的'+name+'岗位等待审核，审核结果会在1-2个工作日之内通知您，请注意查看'
      let time = $.time10()
      await $.mysql.push($.conf.mysql.main, 'insert into msg (cid ,content,time)values(?,?,?)', [id ,content.time])
    }
    let data = await $.mysql.push($.conf.mysql.main, 'update job set jtid = ?,pay=?,area=?,benefit=?,education=?,experience=?,status=? where id =? ', [jtid, pay, area,benefit,education,experience,status,id])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 标记简历
   */
  '/mark/resume': async (ctx, next) => {
    let { id } = ctx.put
    let data=await $.mysql.push($.conf.mysql.main, 'update resume_record set sort=1  where id =? ', [ id])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 刷新职位
   */
  '/update/resumetime': async (ctx, next) => {
    let { id } = ctx.put
    let issue_time = $.time10()
    let data=await $.mysql.push($.conf.mysql.main, 'update job set issue_time =?  where id =? ', [ issue_time, id])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 删除简历
   */
  '/delete/resume': async (ctx, next) => {
    let { id } = ctx.put
    let data=await $.mysql.push($.conf.mysql.main, 'update resume_record set status=2  where id =? ', [ id])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 删除岗位
   */
  '/delete/job': async (ctx, next) => {
    let { id } = ctx.put
    let data=await $.mysql.push($.conf.mysql.main, 'update job set status=2  where id =? ', [ id])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
}
// ---------------------------------------------------------------------------- DELETE
exports.delete = {
  '/': async (ctx, next) => {
    ctx.result.ok.data = ctx.delete
    $.flush(ctx, ctx.result.ok)
  },
    /**
   * 删除所搜
   */
  '/history/delete': async (ctx, next) => {
    let uid = ctx.user.id
    let data=await $.mysql.push($.conf.mysql.main, 'delete from history where uid =? ', [uid])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  }
}