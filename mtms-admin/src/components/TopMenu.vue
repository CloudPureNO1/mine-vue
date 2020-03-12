<template >
    <div>
      <div  id="menuDiv">
          <el-menu :default-active="activeIndex" mode="horizontal" >
              <NavTop :menuList="menuList" :isFirst="true"></NavTop>
          </el-menu>
      </div>

    </div>
</template>

<script scoped>
 
import axios from 'axios'
import menuMock from '@/mock/menu'

import NavTop from './NavTop'
import NavLeft from './NavLeft'
export default {
    name: 'NavMenu',
    data(){
        return {
            activeIndex:'0',
            menuList:[]
        }
    },
    methods:{
        handleUrl(url){
           // window.location.href=url;
           let rm=this.$router.resolve(url);
           let matched=rm.resolved.matched;//如果在路由中有配置，那么这个数组大于0，否则为0
           if(matched.length>0){
               this.$router.push(url);
           }else{
                window.open(url,'_blank');
           }
           
        }
    },
    components:{
        NavLeft,
        NavTop
    },
     created:function(){
        let acount=sessionStorage.getItem('acount');
        let token=sessionStorage.getItem('token');
        if(acount!='undefined'&&token!='undefined'){
            axios.post('/mtms/api/getMenu','admin')
            .then((res)=>{
                if(res.data.code=='0'){
                    this.menuList=res.data.menuList;
                }else{
                    console.log('>>>'+res.data.msg);
                }
            }).catch((err)=>{
                console.log('>>>>>>>>获取菜单发生异常：'+err);
            })
        }else{
            console.log('>>>>没有登录或token不存在');
            this.$router.push('/login');
        }
    }

}
</script>

 





<style >

 
 

#menuDiv .el-menu {
  border-right: solid 1px #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #FFF
}

#menuDiv .el-menu--horizontal>div>div>.el-menu-item:not(.is-disabled):focus,
#menuDiv .el-menu--horizontal>div>div>.el-menu-item:not(.is-disabled):hover,
#menuDiv .el-menu--horizontal>div>div>.el-submenu .el-submenu__title:hover{
  background-color: #fff;
  color:rgb(65, 180, 54)
}

#menuDiv .el-menu::after,
#menuDiv .el-menu::before {
  display: table;
  content: ""
}

#menuDiv .el-menu::after {
  clear: both
}

#menuDiv .el-menu.el-menu--horizontal {
  border-bottom: solid 1px #e6e6e6
}

#menuDiv .el-menu--horizontal {
  border-right: none
}

#menuDiv .el-menu--horizontal>div>div>.el-menu-item {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399
}

#menuDiv .el-menu--horizontal>div>div>.el-menu-item a,
#menuDiv .el-menu--horizontal>div>div>.el-menu-item a:hover {
  color: inherit
}

#menuDiv .el-menu--horizontal>div>div>.el-submenu {
  float: left
}

#menuDiv .el-menu--horizontal>div>div>.el-submenu:focus,
#menuDiv .el-menu--horizontal>div>div>.el-submenu:hover {
  outline: 0
}

#menuDiv .el-menu--horizontal>div:focus,
#menuDiv .el-menu--horizontal>div:hover {
  outline: 0
}

#menuDiv .el-menu--horizontal>div>div>.el-submenu:focus .el-submenu__title,
#menuDiv .el-menu--horizontal>div>div>.el-submenu:hover .el-submenu__title {
  /* color: #303133 */
  color:rgb(65, 180, 54)
}

#menuDiv .el-menu--horizontal>div>div>.el-submenu.is-active .el-submenu__title {
  /* border-bottom: 2px solid #409EFF; */
  color: #303133
}

#menuDiv .el-menu--horizontal>div>div>.el-submenu .el-submenu__title {
  height: 60px;
  line-height: 60px;
  border-bottom: 2px solid transparent;
  color: #909399
}

#menuDiv .el-menu--horizontal>div>div>.el-submenu .el-submenu__icon-arrow {
  position: static;
  vertical-align: middle;
  margin-left: 8px;
  margin-top: -3px
}

#menuDiv .el-menu--horizontal .el-menu .el-menu-item,
#menuDiv .el-menu--horizontal .el-menu .el-submenu__title {
  background-color: #FFF;
  float: none;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  color: #909399
}

#menuDiv .el-menu--horizontal .el-menu .el-menu-item.is-active,
#menuDiv .el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title {
  /* color: #303133 */
   color:rgb(65, 180, 54)
}

#menuDiv .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
#menuDiv .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: #303133
}

#menuDiv .el-menu--horizontal>div>div>.el-menu-item.is-active {
  /* border-bottom: 2px solid #409EFF; */
  color: #303133
}

#menuDiv .el-menu--collapse {
  width: 64px
}

#menuDiv .el-menu--collapse>div>div>.el-menu-item [class^=el-icon-],
#menuDiv .el-menu--collapse>div>div>.el-submenu>.el-submenu__title [class^=el-icon-] {
  margin: 0;
  vertical-align: middle;
  width: 24px;
  text-align: center
}

#menuDiv .el-menu--collapse>div>div>.el-menu-item .el-submenu__icon-arrow,
#menuDiv .el-menu--collapse>div>div>.el-submenu>.el-submenu__title .el-submenu__icon-arrow {
  display: none
}

#menuDiv .el-menu--collapse>div>div>.el-menu-item span,
#menuDiv .el-menu--collapse>div>div>.el-submenu>.el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block
}

#menuDiv .el-menu--collapse>div>div>.el-menu-item.is-active i {
  color: inherit
}

#menuDiv .el-menu--collapse .el-submenu {
  position: relative
}

#menuDiv .el-menu--collapse .el-submenu .el-menu {
  position: absolute;
  margin-left: 5px;
  top: 0;
  left: 100%;
  border: 1px solid #E4E7ED;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1)
}

#menuDiv .el-menu-item,
#menuDiv .el-submenu__title {
  height: 56px;
  line-height: 56px;
  position: relative;
  -webkit-box-sizing: border-box;
  white-space: nowrap;
  list-style: none
}

#menuDiv .el-menu--collapse .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: none;
  transform: none
}

#menuDiv .el-menu--popup {
  z-index: 100;
  border: none;
  padding: 5px 0;
  border-radius: 2px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1)
}

#menuDiv .el-menu--popup-bottom-start {
  margin-top: 5px
}

#menuDiv .el-menu--popup-right-start {
  margin-left: 5px;
  margin-right: 5px
}

#menuDiv .el-menu-item {
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  -webkit-transition: border-color .3s, background-color .3s, color .3s;
  transition: border-color .3s, background-color .3s, color .3s;
  box-sizing: border-box
}

#menuDiv .el-menu-item * {
  vertical-align: middle
}

#menuDiv .el-menu-item i {
  color: #909399
}

#menuDiv .el-menu-item:focus,
#menuDiv .el-menu-item:hover {
  outline: 0;
  background-color: #ecf5ff
}

#menuDiv .el-menu-item.is-disabled {
  opacity: .25;
  cursor: not-allowed;
  background: 0 0 !important
}

#menuDiv .el-menu-item [class^=el-icon-] {
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle
}

#menuDiv .el-menu-item.is-active {
  /* color: #409EFF */
}

#menuDiv .el-menu-item.is-active i {
  color: inherit
}

#menuDiv .el-submenu {
  list-style: none;
  margin: 0;
  padding-left: 0
}

#menuDiv .el-submenu__title {
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  -webkit-transition: border-color .3s, background-color .3s, color .3s;
  transition: border-color .3s, background-color .3s, color .3s;
  box-sizing: border-box
}

#menuDiv .el-submenu__title * {
  vertical-align: middle
}

#menuDiv .el-submenu__title i {
  color: #909399
}

#menuDiv .el-submenu__title:focus,
#menuDiv .el-submenu__title:hover {
  outline: 0;
  background-color: #ecf5ff
}

#menuDiv .el-submenu__title.is-disabled {
  opacity: .25;
  cursor: not-allowed;
  background: 0 0 !important
}

#menuDiv .el-submenu__title:hover {
  background-color: #ecf5ff
}

#menuDiv .el-submenu .el-menu {
  border: none
}

#menuDiv .el-submenu .el-menu-item {
  height: 50px;
  line-height: 50px;
  padding: 0 45px;
  min-width: 200px
}

#menuDiv .el-submenu__icon-arrow {
  position: absolute;
  top: 50%;
  right: 20px;
  margin-top: -7px;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s, -webkit-transform .3s;
  font-size: 12px
}

#menuDiv .el-submenu.is-active .el-submenu__title {
  /* border-bottom-color: #409EFF */
}

#menuDiv .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg)
}

#menuDiv .el-submenu.is-disabled .el-menu-item,
#menuDiv .el-submenu.is-disabled .el-submenu__title {
  opacity: .25;
  cursor: not-allowed;
  background: 0 0 !important
}

#menuDiv .el-submenu [class^=el-icon-] {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px
}

#menuDiv .el-menu-item-group>ul {
  padding: 0
}

#menuDiv .el-menu-item-group__title {
  padding: 7px 0 7px 20px;
  line-height: normal;
  font-size: 12px;
  color: #909399
}

#menuDiv .el-radio-button__inner,
#menuDiv .el-radio-group {
  display: inline-block;
  line-height: 1;
  vertical-align: middle
}

#menuDiv .horizontal-collapse-transition .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transition: .2s;
  transition: .2s;
  opacity: 0
}

#menuDiv .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, 
#menuDiv .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: 0;
    color:rgb(65, 180, 54)
}

#menuDiv .el-menu--horizontal .el-menu .el-menu-item:not(.is-disabled):focus,
#menuDiv .el-menu--horizontal .el-menu .el-menu-item:not(.is-disabled):hover,
#menuDiv .el-menu--horizontal .el-menu .el-submenu__title:not(.is-disabled):focus,
#menuDiv .el-menu--horizontal .el-menu .el-submenu__title:not(.is-disabled):hover {
    background-color: #FFF;
    float: none;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    color:rgb(65, 180, 54)
}

 
</style>

 
 