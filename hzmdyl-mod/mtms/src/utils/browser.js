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