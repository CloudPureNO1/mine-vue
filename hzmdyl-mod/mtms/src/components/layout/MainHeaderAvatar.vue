<template>
<fragment>
    <div style="float:right;height:100%;padding-right:5px;padding-left:5px;">
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
    <div style="float:right;padding-right:10px;height:100%;display:flex;">
        <el-avatar :shape="shape" :size="avatarSize" :fit="fit" :src="avatarData.url"  style="align-self:center;">
        </el-avatar>
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
            }
        }
    }
}
</script>
