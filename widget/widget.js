//---------------------------------------------------------------------------- Strict
'use strict'
//---------------------------------------------------------------------------- Exports
module.exports = function () {
  return async (ctx, next) => {
    ctx.state.h = `
    <div class="container-fluid header" style='position: fixed; top:0; height: 42px; background: #f1f1f1; z-index: 100;' >
      <div class="row mt-2">
        <div class="col-1 icon icon_1 mt-2 pl-2" style='font-size:18px;'>&#xe873;</div>
        <div class="col-10 pl-2" >
          <input type="autocomplete" placeholder="搜索职位/公司" style='height:28px; width: 100%; background: #fff; font-size:14px; padding-left: 10%; color: #dfdfdf;'>
          <span class='icon' style='position: absolute; top:40%; left:5%;'>&#xe7fd;</span>
        </div>
        <div class="col-1 icon pl-0 mt-2 letter" style='font-size:18px; position: relative'>&#xe7d5;<span style='position: absolute; display: inline-block; width:6px; height:6px; background: red; border-radius: 50%; top:0; right:5px;'></span></div>
      </div>
    </div>
    `
    ctx.state.h_1 = `
    <div class="container-fluid top">
      <div class="row tab">
        <div class="col-2 ">
          <i class="icon back">&#xe86c;</i>
        </div>
        <div class="col-8 middle">
          <span>课程详情</span>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
    `
    ctx.state.f = `
  <div class="container-fluid py-1 bottom" style='font-size:12px; background-color: #fff; position: fixed; bottom: 0; left: 0; z-index: 10; border-top:#dcdddd solid 1px;'>
    <div class="row">
    <div class="col" style='text-align: center; padding:0;'>
      <a href="/front/company/home" style='display: block; width: 100%; height: 100%; color: #323232;'>
        <i class="icon notbig" style='font-size:1rem!important;'>&#xe7c9;</i>
        <p class="mb-0" style='font-size:0.8rem;'>首页</p >
      </a>
    </div>
    <div class="col" style=' text-align: center; padding:0;'>
      <a href="/front/company/recruit_list" style='display: block; width: 100%; height: 100%; color: #323232;'>
        <i class="icon notbig" style='font-size:1rem!important;'>&#xe788;</i>
        <p class="mb-0" style='font-size:0.8rem;'>招聘</p >
      </a>
    </div>
    <div class="col" style=' text-align: center; padding:0;'>
      <a href="/front/company/play" style='display: block; width: 100%; height: 100%; color: #323232;'>
        <i class="icon big" style='position:absolute; top:-50%; left:27%; font-size:2rem!important;'>&#xe7df;</i>
        <p class="mb-0 play" style='padding-top:29%;' style='font-size:0.8rem;'>雄安直播</p >
      </a>
    </div>
    <div class="col" style=' text-align: center; padding:0;'>
      <a href="/front/company/cultivate_list" style='display: block; width: 100%; height: 100%; color: #323232;'>
        <i class="icon notbig" style='font-size:1rem!important;'>&#xe603;</i>
        <p class="mb-0" style='font-size:0.8rem;'>培训</p >
      </a>
    </div>
    <div class="col" style=' text-align: center; padding:0;>
      <a href="/front/company/compan_home" style='display: block; width: 100%; height: 100%; color: #323232;'>
        <i class="icon notbig" style='font-size:1rem!important;'>&#xe81f;</i>
        <p class="mb-0" style='font-size:0.8rem;'>我的</p >
      </a>
    </div>
  </div>
</div>
    `
    /**
     * 向后传递
     */
    await next()
  }
}