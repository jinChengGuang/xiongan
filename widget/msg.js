//---------------------------------------------------------------------------- Exports
const MSG = {
  //-------------------------------------------------------------------------- dateFormat
  /**
   * 错误提示框
   */
  error (father,msg) {
    let ele = document.getElementById(father)
    msg = msg ? msg  :  '已失败'
    let error = document.createElement('div')
    error.setAttribute("style", "display:none")
    error.innerHTML =  '\
                    <div class="weui_mask_transparent"></div>\
                    <div class="weui-toast weui-animate-fade-in">\
                       <i class="weui-icon_toast icon f-s-f45 t-c-white m-y-10" style="margin-top:20px">&#xe82c;</i>\
                       <p class="weui-toast__content">' + msg + '</p>\
                    </div>\
        '
    ele.appendChild(error)
    error.style.display = 'block'
    setTimeout(function(){
          error.style.display = 'none'
          ele.removeChild(error)
        },1500)
  }
}