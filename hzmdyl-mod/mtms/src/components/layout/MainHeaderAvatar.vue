<template>
<fragment>
    <div  class="header-avatar-main box">
        <div>
            <span :class="['icon iconfont',screenIconfont,'iconfont-medium iconfont-color-nomal']" @click="toggleFullScreen"></span> 
        </div>
        <div>
            <el-avatar :shape="shape" :size="avatarSize" :fit="fit" :src="avatarData.url">
            </el-avatar>
        </div>
        <div>
            <div style="height:50%;">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>设置</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div style="height:50%;">
                <el-dropdown>
                    <i class="el-icon-caret-bottom" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</fragment>
</template>

<script>
export default {
    data() {
        return {
            shape:'circle',
            fit: 'fill',
            avatarSize: 52, //默认
            avatarData: {
                url: require('@/assets/img/9.gif')
            },
            isFullScreen:false, 
        }
    },
    computed:{
        screenIconfont(){
            return this.isFullScreen?'icon-ln_quanpingtuichu':'icon-ln_quanping'
        }
    },
    methods:{
        toggleFullScreen(){
            let element = document.documentElement;
            // 判断是否已经是全屏
            // 如果是全屏，退出
            if (this.isFullScreen) {
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
            this.isFullScreen=!this.isFullScreen;
        },
    }
}
</script>
<style >
    .header-avatar-main>div:nth-child(1){
        padding:1rem 0 1rem 1rem;
    }
    .header-avatar-main>div:nth-child(2){
        padding: 0px 1rem 0px 1rem;
    }
    .header-avatar-main>div:nth-child(2){
        padding: 0px 1rem 0px 1rem;
    }
</style>
 
