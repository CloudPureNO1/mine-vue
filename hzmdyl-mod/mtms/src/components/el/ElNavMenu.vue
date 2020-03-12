<template>
    <div>
        <el-menu>
            <el-menu-item index="1001" :collapse="collapse" :default-active="defaultActive" :unique-opened="uniqueOpend">
                <slot title="collapse"></slot>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return {
            collapse:false,//是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
            defaultActive:'1001-1',//default-active//默认打开的菜单
            uniqueOpend:true,//unique-opend 是否只保持一个子菜单的打开 默认false

            
        }
    }
}
</script>