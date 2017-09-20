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
        <div class="col-1 icon pl-0 mt-2 letter" style='font-size:18px; position: relative'><a href='/front/company/mail'>&#xe7d5;<a><span style='position: absolute; display: inline-block; width:6px; height:6px; background: red; border-radius: 50%; top:0; right:34%;'></span></div>
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
  <div class="container-fluid py-1 bottom" style="font-size:12px; background:url('/../skins/img/bottom.png') no-repeat; background-size:100% 100%; position: fixed; bottom: 0; left: 0; z-index: 10; height:75px">
    <div class="row m-t-28">
    <div class="col" style='text-align: center; padding:0;'>
      <a href="/front/company/home" style='display: block; width: 100%; height: 100%;'>
        <i class="icon notbig t-c-7c88 f-s-f22" v-if="keyword != 'home'">&#xe8e2;</i>
        <i class="icon notbig f-s-f22" style=' color:#01aaef!important' v-if="keyword == 'home'">&#xe8e6;</i>
        <p class="mb-0 f-s-f11" :class="{'t-c-01aaef' : keyword == 'home'}">首页</p >
      </a>
    </div>
    <div class="col" style=' text-align: center; padding:0;'>
      <a href="/front/company/recruit_list" style='display: block; width: 100%; height: 100%;'>
        <i class="icon notbig t-c-7c88 f-s-f22"  v-if="keyword != 'recruit'">&#xe8e7;</i>
        <i class="icon notbig f-s-f22" style='color:#01aaef!important' v-if="keyword == 'recruit'">&#xe8e5;</i>
        <p class="mb-0 f-s-f11"  :class="{'t-c-01aaef' : keyword == 'recruit'}">招聘</p >
      </a>
    </div>
    <div class="col" style=' text-align: center; padding:0;'>
      <a href="/front/company/play" style='display: block; width: 100%; height: 100%; color: #323232;'>
        <i class="icon big" style='position:absolute; top:-35%; left:27%; font-size:2rem!important; color:#ff7358'>&#xe8ff;</i>
        <p class="mb-0 play f-s-f11" style='padding-top:30%;' :class="{'t-c-01aaef' : keyword == 'play'}">新区直播</p >
      </a>
    </div>
    <div class="col" style=' text-align: center; padding:0;'>
      <a href="/front/company/cultivate_list" style='display: block; width: 100%; height: 100%;'>
        <i class="icon notbig t-c-7c88 f-s-f22" v-if="keyword != 'cultivate'">&#xe8ea;</i>
        <i class="icon notbig f-s-f22" style=' color:#01aaef!important' v-if="keyword == 'cultivate'">&#xe8e8;</i>
        <p class="mb-0 f-s-f11" :class="{'t-c-01aaef' : keyword == 'cultivate'}">培训</p >
      </a>
    </div>
    <div class="col" style=' text-align: center; padding:0;'>
      <a href="/front/company/compan_home" style='display: block; width: 100%; height: 100%;'>
        <i class="icon notbig t-c-7c88 f-s-f22"  v-if="keyword != 'my'">&#xe8e4;</i>
        <i class="icon notbig f-s-f22" style='color:#01aaef!important' v-if="keyword == 'my'">&#xe8e9;</i>
        <p class="mb-0 f-s-f11" :class="{'t-c-01aaef' : keyword == 'my'}">我的</p >
      </a>
    </div>
  </div>
</div>
    `
    ctx.state.fjob = `
    <div class="container-fluid py-1 bottom" style="font-size:12px; background:url('/../skins/img/bottom.png') no-repeat; background-size:100% 100%; position: fixed; bottom: 0; left: 0; z-index: 10; height:75px">
      <div class="row m-t-28">
      <div class="col" style='text-align: center; padding:0;'>
        <a href="/front/jobseeker/home" style='display: block; width: 100%; height: 100%; color: #323232!important;'>
          <i class="icon notbig t-c-7c88 f-s-f22" v-if="keyword != 'home'">&#xe8e2;</i>
          <i class="icon notbig f-s-f22" style=' color:#01aaef!important' v-if="keyword == 'home'">&#xe8e6;</i>
          <p class="mb-0 f-s-f11" :class="{'t-c-01aaef' : keyword == 'home'}">首页</p >
        </a>
      </div>
      <div class="col" style=' text-align: center; padding:0;'>
        <a href="/front/jobseeker/jobseeker_list" style='display: block; width: 100%; height: 100%; color: #323232!important;'>
          <i class="icon notbig t-c-7c88 f-s-f22" v-if="keyword != 'recruit'">&#xe8e7;</i>
          <i class="icon notbig f-s-f22" style='color:#01aaef!important' v-if="keyword == 'recruit'">&#xe8e5;</i>
          <p class="mb-0 f-s-f11" :class="{'t-c-01aaef' : keyword == 'recruit'}">求职</p >
        </a>
      </div>
      <div class="col" style=' text-align: center; padding:0;'>
        <a href="/front/jobseeker/play" style='display: block; width: 100%; height: 100%; color: #323232;'>
          <i class="icon big" style='position:absolute; top:-35%; left:27%; font-size:2rem!important; color:#ff7358'>&#xe8ff;</i>
          <p class="mb-0 play f-s-f11" style='padding-top:30%;' :class="{'t-c-01aaef' : keyword == 'play'}">新区直播</p >
        </a>
      </div>
      <div class="col" style=' text-align: center; padding:0;'>
        <a href="/front/jobseeker/cultivate_list" style='display: block; width: 100%; height: 100%; color: #323232!important;'>
          <i class="icon notbig t-c-7c88 f-s-f22" v-if="keyword != 'cultivate'">&#xe8ea;</i>
          <i class="icon notbig f-s-f22" style='color:#01aaef!important' v-if="keyword == 'cultivate'">&#xe8e8;</i>
          <p class="mb-0 f-s-f11" :class="{'t-c-01aaef' : keyword == 'cultivate'}">培训</p >
        </a>
      </div>
      <div class="col" style=' text-align: center; padding:0;'>
        <a href="/front/jobseeker/user_home" style='display: block; width: 100%; height: 100%; color: #323232!important;'>
          <i class="icon notbig t-c-7c88 f-s-f22"  v-if="keyword != 'my'">&#xe8e4;</i>
          <i class="icon notbig f-s-f22" style=' color:#01aaef!important' v-if="keyword == 'my'">&#xe8e9;</i>
          <p class="mb-0 f-s-f11"  :class="{'t-c-01aaef' : keyword == 'my'}">我的</p >
        </a>
      </div>
    </div>
    `
  ctx.state.tname = `
    <div class="container-fluid fixed bor-b-sol bor-eae  align-middle f-s-17" style='z-index:530; top:0; left:0;'>
      <div class="row h-45 lh-45 bg-white">
        <div class="col-2 ">
          <a href="javascript:history.go(-1)" class='t-c-0a0'>
            <i class="icon text-center f-s-f22 va-m">&#xe90f;</i>
          </a>
        </div>
        <div class="col-8 text-center va-m">
          <span>{{name}}</span>
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