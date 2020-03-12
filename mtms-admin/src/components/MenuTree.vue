<template>
  <div>
    <div class="divClas">
      <div >
        <el-menu :default-active="activeIndex" mode="vertical" :collapse="isCollapse">
          <NavLeft :menuList="menuList" :isFirst="false"></NavLeft>
        </el-menu>
      </div>
      <!-- <div class="v-auto-out">
        <i class="el-icon-d-arrow-left auto-in" @click="toggleMenu(false)" :class="[toggleValue?showCls:hideCls]"></i>
        <i class="el-icon-d-arrow-right auto-in" @click="toggleMenu(true)" :class="[!toggleValue?showCls:hideCls]"></i>
        <span style="margin-right:20px;"></span>
      </div> -->
    </div>
  </div>
</template>

<script scoped>
  import axios from 'axios'
  import menuMock from '@/mock/menu'
  import NavLeft from './NavLeft'
  export default {
    name: 'LeftMenu',
    data() {
      return {
        menuList: [],
        activeIndex: "1",
        isCollapse: false,
        toggleValue: true,
        showCls: 'showCls',
        hideCls: 'hideCls'
      }
    },
    methods: {
        toggleMenu(value) {
            this.toggleValue = value;
            this.isCollapse = !value;
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {
      NavLeft 
    },
    created: function () {
      let acount = sessionStorage.getItem('acount');
      let token = sessionStorage.getItem('token');
      if (acount != 'undefined' && token != 'undefined') {
        axios.post('/mtms/api/getMenu', 'admin')
          .then((res) => {
            if (res.data.code == '0') {
              this.menuList = res.data.menuList;
            } else {
              console.log('>>>' + res.data.msg);
            }
          }).catch((err) => {
            console.log('>>>>>>>>获取菜单发生异常：' + err);
          })
      } else {
        console.log('>>>>没有登录或token不存在');
        this.$router.push('/login');
      }
    }

  }

</script>







<style>
 
  .divClas .el-menu {
    /* border-right: solid 1px #e6e6e6; */
    border-right:#e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #FFF
  }

  .divClas .el-menu--horizontal>div>div>.el-menu-item:not(.is-disabled):focus,
  .divClas .el-menu--horizontal>div>div>.el-menu-item:not(.is-disabled):hover,
  .divClas .el-menu--horizontal>div>div>.el-submenu .el-submenu__title:hover {
    background-color: #fff;
    color: rgb(65, 180, 54)
  }

  .divClas .el-menu::after,
  .divClas .el-menu::before {
    display: table;
    content: ""
  }

  .divClas .el-menu::after {
    clear: both
  }

  .divClas .el-menu.el-menu--horizontal {
    border-bottom: solid 1px #e6e6e6
  }

  .divClas .el-menu--horizontal {
    border-right: none
  }

  .divClas .el-menu--horizontal>div>div>.el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399
  }

  .divClas .el-menu--horizontal>div>div>.el-menu-item a,
  .divClas .el-menu--horizontal>div>div>.el-menu-item a:hover {
    color: inherit
  }

  .divClas .el-menu--horizontal>div>div>.el-submenu {
    float: left
  }

  .divClas .el-menu--horizontal>div>div>.el-submenu:focus,
  .divClas .el-menu--horizontal>div>div>.el-submenu:hover {
    outline: 0
  }

  .divClas .el-menu--horizontal>div:focus,
  .divClas .el-menu--horizontal>div:hover {
    outline: 0
  }

  .divClas .el-menu--horizontal>div>div>.el-submenu:focus .el-submenu__title,
  .divClas .el-menu--horizontal>div>div>.el-submenu:hover .el-submenu__title {
    /* color: #303133 */
    color:#67C23A
  }

  .divClas .el-menu--horizontal>div>div>.el-submenu.is-active .el-submenu__title {
    /* border-bottom: 2px solid #409EFF; */
    color: #606266
  }

  .divClas .el-menu--horizontal>div>div>.el-submenu .el-submenu__title {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
    color: #909399
  }

  .divClas .el-menu--horizontal>div>div>.el-submenu .el-submenu__icon-arrow {
    position: static;
    vertical-align: middle;
    margin-left: 8px;
    margin-top: -3px
  }

  .divClas .el-menu--horizontal .el-menu .el-menu-item,
  .divClas .el-menu--horizontal .el-menu .el-submenu__title {
    background-color: #FFF;
    float: none;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    color: #909399
  }

  .divClas .el-menu--horizontal .el-menu .el-menu-item.is-active,
  .divClas .el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title {
    /* color: #303133 */
    color: rgb(65, 180, 54)
  }

  .divClas .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .divClas .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: 0;
    color: #303133
  }

  .divClas .el-menu--horizontal>div>div>.el-menu-item.is-active {
    /* border-bottom: 2px solid #409EFF; */
    color: #303133
  }

  .divClas .el-menu--collapse {
    width: 64px
  }

  .divClas .el-menu--collapse>div>div>.el-menu-item [class^=el-icon-],
  .divClas .el-menu--collapse>div>div>.el-submenu>.el-submenu__title [class^=el-icon-] {
    margin: 0;
    vertical-align: middle;
    width: 24px;
    text-align: center
  }

  .divClas .el-menu--collapse>div>div>.el-menu-item .el-submenu__icon-arrow,
  .divClas .el-menu--collapse>div>div>.el-submenu>.el-submenu__title .el-submenu__icon-arrow {
    display: none
  }

  .divClas .el-menu--collapse>div>div>.el-menu-item span,
  .divClas .el-menu--collapse>div>div>.el-submenu>.el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block
  }

  .divClas .el-menu--collapse>div>div>.el-menu-item.is-active i {
    color: inherit
  }

  .divClas .el-menu--collapse .el-submenu {
    position: relative
  }

  .divClas .el-menu--collapse .el-submenu .el-menu {
    position: absolute;
    margin-left: 5px;
    top: 0;
    left: 100%;
    border: 1px solid #E4E7ED;
    border-radius: 2px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1)
  }

  .divClas .el-menu-item,
  .divClas .el-submenu__title {
    height: 56px;
    line-height: 56px;
    position: relative;
    -webkit-box-sizing: border-box;
    white-space: nowrap;
    list-style: none
  }

  .divClas .el-menu--collapse .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
    -webkit-transform: none;
    transform: none
  }

  .divClas .el-menu--popup {
    z-index: 100;
    border: none;
    padding: 5px 0;
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1)
  }

  .divClas .el-menu--popup-bottom-start {
    margin-top: 5px
  }

  .divClas .el-menu--popup-right-start {
    margin-left: 5px;
    margin-right: 5px
  }

  .divClas .el-menu-item {
    font-size: 14px;
    color: #606266;
    padding: 0 20px;
    cursor: pointer;
    -webkit-transition: border-color .3s, background-color .3s, color .3s;
    transition: border-color .3s, background-color .3s, color .3s;
    box-sizing: border-box
  }

  .divClas .el-menu-item * {
    vertical-align: middle
  }

  .divClas .el-menu-item i {
    color: #909399
  }

  .divClas .el-menu-item:focus,
  .divClas .el-menu-item:hover {
    outline: 0;
    color:#409EFF;
    background-color: #ecf5ff
  }

  .divClas .el-menu-item.is-disabled {
    opacity: .25;
    cursor: not-allowed;
    background: 0 0 !important
  }

  .divClas .el-menu-item [class^=el-icon-] {
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle
  }

  .divClas .el-menu-item.is-active {
    color:#409EFF
  }

  .divClas .el-menu-item.is-active i {
    color: inherit
  }

  .divClas .el-submenu {
    list-style: none;
    margin: 0;
    padding-left: 0
  }

  .divClas .el-submenu__title {
    font-size: 14px;
    color: #606266;
    padding: 0 20px;
    cursor: pointer;
    -webkit-transition: border-color .3s, background-color .3s, color .3s;
    transition: border-color .3s, background-color .3s, color .3s;
    box-sizing: border-box
  }

  .divClas .el-submenu__title * {
    vertical-align: middle
  }

  .divClas .el-submenu__title i {
    color: #909399
  }

  .divClas .el-submenu__title:focus,
  .divClas .el-submenu__title:hover {
    outline: 0;
    color:#409EFF;
    background-color: #ecf5ff
  }

  .divClas .el-submenu__title.is-disabled {
    opacity: .25;
    cursor: not-allowed;
    background: 0 0 !important
  }

  .divClas .el-submenu__title:hover {
    background-color: #ecf5ff
  }

  .divClas .el-submenu .el-menu {
    border: none
  }

  .divClas .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 200px
  }

  .divClas .el-submenu__icon-arrow {
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

  .divClas .el-submenu.is-active .el-submenu__title {
    border-bottom-color: #409EFF
  }

  .divClas .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg)
  }

  .divClas .el-submenu.is-disabled .el-menu-item,
  .divClas .el-submenu.is-disabled .el-submenu__title {
    opacity: .25;
    cursor: not-allowed;
    background: 0 0 !important
  }

  .divClas .el-submenu [class^=el-icon-] {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px
  }

  .divClas .el-menu-item-group>ul {
    padding: 0
  }

  .divClas .el-menu-item-group__title {
    padding: 7px 0 7px 20px;
    line-height: normal;
    font-size: 12px;
    color: #909399
  }

  .divClas .el-radio-button__inner,
  .divClas .el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle
  }

  .divClas .horizontal-collapse-transition .el-submenu__title .el-submenu__icon-arrow {
    -webkit-transition: .2s;
    transition: .2s;
    opacity: 0
  }

  .divClas .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .divClas .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: 0;
    color: rgb(65, 180, 54)
  }

  .divClas .el-menu--horizontal .el-menu .el-menu-item:not(.is-disabled):focus,
  .divClas .el-menu--horizontal .el-menu .el-menu-item:not(.is-disabled):hover,
  .divClas .el-menu--horizontal .el-menu .el-submenu__title:not(.is-disabled):focus,
  .divClas .el-menu--horizontal .el-menu .el-submenu__title:not(.is-disabled):hover {
    background-color: #FFF;
    float: none;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    color: rgb(65, 180, 54)
  }

  .divClas .el-submenu__icon-arrow {
    position: absolute;
    top: 50%;
    right: 3px;
    margin-top: -7px;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    font-size: 12px;
    color: #409EFF;
  }

</style>

<style scoped lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {

    min-width: 200px;
    min-height: 400px;
  }

  .divClas {
    width: 100%;
    min-height: 400px;
    display: flex;
     >div:nth-child(1){
         width:100%;
        //  >:nth-child(1){
        //      width:200px;
        //  }
    }
  }

  //   .divClas>div{
  //       width:20%;
  //   }


  .showCls {
    display: block;

  }

  .hideCls {
    display: none;

  }

  .tIClas {

    background-color: aquamarine;
  }


  .v-auto-out {
    position: relative;
    text-align: center;
    width: 14px;

    border-right: solid 1px #e6e6e6;
  }

  .v-auto-out .auto-in {
    position: absolute;
    top: 50%;
    /* 这里有兼容性问题 */
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #409EFF;
  }

</style>
