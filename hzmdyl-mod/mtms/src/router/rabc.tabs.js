// 不采用这种模式
// require: 运行时调用，理论上可以运用在代码的任何地方，
// import：编译时调用，必须放在文件开头
// 懒加载：component: resolve => require(['@/view/index.vue'], resolve)
// 用require这种方式引入的时候，会将你的component分别打包成不同的js，加载的时候也是按需加载，只用访问这个路由网址时才会加载这个js
// 非懒加载：component: index
// 如果用import引入的话，当项目打包时路由里的所有component都会打包在一个js中，造成进入首页时，需要加载的内容过多，时间相对比较长
// vue的路由配置文件(routers.js)，一般使用import引入的写法，当项目打包时路由里的所有component都会打包在一个js中，在项目刚进入首页的时候，就会加载所有的组件，所以导致首页加载较慢，
// 而用require会将component分别打包成不同的js，按需加载，访问此路由时才会加载这个js，所以就避免进入首页时加载内容过多。
//import  RbacUsers from '@/views/rbac/Users';



const RbacResources = resolve => require(['@/components/tabs/rbac/resource/RbacResources.vue'], resolve);
const RbacCompany = resolve => require(['@/components/tabs/rbac/company/Company.vue'], resolve);
const RbacDept = resolve => require(['@/components/tabs/rbac/dept/Depts.vue'], resolve);


const RbacUsers = resolve => require(['@/components/tabs/rbac/user/RbacUsers.vue'], resolve);
const UserAdd = resolve => require(['@/components/tabs/rbac/user/UserAdd.vue'], resolve);
const UserEdit = resolve => require(['@/components/tabs/rbac/user/UserEdit.vue'], resolve);
const UserInfo = resolve => require(['@/components/tabs/rbac/user/UserInfo.vue'], resolve);

const RbacRoles = resolve => require(['@/components/tabs/rbac/role/RbacRoles.vue'], resolve);
const RoleAddEdit = resolve => require(['@/components/tabs/rbac/role/RoleAddEdit.vue'], resolve);

const RbacGroups = resolve => require(['@/components/tabs/rbac/group/RbacGroups.vue'], resolve);
const GroupAddEdit = resolve => require(['@/components/tabs/rbac/group/GroupAddEdit.vue'], resolve);

 

const rbacRouters = [{
    path: '/rbacUsers',
    name: 'RbacUsers',
    component: RbacUsers,
    meta: {
      title: '用户管理',
      sign: ['rbac', 'user'],
      data: ['系统管理']
    },
    children: [{
        path: '/userAdd',
        name: 'UserAdd',
        component: UserAdd,
        meta: {
          title: '新增用户',
          sign: ['rbac', 'user'] //对应内容组价（tab)的路径  @/components/tabs/rbac/users/UserAdd.vue
        }
      },
      {
        path: '/userEdit',
        name: 'UserEdit',
        component: UserEdit,
        meta: {
          title: '编辑用户',
          sign: ['rbac', 'user']
        }
      },
      {path:'/userInfo',name:'UserInfo', component:UserInfo,meta:{title:'用户信息',sign:['rbac','user']}}
    ]
  },
  {
    path: '/rbacRoles',
    name: 'RbacRoles',
    component: RbacRoles,
    meta: {
      title: '角色管理',
      sign: ['rbac', 'role'],
      data: ['系统管理']
    },
    children:[
      {path : '/roleAddEdit' , name : 'RoleAddEdit' , component : RoleAddEdit ,meta:{title :'角色新增/编辑',sign:['rbac','role']}}
    ]
  },
  {
    path: '/rbacGroups',
    name: 'RbacGroups',
    component: RbacGroups,
    meta: {
      title: '用户组管理',
      sign: ['rbac', 'group'],
      data: ['系统管理']
    },
    children:[
      {path : '/groupAddEdit' , name : 'GroupAddEdit' , component : GroupAddEdit ,meta:{title :'用户组新增/编辑',sign:['rbac','group']}}
    ]
  },
  {
    path: '/rbacResources',
    name: 'RbacResources',
    component: RbacResources,
    meta: {
      title: '资源管理',
      sign: ['rbac', 'resource'],
      data: ['系统管理']
    }
  },
  {
    path: '/rbacCompany',
    name: 'RbacCompany',
    component: RbacCompany,
    meta: {
      title: '机构管理',
      sign: ['rbac', 'company'],
      data: ['系统管理']
    }
  },
  {
    path: '/rbacDept',
    name: 'RbacDept',
    component: RbacDept,
    meta: {
      title: '部门管理',
      sign: ['rbac', 'dept'],
      data: ['系统管理']
    }
  }

];



export default rbacRouters;
