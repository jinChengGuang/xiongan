//---------------------------------------------------------------------------- Strict
'use strict'
//---------------------------------------------------------------------------- Exports
module.exports = function () {
  return async (ctx, next) => {
    ctx.state.upload = `
    <div>
      <div class='upload' v-for='(v, i) in data'>
        <img :src= 'v'>
		    <a @click='remove(i)' > 删除 </a>
      </div>
      <div class='upload' v-for='(v, i) in data'>
        <input id='upload',type='file' :multiple='multiple' accept='image/*' @change='upload'>
		    <i class='icon' >  &#xe623; </i>
      </div>
    </div>
    `
    /**
     * 向后传递
     */
    await next()
  }
}