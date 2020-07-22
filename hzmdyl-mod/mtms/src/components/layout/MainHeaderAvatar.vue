<template>
<fragment>
    <div  class="header-avatar-main box-end">
        <div>
            <span :class="['icon iconfont',screenIconfont, fullScreenImgSize,'iconfont-color-nomal']" @click="toggleFullScreen"></span> 
        </div>
        <div>
            <el-avatar :shape="shape" :size="avatarSize" :fit="fit" :src="avatarData.url">
            </el-avatar>
        </div>
        <div>
            <div style="height:50%;">
                <el-dropdown placement="bottom">
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div style="height:50%;">
                <el-dropdown placement="bottom" @command="commandLayout">
                    <i class="el-icon-caret-bottom" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <!--command  Number/String/Object-->
                        <el-dropdown-item v-for="(item,index) in layoutList" :key="index" :command="item.type">{{item.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</fragment>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            shape:'circle',
            fit: 'fill',
            avatarData: {
                url: require('@/assets/img/9.gif')
            },
            layoutList:[
                {type:'mini',name:'紧凑'},
                {type:'small',name:'默认'}
            ]
        }
    },
    computed:{
        ...mapState({
            isFullScreen:state=>state.layout.isFullScreen,
            avatarSize:state=>state.layout.avatarSize
        }),
        screenIconfont(){
            return this.isFullScreen?'icon-ln_quanpingtuichu':'icon-ln_quanping'
        },
        fullScreenImgSize(){
            return 'iconfont-'+this.avatarSize;
        }

    },
    methods:{
        ...mapActions({
            toggleIsFullScreen:'layout/toggleIsFullScreen',
            setSizeType:'layout/setSizeType',
            setAvatarSize:'layout/setAvatarSize'
        }),
        toggleFullScreen(){
            this.$toggleFullScreen(this.isFullScreen);
            this.toggleIsFullScreen();
        },
        commandLayout(command){
            //console.log(command)
            this.setSizeType(command);
            switch(command){
                case 'mini':
                    this.setAvatarSize('small');
                    break;
                case 'small':
                    this.setAvatarSize('medium');
                    break;
            }
        }
    }
}
</script>
<style >
    .header-avatar-main>div:nth-child(1){
        padding:0;
    }
    .header-avatar-main>div:nth-child(2){
        padding: 0px 0.5rem 0px 0.5rem;
    }
    .header-avatar-main>div:nth-child(3){
        padding: 0;
    }
</style>
 
