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
<div class="tab-main"  >
<el-tabs v-model="activeName" type="border-card" closable @tab-remove="removeTab" @tab-click="chooseTab">
        <el-tab-pane label="首页" name="Home" :closable="false">
            <mtms-home></mtms-home>
        </el-tab-pane>
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.label" :name="item.name" :closable="item.closable" :disabled="item.disabled">
            <!--通过component  接入自定义组件，如果item.content 为welcome 则引入<welcome></welcome>组件-->
            <component :is="item.component"></component>
        </el-tab-pane>
</el-tabs>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Home from '@/components/tabs/home/Home'
export default {
    components: {
        'mtms-home': Home
    },
    data() {
        return {
            activeName: "Home", //默认激活
            tabs: []
        };
    },
    mounted() {
        let that=this;
        //刷新前存储打开的tab，也可以在created 中存放
        window.addEventListener('beforeunload', e => {
            sessionStorage.setItem("tabs", JSON.stringify(this.tabs));
            sessionStorage.setItem("activeName", this.activeName);
        });
        window.addEventListener('resize',e=>{
            let tabHeight = document.getElementsByClassName('el-tabs el-tabs--top el-tabs--border-card')[0].offsetHeight;
            let tabHeaderHeight = document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
            that.setTabContentHeight(tabHeight-tabHeaderHeight);
        })
    },
     
    created() {
        //加载打开的tab
        let obj = sessionStorage.getItem("tabs");
        let obj2 = sessionStorage.getItem("activeName")
        this.tabs = this.$isEmptyString(obj) ? [] : JSON.parse(obj);
        //this.activeName = this.$isEmptyString(obj2) ? "Home" : obj2;
        this.activeName=this.$route.name;
        //箭头函数this  
        let _that=this;
        this.tabs.forEach(item=>{
                let _router_obj=_that.$router.resolve(item.name);
                if(_router_obj&&_router_obj.route){
                    let meta = _router_obj.route.meta;
                        if (meta.sign) {
                            let filePath = '';
                            meta.sign.forEach(itemP => {
                                filePath = (filePath == '' ? '' : filePath + '/') + itemP;
                            });
                            var MyComponent = resolve => require([`@/components/tabs/${filePath}/${item.name}`], resolve);
                            item.component=MyComponent
                        }
                }

        });
        let that=this;
        this.$nextTick(function(){
                let tabHeight = document.getElementsByClassName('el-tabs el-tabs--top el-tabs--border-card')[0].offsetHeight;
                let tabHeaderHeight = document.getElementsByClassName('el-tabs__header is-top')[0].offsetHeight;
                that.setTabContentHeight(tabHeight-tabHeaderHeight-43);
        })
    },
    destroyed() {
        //界面销毁时，取消监听beforeunload
        window.removeEventListener('beforeunload', e => {});
    },
    watch: {
        $route() {
            this.addTab();
        }
    },
    computed:{
        ...mapState({
            isReload:state=>state.layout.isReload
        })
    },
    methods: {
        ...mapActions({
            setTabContentHeight:'layout/setTabContentHeight'
        }),
        addTab() {
            //首页默认显示欢迎tab 单独处理
            if (this.$route.name === 'Home') {
                this.activeName = 'Home';
                return false;
            }
            if (this.tabs.filter(tabItem => tabItem.name == this.$route.name) == 0) {
                //当前菜单未在tab中打开，添加tab
                let meta = this.$route.meta;
                if (meta.sign) {
                    let filePath = '';
                    meta.sign.forEach(item => {
                        filePath = (filePath == '' ? '' : filePath + '/') + item;
                    });
                    var MyComponent = resolve => require([`@/components/tabs/${filePath}/${this.$route.name}`], resolve);
                    let tab = {
                        label: meta.title,
                        name: this.$route.name,
                        disabled: false,
                        closable: false,
                        component: MyComponent
                    }
                    this.tabs.push(tab);
                    this.activeName = this.$route.name;
                }
            } else {
                //已经打开，激活tab
                this.activeName = this.$route.name;
            }
        },
        removeTab(targetName) {
            if (this.activeName === targetName) {
                this.tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = this.tabs[index + 1] || this.tabs[index - 1];
                        if (nextTab) {
                            this.activeName = nextTab.name;
                        } else {
                            this.activeName = 'Home';
                        }
                    }
                });
            }
            this.tabs = this.tabs.filter(tab => tab.name !== targetName);
            this.$router.push({name:this.activeName});
        },
        chooseTab(tab) {
            this.$router.push({
                name: tab.name
            });
        } 

    }
};
</script>
<style >
 .tab-main{
     height:100%;
     width:100%;
     padding: 0;
     margin:0;
     
 }
 .tab-main>.el-tabs--border-card>.el-tabs__content{
     padding:0px;
    /* background-color:#19265d; */
 }
 
 .tab-main>.el-tab-pane{
     height: 100%;
 }


 .component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>