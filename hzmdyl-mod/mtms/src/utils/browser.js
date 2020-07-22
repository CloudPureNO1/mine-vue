    /**
     * 全屏
     * @export
     * @param {*} element
     * @returns
     */
    export function $launchFullScreen(element) {
      if (element.requestFullscreen) { //W3C
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) { //Chrome
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) { //Firfox
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) { //IE11
        element.msRequestFullscreen();
      } else { //其他不支持的，采用F11快捷键
        if (typeof window.ActiveXObject != "undefined") {
          let wscript = new ActiveXObject("WScript.Shell");
          if (wscript != null) {
            wscript.SendKeys("{F11}");
          }
        }

      }
      return true;
    }


    //退出全屏模式
    export function $exitFullScreen() {
      if (document.exitFullscreen) { //W3C
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) { //Chrome
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) { //Firefox
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) { //IE11
        document.mozCancelFullScreen();
      } else {
        if (typeof window.ActiveXObject != "undefined") {
          let wscript = new ActiveXObject("WScript.Shell");
          if (wscript != null) {
            wscript.SendKeys("{F11}");
          }
        }
      }
      return false;
    }

    export function toggleFullScreen(isFullScreen){
      let element = document.documentElement;
      // 判断是否已经是全屏
      // 如果是全屏，退出
      if (isFullScreen) {
          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }else if (typeof window.ActiveXObject !== "undefined") {
              //for IE11一下，这里和fullScreen相同，模拟按下F11键退出全屏
              var wscript = new ActiveXObject("WScript.Shell");
              if (wscript != null) {
                  wscript.SendKeys("{F11}");
              }
          }
      } else {    // 否则，进入全屏
    
          if (element.requestFullscreen) {
              element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
              element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
              // IE11
              element.msRequestFullscreen();
          }else if (typeof window.ActiveXObject !== "undefined") {
              //for IE11一下，这里和fullScreen相同，模拟按下F11键退出全屏
              var wscript = new ActiveXObject("WScript.Shell");
              if (wscript != null) {
                  wscript.SendKeys("{F11}");
              }
          }
      }
  }