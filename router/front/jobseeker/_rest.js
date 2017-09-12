// ---------------------------------------------------------------------------- GET
exports.get = {
  /**
   * 我的投递
   */
'/user/resume/record': async (ctx, next) => {
    let uid = ctx.user.id
    let record = await $.mysql.query($.conf.mysql.main, 'select A.*, B.* from  resume_record A,job B where uid = ? and A.jid = B.id', [uid])
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 用户信息
   */
'/user/detail': async (ctx, next) => {
    ctx.result.ok.data = ctx.user
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 个人简历
   */
'/user/resume': async (ctx, next) => {
    let uid = ctx.user.id
    let resume = await $.mysql.query($.conf.mysql.main, 'select * from resume where uid=?', [uid])
    ctx.result.ok.data = resume
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 我的面试邀请
   */
  '/user/invite/record': async (ctx, next) => {
    let uid = ctx.user.id
    let record = await $.mysql.query($.conf.mysql.main, 'select A.*, B.name as uname, C.name as jname from resume_record A,resume B,job C where A.rid = B.id and A.jid = C.id and A.uid = ? and A.status = 1 ', [uid])
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 我的收藏列表
   */
  '/user/collect/list': async (ctx, next) => {
    let uid = ctx.user.id
    let time = $.time10()
    let record = await $.mysql.query($.conf.mysql.main, 'select A.*,B.* from  collect A,job B where uid = ? and A.jid = B.id', [uid])
    let data =[]
    for(let v of record){
      v.iscollect=true
      if(time-v.time>2592000){

        console.log(time-v.time)
        console.log(222222222)
        await $.mysql.push($.conf.mysql.main, 'delete from collect where id =? ', [ v.id ])
      }else{
        data.push(v)
      }
    }
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 用户工作经历列表
   */
  '/user/resume/experience/:id': async (ctx, next) => {
    let id = ctx.params.id
    let record = await $.mysql.query($.conf.mysql.main, 'select * from  experience_record where rid = ?', [id])
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 用户工作经历详情
   */
  '/user/experience/detail/:id': async (ctx, next) => {
    let id = ctx.params.id
    let record = await $.mysql.query($.conf.mysql.main, 'select * from  experience_record where id = ?', [id])
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 用户简历详情
   */
  '/user/resume': async (ctx, next) => {
    let uid = ctx.user.id
    let record = await $.mysql.query($.conf.mysql.main, 'select * from  resume where uid = ?', [uid])
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 用户教育经历列表
   */
  '/user/resume/education/:id': async (ctx, next) => {
    let id = ctx.params.id
    let record = await $.mysql.query($.conf.mysql.main, 'select * from  education_record where rid = ?', [id])
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 用户教育经历详情
   */
  '/user/education/detail/:id': async (ctx, next) => {
    let id = ctx.params.id
    let record = await $.mysql.query($.conf.mysql.main, 'select * from  education_record where id = ?', [id])
    ctx.result.ok.data = record
    $.flush(ctx, ctx.result.ok)
  },
  /*
   * 我的报名列表
   */
  '/cultivate/list': async (ctx, next) => {
    let uid = ctx.user.id
    let cid = ctx.company.id 
    if(cid){
      let list = await $.mysql.query($.conf.mysql.main, 'select * from apply_record where cid =? and status = 0' , [cid])
      ctx.result.ok.data = list
      $.flush(ctx, ctx.result.ok)
    }else{
      let list = await $.mysql.query($.conf.mysql.main, 'select * from spply_record where uid =? and status = 0' , [uid])
      ctx.result.ok.data = list
      $.flush(ctx, ctx.result.ok)
    }
  },
}
// ---------------------------------------------------------------------------- POST
exports.post = {
   /**
   * 收藏职位
   */
  '/collect/job': async (ctx, next) => {
    let uid = ctx.user.id
    let { jid } = ctx.post
    let time = $.time10()
    let data=await $.mysql.push($.conf.mysql.main, 'insert into collect (uid,jid,time) values (?,?,?) ', [ uid,jid,time ])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 投递简历
   */
  '/add/resume/record': async (ctx, next) => {
    let uid = ctx.user.id
    let { jid, rid } = ctx.post
    let resume = await $.mysql.query($.conf.mysql.main, 'select * from  resume where id = ?', [rid])
    let job = await $.mysql.query($.conf.mysql.main, 'select * from  job where id = ?', [jid])
    let time = $.time10()
    let data=await $.mysql.push($.conf.mysql.main, 'insert into resume_record (uid, rid, cid, cname, jid, time) values (?,?,?,?,?,?)', [uid, rid,job[0].cid,job[0].cname,jid,time ])
    let companycontent = resume[0].name+'投递了您公司的'+ job[0].name +'岗位，请注意查看'
    await $.mysql.push($.conf.mysql.main, 'insert into msg (cid,content,type) values (?,?,?) ', [uid, companycontent,3])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 发布简历个人基本信息
   */
  '/add/resume': async (ctx, next) => {
    let uid = ctx.user.id
    let { name, sex, head, birthday, education, experience, area, mobile, email }= ctx.post
    let data=await $.mysql.push($.conf.mysql.main, 'insert into resume (uid,name,sex,head,birthday,education,experience,area,mobile,email) values(?,?,?,?,?,?,?,?,?,?) ', [ uid,name,sex,head,birthday, education,experience,area,mobile,email ])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 发布简历教育经历
   */
  '/add/education': async (ctx, next) => {
    let { rid, start,end,school,speciality }= ctx.post
    let data=await $.mysql.push($.conf.mysql.main, 'insert into education_record (rid, start,end,school,speciality) values (?,?,?,?,?) ', [ rid, start,end,school,speciality])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 发布简历工作经历
   */
  '/add/experience': async (ctx, next) => {
    let { rid, start,end,company,job }= ctx.post
    let data=await $.mysql.push($.conf.mysql.main, 'insert into experience_record (rid, start,end,company,job) values (?,?,?,?,?) ', [ rid, start,end,company,job])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  }
}
// ---------------------------------------------------------------------------- PUT
exports.put = {
  /**
   * 编辑/添加简历求职意向
   */
  '/add/wanted': async (ctx, next) => {
    let { id,jtid,pay,want_area }= ctx.put
    let data=await $.mysql.push($.conf.mysql.main, 'update resume set jtid = ?,pay=?,want_area=? where id =? ', [ jtid, pay ,want_area, id ])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
   /**
   * 编辑简历基本下信息
   */
  '/edit/basis': async (ctx, next) => {
    let uid = ctx.user.id
    let { name, sex, head, birthday, education, experience, area, mobile, email,id }= ctx.put
    let data=await $.mysql.push($.conf.mysql.main, 'update resume set uid=?,name=?,sex=?,head=?,birthday=?,education=?,experience=?,area=?,mobile=?,email=? where id =? ', [ uid,name,sex,head,birthday, education,experience,area,mobile,email,id ])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 编辑简历个人评价
   */
  '/evaluate/add': async (ctx, next) => {
    let { evaluate,id }= ctx.put
    let data=await $.mysql.push($.conf.mysql.main, 'update resume set evaluate = ? where id =? ', [ evaluate ,id ])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 编辑简历教育经历
   */
  '/education/edit': async (ctx, next) => {
    let { start,end,school,speciality,id }= ctx.post
    let data=await $.mysql.push($.conf.mysql.main, 'update education_record set start = ?,end =?,school =?,speciality=? where id =? ', [ start,end,school,speciality,id ])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 编辑简历工作经历
   */
  '/experience/edit': async (ctx, next) => {
    let { start, end, company, job, id }= ctx.put
    let data=await $.mysql.push($.conf.mysql.main, 'update experience_record set start = ?, end =?,company =?,job=? where id =? ', [ start,end,company,job,id ])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  }
 
}
// ---------------------------------------------------------------------------- DELETE
exports.delete = {
  /**
   * 删除简历教育经历
   */
  '/education/delete/:id': async (ctx, next) => {
    let id = ctx.params.id
    let data=await $.mysql.push($.conf.mysql.main, 'delete from education_record where id =? ', [ id ])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 删除简历工作经历
   */
  '/experience/delete/:id': async (ctx, next) => {
    let id = ctx.params.id
    let data=await $.mysql.push($.conf.mysql.main, 'delete from experience_record where id =? ', [ id ])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  },
  /**
   * 删除收藏
   */
  '/collect/delete/:jid': async (ctx, next) => {
    console.log(2)
    let id = ctx.params.jid
    let uid = ctx.user.id
    let data=await $.mysql.push($.conf.mysql.main, 'delete from collect  where jid =? and uid =? ', [ id,uid ])
    ctx.result.ok.data = data
    $.flush(ctx, ctx.result.ok)
  }
}