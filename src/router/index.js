import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: 'Dashboard',
        icon: 'dashboard'
      }
    }]
  },
  /*Admin相关路由*/
  {
    path: '/admin',
    name: 'Admin',
    component: Layout,
    redirect: '/admin/list',
    meta: {
      title: '管理员',
      icon: 'el-icon-s-help'
    },
    children: [

      {
        path: '/admin/list',
        name: 'AdminList',
        component: () => import('@/views/admin/list'),
        meta: {
          title: '管理员列表',
          icon: 'el-icon-s-help'
        },
      },
      {
        path: '/admin/roure',
        name: 'AdminRoute',
        component: () => import('@/views/admin/route'),
        meta: {
          title: '路由列表',
          icon: 'el-icon-s-help'
        },
      },
      {
        path: '/admin/role',
        name: 'AdminRole',
        component: () => import('@/views/admin/role'),
        meta: {
          title: '权限列表',
          icon: 'el-icon-s-help'
        },
      }

    ]
  },
  /*Category相关路由*/
  {
    path: '/category',
    component: Layout,
    redirect: '/category/list',
    name: 'Category',
    meta: {
      title: '栏目管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'list',
        name: 'CategoryList',
        component: () => import('@/views/category/list'),
        meta: {
          title: '栏目列表',
          icon: 'table'
        }
      },
      {
        path: 'desc',
        name: 'CategoryDesc',
        component: () => import('@/views/category/desc'),
        meta: {
          title: '栏目描述',
          icon: 'table'
        }
      }
    ]
  },
  /*Article相关路由*/
  {
    path: '/article',
    name: 'Article',
    component: Layout,
    redirect: '/article/list',
    meta: {
      title: '文章管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: '/article/list',
        name: 'ArticleList',
        component: () => import('@/views/article/list'),
        meta: {
          title: '文章列表',
          icon: 'el-icon-s-help'
        }
      },
      {
        path: '/article/add',
        name: 'ArticleAdd',
        component: () => import('@/views/article/add'),
        meta: {
          title: '文章新增',
        }
      },
      {
        path: '/article/update',
        name: 'ArticleUpdate',
        component: () => import('@/views/article/update'),
        meta: {
          title: '文章更新',
        }
      },
      {
        path: '/article/desc',
        name: 'ArticleDesc',
        component: () => import('@/views/article/desc'),
        meta: {
          title: '文章描述',
          icon: 'el-icon-s-help'
        }
      },
    ]
  },
  /*设置相关路由*/
  {
    path: '/set',
    name: 'Set',
    component: Layout,
    redirect: '/set/index',
    meta: {
      title: '设置管理',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: '/set/idnex',
        name: 'SetIndex',
        component: () => import('@/views/set/index'),
        meta: {
          title: '设置中心',
          icon: 'el-icon-s-help'
        }
      },
      {
        path: '/set/desc',
        name: 'SetDesc',
        component: () => import('@/views/set/desc'),
        meta: {
          title: '设置描述',
          icon: 'el-icon-s-help'
        }
      },
    ]
  },



  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
