//---------------------------------------------------------------------------- Strict
'use strict'
//---------------------------------------------------------------------------- Exports
module.exports = function () {
  return async (ctx, next) => {
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
        <i class="icon big" style='position:absolute; top:-35%; left:29%; font-size:2rem!important; color:#ff7358'>&#xe8ff;</i>
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
          <i class="icon big" style='position:absolute; top:-35%; left:29%; font-size:2rem!important; color:#ff7358'>&#xe8ff;</i>
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
            <i class="icon text-center f-s-f22 va-m" style='color:#7c88a4;'>&#xe90f;</i>
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