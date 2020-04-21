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

const RbacUsers = resolve => require(['@/views/rbac/Users.vue'], resolve);
const RbacRoles = resolve => require(['@/views/rbac/Roles.vue'], resolve);
const RbacGroups = resolve => require(['@/views/rbac/Groups.vue'], resolve);
const RbacResources = resolve => require(['@/views/rbac/Resources.vue'], resolve);
const RbacCompany = resolve => require(['@/views/rbac/Company.vue'], resolve);
const RbacDept = resolve => require(['@/views/rbac/Dept.vue'], resolve);

const UserAdd = resolve => require(['@/views/rbac/users/UserAdd.vue'], resolve);
const UserEdit = resolve => require(['@/views/rbac/users/UserEdit.vue'], resolve);

const rbacRouters = [
  {
    path: '/rbacUsers',
    name: 'RbacUsers',
    component: RbacUsers,
    meta: {
      title: '用户管理',
      sign: 'RbacUsesrss',
      data: ['系统管理']
    },
    children:[
        {
            path: '/userAdd',
            name: 'UserAdd',
            component: UserAdd,
            meta: {
            title: '新增用户',
            sign: 'RbacUsesrss' 
            }
        },
        {
            path: '/userEdit',
            name: 'userEdit',
            component: UserEdit,
            meta: {
            title: '编辑用户',
            sign: 'RbacUsesrss' 
            }
        }
    ]
  },
  {
    path: '/rbacRoles',
    name: 'RbacRoles',
    component: RbacRoles,
    meta: {
      title: '角色管理',
      sign: 'RbacRoles',
      data: ['系统管理']
    }
  },
  {
    path: '/rbacGroups',
    name: 'RbacGroups',
    component: RbacGroups,
    meta: {
      title: '用户组管理',
      sign: 'RbacGroups',
      data: ['系统管理']
    }
  },
  {
    path: '/rbacResources',
    name: 'RbacResources',
    component: RbacResources,
    meta: {
      title: '资源管理',
      sign: 'RbacResources',
      data: ['系统管理']
    }
  },
  {
    path: '/rbacCompany',
    name: 'RbacCompany',
    component: RbacCompany,
    meta: {
      title: '机构管理',
      sign: 'RbacCompany',
      data: ['系统管理']
    }
  },
  {
    path: '/rbacDept',
    name: 'RbacDept',
    component: RbacDept,
    meta: {
      title: '部门管理',
      sign: 'RbacDept',
      data: ['系统管理']
    }
  }

];

 

export default rbacRouters;
