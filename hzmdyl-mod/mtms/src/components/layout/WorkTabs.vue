<template>
<!--
<div style="margin-bottom: 20px;">
  <el-button
    size="small"
    @click="addTab(editableTabsValue)"
  >
    add tab
  </el-button>
</div>
-->
<el-tabs v-model="activeName" type="border-card" closable @tab-remove="removeTab">
    <el-tab-pane label="欢迎" name="Welcome"  :closable ="false" >
      <mtms-welcome></mtms-welcome>
    </el-tab-pane>
    <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.label" :name="item.name" :closable="item.closable" :disabled="item.disabled">
        <!--通过component  接入自定义组件，如果item.content 为welcome 则引入<welcome></welcome>组件-->
        <component :is="item.component"></component>
    </el-tab-pane>
</el-tabs>
</template>

<script>
import Welcome from '@/components/layout/Welcome'
export default {
    components:{
      'mtms-welcome':Welcome
    },
    data() {
        return {
            activeName: "Welcome", //默认激活
            tabs: [] 
        };
    },
    watch:{
      $route(){
        this.addTab();
      }
    },
    methods: {
        addTab() {
            //首页默认显示欢迎tab 单独处理
            if(this.$route.name==='Home'){
               this.activeName='Welcome';
               return false;
            }
            if(this.tabs.filter(tabItem=>tabItem.name==this.$route.name) == 0){
              //当前菜单未在tab中打开，添加tab
                let meta = this.$route.meta;
                if(meta.sign){
                    let filePath='';
                    meta.sign.forEach(item=>{
                      filePath=(filePath==''?'':filePath+'/')+item;
                    });
                    var MyComponent = resolve => require([`@/components/tabs/${filePath}/${this.$route.name}`], resolve);
                    let tab={
                      label:meta.title,
                      name:this.$route.name, 
                      disabled:false,
                      closable:false,
                      component:MyComponent
                    }
                    this.tabs.push(tab);
                    this.activeName=this.$route.name;
                }
            }else{
              //已经打开，激活tab
              this.activeName=this.$route.name;
            }
        },
        removeTab(targetName) {
            if (this.activeName === targetName) {
                this.tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = this.tabs[index + 1] || this.tabs[index - 1];
                        if (nextTab) {
                            this.activeName = nextTab.name;
                        }else{
                            this.activeName='Welcome';
                        }
                    }
                });
            }
            this.tabs =this.tabs.filter(tab => tab.name !== targetName);
        }
    }
};
</script>
